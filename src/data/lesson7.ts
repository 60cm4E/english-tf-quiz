export const lesson7 = {
  id: 7,
  title: '7과: Technology and Big Data',
  sections: [
    // ──────────────────────────────────────────────
    // SECTION 1: Dialogue Comprehension 1 (Q1–Q10)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue1',
      title: '대화문 1',
      subtitle: '기기 사용법',
      passages: [
        {
          id: 'dialogue1-1',
          title: '대화 1: 교통카드 충전',
          text:
            'B: Excuse me. Can you tell me how to add money to my transportation card?\n' +
            'G: Of course. First, put your card in the machine. Second, choose the amount of money you want to add.\n' +
            'B: OK.\n' +
            'G: Last, insert your money into the machine.\n' +
            'B: That sounds simple. Thanks.',
          textKo:
            'B(소년): 실례합니다. 교통카드에 돈을 충전하는 방법을 알려 주시겠어요?\n' +
            'G(소녀): 물론이죠. 먼저 카드를 기계에 넣으세요. 그다음, 충전하고 싶은 금액을 선택하세요.\n' +
            'B(소년): 네.\n' +
            'G(소녀): 마지막으로, 돈을 기계에 넣으세요.\n' +
            'B(소년): 간단하네요. 감사합니다.'
        },
        {
          id: 'dialogue1-2',
          title: '대화 2: 과자 자판기',
          text:
            'B: I want to buy a snack. Do you know how to use this snack machine?\n' +
            'G: Yeah. First, choose the snack you want.\n' +
            'B: I already did. What\'s next?\n' +
            'G: Just put in the money. Then take the snack out.\n' +
            'B: Got it. Thanks.',
          textKo:
            'B(소년): 과자를 사고 싶어. 이 과자 자판기 사용법을 알아?\n' +
            'G(소녀): 응. 먼저 원하는 과자를 선택해.\n' +
            'B(소년): 이미 했어. 다음은?\n' +
            'G(소녀): 돈을 넣기만 하면 돼. 그런 다음 과자를 꺼내.\n' +
            'B(소년): 알겠어. 고마워.'
        },
        {
          id: 'dialogue1-3',
          title: '대화 3: 자전거 대여 앱',
          text:
            'G: Excuse me. I want to rent a bike. Can you tell me how to use this application?\n' +
            'M: Sure. First, log in to the application. Then find the RENT button and touch it.\n' +
            'G: Then what?\n' +
            'M: Then the application will give you a number to unlock a bike with.\n' +
            'G: Thank you. I really appreciate your help.',
          textKo:
            'G(소녀): 실례합니다. 자전거를 빌리고 싶어요. 이 앱 사용법을 알려 주시겠어요?\n' +
            'M(남자): 물론이죠. 먼저 앱에 로그인하세요. 그다음 RENT 버튼을 찾아서 누르세요.\n' +
            'G(소녀): 그다음에는요?\n' +
            'M(남자): 그러면 앱이 자전거 잠금을 해제할 번호를 알려 줄 거예요.\n' +
            'G(소녀): 감사합니다. 도움에 정말 감사드려요.'
        }
      ],
      questions: [
        // Dialogue 1: Transportation Card
        {
          id: 1,
          passageId: 'dialogue1-1',
          text: '소년은 교통카드에 돈을 충전하는 방법을 알고 있다.',
          textEn: 'The boy knows how to add money to his transportation card.',
          answer: false,
          evidence: '소년이 "충전하는 방법을 알려 달라(Can you tell me how to add money)"고 물었으므로 방법을 모릅니다.'
        },
        {
          id: 2,
          passageId: 'dialogue1-1',
          text: '소년은 금액을 선택한 후에 돈을 기계에 넣어야 한다.',
          textEn: 'The boy should put his money into the machine after choosing the amount of money.',
          answer: true,
          evidence: '소녀가 "금액을 선택(choose the amount)"한 후 "돈을 넣으라(insert your money)"고 안내했습니다.'
        },
        {
          id: 3,
          passageId: 'dialogue1-1',
          text: '소년은 기계를 사용하는 것이 어렵다고 생각한다.',
          textEn: 'The boy thinks using the machine is difficult.',
          answer: false,
          evidence: '소년이 "간단하네요(That sounds simple)"라고 했으므로 어렵다고 생각하지 않습니다.'
        },

        // Dialogue 2: Snack Machine
        {
          id: 4,
          passageId: 'dialogue1-2',
          text: '소년은 과자 자판기를 어떻게 사용해야 하는지 모른다.',
          textEn: 'The boy doesn\'t know how he should use the snack machine.',
          answer: true,
          evidence: '소년이 "이 과자 자판기 사용법을 아느냐(Do you know how to use this snack machine)"고 물었으므로 사용법을 모릅니다.'
        },
        {
          id: 5,
          passageId: 'dialogue1-2',
          text: '소년은 과자 자판기를 사용하려면 먼저 돈을 넣어야 한다.',
          textEn: 'The boy should first put in the money to use the snack machine.',
          answer: false,
          evidence: '소녀가 "먼저 원하는 과자를 선택하라(First, choose the snack you want)"고 했지, 돈을 먼저 넣으라고 하지 않았습니다.'
        },
        {
          id: 6,
          passageId: 'dialogue1-2',
          text: '소년은 소녀에게 감사를 표현한다.',
          textEn: 'The boy expresses thanks to the girl.',
          answer: true,
          evidence: '소년이 "고마워(Thanks)"라고 했습니다.'
        },

        // Dialogue 3: Bike Rental App
        {
          id: 7,
          passageId: 'dialogue1-3',
          text: '소녀는 자전거를 빌리기 위해 앱을 사용하고 싶어 한다.',
          textEn: 'The girl wants to use the app to rent a bike.',
          answer: true,
          evidence: '소녀가 "자전거를 빌리고 싶다(I want to rent a bike)"며 "앱 사용법을 알려 달라(Can you tell me how to use this application)"고 했습니다.'
        },
        {
          id: 8,
          passageId: 'dialogue1-3',
          text: '소녀는 먼저 앱에 로그인해야 한다.',
          textEn: 'The girl should first log in to the app.',
          answer: true,
          evidence: '남자가 "먼저 앱에 로그인하라(First, log in to the application)"고 안내했습니다.'
        },
        {
          id: 9,
          passageId: 'dialogue1-3',
          text: '소녀는 자전거를 빌리는 데 필요한 번호를 받기 위해 RENT 버튼을 눌러야 한다.',
          textEn: 'The girl needs to touch the RENT button to get a number needed to rent a bike.',
          answer: true,
          evidence: 'RENT 버튼을 누르면 "자전거 잠금 해제 번호를 알려 준다(the application will give you a number to unlock a bike with)"고 했습니다.'
        },
        {
          id: 10,
          passageId: 'dialogue1-3',
          text: '소녀가 앱에서 받을 번호는 자전거를 잠그는 데 사용된다.',
          textEn: 'The number the girl will get from the app will be used to lock a bike.',
          answer: false,
          evidence: '번호는 자전거를 "잠금 해제(unlock)"하는 데 사용되지, 잠그는(lock) 데 사용되는 것이 아닙니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 2: Dialogue Comprehension 2 (Q11–Q19)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue2',
      title: '대화문 2',
      subtitle: '도서관 로봇',
      passages: [
        {
          id: 'dialogue2-1',
          title: '도서관 로봇',
          text:
            'G: Excuse me, but what\'s this robot for?\n' +
            'B: Oh, it\'s a robot that finds books for you.\n' +
            'G: Really? Can you tell me how to use it?\n' +
            'B: Sure. First, place your library card on the robot\'s screen.\n' +
            'G: OK.\n' +
            'B: Second, type the title of the book you\'re looking for and then press ENTER.\n' +
            'G: Is that all?\n' +
            'B: Yes. Then, the robot will find the book and take it to the front desk.\n' +
            'G: So I can just go to the front desk and get the book?\n' +
            'B: Right. It\'s so easy, isn\'t it?\n' +
            'G: Yes, it\'s really amazing. Thank you.',
          textKo:
            'G(소녀): 실례합니다, 이 로봇은 무엇을 위한 건가요?\n' +
            'B(소년): 아, 책을 찾아 주는 로봇이야.\n' +
            'G(소녀): 정말요? 사용 방법을 알려 줄 수 있어요?\n' +
            'B(소년): 물론이지. 먼저 도서관 카드를 로봇 화면 위에 올려놔.\n' +
            'G(소녀): 네.\n' +
            'B(소년): 그다음, 찾고 있는 책의 제목을 입력하고 ENTER를 눌러.\n' +
            'G(소녀): 그게 다야?\n' +
            'B(소년): 응. 그러면 로봇이 책을 찾아서 안내 데스크로 가져다 줄 거야.\n' +
            'G(소녀): 그러면 안내 데스크에 가서 책을 받으면 되는 거야?\n' +
            'B(소년): 맞아. 정말 쉽지, 그렇지?\n' +
            'G(소녀): 응, 정말 놀라워. 고마워.'
        }
      ],
      questions: [
        {
          id: 11,
          passageId: 'dialogue2-1',
          text: '소녀는 책을 사기 위해 서점을 방문한다.',
          textEn: 'The girl visits the bookstore to buy a book.',
          answer: false,
          evidence: '소녀는 서점이 아닌 도서관에서 로봇의 용도를 묻고 있으며, 책을 사려는 것이 아닙니다.'
        },
        {
          id: 12,
          passageId: 'dialogue2-1',
          text: '로봇은 사람들이 책을 찾는 것을 돕는다.',
          textEn: 'The robot helps people to find books.',
          answer: true,
          evidence: '소년이 "책을 찾아 주는 로봇(a robot that finds books for you)"이라고 설명했습니다.'
        },
        {
          id: 13,
          passageId: 'dialogue2-1',
          text: '소녀는 로봇 사용법을 알고 싶어 한다.',
          textEn: 'The girl wants to know how to use the robot.',
          answer: true,
          evidence: '소녀가 "사용 방법을 알려 달라(Can you tell me how to use it)"고 물었습니다.'
        },
        {
          id: 14,
          passageId: 'dialogue2-1',
          text: '로봇을 사용하려면 도서관 카드가 필요하다.',
          textEn: 'A library card is needed to use the robot.',
          answer: true,
          evidence: '소년이 "도서관 카드를 로봇 화면에 올려놓으라(place your library card on the robot\'s screen)"고 안내했습니다.'
        },
        {
          id: 15,
          passageId: 'dialogue2-1',
          text: '소녀는 먼저 도서관 카드를 로봇 화면 위에 올려놓아야 한다.',
          textEn: 'The girl should first place her library card on the robot\'s screen.',
          answer: true,
          evidence: '소년이 "먼저(First) 도서관 카드를 로봇 화면에 올려놓으라"고 했습니다.'
        },
        {
          id: 16,
          passageId: 'dialogue2-1',
          text: '소녀는 책 제목을 입력한 후 ENTER를 눌러야 한다.',
          textEn: 'The girl should press ENTER after typing the title of the book.',
          answer: true,
          evidence: '소년이 "제목을 입력하고 ENTER를 눌러라(type the title ... and then press ENTER)"고 했습니다.'
        },
        {
          id: 17,
          passageId: 'dialogue2-1',
          text: '로봇이 책을 찾아서 소녀에게 가져다줄 것이다.',
          textEn: 'The robot will find the book and take it to the girl.',
          answer: false,
          evidence: '로봇은 책을 "안내 데스크(front desk)"로 가져다주지, 소녀에게 직접 가져다주는 것이 아닙니다.'
        },
        {
          id: 18,
          passageId: 'dialogue2-1',
          text: '소녀는 안내 데스크에서 책을 받을 수 있다.',
          textEn: 'The girl can get the book at the front desk.',
          answer: true,
          evidence: '소년이 "안내 데스크에 가서 책을 받으면 된다(go to the front desk and get the book)"고 했습니다.'
        },
        {
          id: 19,
          passageId: 'dialogue2-1',
          text: '소녀는 로봇을 사용하는 것이 정말 쉽다고 생각한다.',
          textEn: 'The girl thinks it is so easy to use the robot.',
          answer: true,
          evidence: '소녀가 소년의 "정말 쉽지(It\'s so easy, isn\'t it?)"라는 말에 동의하며 "정말 놀라워(it\'s really amazing)"라고 했습니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 3: Reading Comprehension (Q20–Q45)
    // ──────────────────────────────────────────────
    {
      id: 'reading1',
      title: '독해',
      subtitle: '빅데이터',
      passages: [
        {
          id: 'reading1-1',
          title: '빅데이터란 무엇인가?',
          text:
            'Have you ever visited an online bookstore and been surprised by the books that the store recommended for you? ' +
            'Many of them looked interesting to you. So how did the bookstore know what you liked? This is all possible because of big data.\n' +
            'Big data is data sets that are very big and complex. ' +
            'As information and communication technology develops, the amount of data we have is getting much greater than before. ' +
            'This is mainly because almost everything that we do online leaves a trace. ' +
            'For example, the photos you upload on your blog and the records of your purchases at online stores are all part of big data.\n' +
            'Simply collecting data, however, is not enough. Big data has to be analyzed, and this is done by big data experts. ' +
            'Using various methods, experts analyze big data and draw meaningful results from it. ' +
            'These results then can be used to make decisions or to predict the future.',
          textKo:
            '온라인 서점을 방문했을 때 서점이 추천해 준 책에 놀란 적이 있는가? ' +
            '그중 많은 책이 당신에게 흥미로워 보였을 것이다. 그렇다면 서점은 당신이 무엇을 좋아하는지 어떻게 알았을까? 이 모든 것은 빅데이터 덕분에 가능하다.\n' +
            '빅데이터는 매우 크고 복잡한 데이터 집합이다. ' +
            '정보통신기술이 발전함에 따라 우리가 가진 데이터의 양은 이전보다 훨씬 더 많아지고 있다. ' +
            '이는 주로 우리가 온라인에서 하는 거의 모든 것이 흔적을 남기기 때문이다. ' +
            '예를 들어, 블로그에 올리는 사진이나 온라인 상점에서의 구매 기록은 모두 빅데이터의 일부이다.\n' +
            '하지만 단순히 데이터를 수집하는 것만으로는 충분하지 않다. 빅데이터는 분석되어야 하며, 이는 빅데이터 전문가들이 한다. ' +
            '전문가들은 다양한 방법을 사용하여 빅데이터를 분석하고 의미 있는 결과를 도출한다. ' +
            '이러한 결과는 의사 결정을 내리거나 미래를 예측하는 데 사용될 수 있다.'
        },
        {
          id: 'reading1-2',
          title: '빅데이터는 우리 삶에 어떤 영향을 미치고 있는가?',
          text:
            'Big data is influencing almost all parts of our lives. ' +
            'It helps companies understand their customers\' needs better and helps them sell more products. ' +
            'It helps people avoid heavy traffic. Its uses are endless, and here are some interesting examples.\n\n' +
            'Disease Forecast\n' +
            'Did you know that health professionals can now forecast a disease just as weather experts forecast the weather? ' +
            'This is possible thanks to big data. For example, when the flu season comes, people will buy more flu medicine. ' +
            'They will also search online about flu symptoms more. ' +
            'If this kind of data is analyzed wisely, the spread of the flu can be predicted.\n\n' +
            'Improving Performance in Sports\n' +
            'Are you a sports fan? Well, big data is improving the performance of players, making sports more exciting. ' +
            'A famous example is Germany\'s national soccer team. ' +
            'The team built a database by collecting and analyzing a huge amount of data on players. ' +
            'For example, the data included information about how much each player ran and how long he had the ball. ' +
            'With the help of this database, Germany\'s national soccer team was able to improve its performance and win the 2014 World Cup.',
          textKo:
            '빅데이터는 우리 삶의 거의 모든 부분에 영향을 미치고 있다. ' +
            '빅데이터는 기업이 고객의 요구를 더 잘 이해하고 더 많은 제품을 판매하는 데 도움을 준다. ' +
            '빅데이터는 사람들이 교통 체증을 피할 수 있게 돕는다. 그 활용은 무궁무진하며, 여기 몇 가지 흥미로운 예가 있다.\n\n' +
            '질병 예측\n' +
            '보건 전문가들이 기상 전문가들이 날씨를 예보하듯이 질병을 예측할 수 있다는 것을 알고 있는가? ' +
            '이것은 빅데이터 덕분에 가능하다. 예를 들어, 독감 시즌이 오면 사람들은 독감 약을 더 많이 살 것이다. ' +
            '또한 온라인에서 독감 증상에 대해 더 많이 검색할 것이다. ' +
            '이런 종류의 데이터가 현명하게 분석되면 독감의 확산을 예측할 수 있다.\n\n' +
            '스포츠에서의 경기력 향상\n' +
            '스포츠 팬인가? 빅데이터는 선수들의 경기력을 향상시키고 스포츠를 더 흥미진진하게 만들고 있다. ' +
            '유명한 예는 독일 축구 국가대표팀이다. ' +
            '그 팀은 선수들에 대한 방대한 양의 데이터를 수집하고 분석하여 데이터베이스를 구축했다. ' +
            '예를 들어, 그 데이터에는 각 선수가 얼마나 뛰었는지, 얼마나 오래 공을 소유했는지에 대한 정보가 포함되어 있었다. ' +
            '이 데이터베이스의 도움으로 독일 축구 국가대표팀은 경기력을 향상시키고 2014년 월드컵에서 우승할 수 있었다.'
        },
        {
          id: 'reading1-3',
          title: '범죄 예방',
          text:
            'Thanks to big data, police can now predict crime before it happens. ' +
            'Through the analysis of big data about the type, time and place of crime, police can make a map of crime hot spots. ' +
            'This map identifies when and where crime is most likely to happen. ' +
            'Police can prevent further crime by focusing on the areas and the times this map predicts.\n' +
            'Big data has already changed the world greatly. ' +
            'So where will the big data industry go from here? Nobody knows for sure, but experts agree that big data will play a more and more important role in our lives.',
          textKo:
            '빅데이터 덕분에 경찰은 이제 범죄가 일어나기 전에 예측할 수 있다. ' +
            '범죄의 유형, 시간, 장소에 대한 빅데이터 분석을 통해 경찰은 범죄 다발 지역 지도를 만들 수 있다. ' +
            '이 지도는 범죄가 언제 어디서 발생할 가능성이 가장 높은지를 나타낸다. ' +
            '경찰은 이 지도가 예측하는 지역과 시간에 집중함으로써 추가 범죄를 예방할 수 있다.\n' +
            '빅데이터는 이미 세상을 크게 바꾸어 놓았다. ' +
            '그렇다면 빅데이터 산업은 앞으로 어디로 갈 것인가? 아무도 확실히 알 수 없지만, 전문가들은 빅데이터가 우리 삶에서 점점 더 중요한 역할을 할 것이라는 데 동의한다.'
        }
      ],
      questions: [
        // Part 1: What is Big Data?
        {
          id: 20,
          passageId: 'reading1-1',
          text: '온라인 서점은 빅데이터를 이용하여 사람들이 무엇을 좋아하는지 알 수 있다.',
          textEn: 'The online bookstore can know what people like using big data.',
          answer: true,
          evidence: '"이 모든 것은 빅데이터 덕분에 가능하다(This is all possible because of big data)"고 했습니다.'
        },
        {
          id: 21,
          passageId: 'reading1-1',
          text: '빅데이터는 매우 크고 단순한 데이터 집합이다.',
          textEn: 'Big data is data sets that are very large and simple.',
          answer: false,
          evidence: '빅데이터는 "매우 크고 복잡한(very big and complex)" 데이터 집합이지, 단순한(simple) 것이 아닙니다.'
        },
        {
          id: 22,
          passageId: 'reading1-1',
          text: '정보통신기술의 발전은 빅데이터와 아무런 관련이 없다.',
          textEn: 'The development of information and communication technology has nothing to do with big data.',
          answer: false,
          evidence: '"정보통신기술이 발전함에 따라(As information and communication technology develops)" 데이터 양이 증가한다고 했으므로 관련이 있습니다.'
        },
        {
          id: 23,
          passageId: 'reading1-1',
          text: '우리가 가진 데이터의 양은 점점 줄어들고 있다.',
          textEn: 'The amount of data we have is getting much smaller.',
          answer: false,
          evidence: '데이터의 양은 "이전보다 훨씬 더 많아지고 있다(getting much greater than before)"고 했지, 줄어들고 있지 않습니다.'
        },
        {
          id: 24,
          passageId: 'reading1-1',
          text: '우리가 온라인에서 하는 거의 모든 것은 흔적이 되어 빅데이터의 일부가 된다.',
          textEn: 'Almost everything we do online becomes a trace and a part of big data.',
          answer: true,
          evidence: '"온라인에서 하는 거의 모든 것이 흔적을 남긴다(almost everything that we do online leaves a trace)"고 했습니다.'
        },
        {
          id: 25,
          passageId: 'reading1-1',
          text: '빅데이터 전문가들은 다양한 방법으로 빅데이터를 분석한다.',
          textEn: 'Big data experts analyze big data in various methods.',
          answer: true,
          evidence: '"전문가들은 다양한 방법을 사용하여 빅데이터를 분석한다(Using various methods, experts analyze big data)"고 했습니다.'
        },
        {
          id: 26,
          passageId: 'reading1-1',
          text: '빅데이터 분석을 통해 전문가들은 의미 있는 결과를 도출한다.',
          textEn: 'Through the analysis of big data, experts draw meaningful results.',
          answer: true,
          evidence: '"의미 있는 결과를 도출한다(draw meaningful results from it)"고 했습니다.'
        },
        {
          id: 27,
          passageId: 'reading1-1',
          text: '전문가들이 빅데이터에서 도출한 결과는 미래를 예측하는 데 사용될 수 있다.',
          textEn: 'Results experts draw from big data can be used to forecast the future.',
          answer: true,
          evidence: '"미래를 예측하는 데 사용될 수 있다(can be used to predict the future)"고 했습니다.'
        },

        // Part 2: How is Big Data Influencing Our Lives?
        {
          id: 28,
          passageId: 'reading1-2',
          text: '우리의 삶은 빅데이터에 의해 영향을 받고 있지 않다.',
          textEn: 'Our lives are not being influenced by big data.',
          answer: false,
          evidence: '"빅데이터는 우리 삶의 거의 모든 부분에 영향을 미치고 있다(Big data is influencing almost all parts of our lives)"고 했습니다.'
        },
        {
          id: 29,
          passageId: 'reading1-2',
          text: '빅데이터를 이용하면 기업은 고객이 무엇을 원하는지 더 잘 이해할 수 있다.',
          textEn: 'Using big data, companies can have a better understanding of what their customers want.',
          answer: true,
          evidence: '"기업이 고객의 요구를 더 잘 이해하도록 돕는다(helps companies understand their customers\' needs better)"고 했습니다.'
        },
        {
          id: 30,
          passageId: 'reading1-2',
          text: '빅데이터는 기업이 더 많은 제품을 판매하는 데 도움이 되지 않는다.',
          textEn: 'Big data can\'t help companies sell more products.',
          answer: false,
          evidence: '"더 많은 제품을 판매하는 데 도움을 준다(helps them sell more products)"고 했습니다.'
        },
        {
          id: 31,
          passageId: 'reading1-2',
          text: '빅데이터 덕분에 교통 체증을 피할 수 있다.',
          textEn: 'Avoiding heavy traffic is possible thanks to big data.',
          answer: true,
          evidence: '"사람들이 교통 체증을 피할 수 있게 돕는다(helps people avoid heavy traffic)"고 했습니다.'
        },
        {
          id: 32,
          passageId: 'reading1-2',
          text: '빅데이터는 보건 전문가들이 질병을 예측하는 데 도움을 줄 수 있다.',
          textEn: 'Big data can help health professionals predict a disease.',
          answer: true,
          evidence: '"보건 전문가들이 질병을 예측할 수 있다(health professionals can now forecast a disease)"고 했으며 이는 빅데이터 덕분입니다.'
        },
        {
          id: 33,
          passageId: 'reading1-2',
          text: '빅데이터를 현명하게 분석하더라도 독감의 확산을 예측하기 어렵다.',
          textEn: 'Although big data is analyzed smartly, it is difficult to predict the spread of the flu.',
          answer: false,
          evidence: '"이런 종류의 데이터가 현명하게 분석되면 독감의 확산을 예측할 수 있다(the spread of the flu can be predicted)"고 했습니다.'
        },
        {
          id: 34,
          passageId: 'reading1-2',
          text: '빅데이터는 선수들의 경기력에 영향을 줄 수 있다.',
          textEn: 'Big data can have an influence on the performance of players.',
          answer: true,
          evidence: '"빅데이터는 선수들의 경기력을 향상시키고 있다(big data is improving the performance of players)"고 했습니다.'
        },
        {
          id: 35,
          passageId: 'reading1-2',
          text: '빅데이터는 스포츠를 더 흥미진진하게 만드는 데 도움이 되지 않는다.',
          textEn: 'Big data can\'t help make sports more exciting.',
          answer: false,
          evidence: '"스포츠를 더 흥미진진하게 만들고 있다(making sports more exciting)"고 했습니다.'
        },
        {
          id: 36,
          passageId: 'reading1-2',
          text: '독일 축구 국가대표팀은 선수들에 대한 많은 데이터를 수집하고 분석했다.',
          textEn: 'Germany\'s national soccer team collected and analyzed a lot of data on players.',
          answer: true,
          evidence: '"선수들에 대한 방대한 양의 데이터를 수집하고 분석했다(collecting and analyzing a huge amount of data on players)"고 했습니다.'
        },
        {
          id: 37,
          passageId: 'reading1-2',
          text: '독일 축구 국가대표팀은 데이터베이스에도 불구하고 경기력을 향상시키지 못했다.',
          textEn: 'Germany\'s national soccer team failed to improve its performance in spite of the database.',
          answer: false,
          evidence: '"데이터베이스의 도움으로 경기력을 향상시킬 수 있었다(was able to improve its performance)"고 했습니다.'
        },
        {
          id: 38,
          passageId: 'reading1-2',
          text: '각 선수가 얼마나 뛰었는지에 대한 정보는 데이터베이스에서 제외되었다.',
          textEn: 'The information about how much each player ran was excluded from the database.',
          answer: false,
          evidence: '"각 선수가 얼마나 뛰었는지에 대한 정보가 포함되어 있었다(the data included information about how much each player ran)"고 했습니다.'
        },
        {
          id: 39,
          passageId: 'reading1-2',
          text: '독일 축구 국가대표팀은 2014년에 결승전에 진출했지만 경기에서 졌다.',
          textEn: 'Germany\'s national soccer team reached the finals but lost the game in 2014.',
          answer: false,
          evidence: '"2014년 월드컵에서 우승할 수 있었다(win the 2014 World Cup)"고 했으므로 경기에서 지지 않았습니다.'
        },

        // Part 3: Crime Prevention
        {
          id: 40,
          passageId: 'reading1-3',
          text: '경찰은 범죄가 발생한 후에 빅데이터를 사용한다.',
          textEn: 'Police use big data after crime happens.',
          answer: false,
          evidence: '"경찰은 범죄가 일어나기 전에 예측할 수 있다(predict crime before it happens)"고 했습니다.'
        },
        {
          id: 41,
          passageId: 'reading1-3',
          text: '경찰은 범죄의 유형, 시간, 장소에 대한 빅데이터를 분석하여 범죄 다발 지역 지도를 만든다.',
          textEn: 'Police make a map of crime hot spots by analyzing big data about the type, time and place of crime.',
          answer: true,
          evidence: '"범죄의 유형, 시간, 장소에 대한 빅데이터 분석을 통해 범죄 다발 지역 지도를 만들 수 있다(Through the analysis of big data about the type, time and place of crime, police can make a map of crime hot spots)"고 했습니다.'
        },
        {
          id: 42,
          passageId: 'reading1-3',
          text: '빅데이터를 분석하여 만든 범죄 다발 지역 지도는 범죄가 발생할 수 있는 시간과 장소를 예측하는 데 도움이 된다.',
          textEn: 'The map of crime hot spots made by analyzing big data helps predict the times and places crimes may happen.',
          answer: true,
          evidence: '"이 지도는 범죄가 언제 어디서 발생할 가능성이 가장 높은지를 나타낸다(This map identifies when and where crime is most likely to happen)"고 했습니다.'
        },
        {
          id: 43,
          passageId: 'reading1-3',
          text: '경찰은 지도가 예측하는 지역과 시간에 집중하지만 추가 범죄를 예방하지는 못한다.',
          textEn: 'Police concentrate on the areas and the times the map forecasts but don\'t prevent further crime.',
          answer: false,
          evidence: '"이 지도가 예측하는 지역과 시간에 집중함으로써 추가 범죄를 예방할 수 있다(prevent further crime by focusing on the areas and the times)"고 했습니다.'
        },
        {
          id: 44,
          passageId: 'reading1-3',
          text: '빅데이터 산업이 앞으로 어떻게 변할지 아무도 모른다.',
          textEn: 'Nobody knows how the big data industry will be changed in the future.',
          answer: true,
          evidence: '"아무도 확실히 알 수 없다(Nobody knows for sure)"고 했습니다.'
        },
        {
          id: 45,
          passageId: 'reading1-3',
          text: '전문가들은 빅데이터가 미래에 우리 삶에서 사용되지 않을 것이라고 생각한다.',
          textEn: 'Experts think big data will not be used in our lives in the future.',
          answer: false,
          evidence: '"전문가들은 빅데이터가 우리 삶에서 점점 더 중요한 역할을 할 것이라는 데 동의한다(experts agree that big data will play a more and more important role)"고 했습니다.'
        }
      ]
    }
  ]
};
