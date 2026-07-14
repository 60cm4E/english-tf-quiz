import { lesson5 } from './data/lesson5';
import { lesson6 } from './data/lesson6';
import './style.css';

// ============================================================
// Types
// ============================================================
interface Passage {
  id: string;
  title: string;
  text: string;
  textKo: string;
}

interface Question {
  id: number;
  passageId: string;
  text: string;
  textEn?: string;
  answer: boolean;
  evidence?: string;
}

interface Section {
  id: string;
  title: string;
  subtitle?: string;
  passages: Passage[];
  questions: Question[];
}

interface Lesson {
  id: number;
  title: string;
  sections: Section[];
}

interface UserAnswer {
  questionId: number;
  userAnswer: boolean;
  correct: boolean;
}

interface AppState {
  currentLessonId: number;
  currentSectionId: string;
  currentQuestionIndex: number;
  answers: Map<number, UserAnswer>;
  lessons: Lesson[];
  passageLang: 'en' | 'ko' | 'both';
  passageExpanded: boolean;
  autoAdvanceTimer: ReturnType<typeof setTimeout> | null;
}

// ============================================================
// State
// ============================================================
const state: AppState = {
  currentLessonId: 5,
  currentSectionId: '',
  currentQuestionIndex: 0,
  answers: new Map(),
  lessons: [lesson5 as Lesson, lesson6 as Lesson],
  passageLang: 'both',
  passageExpanded: false,
  autoAdvanceTimer: null,
};

// ============================================================
// Selectors
// ============================================================
const $ = (sel: string) => document.querySelector(sel)!;

const els = {
  lessonButtons: () => $('#lesson-buttons') as HTMLElement,
  sectionTabs: () => $('#section-tabs') as HTMLElement,
  sectionTabsContainer: () => $('#section-tabs-container') as HTMLElement,
  progressContainer: () => $('#progress-container') as HTMLElement,
  progressBar: () => $('#progress-bar') as HTMLElement,
  progressCount: () => $('#progress-count') as HTMLElement,
  passageArea: () => $('#passage-area') as HTMLElement,
  quizArea: () => $('#quiz-area') as HTMLElement,
  resultsArea: () => $('#results-area') as HTMLElement,
  confettiCanvas: () => $('#confetti-canvas') as HTMLCanvasElement,
};

// ============================================================
// Helpers
// ============================================================
function getCurrentLesson(): Lesson | undefined {
  return state.lessons.find((l) => l.id === state.currentLessonId);
}

function getCurrentSection(): Section | undefined {
  const lesson = getCurrentLesson();
  return lesson?.sections.find((s) => s.id === state.currentSectionId);
}

function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function getPassageForCurrentQuestion(): Passage | undefined {
  const section = getCurrentSection();
  if (!section) return undefined;
  const q = section.questions[state.currentQuestionIndex];
  if (!q) return undefined;
  return section.passages.find((p) => p.id === q.passageId);
}

// ============================================================
// Render: Lesson Buttons
// ============================================================
function renderLessonButtons(): void {
  const container = els.lessonButtons();
  const lessons = state.lessons;

  container.innerHTML = lessons
    .map(
      (lesson) => `
    <button
      class="lesson-btn ${lesson.id === state.currentLessonId ? 'active' : ''}"
      data-lesson-id="${lesson.id}"
      aria-pressed="${lesson.id === state.currentLessonId}"
    >
      ${escapeHtml(lesson.title)}
    </button>
  `
    )
    .join('');

  container.querySelectorAll('.lesson-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number((btn as HTMLElement).dataset.lessonId);
      if (id !== state.currentLessonId) {
        state.currentLessonId = id;
        const lesson = getCurrentLesson();
        if (lesson && lesson.sections.length > 0) {
          state.currentSectionId = lesson.sections[0].id;
        }
        state.answers.clear();
        state.currentQuestionIndex = 0;
        renderAll();
      }
    });
  });
}

