export const lesson8 = {
  id: 8,
  title: '8과: Art and Culture',
  sections: [
    // ──────────────────────────────────────────────
    // SECTION 1: Dialogue Comprehension 1 (Q1–Q12)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue1',
      title: '대화문 1',
      subtitle: '예술과 문화',
      passages: [
        {
          id: 'dialogue1-1',
          title: '대화 1: 고양이 그림 (Minho)',
          text:
            'G: Minho, look at these two paintings of cats here. Aren\'t they great?\n' +
            'B: Yes, they are.\n' +
            'G: They both are good, but I like the one on the left more. How about you?\n' +
            'B: I prefer the one on the right. It seems to me that the cat in it is cuter. I also like the bird in it.',
          textKo:
            'G(소녀): Minho, 여기 이 두 고양이 그림 좀 봐. 멋지지 않아?\n' +
            'B(소년): 응, 맞아.\n' +
            'G(소녀): 둘 다 좋지만, 나는 왼쪽 그림이 더 좋아. 너는 어때?\n' +
            'B(소년): 나는 오른쪽 그림이 더 좋아. 내가 보기에 그 안에 있는 고양이가 더 귀여워. 그 안에 있는 새도 마음에 들어.'
        },
        {
          id: 'dialogue1-2',
          title: '대화 2: 비빔밥 vs 갈비탕',
          text:
            'G: We can have Bibimbap or Galbitang. Which do you prefer?\n' +
            'B: I prefer Bibimbap. It seems to me that it\'s the healthier choice.\n' +
            'G: I think so, too. I also like Bibimbap more.\n' +
            'B: Let\'s order, then. I\'m very hungry.',
          textKo:
            'G(소녀): 우리 비빔밥이나 갈비탕을 먹을 수 있어. 어떤 게 더 좋아?\n' +
            'B(소년): 나는 비빔밥이 더 좋아. 내가 보기에 비빔밥이 더 건강한 선택인 것 같아.\n' +
            'G(소녀): 나도 그렇게 생각해. 나도 비빔밥이 더 좋아.\n' +
            'B(소년): 그러면 주문하자. 나 정말 배고파.'
        },
        {
          id: 'dialogue1-3',
          title: '대화 3: 오래된 접시 (Steve)',
          text:
            'G: Look at these two old plates, Steve. Aren\'t they beautiful?\n' +
            'B: Yes. Which one do you prefer, the green plate or the white plate?\n' +
            'G: Well, it\'s hard to choose, but I like the green one better. How about you?\n' +
            'B: Me, too. It seems to me that the green plate is more unique.',
          textKo:
            'G(소녀): Steve, 이 두 개의 오래된 접시 좀 봐. 아름답지 않아?\n' +
            'B(소년): 응. 너는 어떤 게 더 좋아, 초록색 접시 아니면 하얀색 접시?\n' +
            'G(소녀): 글쎄, 고르기 어렵지만 초록색이 더 좋아. 너는 어때?\n' +
            'B(소년): 나도. 내가 보기에 초록색 접시가 더 독특해.'
        },
        {
          id: 'dialogue1-4',
          title: '대화 4: 여동생 선물 (Junsu)',
          text:
            'G: Junsu, you said you\'re going to buy a gift for your sister. How about the bags here?\n' +
            'B: They look nice.\n' +
            'G: Which one do you prefer, the one with flowers or the one with animals?\n' +
            'B: I prefer the one with flowers. It seems to me that my sister will like it more.',
          textKo:
            'G(소녀): Junsu, 너 여동생한테 선물을 사 줄 거라고 했잖아. 여기 가방들은 어때?\n' +
            'B(소년): 좋아 보인다.\n' +
            'G(소녀): 어떤 게 더 좋아, 꽃무늬 가방 아니면 동물무늬 가방?\n' +
            'B(소년): 나는 꽃무늬 가방이 더 좋아. 내가 보기에 여동생이 그걸 더 좋아할 것 같아.'
        }
      ],
      questions: [
        // Dialogue 1: Cat Paintings (Minho)
        {
          id: 1,
          passageId: 'dialogue1-1',
          text: 'Minho와 소녀는 두 장의 강아지 그림을 보고 있다.',
          textEn: 'Minho and the girl are looking at two paintings of dogs.',
          answer: false,
          evidence: '그들은 "고양이 그림(paintings of cats)"을 보고 있지, 강아지 그림이 아닙니다.'
        },
        {
          id: 2,
          passageId: 'dialogue1-1',
          text: '소녀와 Minho 둘 다 같은 그림을 좋아한다.',
          textEn: 'Both the girl and Minho like the same painting.',
          answer: false,
          evidence: '소녀는 왼쪽(the one on the left) 그림을, Minho는 오른쪽(the one on the right) 그림을 좋아하므로 서로 다릅니다.'
        },
        {
          id: 3,
          passageId: 'dialogue1-1',
          text: 'Minho가 오른쪽 그림을 좋아하는 이유는 그 안의 고양이가 더 귀여워 보이기 때문이다.',
          textEn: 'The reason Minho likes the painting on the right is that the cat in it looks cuter.',
          answer: true,
          evidence: 'Minho가 "그 안의 고양이가 더 귀여워 보인다(the cat in it is cuter)"고 했습니다.'
        },

        // Dialogue 2: Bibimbap vs Galbitang
        {
          id: 4,
          passageId: 'dialogue1-2',
          text: '소녀와 소년은 비빔밥이나 갈비탕을 선택할 수 있다.',
          textEn: 'The girl and the boy can choose Bibimbap or Galbitang.',
          answer: true,
          evidence: '소녀가 "비빔밥이나 갈비탕을 먹을 수 있다(We can have Bibimbap or Galbitang)"고 했습니다.'
        },
        {
          id: 5,
          passageId: 'dialogue1-2',
          text: '소년은 비빔밥이 더 맛있다고 생각하기 때문에 비빔밥을 선호한다.',
          textEn: 'The boy prefers Bibimbap because he thinks it is more delicious.',
          answer: false,
          evidence: '소년은 비빔밥이 "더 건강한 선택(the healthier choice)"이라고 했지, 더 맛있다고 한 것이 아닙니다.'
        },
        {
          id: 6,
          passageId: 'dialogue1-2',
          text: '소녀의 선택은 소년의 선택과 다르다.',
          textEn: 'The girl\'s choice is different from the boy\'s.',
          answer: false,
          evidence: '소녀도 "나도 비빔밥이 더 좋다(I also like Bibimbap more)"고 했으므로 같은 선택입니다.'
        },

        // Dialogue 3: Old Plates (Steve)
        {
          id: 7,
          passageId: 'dialogue1-3',
          text: '소녀와 Steve 둘 다 두 개의 오래된 접시가 아름답지 않다고 생각한다.',
          textEn: 'Both the girl and Steve don\'t think the two old plates are beautiful.',
          answer: false,
          evidence: '소녀가 "아름답지 않아?(Aren\'t they beautiful?)"라고 했고 Steve도 "응(Yes)"이라고 동의했으므로 둘 다 아름답다고 생각합니다.'
        },
        {
          id: 8,
          passageId: 'dialogue1-3',
          text: '소녀뿐만 아니라 Steve도 초록색 접시를 하얀색 접시보다 더 좋아한다.',
          textEn: 'Not only the girl but also Steve likes the green plate better than the white one.',
          answer: true,
          evidence: '소녀가 초록색을 더 좋아한다고 했고 Steve도 "나도(Me, too)"라고 동의했습니다.'
        },
        {
          id: 9,
          passageId: 'dialogue1-3',
          text: 'Steve에 따르면, 초록색 접시가 더 독특하다.',
          textEn: 'According to Steve, the green plate is more unique.',
          answer: true,
          evidence: 'Steve가 "초록색 접시가 더 독특하다(the green plate is more unique)"고 말했습니다.'
        },

        // Dialogue 4: Gift for Sister (Junsu)
        {
          id: 10,
          passageId: 'dialogue1-4',
          text: 'Junsu는 어머니를 위한 선물을 사고 싶어 한다.',
          textEn: 'Junsu wants to buy a gift for his mother.',
          answer: false,
          evidence: 'Junsu는 "여동생(sister)"을 위한 선물을 사려는 것이지, 어머니가 아닙니다.'
        },
        {
          id: 11,
          passageId: 'dialogue1-4',
          text: 'Junsu는 동물무늬 가방을 더 좋아한다.',
          textEn: 'Junsu likes the bag with animals more.',
          answer: false,
          evidence: 'Junsu는 "꽃무늬 가방(the one with flowers)"을 더 좋아한다고 했습니다.'
        },
        {
          id: 12,
          passageId: 'dialogue1-4',
          text: 'Junsu는 여동생이 꽃무늬가 있는 가방을 좋아할 거라고 생각한다.',
          textEn: 'Junsu thinks his sister will like the bag that has flower patterns.',
          answer: true,
          evidence: 'Junsu가 "여동생이 그걸 더 좋아할 것 같다(my sister will like it more)"고 했으며, 그것은 꽃무늬 가방입니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 2: Dialogue Comprehension 2 (Q13–Q22)
    // ──────────────────────────────────────────────
    {
      id: 'dialogue2',
      title: '대화문 2',
      subtitle: '박물관 전시',
      passages: [
        {
          id: 'dialogue2-1',
          title: '박물관 전시 (Somi & Eric)',
          text:
            'G: There are two exhibitions we can go to. Which one do you want to see more, Eric?\n' +
            'B: I prefer the Korean mask exhibition. Is that OK, Somi?\n' +
            'G: Of course. And it seems to me that the mask exhibition will be much more interesting.\n' +
            'B: Do you think so?\n' +
            'G: Yes. Look at this poster. There isn\'t just an exhibition. There\'s also a mask dance show at 4:00 and 6:00.\n' +
            'B: Great! I\'ve never seen a mask dance show before.\n' +
            'G: Well, I\'ve seen a show before. I\'m sure you\'ll like it.\n' +
            'B: So where is the show?\n' +
            'G: It\'s in Dasom Hall, next to the exhibition room.\n' +
            'B: It\'s 4:30 now, so let\'s watch the 6 o\'clock show.\n' +
            'G: OK. Let\'s go see the exhibition first.',
          textKo:
            'G(소녀): 우리가 갈 수 있는 전시가 두 개 있어. 어떤 걸 더 보고 싶어, Eric?\n' +
            'B(소년): 나는 한국 탈 전시가 더 좋아. 괜찮아, Somi?\n' +
            'G(소녀): 물론이지. 그리고 내가 보기에 탈 전시가 훨씬 더 재미있을 것 같아.\n' +
            'B(소년): 그렇게 생각해?\n' +
            'G(소녀): 응. 이 포스터를 봐. 전시만 있는 게 아니야. 4시와 6시에 탈춤 공연도 있어.\n' +
            'B(소년): 좋아! 나는 탈춤 공연을 본 적이 없어.\n' +
            'G(소녀): 나는 전에 공연을 본 적이 있어. 너도 분명 좋아할 거야.\n' +
            'B(소년): 그러면 공연은 어디에서 해?\n' +
            'G(소녀): 전시실 옆에 있는 다솜홀에서 해.\n' +
            'B(소년): 지금 4시 30분이니까, 6시 공연을 보자.\n' +
            'G(소녀): 좋아. 먼저 전시를 보러 가자.'
        }
      ],
      questions: [
        {
          id: 13,
          passageId: 'dialogue2-1',
          text: 'Somi와 Eric은 두 개보다 많은 전시에 갈 수 있다.',
          textEn: 'Somi and Eric can go to more than two exhibitions.',
          answer: false,
          evidence: '"갈 수 있는 전시가 두 개(two exhibitions)" 있다고 했지, 두 개보다 많은 것이 아닙니다.'
        },
        {
          id: 14,
          passageId: 'dialogue2-1',
          text: 'Eric은 한국 탈 전시에 더 관심이 있다.',
          textEn: 'Eric is more interested in the Korean mask exhibition.',
          answer: true,
          evidence: 'Eric이 "한국 탈 전시를 더 좋아한다(I prefer the Korean mask exhibition)"고 했습니다.'
        },
        {
          id: 15,
          passageId: 'dialogue2-1',
          text: 'Somi는 Eric의 의견에 동의하지 않는다.',
          textEn: 'Somi doesn\'t agree with Eric\'s opinion.',
          answer: false,
          evidence: 'Somi가 "물론이지(Of course)"라고 하며 "탈 전시가 훨씬 더 재미있을 것 같다"고 동의했습니다.'
        },
        {
          id: 16,
          passageId: 'dialogue2-1',
          text: '한국 탈 전시에는 탈춤 공연이 포함되어 있다.',
          textEn: 'The Korean mask exhibition includes a mask dance performance.',
          answer: true,
          evidence: '"전시만 있는 게 아니라 탈춤 공연도 있다(There\'s also a mask dance show)"고 했습니다.'
        },
        {
          id: 17,
          passageId: 'dialogue2-1',
          text: '탈춤 공연은 하루에 세 번 공연된다.',
          textEn: 'A mask dance show will be performed three times a day.',
          answer: false,
          evidence: '탈춤 공연은 "4시와 6시(at 4:00 and 6:00)"에 두 번 있다고 했지, 세 번이 아닙니다.'
        },
        {
          id: 18,
          passageId: 'dialogue2-1',
          text: 'Somi뿐만 아니라 Eric도 탈춤 공연을 본 적이 있다.',
          textEn: 'Eric as well as Somi has seen a mask dance show.',
          answer: false,
          evidence: 'Eric은 "탈춤 공연을 본 적이 없다(I\'ve never seen a mask dance show before)"고 했습니다.'
        },
        {
          id: 19,
          passageId: 'dialogue2-1',
          text: 'Somi는 Eric이 탈춤 공연을 좋아할지 확신이 없다.',
          textEn: 'Somi is not sure if Eric will like the mask dance show.',
          answer: false,
          evidence: 'Somi가 "너도 분명 좋아할 거야(I\'m sure you\'ll like it)"라고 확신하며 말했습니다.'
        },
        {
          id: 20,
          passageId: 'dialogue2-1',
          text: '탈춤 공연은 전시실 안에 있는 다솜홀에서 열린다.',
          textEn: 'The mask dance show will be held in Dasom Hall in the exhibition room.',
          answer: false,
          evidence: '다솜홀은 "전시실 옆에(next to the exhibition room)" 있다고 했지, 전시실 안이 아닙니다.'
        },
        {
          id: 21,
          passageId: 'dialogue2-1',
          text: 'Eric과 Somi는 6시에 탈춤 공연을 볼 것이다.',
          textEn: 'Eric and Somi will see the mask dance show at 6 o\'clock.',
          answer: true,
          evidence: '지금 4시 30분이므로 "6시 공연을 보자(let\'s watch the 6 o\'clock show)"고 했습니다.'
        },
        {
          id: 22,
          passageId: 'dialogue2-1',
          text: 'Somi와 Eric은 탈춤 공연을 본 후에 전시를 보러 갈 것이다.',
          textEn: 'After Somi and Eric see the mask dance show, they will go to the exhibition.',
          answer: false,
          evidence: 'Somi가 "먼저 전시를 보러 가자(Let\'s go see the exhibition first)"고 했으므로 전시를 먼저 보고 공연을 봅니다.'
        }
      ]
    },

    // ──────────────────────────────────────────────
    // SECTION 3: Reading Comprehension (Q23–Q48)
    // ──────────────────────────────────────────────
    {
      id: 'reading1',
      title: '독해',
      subtitle: '문자도',
      passages: [
        {
          id: 'reading1-1',
          title: '문자도란 무엇인가?',
          text:
            'Look at the painting on the right. Do you see the Chinese character, hyo (孝)? ' +
            'Do you also see a carp, a geomungo, and a fan? ' +
            'This kind of painting is called Munjado, and it is a type of folk painting that was popular in the late Joseon dynasty. ' +
            'In Munjado, there is usually a Chinese character with some animals or objects.\n' +
            'One of eight Chinese characters appears in Munjado. ' +
            'They are hyo (孝), je (悌), chung (忠), sin (信), ye (禮), ui (義), yeom (廉), and chi (恥), ' +
            'and they represent the values that were important to people of the Joseon dynasty.',
          textKo:
            '오른쪽 그림을 보세요. 한자 효(孝)가 보이나요? ' +
            '잉어, 거문고, 부채도 보이나요? ' +
            '이런 종류의 그림을 문자도라고 하며, 조선 후기에 유행한 민화의 한 종류입니다. ' +
            '문자도에는 보통 동물이나 사물과 함께 한자가 있습니다.\n' +
            '문자도에는 여덟 개의 한자 중 하나가 나타납니다. ' +
            '효(孝), 제(悌), 충(忠), 신(信), 예(禮), 의(義), 염(廉), 치(恥)이며, ' +
            '이 글자들은 조선 시대 사람들에게 중요한 가치를 나타냅니다.'
        },
        {
          id: 'reading1-2',
          title: '상징 – 잉어 이야기',
          text:
            'The animals or objects in Munjado are not just decorations. They often are symbolic. ' +
            'For example, carp in the paintings of hyo symbolize respect for parents because of an old story. ' +
            'The story goes as follows.\n' +
            'Once upon a time, a man lived with his old mother. One winter, the man\'s mother became ill and couldn\'t eat anything. ' +
            'On one very cold day, the mother said to the man, "It would be wonderful if I could eat fresh fish."\n' +
            'The man went out to the river, but it was completely frozen. ' +
            'It was impossible for him to catch any fish. ' +
            'The man was so disappointed that he cried out to the sky, "What should I do? Please help me." ' +
            'Then the ice melted, and three carp suddenly came out of the water. ' +
            'The man went back home and cooked the fish for his mother. Then his mother got well.',
          textKo:
            '문자도에 있는 동물이나 사물은 단순한 장식이 아닙니다. 그것들은 종종 상징적입니다. ' +
            '예를 들어, 효(孝) 그림에 있는 잉어는 오래된 이야기 때문에 부모에 대한 공경을 상징합니다. ' +
            '그 이야기는 다음과 같습니다.\n' +
            '옛날에 한 남자가 늙은 어머니와 함께 살았습니다. 어느 겨울, 남자의 어머니가 병이 나서 아무것도 먹을 수 없었습니다. ' +
            '아주 추운 어느 날, 어머니가 남자에게 말했습니다. "신선한 생선을 먹을 수 있다면 정말 좋겠구나."\n' +
            '남자는 강으로 나갔지만, 강은 완전히 얼어 있었습니다. ' +
            '물고기를 잡는 것은 불가능했습니다. ' +
            '남자는 너무 실망해서 하늘을 향해 외쳤습니다. "어떻게 해야 하나요? 제발 도와주세요." ' +
            '그러자 얼음이 녹고, 세 마리의 잉어가 갑자기 물 위로 나왔습니다. ' +
            '남자는 집으로 돌아가 어머니를 위해 물고기를 요리했습니다. 그러자 어머니는 건강을 회복했습니다.'
        },
        {
          id: 'reading1-3',
          title: '더 많은 상징과 의의',
          text:
            'There are other examples of symbolic objects in Munjado. ' +
            'They are bamboo in the paintings of the character chung (忠) and lotus flowers in the paintings of ui (義). ' +
            'Bamboo does not bend. It stays green in all kinds of weather. ' +
            'For these reasons, bamboo came to symbolize loyalty to the king. ' +
            'In the case of lotus flowers, they grow in muddy ponds but still bloom beautifully. ' +
            'They thus became a symbol of a person\'s will to fight for justice despite difficulties.\n' +
            'Munjado was much more than a painting to people of the Joseon dynasty. ' +
            'It reminded them of important values that greatly influenced their behaviors and attitudes. ' +
            'In particular, for children, Munjado was a study tool. ' +
            'Through it, children in the Joseon dynasty could learn the importance of harmony in family and society.',
          textKo:
            '문자도에는 상징적 사물의 다른 예도 있습니다. ' +
            '충(忠) 글자 그림에 있는 대나무와 의(義) 그림에 있는 연꽃입니다. ' +
            '대나무는 구부러지지 않습니다. 어떤 날씨에서도 푸름을 유지합니다. ' +
            '이러한 이유로 대나무는 왕에 대한 충성을 상징하게 되었습니다. ' +
            '연꽃의 경우, 진흙 연못에서 자라지만 여전히 아름답게 핍니다. ' +
            '그래서 연꽃은 어려움에도 불구하고 정의를 위해 싸우려는 사람의 의지의 상징이 되었습니다.\n' +
            '문자도는 조선 시대 사람들에게 단순한 그림 이상이었습니다. ' +
            '문자도는 그들의 행동과 태도에 큰 영향을 미친 중요한 가치를 상기시켜 주었습니다. ' +
            '특히 어린이들에게 문자도는 학습 도구였습니다. ' +
            '문자도를 통해 조선 시대의 어린이들은 가족과 사회에서의 조화의 중요성을 배울 수 있었습니다.'
        }
      ],
      questions: [
        // Part 1: What is Munjado?
        {
          id: 23,
          passageId: 'reading1-1',
          text: '오른쪽 그림에서 한자 효(孝)와 물고기, 사물들을 볼 수 있다.',
          textEn: 'We can see the Chinese character, hyo and a fish and objects in the picture on the right.',
          answer: true,
          evidence: '그림에 "한자 효(孝), 잉어(carp), 거문고(geomungo), 부채(fan)"가 보인다고 했습니다.'
        },
        {
          id: 24,
          passageId: 'reading1-1',
          text: '문자도는 현대 회화의 한 종류이다.',
          textEn: 'Munjado is a type of modern painting.',
          answer: false,
          evidence: '문자도는 "민화(folk painting)"의 한 종류이지, 현대 회화가 아닙니다.'
        },
        {
          id: 25,
          passageId: 'reading1-1',
          text: '문자도는 조선 초기에 널리 즐겨졌다.',
          textEn: 'Munjado was widely enjoyed in the early Joseon dynasty.',
          answer: false,
          evidence: '문자도는 "조선 후기(the late Joseon dynasty)"에 유행했지, 초기가 아닙니다.'
        },
        {
          id: 26,
          passageId: 'reading1-1',
          text: '문자도에는 동물이나 사물과 함께 6개의 한자가 있다.',
          textEn: 'There are half a dozen Chinese characters with some animals or objects in Munjado.',
          answer: false,
          evidence: '문자도에 나타나는 한자는 "여덟 개(eight)"이지, 6개(half a dozen)가 아닙니다.'
        },
        {
          id: 27,
          passageId: 'reading1-1',
          text: '각 문자도에는 여덟 개의 한자가 모두 나타난다.',
          textEn: 'In each Munjado, we can see eight Chinese characters.',
          answer: false,
          evidence: '"여덟 개의 한자 중 하나(One of eight Chinese characters)"가 나타난다고 했지, 모두 나타나는 것이 아닙니다.'
        },
        {
          id: 28,
          passageId: 'reading1-1',
          text: '문자도에 있는 한자는 조선 시대의 중요한 가치 중 하나를 의미한다.',
          textEn: 'A Chinese character in Munjado means one of the important values in the Joseon dynasty.',
          answer: true,
          evidence: '한자들은 "조선 시대 사람들에게 중요한 가치를 나타낸다(represent the values that were important)"고 했습니다.'
        },
        {
          id: 29,
          passageId: 'reading1-1',
          text: '문자도에 나타나는 한자는 조선 시대 사람들이 중요하게 여긴 가치를 나타낸다.',
          textEn: 'The Chinese characters that appear in Munjado represent the values that people of the Joseon dynasty considered important.',
          answer: true,
          evidence: '한자들이 "조선 시대 사람들에게 중요한 가치를 나타낸다(represent the values that were important to people of the Joseon dynasty)"고 했습니다.'
        },

        // Part 2: Symbolism – The Carp Story
        {
          id: 30,
          passageId: 'reading1-2',
          text: '문자도에서 일부 동물이나 사물은 장식으로만 사용되었다.',
          textEn: 'Some animals or objects were used only for decorations in Munjado.',
          answer: false,
          evidence: '"단순한 장식이 아니다(not just decorations)"라고 했으므로, 장식으로만 사용된 것이 아닙니다.'
        },
        {
          id: 31,
          passageId: 'reading1-2',
          text: '문자도에 있는 일부 동물이나 사물은 상징으로 사용되었다.',
          textEn: 'Some animals or objects in Munjado were used as symbols.',
          answer: true,
          evidence: '"그것들은 종종 상징적이다(They often are symbolic)"라고 했습니다.'
        },
        {
          id: 32,
          passageId: 'reading1-2',
          text: '문자도에서 효(孝) 그림에 그려진 잉어는 부모에 대한 공경을 나타낸다.',
          textEn: 'In Munjado, carp painted in the paintings of hyo represent respect for parents.',
          answer: true,
          evidence: '"효 그림에 있는 잉어는 부모에 대한 공경을 상징한다(carp in the paintings of hyo symbolize respect for parents)"고 했습니다.'
        },
        {
          id: 33,
          passageId: 'reading1-2',
          text: '잉어는 그 특성 때문에 상징적 의미를 갖게 되었다.',
          textEn: 'Carp got its symbolic meaning because of its features.',
          answer: false,
          evidence: '잉어의 상징적 의미는 잉어의 특성이 아닌 "오래된 이야기(an old story)" 때문입니다.'
        },
        {
          id: 34,
          passageId: 'reading1-2',
          text: '옛날이야기에서 남자는 아픈 어머니가 생선을 먹고 싶어 해서 바다로 물고기를 잡으러 갔다.',
          textEn: 'The man in the old story went to the sea to catch fish because his sick mother wanted to eat fish.',
          answer: false,
          evidence: '남자는 "강(river)"으로 갔지, "바다(sea)"로 간 것이 아닙니다.'
        },
        {
          id: 35,
          passageId: 'reading1-2',
          text: '옛날이야기에서 남자는 강이 완전히 얼어 있어서 물고기를 잡을 수 없었다.',
          textEn: 'In the old story, the man wasn\'t able to catch fish because the river was completely frozen.',
          answer: true,
          evidence: '"강이 완전히 얼어 있었다(it was completely frozen)"고 해서 물고기를 잡을 수 없었습니다.'
        },
        {
          id: 36,
          passageId: 'reading1-2',
          text: '이야기 속 남자가 얼어붙은 강에서 물고기를 잡는 것은 불가능했다.',
          textEn: 'It was not possible for the man in the story to catch any fish in a frozen river.',
          answer: true,
          evidence: '"물고기를 잡는 것은 불가능했다(It was impossible for him to catch any fish)"고 했습니다.'
        },
        {
          id: 37,
          passageId: 'reading1-2',
          text: '이야기 속 남자는 물고기를 잡지 못한 사실에 실망했다.',
          textEn: 'The fact that the man in the story could not catch any fish disappointed him.',
          answer: true,
          evidence: '"남자는 너무 실망해서(The man was so disappointed)" 하늘을 향해 외쳤다고 했습니다.'
        },
        {
          id: 38,
          passageId: 'reading1-2',
          text: '이야기 속 남자가 하늘에 도움을 구하며 외치자, 얼음이 녹고 세 마리의 잉어가 갑자기 물 위로 나왔다.',
          textEn: 'When the man in the story cried out for help to the sky, ice melted and three carp came out of the water all of a sudden.',
          answer: true,
          evidence: '"얼음이 녹고 세 마리 잉어가 갑자기 물에서 나왔다(the ice melted, and three carp suddenly came out)"고 했습니다.'
        },
        {
          id: 39,
          passageId: 'reading1-2',
          text: '남자의 어머니는 아들이 요리해 준 잉어를 먹은 후 병에서 회복했다.',
          textEn: 'The man\'s mother recovered from her illness after eating carp her son had cooked for her.',
          answer: true,
          evidence: '"남자가 어머니를 위해 물고기를 요리했고, 어머니는 건강을 회복했다(his mother got well)"고 했습니다.'
        },
        {
          id: 40,
          passageId: 'reading1-2',
          text: '이 옛날이야기는 잉어가 왜 부모에 대한 공경을 상징하는지를 보여 준다.',
          textEn: 'The old story shows why carp symbolize respect for parents.',
          answer: true,
          evidence: '"잉어는 오래된 이야기 때문에 부모에 대한 공경을 상징한다(symbolize respect for parents because of an old story)"고 했습니다.'
        },

        // Part 3: More Symbols & Significance
        {
          id: 41,
          passageId: 'reading1-3',
          text: '문자도에는 상징적 사물의 예로 대나무와 연꽃이 있다.',
          textEn: 'There are bamboo and lotus flowers as examples of symbolic objects in Munjado.',
          answer: true,
          evidence: '"대나무(bamboo)와 연꽃(lotus flowers)"이 상징적 사물의 다른 예라고 했습니다.'
        },
        {
          id: 42,
          passageId: 'reading1-3',
          text: '문자도에서 충(忠) 글자와 함께 대나무를 볼 수 있다.',
          textEn: 'We can see the character chung (忠) with bamboo in Munjado.',
          answer: true,
          evidence: '"충(忠) 글자 그림에 대나무가 있다(bamboo in the paintings of the character chung)"고 했습니다.'
        },
        {
          id: 43,
          passageId: 'reading1-3',
          text: '의(義) 글자 그림에 있는 상징적 사물은 연꽃이다.',
          textEn: 'The symbolic object in the paintings of the character ui (義) is lotus flowers.',
          answer: true,
          evidence: '"의(義) 그림에 연꽃(lotus flowers in the paintings of ui)"이 있다고 했습니다.'
        },
        {
          id: 44,
          passageId: 'reading1-3',
          text: '대나무는 쉽게 구부러지고 일 년 내내 푸르러서 왕에 대한 충성을 나타내는 데 사용되었다.',
          textEn: 'Bamboo is easy to bend and stays green all year, so it was used to represent loyalty to the king.',
          answer: false,
          evidence: '대나무는 "구부러지지 않는다(does not bend)"고 했지, 쉽게 구부러진다고 하지 않았습니다.'
        },
        {
          id: 45,
          passageId: 'reading1-3',
          text: '연꽃은 진흙 연못에서 절대 자랄 수 없기 때문에 정의를 위해 싸우려는 의지를 의미한다.',
          textEn: 'Lotus flowers mean a person\'s will to fight for justice because they can never grow in muddy ponds.',
          answer: false,
          evidence: '연꽃은 "진흙 연못에서 자라지만(grow in muddy ponds)" 아름답게 핀다고 했지, 자랄 수 없다고 하지 않았습니다.'
        },
        {
          id: 46,
          passageId: 'reading1-3',
          text: '문자도는 조선 시대 사람들에게 그저 하나의 그림에 불과했다.',
          textEn: 'Munjado was just a painting to people of the Joseon dynasty.',
          answer: false,
          evidence: '"문자도는 단순한 그림 이상이었다(much more than a painting)"고 했습니다.'
        },
        {
          id: 47,
          passageId: 'reading1-3',
          text: '조선 시대 사람들은 문자도를 볼 때마다 중요한 가치를 떠올렸다.',
          textEn: 'People of the Joseon dynasty were reminded of important values whenever they saw Munjado.',
          answer: true,
          evidence: '"중요한 가치를 상기시켜 주었다(It reminded them of important values)"고 했습니다.'
        },
        {
          id: 48,
          passageId: 'reading1-3',
          text: '문자도는 조선 시대 어린이들에게 아무런 영향을 미치지 않았다.',
          textEn: 'Munjado didn\'t have any influence on children of the Joseon dynasty.',
          answer: false,
          evidence: '"어린이들에게 문자도는 학습 도구(a study tool)"였으며, 가족과 사회에서의 조화의 중요성을 배울 수 있었다고 했습니다.'
        }
      ]
    }
  ]
};
