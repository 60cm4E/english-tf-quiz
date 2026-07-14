export const lesson6 = {
  id: 6,
  title: '6과: Feelings and Experiences',
  sections: [
    // ──────────────────────────────────────────────
    // SECTION 1: Dialogue Comprehension 1 (Q1–Q11)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue1',
      title: '대화문 1',
      subtitle: '감정과 경험',
      passages: [
        {
          id: 'dialogue1-1',
          title: '대화 1: 반장 (Sue)',
          text:
            'B: Sue, you look excited. What\'s up?\n' +
            'G: I was elected as class president. I\'m so excited.\n' +
            'B: That\'s wonderful. Congratulations!\n' +
            'G: Thanks. I\'m really happy to have a chance to work for my class.',
          textKo:
            'B(소년): Sue, 너 신나 보인다. 무슨 일이야?\n' +
            'G(소녀): 나 반장으로 뽑혔어. 너무 신나.\n' +
            'B(소년): 정말 멋지다. 축하해!\n' +
            'G(소녀): 고마워. 우리 반을 위해 일할 기회가 생겨서 정말 기뻐.'
        },
        {
          id: 'dialogue1-2',
          title: '대화 2: 마라톤 (Tim)',
          text:
            'G: Tim, congratulations on winning the gold medal in the school marathon.\n' +
            'B: Thanks, Suji. I\'m very happy.\n' +
            'G: You must be very proud of yourself.\n' +
            'B: Yes, I am. I did my best.',
          textKo:
            'G(소녀): Tim, 학교 마라톤에서 금메달 딴 거 축하해.\n' +
            'B(소년): 고마워, Suji. 정말 기뻐.\n' +
            'G(소녀): 너 자신이 정말 자랑스럽겠다.\n' +
            'B(소년): 응, 맞아. 최선을 다했어.'
        },
        {
          id: 'dialogue1-3',
          title: '대화 3: 스마트폰 분실 (Mina)',
          text:
            'B: Mina, is anything wrong?\n' +
            'G: Well, I lost my smartphone. I\'m upset.\n' +
            'B: Oh, I\'m so sorry to hear that. Do you remember when you used it last?\n' +
            'G: Well, I remember taking it out of my bag at the snack shop.\n' +
            'B: Then, let\'s go back to the snack shop to look for it.',
          textKo:
            'B(소년): Mina, 무슨 일 있어?\n' +
            'G(소녀): 음, 스마트폰을 잃어버렸어. 속상해.\n' +
            'B(소년): 아, 그거 정말 안됐다. 마지막으로 언제 사용했는지 기억나?\n' +
            'G(소녀): 음, 분식집에서 가방에서 꺼낸 기억이 나.\n' +
            'B(소년): 그러면, 분식집으로 다시 가서 찾아보자.'
        },
        {
          id: 'dialogue1-4',
          title: '대화 4: 독감 (Inho)',
          text:
            'G: You don\'t look so good, Inho. What\'s the matter?\n' +
            'B: I have the flu.\n' +
            'G: That\'s too bad. Did you see the doctor?\n' +
            'B: Yes. I\'m taking medicine.\n' +
            'G: Well, I hope you feel better soon.\n' +
            'B: Thanks.',
          textKo:
            'G(소녀): Inho, 너 안 좋아 보여. 무슨 일이야?\n' +
            'B(소년): 독감에 걸렸어.\n' +
            'G(소녀): 그거 안됐다. 병원은 갔어?\n' +
            'B(소년): 응. 약 먹고 있어.\n' +
            'G(소녀): 음, 빨리 나았으면 좋겠다.\n' +
            'B(소년): 고마워.'
        }
      ],
      questions: [
        // Dialogue 1: Class President (Sue)
        {
          id: 1,
          passageId: 'dialogue1-1',
          text: 'Sue는 반장으로 뽑혀서 긴장하고 있다.',
          textEn: 'Sue feels nervous because she was chosen as class president.',
          answer: false,
          evidence: 'Sue는 긴장(nervous)한 것이 아니라 "신나(excited)" 한다고 했습니다.'
        },
        {
          id: 2,
          passageId: 'dialogue1-1',
          text: '소년은 Sue가 반장으로 선출된 것을 축하한다.',
          textEn: 'The boy congratulates Sue on being elected as class president.',
          answer: true,
          evidence: '소년이 "정말 멋지다. 축하해!(That\'s wonderful. Congratulations!)"라고 말했습니다.'
        },

        // Dialogue 2: Marathon (Tim)
        {
          id: 3,
          passageId: 'dialogue1-2',
          text: 'Tim은 학교 마라톤에서 금메달을 땄다.',
          textEn: 'Tim won the gold medal in the school marathon.',
          answer: true,
          evidence: 'Suji가 "학교 마라톤에서 금메달 딴 거 축하해(congratulations on winning the gold medal in the school marathon)"라고 말했습니다.'
        },
        {
          id: 4,
          passageId: 'dialogue1-2',
          text: 'Suji는 Tim에게 그를 자랑스럽게 생각한다고 말한다.',
          textEn: 'Suji tells Tim that she is proud of him.',
          answer: false,
          evidence: 'Suji는 "너 자신이 자랑스럽겠다(You must be very proud of yourself)"라고 했지, 자신이 Tim을 자랑스럽게 생각한다고 말한 것이 아닙니다.'
        },
        {
          id: 5,
          passageId: 'dialogue1-2',
          text: 'Tim은 마라톤에서 금메달을 따기 위해 최선을 다했다.',
          textEn: 'Tim did his best to win the gold medal in the marathon.',
          answer: true,
          evidence: 'Tim이 "최선을 다했어(I did my best)"라고 말했습니다.'
        },

        // Dialogue 3: Lost Smartphone (Mina)
        {
          id: 6,
          passageId: 'dialogue1-3',
          text: 'Mina는 스마트폰이 잘 작동하지 않아서 속상해하고 있다.',
          textEn: 'Mina is upset because her smartphone doesn\'t work well.',
          answer: false,
          evidence: 'Mina는 스마트폰이 고장 난 것이 아니라 "잃어버렸기(lost)" 때문에 속상해하고 있습니다.'
        },
        {
          id: 7,
          passageId: 'dialogue1-3',
          text: 'Mina는 분식집에서 스마트폰을 가방에 넣었던 것을 마지막으로 기억한다.',
          textEn: 'Mina remembers putting her smartphone in her bag at the snack shop last.',
          answer: false,
          evidence: 'Mina는 분식집에서 스마트폰을 가방에서 "꺼낸(taking it out of my bag)" 것을 기억한다고 했지, 가방에 넣은 것이 아닙니다.'
        },
        {
          id: 8,
          passageId: 'dialogue1-3',
          text: '소년과 Mina는 수리점으로 돌아가서 스마트폰을 찾을 것이다.',
          textEn: 'The boy and Mina will go back to the repair shop to look for her smartphone.',
          answer: false,
          evidence: '소년은 "분식집(snack shop)"으로 돌아가자고 했지, 수리점(repair shop)이 아닙니다.'
        },

        // Dialogue 4: Flu (Inho)
        {
          id: 9,
          passageId: 'dialogue1-4',
          text: 'Inho는 독감에 걸렸기 때문에 의사에게 갈 것이다.',
          textEn: 'Inho will see a doctor because he has the flu.',
          answer: false,
          evidence: 'Inho는 이미 의사를 "만났고(Did you see the doctor? - Yes)", 앞으로 갈 것이 아닙니다.'
        },
        {
          id: 10,
          passageId: 'dialogue1-4',
          text: 'Inho는 아직 약을 먹지 않았다.',
          textEn: 'Inho hasn\'t taken medicine yet.',
          answer: false,
          evidence: 'Inho는 "약을 먹고 있다(I\'m taking medicine)"고 했으므로 이미 약을 먹고 있습니다.'
        },
        {
          id: 11,
          passageId: 'dialogue1-4',
          text: '소녀는 Inho가 빨리 나았으면 좋겠다고 한다.',
          textEn: 'The girl hopes Inho gets well soon.',
          answer: true,
          evidence: '소녀가 "빨리 나았으면 좋겠다(I hope you feel better soon)"라고 말했습니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 2: Dialogue Comprehension 2 (Q12–Q18)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue2',
      title: '대화문 2',
      subtitle: '학교 연극',
      passages: [
        {
          id: 'dialogue2-1',
          title: '학교 연극 (Jiho & Ms. Carter)',
          text:
            'B: Ms. Carter, did I get the role of Romeo in the school play?\n' +
            'W: Yes, Jiho. Congratulations! You\'ll be a wonderful Romeo. I\'m very proud of you.\n' +
            'B: Thank you so much, Ms. Carter.\n' +
            'W: I know how much you wanted the role. I\'m so happy for you.\n' +
            'B: Thank you. What about Sumi? Did she get the role she wanted, too?\n' +
            'W: Unfortunately, no. She\'s very disappointed.\n' +
            'B: Oh, I\'m sorry to hear that. Anyway, when is the first practice?\n' +
            'W: It\'s at 2 p.m. on September 20th, in the acting club room. You\'ll get a text message about it soon.\n' +
            'B: OK. I\'ll be there.',
          textKo:
            'B(소년): Ms. Carter, 저 학교 연극에서 로미오 역할을 맡게 되었나요?\n' +
            'W(여자): 응, Jiho. 축하해! 너는 멋진 로미오가 될 거야. 네가 정말 자랑스러워.\n' +
            'B(소년): 정말 감사합니다, Ms. Carter.\n' +
            'W(여자): 네가 그 역할을 얼마나 원했는지 알아. 정말 기쁘다.\n' +
            'B(소년): 감사합니다. Sumi는요? 그녀도 원했던 역할을 맡았나요?\n' +
            'W(여자): 안타깝게도, 아니야. 그녀는 매우 실망했어.\n' +
            'B(소년): 아, 그거 안됐네요. 그런데, 첫 번째 연습은 언제인가요?\n' +
            'W(여자): 9월 20일 오후 2시에, 연기 동아리 교실에서 해. 곧 문자 메시지로 알려줄게.\n' +
            'B(소년): 네. 가겠습니다.'
        }
      ],
      questions: [
        {
          id: 12,
          passageId: 'dialogue2-1',
          text: 'Jiho는 학교 연극에서 주연 역할을 맡게 되었는지 알고 싶어 한다.',
          textEn: 'Jiho wants to know if he was chosen to play the main role in the school play.',
          answer: true,
          evidence: 'Jiho가 "학교 연극에서 로미오 역할을 맡게 되었나요?(did I get the role of Romeo in the school play?)"라고 물었습니다.'
        },
        {
          id: 13,
          passageId: 'dialogue2-1',
          text: 'Jiho는 로미오 역할을 맡은 것에 대해 Ms. Carter로부터 축하를 받는다.',
          textEn: 'Jiho is congratulated by Ms. Carter on getting the role of Romeo.',
          answer: true,
          evidence: 'Ms. Carter가 "축하해!(Congratulations!)"라고 말하며 Jiho를 축하했습니다.'
        },
        {
          id: 14,
          passageId: 'dialogue2-1',
          text: 'Jiho뿐만 아니라 Sumi도 원했던 역할을 맡았다.',
          textEn: 'Not only Jiho but also Sumi took the role they wanted.',
          answer: false,
          evidence: 'Sumi는 원했던 역할을 "맡지 못했습니다(Unfortunately, no)".'
        },
        {
          id: 15,
          passageId: 'dialogue2-1',
          text: 'Sumi는 원했던 역할을 맡지 못했지만 실망하지 않았다.',
          textEn: 'Sumi isn\'t disappointed although she couldn\'t get the role she wanted.',
          answer: false,
          evidence: 'Sumi는 "매우 실망했다(She\'s very disappointed)"고 했습니다.'
        },
        {
          id: 16,
          passageId: 'dialogue2-1',
          text: '연극의 첫 번째 연습은 9월 20일 오후 2시에 있을 것이다.',
          textEn: 'The first practice for the play Romeo and Juliet will be at 2 p.m. on September 20th.',
          answer: true,
          evidence: '첫 연습은 "9월 20일 오후 2시(at 2 p.m. on September 20th)"라고 했습니다.'
        },
        {
          id: 17,
          passageId: 'dialogue2-1',
          text: 'Jiho는 9월 20일 오후 2시에 체육관에 갈 것이다.',
          textEn: 'Jiho will go to the gym at 2 p.m. on September 20th.',
          answer: false,
          evidence: '첫 연습 장소는 "연기 동아리 교실(the acting club room)"이지, 체육관(gym)이 아닙니다.'
        },
        {
          id: 18,
          passageId: 'dialogue2-1',
          text: 'Ms. Carter는 첫 번째 연습에 대한 공지를 게시판에 붙일 것이다.',
          textEn: 'Ms. Carter will put up a notice about the first practice on the board.',
          answer: false,
          evidence: 'Ms. Carter는 "문자 메시지(text message)"로 알려줄 것이지, 게시판에 공지를 붙이는 것이 아닙니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 3: Reading Comprehension (Q19–Q46)
    // ──────────────────────────────────────────────
    {
      id: 'reading1',
      title: '독해',
      subtitle: 'Mr. Boggis 이야기',
      passages: [
        {
          id: 'reading1-1',
          title: 'Mr. Boggis – 골동품 딜러 소개',
          text:
            'Cyril Boggis was an antique furniture dealer in London. He was known for buying good things at a low price and then selling them at a high price. People asked him where he had got the furniture, but he just said, "It\'s a secret."\n' +
            'Mr. Boggis\' secret was simple. He went to small towns every Sunday and knocked on doors. He told people that he was a furniture dealer. People didn\'t know how valuable their things were, so Mr. Boggis took advantage of them. He was able to buy things very cheaply.',
          textKo:
            'Cyril Boggis는 런던의 골동품 가구 딜러였다. 그는 좋은 물건을 싼 값에 사서 비싼 값에 파는 것으로 유명했다. 사람들은 그에게 어디서 그 가구를 구했는지 물었지만, 그는 그저 "비밀이야"라고만 말했다.\n' +
            'Mr. Boggis의 비밀은 간단했다. 그는 매주 일요일마다 작은 마을에 가서 문을 두드렸다. 그는 사람들에게 자신이 가구 딜러라고 말했다. 사람들은 자기 물건이 얼마나 가치 있는지 몰랐기 때문에, Mr. Boggis는 그들을 이용했다. 그는 물건을 매우 싸게 살 수 있었다.'
        },
        {
          id: 'reading1-2',
          title: 'Mr. Boggis – 테이블 발견',
          text:
            'Now it was another Sunday, and Mr. Boggis was in a small town again. At a house he visited, he met two men. One was Rummins, the owner, and the other was his son Bert.\n' +
            '"I buy old furniture. Do you have any?" asked Mr. Boggis.\n' +
            '"No, I don\'t," said Rummins.\n' +
            '"Can I just take a look?" asked Mr. Boggis.\n' +
            '"Sure. Please come in," said Rummins.\n' +
            'Mr. Boggis first went to the kitchen, and there was nothing. He then moved to the living room. And there it was! A table which was a priceless piece of eighteenth-century English furniture. He was so excited that he almost fell over.\n' +
            '"What\'s wrong?" Bert asked.\n' +
            '"Oh, nothing. Nothing at all," Mr. Boggis lied. He then said with a straight face, "This table is a reproduction. It\'s worth only a few pounds."\n' +
            'He then added, "Hmm, I think I may buy it. The legs of my table at home are broken. I can cut off the legs of your table and attach them to mine."',
          textKo:
            '또 다른 일요일이었고, Mr. Boggis는 다시 작은 마을에 있었다. 그가 방문한 한 집에서 두 남자를 만났다. 한 명은 집주인 Rummins였고, 다른 한 명은 그의 아들 Bert였다.\n' +
            '"저는 오래된 가구를 삽니다. 혹시 있으신가요?" Mr. Boggis가 물었다.\n' +
            '"아니요, 없어요," Rummins가 말했다.\n' +
            '"그냥 한번 둘러봐도 될까요?" Mr. Boggis가 물었다.\n' +
            '"물론이죠. 들어오세요," Rummins가 말했다.\n' +
            'Mr. Boggis는 먼저 부엌으로 갔는데, 아무것도 없었다. 그런 다음 거실로 갔다. 그리고 거기에 있었다! 18세기 영국 가구의 값을 매길 수 없는 작품인 테이블이. 그는 너무 흥분해서 거의 넘어질 뻔했다.\n' +
            '"무슨 일이에요?" Bert가 물었다.\n' +
            '"아, 아무것도 아니에요. 전혀요," Mr. Boggis가 거짓말했다. 그리고 태연한 표정으로 말했다, "이 테이블은 복제품이에요. 겨우 몇 파운드 정도의 가치밖에 없어요."\n' +
            '그리고 덧붙였다, "흠, 이걸 살까 봐요. 집에 있는 제 테이블 다리가 부러졌거든요. 이 테이블 다리를 잘라서 제 것에 붙일 수 있어요."'
        },
        {
          id: 'reading1-3',
          title: 'Mr. Boggis – 반전',
          text:
            '"How much?" Rummins asked.\n' +
            '"Not much, I\'m afraid. This is just a reproduction," said Mr. Boggis.\n' +
            '"So how much?"\n' +
            '"Ten pounds."\n' +
            '"Ten? It\'s worth more than that."\n' +
            '"How about fifteen?"\n' +
            '"Make it fifty."\n' +
            '"Well, thirty. This is my final offer."\n' +
            '"OK, it\'s yours, but how are you going to take it? This thing will not go in a car!"\n' +
            '"We\'ll see," Mr. Boggis said and went out to bring his car.\n' +
            'On his way to the car, Mr. Boggis couldn\'t help smiling. The table was what every dealer dreamed of. He couldn\'t believe his luck.\n' +
            '"Dad, what if this thing doesn\'t go in his car? He might not pay you," said Bert.\n' +
            'Rummins then had an idea. "What he wants is only the legs. Let\'s cut the legs off for him," said Rummins. "Great idea!" said Bert. Bert then took out a saw and began to cut off the legs.\n' +
            'When Mr. Boggis came back, the legs had been cut off. "Don\'t worry, this was a favor. I won\'t charge you for this," said Rummins. Mr. Boggis was so shocked that he couldn\'t say anything.',
          textKo:
            '"얼마죠?" Rummins가 물었다.\n' +
            '"많이는 아니에요. 이건 그냥 복제품이니까요," Mr. Boggis가 말했다.\n' +
            '"그래서 얼마요?"\n' +
            '"10파운드요."\n' +
            '"10? 그것보다는 가치가 있어요."\n' +
            '"15파운드는 어때요?"\n' +
            '"50으로 하세요."\n' +
            '"음, 30파운드요. 이게 제 마지막 제안이에요."\n' +
            '"좋아요, 당신 거예요. 하지만 어떻게 가져갈 건가요? 이건 차에 안 들어갈 텐데!"\n' +
            '"어떻게든 되겠죠," Mr. Boggis가 말하고 차를 가지러 나갔다.\n' +
            '차로 가는 길에, Mr. Boggis는 웃음을 참을 수 없었다. 그 테이블은 모든 딜러가 꿈꾸는 것이었다. 그는 자신의 행운이 믿기지 않았다.\n' +
            '"아빠, 만약 이게 그 사람 차에 안 들어가면요? 돈을 안 줄 수도 있잖아요," Bert가 말했다.\n' +
            '그러자 Rummins에게 아이디어가 떠올랐다. "그 사람이 원하는 건 다리뿐이잖아. 우리가 다리를 잘라 주자," Rummins가 말했다. "좋은 생각이에요!" Bert가 말했다. Bert는 톱을 꺼내 다리를 자르기 시작했다.\n' +
            'Mr. Boggis가 돌아왔을 때, 다리는 이미 잘려 있었다. "걱정 마세요, 이건 호의예요. 비용은 안 받을게요," Rummins가 말했다. Mr. Boggis는 너무 충격을 받아서 아무 말도 할 수 없었다.'
        }
      ],
      questions: [
        // Part 1: Mr. Boggis the Antique Dealer (Intro)
        {
          id: 19,
          passageId: 'reading1-1',
          text: 'Mr. Boggis의 직업은 런던의 자동차 딜러였다.',
          textEn: 'Mr. Boggis\' job was a car dealer in London.',
          answer: false,
          evidence: 'Mr. Boggis는 "골동품 가구 딜러(antique furniture dealer)"였지, 자동차 딜러가 아닙니다.'
        },
        {
          id: 20,
          passageId: 'reading1-1',
          text: 'Mr. Boggis는 좋은 물건을 매우 싸게 사서 매우 비싸게 팔았다.',
          textEn: 'Mr. Boggis bought good things very cheaply and then sold them very expensively.',
          answer: true,
          evidence: '그는 "좋은 물건을 싼 값에 사서 비싼 값에 파는 것(buying good things at a low price and then selling them at a high price)"으로 유명했습니다.'
        },
        {
          id: 21,
          passageId: 'reading1-1',
          text: '사람들은 Mr. Boggis가 가구를 어디서 구했는지 관심이 없었다.',
          textEn: 'People were not interested in where Mr. Boggis had got the furniture.',
          answer: false,
          evidence: '사람들은 그에게 "어디서 가구를 구했는지 물었습니다(People asked him where he had got the furniture)".'
        },
        {
          id: 22,
          passageId: 'reading1-1',
          text: 'Mr. Boggis가 좋은 물건을 매우 싸게 사는 방법은 비밀이었다.',
          textEn: 'How Mr. Boggis bought good things very cheaply was a secret.',
          answer: true,
          evidence: '그는 어디서 가구를 구했느냐는 질문에 "비밀이야(It\'s a secret)"라고만 말했습니다.'
        },
        {
          id: 23,
          passageId: 'reading1-1',
          text: 'Mr. Boggis는 자신의 비밀을 다른 사람들에게 말했다.',
          textEn: 'Mr. Boggis told his secret to others.',
          answer: false,
          evidence: '그는 "비밀이야(It\'s a secret)"라고만 하며 비밀을 말하지 않았습니다.'
        },
        {
          id: 24,
          passageId: 'reading1-1',
          text: 'Mr. Boggis는 골동품 가구를 사기 위해 매주 일요일 큰 도시에 갔다.',
          textEn: 'Mr. Boggis went to big cities every Sunday to buy antique furniture.',
          answer: false,
          evidence: '그는 매주 일요일 "작은 마을(small towns)"에 갔지, 큰 도시가 아닙니다.'
        },
        {
          id: 25,
          passageId: 'reading1-1',
          text: 'Mr. Boggis가 작은 마을에서 만난 사람들은 자기 물건이 얼마나 가치 있는지 알고 있었다.',
          textEn: 'People Mr. Boggis met in small towns knew how valuable their objects were.',
          answer: false,
          evidence: '사람들은 "자기 물건이 얼마나 가치 있는지 몰랐습니다(People didn\'t know how valuable their things were)".'
        },
        {
          id: 26,
          passageId: 'reading1-1',
          text: 'Mr. Boggis는 작은 마을에서 만난 사람들을 이용하여 좋은 물건을 싸게 샀다.',
          textEn: 'Mr. Boggis took advantage of people he met in small towns to buy good things at a low cost.',
          answer: true,
          evidence: 'Mr. Boggis는 "그들을 이용했고(took advantage of them)" 물건을 매우 싸게 살 수 있었습니다.'
        },

        // Part 2: The Table (Discovery)
        {
          id: 27,
          passageId: 'reading1-2',
          text: '어느 일요일, Mr. Boggis는 한 집을 방문하여 Rummins와 그의 딸을 만났다.',
          textEn: 'One Sunday, Mr. Boggis visited a house and met Rummins and his daughter.',
          answer: false,
          evidence: 'Mr. Boggis가 만난 사람은 Rummins와 그의 "아들(son)" Bert이지, 딸이 아닙니다.'
        },
        {
          id: 28,
          passageId: 'reading1-2',
          text: 'Mr. Boggis는 Rummins에게 오래된 가구가 있는지 물었다.',
          textEn: 'Mr. Boggis asked Rummins if he had any old furniture.',
          answer: true,
          evidence: 'Mr. Boggis가 "오래된 가구를 삽니다. 혹시 있으신가요?(I buy old furniture. Do you have any?)"라고 물었습니다.'
        },
        {
          id: 29,
          passageId: 'reading1-2',
          text: 'Rummins는 Mr. Boggis가 집을 둘러보는 것을 허락하지 않았다.',
          textEn: 'Rummins didn\'t allow Mr. Boggis to take a look at his house.',
          answer: false,
          evidence: 'Rummins는 "물론이죠. 들어오세요(Sure. Please come in)"라고 허락했습니다.'
        },
        {
          id: 30,
          passageId: 'reading1-2',
          text: 'Mr. Boggis는 Rummins 집에서 처음 간 장소에서 아무것도 찾지 못했다.',
          textEn: 'Mr. Boggis didn\'t find anything in the first place of Rummins\' house.',
          answer: true,
          evidence: 'Mr. Boggis는 먼저 부엌으로 갔는데 "아무것도 없었습니다(there was nothing)".'
        },
        {
          id: 31,
          passageId: 'reading1-2',
          text: 'Rummins 집의 부엌에 18세기 영국 가구의 가치 있는 테이블이 있었다.',
          textEn: 'In the kitchen of Rummins\' house, there was a table which was a valuable piece of eighteen-century English furniture.',
          answer: false,
          evidence: '가치 있는 테이블은 부엌이 아니라 "거실(living room)"에 있었습니다.'
        },
        {
          id: 32,
          passageId: 'reading1-2',
          text: 'Rummins의 집에 있던 테이블은 복제품이었다.',
          textEn: 'Rummins had a table which was a reproduction in his house.',
          answer: false,
          evidence: '그 테이블은 "값을 매길 수 없는 18세기 영국 가구(priceless piece of eighteenth-century English furniture)"였지, 복제품이 아닙니다. Mr. Boggis가 복제품이라고 거짓말한 것입니다.'
        },
        {
          id: 33,
          passageId: 'reading1-2',
          text: 'Mr. Boggis는 Rummins 집의 거실에서 테이블을 보고 매우 흥분했다.',
          textEn: 'Mr. Boggis felt so excited when he saw the table in Rummins\' house.',
          answer: true,
          evidence: '그는 "너무 흥분해서 거의 넘어질 뻔했습니다(He was so excited that he almost fell over)".'
        },
        {
          id: 34,
          passageId: 'reading1-2',
          text: 'Mr. Boggis는 Bert에게 거실에 있는 테이블이 얼마나 가치 있는지 말해 주었다.',
          textEn: 'Mr. Boggis told Bert how valuable the table in the living room was.',
          answer: false,
          evidence: 'Mr. Boggis는 테이블의 진짜 가치를 말하지 않고 "복제품이라 몇 파운드밖에 안 된다(This table is a reproduction. It\'s worth only a few pounds)"고 거짓말했습니다.'
        },
        {
          id: 35,
          passageId: 'reading1-2',
          text: 'Mr. Boggis는 Rummins와 Bert에게 테이블이 복제품이고 겨우 몇 파운드의 가치밖에 없다고 거짓말했다.',
          textEn: 'Mr. Boggis lied to Rummins and Bert that the table was a reproduction and it was worth only a few pounds.',
          answer: true,
          evidence: 'Mr. Boggis가 "거짓말했다(lied)"고 명시되어 있으며, 태연하게 복제품이라고 말했습니다.'
        },
        {
          id: 36,
          passageId: 'reading1-2',
          text: 'Mr. Boggis가 원한 것은 테이블의 다리뿐이었다.',
          textEn: 'What Mr. Boggis wanted was only the legs of the table.',
          answer: false,
          evidence: 'Mr. Boggis는 테이블 전체를 원했지만, 가격을 낮추기 위해 다리만 필요하다고 "거짓말"한 것입니다.'
        },

        // Part 3: The Twist
        {
          id: 37,
          passageId: 'reading1-3',
          text: 'Mr. Boggis는 처음에 테이블에 대해 10파운드를 제안했다.',
          textEn: 'At first, Mr. Boggis suggested ten pounds for the table.',
          answer: true,
          evidence: 'Mr. Boggis가 처음에 "10파운드(Ten pounds)"를 제시했습니다.'
        },
        {
          id: 38,
          passageId: 'reading1-3',
          text: 'Rummins는 테이블을 15파운드에 팔기로 동의했다.',
          textEn: 'Rummins agreed to sell the table for fifteen pounds.',
          answer: false,
          evidence: 'Rummins는 15파운드 제안에 "50으로 하세요(Make it fifty)"라고 했으므로 동의하지 않았습니다.'
        },
        {
          id: 39,
          passageId: 'reading1-3',
          text: 'Rummins는 테이블에 대해 50파운드를 요구했지만 Mr. Boggis는 거절했다.',
          textEn: 'Rummins asked fifty pounds for the table but Mr. Boggis refused it.',
          answer: true,
          evidence: 'Rummins가 "50으로 하세요(Make it fifty)"라고 했고, Mr. Boggis는 "30파운드. 이게 마지막 제안(thirty. This is my final offer)"이라고 거절했습니다.'
        },
        {
          id: 40,
          passageId: 'reading1-3',
          text: 'Rummins는 Mr. Boggis에게 테이블을 팔지 않기로 결정했다.',
          textEn: 'Rummins decided not to sell the table to Mr. Boggis.',
          answer: false,
          evidence: 'Rummins는 "좋아요, 당신 거예요(OK, it\'s yours)"라고 하며 판매에 동의했습니다.'
        },
        {
          id: 41,
          passageId: 'reading1-3',
          text: 'Mr. Boggis는 차로 가는 길에 모든 딜러가 갖고 싶어하는 테이블을 갖게 될 것이기 때문에 웃음을 참을 수 없었다.',
          textEn: 'Mr. Boggis couldn\'t help but smile because he would get the table every dealer hoped to have on his way to the car.',
          answer: true,
          evidence: '차로 가는 길에 "웃음을 참을 수 없었고(couldn\'t help smiling)" 그 테이블은 "모든 딜러가 꿈꾸는 것(what every dealer dreamed of)"이었습니다.'
        },
        {
          id: 42,
          passageId: 'reading1-3',
          text: 'Bert는 테이블이 Mr. Boggis의 차에 안 들어갈까 봐 걱정했다.',
          textEn: 'Bert was worried that the table might not go in Mr. Boggis\' car.',
          answer: true,
          evidence: 'Bert가 "만약 이게 그 사람 차에 안 들어가면요?(what if this thing doesn\'t go in his car?)"라고 걱정했습니다.'
        },
        {
          id: 43,
          passageId: 'reading1-3',
          text: 'Rummins는 Mr. Boggis가 실제로 필요한 것은 테이블의 다리뿐이라고 생각했다.',
          textEn: 'Rummins thought only what Mr. Boggis actually needed was the legs of his table.',
          answer: true,
          evidence: 'Rummins가 "그 사람이 원하는 건 다리뿐이잖아(What he wants is only the legs)"라고 말했습니다.'
        },
        {
          id: 44,
          passageId: 'reading1-3',
          text: 'Rummins는 Mr. Boggis를 위해 테이블 다리를 잘라 주자고 제안했다.',
          textEn: 'Rummins suggested cutting off the legs of the table for Mr. Boggis.',
          answer: true,
          evidence: 'Rummins가 "우리가 다리를 잘라 주자(Let\'s cut the legs off for him)"고 제안했습니다.'
        },
        {
          id: 45,
          passageId: 'reading1-3',
          text: 'Mr. Boggis가 차를 가지러 나간 사이에 Rummins와 Bert가 테이블 다리를 잘랐다.',
          textEn: 'Rummins and Bert cut off the legs of the table while Mr. Boggis went out to bring his car.',
          answer: true,
          evidence: 'Mr. Boggis가 차를 가지러 나간 사이 Bert가 "톱을 꺼내 다리를 자르기 시작했고(took out a saw and began to cut off the legs)" 돌아왔을 때 "다리는 이미 잘려 있었습니다(the legs had been cut off)".'
        },
        {
          id: 46,
          passageId: 'reading1-3',
          text: 'Rummins는 Mr. Boggis에게 자신들이 한 일에 대해 비용을 지불하기를 원했다.',
          textEn: 'Rummins wanted Mr. Boggis to pay for what they did for him.',
          answer: false,
          evidence: 'Rummins는 "비용은 안 받을게요(I won\'t charge you for this)"라고 말했습니다.'
        }
      ]
    }
  ]
};