// ============================================================
// Render: Section Tabs
// ============================================================
function renderSectionTabs(): void {
  const lesson = getCurrentLesson();
  const container = els.sectionTabs();

  if (!lesson) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = lesson.sections
    .map(
      (section) => `
    <button
      class="tab-btn ${section.id === state.currentSectionId ? 'active' : ''}"
      data-section-id="${section.id}"
    >
      ${escapeHtml(section.title)}
    </button>
  `
    )
    .join('');

  container.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = (btn as HTMLElement).dataset.sectionId!;
      if (id !== state.currentSectionId) {
        state.currentSectionId = id;
        state.answers.clear();
        state.currentQuestionIndex = 0;
        state.passageExpanded = false;
        renderAll();
      }
    });
  });
}

// ============================================================
// Render: Passage (collapsible accordion)
// ============================================================
function renderPassage(): void {
  const section = getCurrentSection();
  const container = els.passageArea();

  if (!section || section.passages.length === 0) {
    container.innerHTML = '';
    return;
  }

  // Find passage relevant to current question
  const passage = getPassageForCurrentQuestion();
  if (!passage) {
    container.innerHTML = '';
    return;
  }

  const langBtnEn = state.passageLang === 'en' || state.passageLang === 'both' ? 'active' : '';
  const langBtnKo = state.passageLang === 'ko' || state.passageLang === 'both' ? 'active' : '';

  container.innerHTML = `
    <div class="passage-accordion">
      <button class="passage-toggle" id="passage-toggle" aria-expanded="${state.passageExpanded}">
        <span class="passage-toggle-icon">📖</span>
        <span class="passage-toggle-title">${escapeHtml(passage.title)}</span>
        <span class="passage-toggle-arrow ${state.passageExpanded ? 'expanded' : ''}">▼</span>
      </button>
      <div class="passage-collapsible ${state.passageExpanded ? 'expanded' : ''}" id="passage-collapsible">
        <div class="passage-lang-toggle">
          <button class="lang-btn ${langBtnEn}" data-lang="en">English</button>
          <button class="lang-btn ${langBtnKo}" data-lang="ko">한국어</button>
          <button class="lang-btn ${state.passageLang === 'both' ? 'active' : ''}" data-lang="both">Both</button>
        </div>
        <div class="passage-scroll-container">
          ${state.passageLang === 'en' || state.passageLang === 'both' ? `
            <div class="passage-block">
              <div class="passage-lang-label">
                <span class="dot dot-en"></span> English
              </div>
              <div class="passage-text-en">${escapeHtml(passage.text)}</div>
            </div>
          ` : ''}
          ${(state.passageLang === 'both') ? '<div class="passage-divider"></div>' : ''}
          ${state.passageLang === 'ko' || state.passageLang === 'both' ? `
            <div class="passage-block">
              <div class="passage-lang-label">
                <span class="dot dot-ko"></span> 한국어
              </div>
              <div class="passage-text-ko">${escapeHtml(passage.textKo)}</div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  // Toggle event
  document.getElementById('passage-toggle')?.addEventListener('click', () => {
    state.passageExpanded = !state.passageExpanded;
    const collapsible = document.getElementById('passage-collapsible');
    const arrow = container.querySelector('.passage-toggle-arrow');
    if (collapsible) {
      collapsible.classList.toggle('expanded', state.passageExpanded);
    }
    if (arrow) {
      arrow.classList.toggle('expanded', state.passageExpanded);
    }
    document.getElementById('passage-toggle')?.setAttribute('aria-expanded', String(state.passageExpanded));
  });

  // Language toggle
  container.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.passageLang = (btn as HTMLElement).dataset.lang as 'en' | 'ko' | 'both';
      renderPassage();
    });
  });
}

