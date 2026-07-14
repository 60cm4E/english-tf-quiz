import { lesson5 } from './data/lesson5';
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
  answers: Map<number, UserAnswer>;
  lessons: Lesson[];
}

// ============================================================
// State
// ============================================================
const state: AppState = {
  currentLessonId: 5,
  currentSectionId: '',
  answers: new Map(),
  lessons: [lesson5],
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
        renderAll();
        // Scroll to passage area
        els.passageArea().scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================================
// Render: Passages
// ============================================================
function renderPassages(): void {
  const section = getCurrentSection();
  const container = els.passageArea();

  if (!section || section.passages.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = section.passages
    .map(
      (passage, idx) => `
    <div class="passage-card card-enter" style="animation-delay: ${idx * 100}ms">
      <div class="passage-title">
        <span class="icon">📖</span>
        ${escapeHtml(passage.title)}
      </div>
      <div class="passage-block">
        <div class="passage-lang-label">
          <span class="dot dot-en"></span> English
        </div>
        <div class="passage-text-en">${escapeHtml(passage.text)}</div>
      </div>
      <div class="passage-divider"></div>
      <div class="passage-block">
        <div class="passage-lang-label">
          <span class="dot dot-ko"></span> 한국어
        </div>
        <div class="passage-text-ko">${escapeHtml(passage.textKo)}</div>
      </div>
    </div>
  `
    )
    .join('');

  // Animate entrance
  requestAnimationFrame(() => {
    container.querySelectorAll('.card-enter').forEach((card, idx) => {
      setTimeout(() => card.classList.add('visible'), idx * 120);
    });
  });
}

// ============================================================
// Render: Questions
// ============================================================
function renderQuestions(): void {
  const section = getCurrentSection();
  const container = els.quizArea();

  if (!section || section.questions.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <h3 class="quiz-section-title">📝 퀴즈</h3>
    ${section.questions
      .map(
        (q, idx) => `
      <div
        class="question-card card-enter ${getQuestionStateClass(q.id)}"
        data-question-id="${q.id}"
        id="question-${q.id}"
        style="animation-delay: ${(idx + 1) * 100}ms"
      >
        <div class="question-header">
          <span class="question-number">Q${q.id}</span>
          <div>
            <div class="question-text">${escapeHtml(q.text)}</div>
            ${q.textEn ? `<div class="question-text-en">${escapeHtml(q.textEn)}</div>` : ''}
          </div>
        </div>
        <div class="tf-buttons">
          <button
            class="tf-btn tf-btn-true ${getTfBtnClass(q.id, true, q.answer)}"
            data-question-id="${q.id}"
            data-answer="true"
            ${state.answers.has(q.id) ? 'disabled' : ''}
          >
            ${getTfBtnContent(q.id, true, q.answer)}
          </button>
          <button
            class="tf-btn tf-btn-false ${getTfBtnClass(q.id, false, q.answer)}"
            data-question-id="${q.id}"
            data-answer="false"
            ${state.answers.has(q.id) ? 'disabled' : ''}
          >
            ${getTfBtnContent(q.id, false, q.answer)}
          </button>
        </div>
        ${renderFeedback(q.id, q.answer)}
      </div>
    `
      )
      .join('')}
  `;

  // Attach click handlers
  container.querySelectorAll('.tf-btn:not([disabled])').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qId = Number((btn as HTMLElement).dataset.questionId!);
      const answer = (btn as HTMLElement).dataset.answer === 'true';
      handleAnswer(qId, answer);
    });
  });

  // Animate entrance
  requestAnimationFrame(() => {
    container.querySelectorAll('.card-enter').forEach((card, idx) => {
      setTimeout(() => card.classList.add('visible'), idx * 100);
    });
  });
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
  // Show the correct answer button if user was wrong
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

function renderFeedback(qId: number, correctAnswer: boolean): string {
  const ans = state.answers.get(qId);
  if (!ans) return '';

  if (ans.correct) {
    return `
      <div class="question-feedback feedback-correct">
        <span class="feedback-icon">✅</span> 정답입니다!
      </div>
    `;
  }

  return `
    <div class="question-feedback feedback-wrong">
      <span class="feedback-icon">❌</span>
      틀렸습니다. 정답은 <strong>${correctAnswer ? 'True' : 'False'}</strong> 입니다.
    </div>
  `;
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

  // Re-render just the question card and progress
  renderQuestions();
  updateProgress();

  // Smooth scroll to next unanswered question or results
  const totalQuestions = section.questions.length;
  const answeredCount = state.answers.size;

  if (answeredCount >= totalQuestions) {
    // All answered – show results
    setTimeout(() => {
      showResults();
    }, 600);
  } else {
    // Scroll to next unanswered
    const nextQ = section.questions.find((q) => !state.answers.has(q.id));
    if (nextQ) {
      setTimeout(() => {
        const el = document.getElementById(`question-${nextQ.id}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
    }
  }
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

  const resultsArea = els.resultsArea();
  resultsArea.innerHTML = `
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
  `;

  resultsArea.classList.add('visible');

  // Attach retry handler
  document.getElementById('retry-btn')?.addEventListener('click', resetQuiz);

  // Scroll to results
  setTimeout(() => {
    resultsArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);

  // Confetti on perfect score
  if (isPerfect) {
    launchConfetti();
  }
}

// ============================================================
// Reset Quiz
// ============================================================
function resetQuiz(): void {
  state.answers.clear();
  els.resultsArea().classList.remove('visible');
  els.resultsArea().innerHTML = '';
  renderQuestions();
  updateProgress();

  // Scroll to top of quiz
  els.passageArea().scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      p.vy += 0.04; // gravity
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
  renderLessonButtons();
  renderSectionTabs();
  renderPassages();
  renderQuestions();
  updateProgress();
  els.resultsArea().classList.remove('visible');
  els.resultsArea().innerHTML = '';
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
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
