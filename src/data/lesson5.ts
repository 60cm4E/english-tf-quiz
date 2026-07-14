export const lesson5 = {
  id: 5,
  title: '5과: Sports and Activities',
  sections: [
    // ──────────────────────────────────────────────
    // SECTION 1: Dialogue Comprehension 1 (Q1–Q11)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue1',
      title: '대화문 1',
      subtitle: '운동과 활동',
      passages: [
        {
          id: 'dialogue1-1',
          title: '대화 1: 농구',
          text:
            'B: How often do you play basketball?\n' +
            'G: I play once a week, but I want to play more often.\n' +
            'B: I suggest you join my basketball club. We play three times a week.\n' +
            'G: That sounds good! It\'ll be fun to play with you.',
          textKo:
            'B(소년): 너는 얼마나 자주 농구를 해?\n' +
            'G(소녀): 일주일에 한 번 하는데, 더 자주 하고 싶어.\n' +
            'B(소년): 우리 농구 동아리에 가입하는 게 어때? 우리는 일주일에 세 번 해.\n' +
            'G(소녀): 좋은 생각이야! 너랑 같이 하면 재미있겠다.'
        },
        {
          id: 'dialogue1-2',
          title: '대화 2: 수영 (Kate)',
          text:
            'B: I don\'t swim often. How about you, Kate? How often do you swim?\n' +
            'G: I swim four times a week.\n' +
            'B: That often? Anyway, it\'ll be fun swimming together today.\n' +
            'G: Yes, but before we swim, I suggest we do stretching exercises.\n' +
            'B: That\'s a good idea.',
          textKo:
            'B(소년): 나는 수영을 자주 안 해. 너는 어때, Kate? 얼마나 자주 수영해?\n' +
            'G(소녀): 일주일에 네 번 해.\n' +
            'B(소년): 그렇게 자주? 어쨌든, 오늘 같이 수영하면 재미있겠다.\n' +
            'G(소녀): 응, 하지만 수영하기 전에 스트레칭을 하는 게 좋겠어.\n' +
            'B(소년): 좋은 생각이야.'
        },
        {
          id: 'dialogue1-3',
          title: '대화 3: 볼링 (Suji)',
          text:
            'B: Suji, how often do you take bowling lessons?\n' +
            'G: Twice a week. I\'m just a beginner. I heard you\'re very good.\n' +
            'B: Well, I love bowling. Hmm. Your bowling ball looks heavy for you. I suggest you use a lighter ball.\n' +
            'G: OK. I\'ll look for a lighter one, then.',
          textKo:
            'B(소년): Suji, 볼링 레슨을 얼마나 자주 받아?\n' +
            'G(소녀): 일주일에 두 번. 나는 아직 초보야. 너는 아주 잘한다고 들었어.\n' +
            'B(소년): 음, 나는 볼링을 좋아해. 흠, 네 볼링공이 너한테 무거워 보여. 더 가벼운 공을 쓰는 게 어때.\n' +
            'G(소녀): 알겠어. 그러면 더 가벼운 걸 찾아볼게.'
        },
        {
          id: 'dialogue1-4',
          title: '대화 4: 달리기 (Mina)',
          text:
            'B: Mina, how often do you come here to run?\n' +
            'G: Every day.\n' +
            'B: Can I run with you today?\n' +
            'G: Sure, but I suggest you wear running shoes. Your shoes aren\'t good for running.',
          textKo:
            'B(소년): Mina, 여기에 달리기하러 얼마나 자주 와?\n' +
            'G(소녀): 매일.\n' +
            'B(소년): 오늘 너랑 같이 달려도 될까?\n' +
            'G(소녀): 물론이지, 하지만 러닝화를 신는 게 좋겠어. 네 신발은 달리기에 적합하지 않아.'
        }
      ],
      questions: [
        // Dialogue 1: Basketball
        {
          id: 1,
          passageId: 'dialogue1-1',
          text: '그 소녀는 일주일에 두 번 농구를 한다.',
          textEn: 'The girl plays basketball twice a week.',
          answer: false,
          evidence: '소녀는 "일주일에 한 번(once a week)" 한다고 했지, 두 번이 아닙니다.'
        },
        {
          id: 2,
          passageId: 'dialogue1-1',
          text: '소년은 그 소녀가 자신의 농구 동아리에 가입하면 농구를 더 자주 할 수 있을 거라고 생각한다.',
          textEn: 'The boy thinks if the girl joins his basketball club, she can play basketball more often.',
          answer: true,
          evidence: '소년의 농구 동아리는 일주일에 세 번 하므로, 현재 한 번인 소녀가 가입하면 더 자주 할 수 있습니다.'
        },

        // Dialogue 2: Swimming (Kate)
        {
          id: 3,
          passageId: 'dialogue1-2',
          text: 'Kate는 일주일에 네 번보다 더 자주 수영한다.',
          textEn: 'Kate swims more than four times a week.',
          answer: false,
          evidence: 'Kate는 "일주일에 네 번(four times a week)" 수영한다고 했지, 네 번보다 더 자주가 아닙니다.'
        },
        {
          id: 4,
          passageId: 'dialogue1-2',
          text: 'Kate와 소년은 오늘 함께 수영할 것이다.',
          textEn: 'Kate and the boy will swim together today.',
          answer: true,
          evidence: '소년이 "오늘 같이 수영하면 재미있겠다(it\'ll be fun swimming together today)"라고 했습니다.'
        },
        {
          id: 5,
          passageId: 'dialogue1-2',
          text: 'Kate는 수영하기 전에 스트레칭을 하자고 제안한다.',
          textEn: 'Kate suggests stretching before swimming.',
          answer: true,
          evidence: 'Kate가 "수영하기 전에 스트레칭을 하자(I suggest we do stretching exercises)"고 제안했습니다.'
        },

        // Dialogue 3: Bowling (Suji)
        {
          id: 6,
          passageId: 'dialogue1-3',
          text: '소년은 Suji가 얼마나 자주 볼링 레슨을 받는지 궁금해한다.',
          textEn: 'The boy wonders how often Suji takes bowling lessons.',
          answer: true,
          evidence: '소년이 "볼링 레슨을 얼마나 자주 받아?(how often do you take bowling lessons?)"라고 물었습니다.'
        },
        {
          id: 7,
          passageId: 'dialogue1-3',
          text: 'Suji와 소년 둘 다 볼링을 매우 잘 친다.',
          textEn: 'Both Suji and the boy are very good bowlers.',
          answer: false,
          evidence: 'Suji는 "아직 초보(just a beginner)"라고 했으므로 둘 다 잘하는 것은 아닙니다.'
        },
        {
          id: 8,
          passageId: 'dialogue1-3',
          text: '소년은 Suji가 더 무거운 공을 사용해야 한다고 생각한다.',
          textEn: 'The boy thinks Suji should use a heavier ball.',
          answer: false,
          evidence: '소년은 "더 가벼운 공을 써(use a lighter ball)"라고 했지, 더 무거운 공이 아닙니다.'
        },

        // Dialogue 4: Running (Mina)
        {
          id: 9,
          passageId: 'dialogue1-4',
          text: 'Mina는 일주일에 7일 달리기를 한다.',
          textEn: 'Mina runs seven days a week.',
          answer: true,
          evidence: 'Mina는 "매일(Every day)" 달리기한다고 했으므로 일주일에 7일입니다.'
        },
        {
          id: 10,
          passageId: 'dialogue1-4',
          text: '소년은 매일 Mina와 함께 달리고 싶어 한다.',
          textEn: 'The boy wants to run with Mina every day.',
          answer: false,
          evidence: '소년은 "오늘(today)" 같이 달리고 싶다고 했지, 매일이 아닙니다.'
        },
        {
          id: 11,
          passageId: 'dialogue1-4',
          text: 'Mina는 소년에게 러닝화를 사라고 조언한다.',
          textEn: 'Mina advises the boy to buy running shoes.',
          answer: false,
          evidence: 'Mina는 러닝화를 "신으라고(wear)" 했지, "사라고(buy)" 한 것이 아닙니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 2: Dialogue Comprehension 2 (Q12–Q19)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue2',
      title: '대화문 2',
      subtitle: '수영 수업 등록',
      passages: [
        {
          id: 'dialogue2-1',
          title: '수영 수업 등록',
          text:
            'W: Hello. Welcome to Sports World. May I help you?\n' +
            'B: Yes, I came to register for a swimming class.\n' +
            'W: Is this your first time taking swimming lessons?\n' +
            'B: Yes, it is. I don\'t know how to swim at all.\n' +
            'W: I see. How often do you want to take classes?\n' +
            'B: I want to take classes twice a week. I\'d like to take classes on weekdays and not on weekends.\n' +
            'W: Then, I suggest that you take the Beginner 2 class. This class meets on Tuesdays and Thursdays.\n' +
            'B: That sounds good. I\'d like to sign up for that class. How big is the class?\n' +
            'W: The class has a limit of 10 people.\n' +
            'B: That\'s perfect.',
          textKo:
            'W(여자): 안녕하세요. Sports World에 오신 것을 환영합니다. 도와드릴까요?\n' +
            'B(소년): 네, 수영 수업에 등록하러 왔어요.\n' +
            'W(여자): 수영 레슨을 받는 것은 처음인가요?\n' +
            'B(소년): 네, 그래요. 저는 수영을 전혀 할 줄 몰라요.\n' +
            'W(여자): 그렇군요. 수업을 얼마나 자주 받고 싶으세요?\n' +
            'B(소년): 일주일에 두 번 받고 싶어요. 주말이 아니라 평일에 수업을 듣고 싶어요.\n' +
            'W(여자): 그러면 초급 2반을 추천드려요. 이 수업은 화요일과 목요일에 있어요.\n' +
            'B(소년): 좋아요. 그 수업에 등록하고 싶어요. 수업 인원은 몇 명인가요?\n' +
            'W(여자): 그 수업은 최대 10명까지 가능해요.\n' +
            'B(소년): 딱 좋네요.'
        }
      ],
      questions: [
        {
          id: 12,
          passageId: 'dialogue2-1',
          text: '소년은 수영 수업에 등록하기 위해 Sports World를 방문한다.',
          textEn: 'The boy visits Sports World to sign up for a swimming class.',
          answer: true,
          evidence: '소년이 "수영 수업에 등록하러 왔다(I came to register for a swimming class)"고 했습니다.'
        },
        {
          id: 13,
          passageId: 'dialogue2-1',
          text: '소년은 이전에 수영 레슨을 받은 적이 있다.',
          textEn: 'The boy has taken swimming lessons before.',
          answer: false,
          evidence: '소년이 "처음(first time)"이라고 했으므로 이전에 수영 레슨을 받은 적이 없습니다.'
        },
        {
          id: 14,
          passageId: 'dialogue2-1',
          text: '소년은 수영을 잘한다.',
          textEn: 'The boy is a good swimmer.',
          answer: false,
          evidence: '소년은 "수영을 전혀 못 한다(I don\'t know how to swim at all)"고 했습니다.'
        },
        {
          id: 15,
          passageId: 'dialogue2-1',
          text: '소년은 주말에 일주일에 두 번 수영을 배우고 싶어 한다.',
          textEn: 'The boy wants to learn how to swim twice a week on weekends.',
          answer: false,
          evidence: '소년은 주중(weekdays)에 수업을 듣고 싶다고 했지, 주말(weekends)이 아닙니다.'
        },
        {
          id: 16,
          passageId: 'dialogue2-1',
          text: '여자는 소년에게 초급 1반을 추천한다.',
          textEn: 'The woman suggests the Beginner 1 class to the boy.',
          answer: false,
          evidence: '여자는 "초급 2반(Beginner 2 class)"을 추천했지, 초급 1반이 아닙니다.'
        },
        {
          id: 17,
          passageId: 'dialogue2-1',
          text: '초급 2반은 매주 화요일과 금요일에 수업이 있다.',
          textEn: 'The Beginner 2 class meets every Tuesday and Friday.',
          answer: false,
          evidence: '초급 2반은 "화요일과 목요일(Tuesdays and Thursdays)"에 수업하지, 금요일이 아닙니다.'
        },
        {
          id: 18,
          passageId: 'dialogue2-1',
          text: '소년은 여자가 추천한 수업에 등록하고 싶어 한다.',
          textEn: 'The boy wants to register for the class the woman suggests.',
          answer: true,
          evidence: '소년이 "그 수업에 등록하고 싶다(I\'d like to sign up for that class)"고 했습니다.'
        },
        {
          id: 19,
          passageId: 'dialogue2-1',
          text: '초급 2반에 10명보다 많은 사람이 등록할 수 있다.',
          textEn: 'It is possible for more than 10 people to sign up for the Beginner 2 class.',
          answer: false,
          evidence: '수업 정원이 "10명(limit of 10 people)"이므로 10명 이상 등록은 불가능합니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 3: Reading Comprehension (Q20–Q46)
    // ──────────────────────────────────────────────
    {
      id: 'reading1',
      title: '독해',
      subtitle: '스포츠 속 숨은 영웅들',
      passages: [
        {
          id: 'reading1-1',
          title: '스포츠 속 숨은 영웅들 – 도입 & 마라톤 페이서',
          text:
            'In sports, only the players get a trophy or medal, but they don\'t win on their own. ' +
            'There are people who help the players. These people are often hidden and don\'t get attention. ' +
            'However, they are as important as the players. Here are some examples.\n\n' +
            'Pacers in a Marathon\n' +
            'Pacers run with other runners and lead them in a marathon. ' +
            'Pacers are experienced runners, and their job is to help other runners manage their race better. ' +
            'There can be several pacers in a race.\n' +
            'Each pacer runs at different speeds and finishes the race in different times. ' +
            'Pacers usually have flags or balloons showing their finish time.\n' +
            'Runners can choose a pacer depending on their target finish time. ' +
            'For example, if a runner wants to finish the race in four hours, the runner will follow the four-hour pacer. ' +
            'Since the pacer keeps track of the time, the runner can achieve his or her goal of finishing the marathon in a particular time more easily. ' +
            'In short, pacers run but they don\'t run to win. They run for others.',
          textKo:
            '스포츠에서 트로피나 메달을 받는 것은 선수뿐이지만, 그들이 혼자 힘으로 이기는 것은 아니다. ' +
            '선수를 돕는 사람들이 있다. 이 사람들은 종종 드러나지 않고 주목받지 못한다. ' +
            '하지만 그들은 선수만큼 중요하다. 여기 몇 가지 예가 있다.\n\n' +
            '마라톤의 페이서\n' +
            '페이서는 마라톤에서 다른 주자들과 함께 달리며 그들을 이끈다. ' +
            '페이서는 경험이 풍부한 주자이며, 그들의 역할은 다른 주자들이 경기를 더 잘 관리하도록 돕는 것이다. ' +
            '한 경기에 여러 명의 페이서가 있을 수 있다.\n' +
            '각 페이서는 서로 다른 속도로 달리며 서로 다른 시간에 경기를 마친다. ' +
            '페이서는 보통 자신의 완주 시간을 보여 주는 깃발이나 풍선을 달고 있다.\n' +
            '주자들은 자신의 목표 완주 시간에 따라 페이서를 선택할 수 있다. ' +
            '예를 들어, 주자가 4시간 안에 경기를 마치고 싶다면, 4시간 페이서를 따라갈 것이다. ' +
            '페이서가 시간을 계속 확인해 주기 때문에, 주자는 특정 시간 안에 마라톤을 완주하겠다는 목표를 더 쉽게 달성할 수 있다. ' +
            '요컨대, 페이서는 달리지만 이기기 위해 달리는 것이 아니다. 그들은 다른 사람들을 위해 달린다.'
        },
        {
          id: 'reading1-2',
          title: '자동차 경주의 피트 크루',
          text:
            'You may only see the car and the driver during most car races, but there is a team behind the driver. ' +
            'This team is called a pit crew. A pit is a place on the side of the race track, and drivers stop there several times during a race. ' +
            'The main job of the pit crew is to check the car and change the tires. ' +
            'Changing the tires is especially important because the tires wear out easily in a high speed race.\n' +
            'A pit stop can be as short as 2 seconds, and there are as many as 20 members on a crew. ' +
            'Therefore, the pit crew has to work in perfect harmony. ' +
            'The driver may get all the attention, but as people say, "Races are won in the pits."',
          textKo:
            '대부분의 자동차 경주에서 여러분은 자동차와 운전자만 볼 수 있겠지만, 운전자 뒤에는 한 팀이 있다. ' +
            '이 팀을 피트 크루라고 한다. 피트는 경주 트랙 옆에 있는 장소이며, 운전자는 경기 중에 그곳에 여러 번 멈춘다. ' +
            '피트 크루의 주된 역할은 자동차를 점검하고 타이어를 교체하는 것이다. ' +
            '타이어 교체는 특히 중요한데, 고속 경주에서 타이어가 쉽게 닳기 때문이다.\n' +
            '피트 스톱은 2초 정도로 짧을 수 있으며, 한 크루에 최대 20명의 구성원이 있다. ' +
            '따라서 피트 크루는 완벽하게 호흡을 맞춰 일해야 한다. ' +
            '운전자가 모든 관심을 받을 수 있지만, 사람들이 말하듯이 "경주는 피트에서 이긴다."'
        },
        {
          id: 'reading1-3',
          title: '산악 등반의 셰르파',
          text:
            'The word Sherpa comes from the Sherpa tribe, which lives in the eastern part of Nepal. ' +
            'Sherpas have good climbing skills and know their way around the mountains well. ' +
            'They also have little difficulty breathing high up in the mountains. ' +
            'Therefore, mountain climbers started to hire Sherpas to help them climb Mount Everest.\n' +
            'Sherpas lead mountain climbers to the top of the mountain. ' +
            'They support climbers in many ways. For example, they put up tents and carry climbers\' bags. ' +
            'Sherpas are often called the invisible people of Mount Everest because people often see a picture of only the climbers at the top of the mountain.',
          textKo:
            '셰르파라는 단어는 네팔 동부 지역에 사는 셰르파 부족에서 유래했다. ' +
            '셰르파는 뛰어난 등반 기술을 가지고 있으며 산길을 잘 알고 있다. ' +
            '또한 높은 산에서 호흡하는 데 어려움이 거의 없다. ' +
            '그래서 산악 등반가들은 에베레스트산을 오르는 것을 돕도록 셰르파를 고용하기 시작했다.\n' +
            '셰르파는 산악 등반가들을 산 정상까지 이끈다. ' +
            '그들은 여러 가지 방법으로 등반가들을 지원한다. 예를 들어, 텐트를 치고 등반가들의 가방을 운반한다. ' +
            '셰르파는 종종 에베레스트의 보이지 않는 사람들이라고 불리는데, 사람들이 종종 산 정상에서 등반가들만 찍힌 사진을 보기 때문이다.'
        }
      ],
      questions: [
        // Part 1: Hidden Heroes – Intro + Pacers
        {
          id: 20,
          passageId: 'reading1-1',
          text: '선수들은 스스로의 힘으로 트로피나 메달을 얻는다.',
          textEn: 'The players get a trophy or medal by themselves.',
          answer: false,
          evidence: '선수들은 "혼자 힘으로 이기는 것이 아니다(they don\'t win on their own)"라고 했습니다.'
        },
        {
          id: 21,
          passageId: 'reading1-1',
          text: '선수들을 돕는 사람들은 선수들보다 더 중요하다.',
          textEn: 'People who help the players are more important than the players.',
          answer: false,
          evidence: '도와주는 사람들은 선수들"만큼 중요하다(as important as)"고 했지, 더 중요하다고 하지 않았습니다.'
        },
        {
          id: 22,
          passageId: 'reading1-1',
          text: '페이서는 다른 주자들을 도울 만큼 충분한 경험을 가지고 있다.',
          textEn: 'Pacers have enough experience to help other runners.',
          answer: true,
          evidence: '페이서들은 "경험이 풍부한 주자(experienced runners)"라고 했습니다.'
        },
        {
          id: 23,
          passageId: 'reading1-1',
          text: '한 경기에 한 명의 페이서만 허용된다.',
          textEn: 'Only one pacer is allowed in a race.',
          answer: false,
          evidence: '한 경기에 "여러 명의 페이서가 있을 수 있다(There can be several pacers)"고 했습니다.'
        },
        {
          id: 24,
          passageId: 'reading1-1',
          text: '각 페이서는 서로 다른 속도로 달리지만 같은 시간에 경기를 마쳐야 한다.',
          textEn: 'Each pacer runs at different speeds but should finish the race at the same time.',
          answer: false,
          evidence: '각 페이서는 "다른 속도로 달리고 다른 시간에 완주한다(finishes the race in different times)"고 했습니다.'
        },
        {
          id: 25,
          passageId: 'reading1-1',
          text: '페이서가 가지고 있는 깃발이나 풍선은 그들의 완주 시간을 보여 준다.',
          textEn: 'Flags or balloons that pacers have show their finish time.',
          answer: true,
          evidence: '페이서들은 "완주 시간을 보여주는 깃발이나 풍선(flags or balloons showing their finish time)"을 가지고 있습니다.'
        },
        {
          id: 26,
          passageId: 'reading1-1',
          text: '주자들은 특정 페이서를 선택할 때 페이서의 완주 시간을 확인한다.',
          textEn: 'Runners check pacers\' finish time when they choose a certain pacer.',
          answer: true,
          evidence: '주자들은 "목표 완주 시간에 따라 페이서를 선택한다(choose a pacer depending on their target finish time)"고 했습니다.'
        },
        {
          id: 27,
          passageId: 'reading1-1',
          text: '페이서는 주자가 가능한 한 빨리 마라톤을 완주할 수 있도록 시간을 계속 확인한다.',
          textEn: 'The pacer keeps checking the time so that the runner can finish the marathon as fast as possible.',
          answer: false,
          evidence: '페이서는 주자가 "특정 시간에(in a particular time)" 완주하도록 돕지, 가능한 빨리 완주하도록 돕는 것이 아닙니다.'
        },
        {
          id: 28,
          passageId: 'reading1-1',
          text: '페이서와 주자 모두 이기기 위해 달린다.',
          textEn: 'Both pacers and runners run to win.',
          answer: false,
          evidence: '"페이서들은 달리지만 이기기 위해 달리지 않는다(they don\'t run to win)"고 했습니다.'
        },

        // Part 2: Pit Crews
        {
          id: 29,
          passageId: 'reading1-2',
          text: '자동차 경주에서 운전자를 돕는 팀이 있다.',
          textEn: 'There is a team that helps the driver during car races.',
          answer: true,
          evidence: '드라이버 뒤에 "팀이 있다(there is a team behind the driver)"고 했으며, 이를 피트 크루라 합니다.'
        },
        {
          id: 30,
          passageId: 'reading1-2',
          text: '경주 트랙을 피트라고 한다.',
          textEn: 'The race track is called a pit.',
          answer: false,
          evidence: '피트는 "경주로 옆에 있는 장소(a place on the side of the race track)"이지, 경주로 자체가 아닙니다.'
        },
        {
          id: 31,
          passageId: 'reading1-2',
          text: '운전자는 경기 중에 멈출 수 없다.',
          textEn: 'Drivers can\'t stop during a race.',
          answer: false,
          evidence: '드라이버들은 경주 중 "여러 번 멈춘다(stop there several times)"고 했습니다.'
        },
        {
          id: 32,
          passageId: 'reading1-2',
          text: '피트 크루는 경기 중에 자동차를 점검한다.',
          textEn: 'A pit crew checks the car during a race.',
          answer: true,
          evidence: '피트 크루의 주요 업무는 "차를 점검하고 타이어를 교체하는 것(check the car and change the tires)"입니다.'
        },
        {
          id: 33,
          passageId: 'reading1-2',
          text: '타이어 교체는 피트 크루가 해야 하는 일 중 하나이다.',
          textEn: 'Changing the tires is one of the jobs a pit crew should do.',
          answer: true,
          evidence: '타이어 교체는 피트 크루가 "해야 할 일(main job) 중 하나"입니다.'
        },
        {
          id: 34,
          passageId: 'reading1-2',
          text: '운전자가 오랫동안 경주하기 때문에 타이어가 쉽게 닳는다.',
          textEn: 'The tires wear out easily because drivers race for a long time.',
          answer: false,
          evidence: '타이어가 쉽게 닳는 이유는 "고속 레이스(high speed race)" 때문이지, 오래 달려서가 아닙니다.'
        },
        {
          id: 35,
          passageId: 'reading1-2',
          text: '한 크루에 20명보다 많은 구성원이 있다.',
          textEn: 'There are more than 20 members on a crew.',
          answer: false,
          evidence: '크루에 "최대 20명(as many as 20 members)"이라고 했으므로, 20명 초과가 아닙니다.'
        },
        {
          id: 36,
          passageId: 'reading1-2',
          text: '피트 크루의 일에는 완벽한 팀워크가 필요하다.',
          textEn: 'The job of the pit crew needs perfect teamwork.',
          answer: true,
          evidence: '피트 크루는 "완벽한 조화(perfect harmony)"로 일해야 한다고 했습니다.'
        },
        {
          id: 37,
          passageId: 'reading1-2',
          text: '피트 크루는 경주 결과와 아무런 관련이 없다.',
          textEn: 'A pit crew has nothing to do with the results of a race.',
          answer: false,
          evidence: '"경주는 피트에서 이긴다(Races are won in the pits)"는 말이 있으므로, 피트 크루는 경주 결과에 큰 영향을 미칩니다.'
        },

        // Part 3: Sherpas
        {
          id: 38,
          passageId: 'reading1-3',
          text: '셰르파라는 단어의 기원은 셰르파 부족이다.',
          textEn: 'The origin of the word Sherpa is the Sherpa tribe.',
          answer: true,
          evidence: '"셰르파라는 단어는 셰르파 부족에서 유래했다(comes from the Sherpa tribe)"고 했습니다.'
        },
        {
          id: 39,
          passageId: 'reading1-3',
          text: '셰르파 부족은 네팔 서부 지역에 산다.',
          textEn: 'The Sherpa tribe lives in the western area of Nepal.',
          answer: false,
          evidence: '셰르파 부족은 네팔의 "동쪽(eastern part)"에 살지, 서쪽이 아닙니다.'
        },
        {
          id: 40,
          passageId: 'reading1-3',
          text: '셰르파는 등반을 잘한다.',
          textEn: 'Sherpas are good climbers.',
          answer: true,
          evidence: '셰르파들은 "좋은 등반 기술(good climbing skills)"을 가지고 있다고 했습니다.'
        },
        {
          id: 41,
          passageId: 'reading1-3',
          text: '셰르파는 에베레스트산 등반에 대해 잘 알고 있다.',
          textEn: 'Sherpas know about climbing Mount Everest.',
          answer: true,
          evidence: '셰르파들은 "산을 잘 알고 있다(know their way around the mountains well)"고 했습니다.'
        },
        {
          id: 42,
          passageId: 'reading1-3',
          text: '셰르파는 높은 산에서 호흡하는 데 전혀 어려움이 없다.',
          textEn: 'Sherpas have no difficulty breathing high up in the mountain.',
          answer: false,
          evidence: '셰르파들은 높은 곳에서 호흡에 "거의 어려움이 없다(little difficulty)"고 했지, 전혀 어려움이 없다(no difficulty)는 아닙니다.'
        },
        {
          id: 43,
          passageId: 'reading1-3',
          text: '셰르파는 사람들이 에베레스트산을 오르는 것을 돕기 위해 고용된다.',
          textEn: 'Sherpas are hired to help people to climb Mount Everest.',
          answer: true,
          evidence: '등산가들이 "에베레스트 등반을 돕기 위해 셰르파를 고용하기 시작했다(hire Sherpas to help them climb)"고 했습니다.'
        },
        {
          id: 44,
          passageId: 'reading1-3',
          text: '셰르파는 등반가들이 에베레스트산 중턱에 도달할 수 있도록 이끈다.',
          textEn: 'Sherpas lead climbers so that they can reach the middle of Mount Everest.',
          answer: false,
          evidence: '셰르파들은 등산가들을 산 "정상(top)"으로 이끌지, 중간이 아닙니다.'
        },
        {
          id: 45,
          passageId: 'reading1-3',
          text: '셰르파는 텐트를 치고 등반가들의 가방을 운반할 수 있다.',
          textEn: 'Sherpas can put up tents and carry climbers\' bags.',
          answer: true,
          evidence: '셰르파들은 "텐트를 치고 등산가들의 가방을 나른다(put up tents and carry climbers\' bags)"고 했습니다.'
        },
        {
          id: 46,
          passageId: 'reading1-3',
          text: '사람들은 산 정상에서 셰르파와 등반가들의 사진을 자주 볼 수 있다.',
          textEn: 'People can often see a picture of Sherpas and the climbers at the top of the mountain.',
          answer: false,
          evidence: '사람들은 보통 산 정상에서 "등산가들만의(only the climbers)" 사진을 본다고 했습니다.'
        }
      ]
    }
  ]
};