// ============================================================
// Render: Question Card (single card carousel)
// ============================================================
function renderQuestionCard(direction: 'none' | 'left' | 'right' = 'none'): void {
  const section = getCurrentSection();
  const container = els.quizArea();

  if (!section || section.questions.length === 0) {
    container.innerHTML = '';
    return;
  }

  const questions = section.questions;
  const idx = state.currentQuestionIndex;
  const q = questions[idx];
  const total = questions.length;
  const ans = state.answers.get(q.id);

  // Animation class — skip animation for already-answered cards
  let animClass = '';
  if (!ans) {
    if (direction === 'left') animClass = 'slide-in-right';
    else if (direction === 'right') animClass = 'slide-in-left';
    else animClass = 'slide-fade-in';
  } else {
    animClass = 'slide-fade-in';
  }

  container.innerHTML = `
    <div class="question-slider">
      <div class="question-card-slide ${animClass} ${ans ? 'no-entry-anim' : ''} ${getQuestionStateClass(q.id)}" id="question-slide">
        <div class="question-card-header">
          <span class="question-number">Q${q.id}</span>
          <span class="question-counter">${idx + 1} / ${total}</span>
        </div>

        <div class="question-body">
          <div class="question-text">${escapeHtml(q.text)}</div>
          ${q.textEn ? `<div class="question-text-en">${escapeHtml(q.textEn)}</div>` : ''}
        </div>

        <div class="tf-buttons">
          <button
            class="tf-btn tf-btn-true ${getTfBtnClass(q.id, true, q.answer)}"
            data-answer="true"
            ${ans ? 'disabled' : ''}
          >
            ${getTfBtnContent(q.id, true, q.answer)}
          </button>
          <button
            class="tf-btn tf-btn-false ${getTfBtnClass(q.id, false, q.answer)}"
            data-answer="false"
            ${ans ? 'disabled' : ''}
          >
            ${getTfBtnContent(q.id, false, q.answer)}
          </button>
        </div>

        ${renderFeedback(q.id, q)}
      </div>

      <div class="slider-navigation">
        <button class="nav-arrow nav-prev ${idx === 0 ? 'disabled' : ''}" id="nav-prev" ${idx === 0 ? 'disabled' : ''} aria-label="이전 문제">
          ◀
        </button>
        <div class="dot-indicators" id="dot-indicators">
          ${questions.map((dq, di) => {
            const dAns = state.answers.get(dq.id);
            let dotClass = 'dot-indicator';
            if (di === idx) dotClass += ' current';
            if (dAns) dotClass += dAns.correct ? ' correct' : ' wrong';
            return `<button class="${dotClass}" data-dot-index="${di}" aria-label="문제 ${di + 1}"></button>`;
          }).join('')}
        </div>
        <button class="nav-arrow nav-next ${idx === total - 1 ? 'disabled' : ''}" id="nav-next" ${idx === total - 1 ? 'disabled' : ''} aria-label="다음 문제">
          ▶
        </button>
      </div>
    </div>
  `;

  // Attach T/F button handlers
  container.querySelectorAll('.tf-btn:not([disabled])').forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = (btn as HTMLElement).dataset.answer === 'true';
      handleAnswer(q.id, answer);
    });
  });

  // Nav arrow handlers
  document.getElementById('nav-prev')?.addEventListener('click', () => {
    if (state.currentQuestionIndex > 0) {
      navigateTo(state.currentQuestionIndex - 1, 'right');
    }
  });
  document.getElementById('nav-next')?.addEventListener('click', () => {
    if (state.currentQuestionIndex < total - 1) {
      navigateTo(state.currentQuestionIndex + 1, 'left');
    }
  });

  // Dot click handlers
  container.querySelectorAll('.dot-indicator').forEach((dot) => {
    dot.addEventListener('click', () => {
      const di = Number((dot as HTMLElement).dataset.dotIndex);
      if (di !== state.currentQuestionIndex) {
        navigateTo(di, di > state.currentQuestionIndex ? 'left' : 'right');
      }
    });
  });

  // Evidence toggle handler
  const evidenceToggle = container.querySelector('.evidence-toggle-btn');
  if (evidenceToggle) {
    evidenceToggle.addEventListener('click', () => {
      const content = container.querySelector('.evidence-content') as HTMLElement;
      const btn = evidenceToggle as HTMLElement;
      if (content) {
        const isExpanded = content.classList.contains('expanded');
        content.classList.toggle('expanded', !isExpanded);
        btn.innerHTML = !isExpanded
          ? '📖 정답 근거 숨기기 ▲'
          : '📖 정답 근거 보기 ▼';
        btn.setAttribute('aria-expanded', String(!isExpanded));
      }
    });
  }

  // Setup touch swipe
  setupTouchSwipe(container);
}

function getQuestionStateClass(qId: number): string {
  const ans = state.answers.get(qId);
  if (!ans) return '';
  return ans.correct ? 'answered correct' : 'answered wrong';
}

function getTfBtnClass(qId: number, btnValue: boolean, correctAnswer: boolean): string {
  const ans = state.answers.get(qId);
  if (!ans) return '';

  if (ans.userAnswer === btnValue) {
    return ans.correct ? 'selected-correct' : 'selected-wrong';
  }
  if (!ans.correct && btnValue === correctAnswer) {
    return 'was-correct';
  }
  return '';
}

function getTfBtnContent(qId: number, btnValue: boolean, correctAnswer: boolean): string {
  const label = btnValue ? 'T' : 'F';
  const ans = state.answers.get(qId);
  if (!ans) return label;

  if (ans.userAnswer === btnValue) {
    return ans.correct ? `✓ ${label}` : `✗ ${label}`;
  }
  if (!ans.correct && btnValue === correctAnswer) {
    return `✓ ${label}`;
  }
  return label;
}

function renderFeedback(qId: number, q: Question): string {
  const ans = state.answers.get(qId);
  if (!ans) return '';

  if (ans.correct) {
    return `
      <div class="question-feedback feedback-correct">
        <span class="feedback-icon">✅</span> 정답입니다!
      </div>
    `;
  }

  const evidenceHtml = q.evidence
    ? `
      <button class="evidence-toggle-btn" aria-expanded="false">
        📖 정답 근거 보기 ▼
      </button>
      <div class="evidence-content">
        <div class="evidence-text">${escapeHtml(q.evidence)}</div>
      </div>
    `
    : '';

  return `
    <div class="question-feedback feedback-wrong">
      <span class="feedback-icon">❌</span>
      틀렸습니다. 정답은 <strong>${q.answer ? 'True' : 'False'}</strong> 입니다.
      ${evidenceHtml}
    </div>
  `;
}

// ============================================================
// Navigation
// ============================================================
function navigateTo(index: number, direction: 'left' | 'right'): void {
  const section = getCurrentSection();
  if (!section) return;
  const total = section.questions.length;
  if (index < 0 || index >= total) return;

  // Cancel pending auto-advance
  if (state.autoAdvanceTimer) {
    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }

  state.currentQuestionIndex = index;
  renderQuestionCard(direction);
  renderPassage();
  updateProgress();
}

function findNextUnanswered(): number {
  const section = getCurrentSection();
  if (!section) return -1;
  const questions = section.questions;

  // Search forward from current
  for (let i = state.currentQuestionIndex + 1; i < questions.length; i++) {
    if (!state.answers.has(questions[i].id)) return i;
  }
  // Wrap around
  for (let i = 0; i < state.currentQuestionIndex; i++) {
    if (!state.answers.has(questions[i].id)) return i;
  }
  return -1;
}

// ============================================================
// Handle Answer
// ============================================================
function handleAnswer(questionId: number, userAnswer: boolean): void {
  const section = getCurrentSection();
  if (!section) return;

  const question = section.questions.find((q) => q.id === questionId);
  if (!question || state.answers.has(questionId)) return;

  const correct = userAnswer === question.answer;

  state.answers.set(questionId, {
    questionId,
    userAnswer,
    correct,
  });

  // Re-render card and progress
  renderQuestionCard('none');
  updateProgress();

  const totalQuestions = section.questions.length;
  const answeredCount = state.answers.size;

  if (answeredCount >= totalQuestions) {
    // All answered – show results after delay
    state.autoAdvanceTimer = setTimeout(() => {
      showResults();
    }, 1200);
  } else if (correct) {
    // Auto-advance only on CORRECT answers (1.5s delay)
    const nextIdx = findNextUnanswered();
    if (nextIdx >= 0) {
      state.autoAdvanceTimer = setTimeout(() => {
        navigateTo(nextIdx, nextIdx > state.currentQuestionIndex ? 'left' : 'right');
      }, 1500);
    }
  }
  // On WRONG answers: do NOT auto-advance, let user read evidence
}

// ============================================================
// Touch Swipe
// ============================================================
function setupTouchSwipe(container: Element): void {
  const el = container.querySelector('.question-card-slide') as HTMLElement;
  if (!el) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let isSwiping = false;

  el.addEventListener('touchstart', (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    isSwiping = true;
  }, { passive: true });

  el.addEventListener('touchmove', (e: TouchEvent) => {
    if (!isSwiping) return;
    const diffY = Math.abs(e.changedTouches[0].screenY - touchStartY);
    const diffX = Math.abs(e.changedTouches[0].screenX - touchStartX);
    // If vertical movement > horizontal, not a swipe
    if (diffY > diffX) {
      isSwiping = false;
    }
  }, { passive: true });

  el.addEventListener('touchend', (e: TouchEvent) => {
    if (!isSwiping) return;
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    const section = getCurrentSection();
    if (!section) return;
    const total = section.questions.length;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && state.currentQuestionIndex < total - 1) {
        // Swipe left → next
        navigateTo(state.currentQuestionIndex + 1, 'left');
      } else if (diff < 0 && state.currentQuestionIndex > 0) {
        // Swipe right → prev
        navigateTo(state.currentQuestionIndex - 1, 'right');
      }
    }
    isSwiping = false;
  }, { passive: true });
}

// ============================================================
// Keyboard Navigation
// ============================================================
function setupKeyboardNav(): void {
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const section = getCurrentSection();
    if (!section) return;
    const total = section.questions.length;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (state.currentQuestionIndex > 0) {
        navigateTo(state.currentQuestionIndex - 1, 'right');
      }
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (state.currentQuestionIndex < total - 1) {
        navigateTo(state.currentQuestionIndex + 1, 'left');
      }
    }
  });
}

// ============================================================
// Progress
// ============================================================
function updateProgress(): void {
  const section = getCurrentSection();
  if (!section) return;

  const total = section.questions.length;
  const answered = state.answers.size;
  const pct = total > 0 ? (answered / total) * 100 : 0;

  els.progressBar().style.width = `${pct}%`;
  els.progressCount().textContent = `${answered} / ${total}`;
}

// ============================================================
// Show Results
// ============================================================
function showResults(): void {
  const section = getCurrentSection();
  if (!section) return;

  const total = section.questions.length;
  const correctCount = Array.from(state.answers.values()).filter((a) => a.correct).length;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const isPerfect = correctCount === total;

  const wrongAnswers = section.questions.filter((q) => {
    const ans = state.answers.get(q.id);
    return ans && !ans.correct;
  });

  let emoji = '🎉';
  let title = '훌륭합니다!';
  if (percentage < 50) {
    emoji = '📚';
    title = '다시 도전해 보세요!';
  } else if (percentage < 80) {
    emoji = '👍';
    title = '잘 하셨습니다!';
  } else if (percentage < 100) {
    emoji = '🌟';
    title = '거의 완벽해요!';
  } else {
    emoji = '🏆';
    title = '만점! 완벽합니다!';
  }

  // Hide quiz area, show results
  els.quizArea().innerHTML = '';
  const resultsArea = els.resultsArea();
  resultsArea.innerHTML = `
    <div class="results-overlay">
      <div class="results-card">
        <div class="results-emoji">${emoji}</div>
        <div class="results-title">${title}</div>
        <div class="results-score ${isPerfect ? 'perfect' : ''}">${correctCount} / ${total}</div>
        <div class="results-percentage">${percentage}%</div>

        ${
          wrongAnswers.length > 0
            ? `
          <div class="wrong-answers-section">
            <div class="wrong-answers-title">❌ 틀린 문제</div>
            ${wrongAnswers
              .map((q) => {
                return `
                <div class="wrong-answer-item">
                  <span class="q-num">Q${q.id}</span>
                  ${escapeHtml(q.text)}
                  <br />
                  <span class="correct-label">정답: ${q.answer ? 'True' : 'False'}</span>
                  ${q.evidence ? `<div class="wrong-evidence">${escapeHtml(q.evidence)}</div>` : ''}
                </div>
              `;
              })
              .join('')}
          </div>
        `
            : ''
        }

        <button class="retry-btn" id="retry-btn">🔄 다시 풀기</button>
      </div>
    </div>
  `;

  resultsArea.classList.add('visible');

  // Attach retry handler
  document.getElementById('retry-btn')?.addEventListener('click', resetQuiz);

  // Confetti on perfect score
  if (isPerfect) {
    launchConfetti();
  }
}

// ============================================================
// Reset Quiz
// ============================================================
function resetQuiz(): void {
  if (state.autoAdvanceTimer) {
    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
  state.answers.clear();
  state.currentQuestionIndex = 0;
  els.resultsArea().classList.remove('visible');
  els.resultsArea().innerHTML = '';
  renderQuestionCard('none');
  renderPassage();
  updateProgress();
}

// ============================================================
// Confetti
// ============================================================
function launchConfetti(): void {
  const canvas = els.confettiCanvas();
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#7c3aed', '#a855f7', '#6366f1', '#10b981', '#f59e0b', '#f43f5e', '#ec4899', '#3b82f6'];

  interface Particle {
    x: number;
    y: number;
    w: number;
    h: number;
    color: string;
    vx: number;
    vy: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
  }

  const particles: Particle[] = [];
  const PARTICLE_COUNT = 120;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 300,
      w: 6 + Math.random() * 8,
      h: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
    });
  }

  let frame = 0;
  const MAX_FRAMES = 200;

  function animate(): void {
    if (frame >= MAX_FRAMES) {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    ctx!.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.rotation += p.rotationSpeed;

      if (frame > MAX_FRAMES * 0.6) {
        p.opacity = Math.max(0, p.opacity - 0.02);
      }

      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate((p.rotation * Math.PI) / 180);
      ctx!.globalAlpha = p.opacity;
      ctx!.fillStyle = p.color;
      ctx!.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx!.restore();
    });

    frame++;
    requestAnimationFrame(animate);
  }

  animate();
}

// ============================================================
// Render All
// ============================================================
function renderAll(): void {
  // Clear results overlay first to prevent flash
  const resultsArea = els.resultsArea();
  resultsArea.classList.remove('visible');
  resultsArea.innerHTML = '';
  
  renderLessonButtons();
  renderSectionTabs();
  renderPassage();
  renderQuestionCard('none');
  updateProgress();
}

// ============================================================
// Init
// ============================================================
function init(): void {
  const lesson = getCurrentLesson();
  if (lesson && lesson.sections.length > 0 && !state.currentSectionId) {
    state.currentSectionId = lesson.sections[0].id;
  }
  renderAll();
  setupKeyboardNav();
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
