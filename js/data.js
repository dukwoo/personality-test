// 질문 8개 (4지선다)
// 리터럴 표기법으로 만든 사용자정의 객체

const qnaList = [
	{
		q: "1. 당신이 회사를 가기 위해 아침에 일어났는데 지각이라면 제일 먼저하는 행동은?",
		a: [
			{answer: "1. 어떤 연락이 왔는지 핸드폰을 확인한다.", score:1},
			{answer: "2. 화장실로 가서 바로 양치를 한다.", score:3},
			{answer: "3. 이미 지각이니 스트레칭을 하면서 여유롭게 몸을 풀어준다.", score:5},
			{answer: "4. 일어났을 때 지각이니 바로 출발한다.", score:2}
		]
	},
	{
		q: "2. 당신이 회사에 가려고 합니다. 가는 방법은?",
		a: [
			{answer:"1. 혼자 여유롭게 걸어간다." ,score:3},
			{answer:"2. 대중교통을 이용한다." ,score:5},
			{answer:"3. 자신이 직접 차를 운전해서 간다." ,score:9},
			{answer:"4. 친구가 운전하는 차에 동행하여 간다." ,score:7}
		]
	},
	{
		q:"3. 당신이 회사에서 보고서를 작성해 상사에게 제출했는데 \
		상사가 거들떠보지도 않고 보고서를 다시 해오라고 했습니다. \
		이때 당신이 할 행동은?",
		a: [
			{answer:"1. 상사에게 죄송하다고 하며 보고서를 수정한다." ,score:2},
			{answer:"2. 보지도 않고 보고서를 다시 해오라고 하니 고치지 않는다." ,score:4},
			{answer:"3. 보고서를 다시 해오라고 한 상사에게 복수를 다짐한다." ,score:6},
			{answer:"4. 불합리하다고 생각해서 회사를 때려친다." ,score:8}
		]
	},
	{
		q: "4. 당신의 회사동기가 당신보다 더 빨리 승진을 했습니다. 이때 어떤 행동을 할까요?",
		a: [
			{answer:"1. 승진한 회사동기를 손절한다." ,score:9},
			{answer:"2. 승진한 회사동기를 축하해준다." ,score:1},
			{answer:"3. 다른 동기들과 승진한 동기 뒷담화를 한다." ,score:7},
			{answer:"4. 나도 승진을 위해 더 열심히 일한다." ,score:5}
		]
	},
	{
		q:"5. 점심시간에 식당에서 밥먹기 위해 밥 먹을 사람 구하는 당신, 어떻게 할 건가요?",
		a: [
			{answer:"1. 아무도 없으니 그냥 혼자 먹는다." ,score:3},
			{answer:"2. 어떻게 해서든 같이 먹기 위해 연락이 뜸한 동료에게도 말한다." ,score:7},
			{answer:"3. 눈치 보여서 혼자 먹기는 싫고 같이 먹을 사람은 없으니 굶는다." ,score:1},
			{answer:"4. 자신의 돈을 아끼기 위해 부장님에게 밥을 사달라고 한다." ,score:5}
		]
	},
	{
		q:"6. 당신은 배가 아파 화장실에 들어가려고 하는데 어느 곳으로 들어갈 것 인가요?",
		a: [
			{answer:"1. 문쪽에 제일 가까운 칸" ,score:4},
			{answer:"2. 정가운데 칸" ,score:8},
			{answer:"3. 제일 구석진 화장실 도구 옆칸" ,score:2},
			{answer:"4. 사람이 들어가 있는 칸의 옆칸" ,score:6}
		]
	},
	{
		q:"7. 당신이 회사에서 일을 다하고 집을 가려는데 갑자기 소나기가 온다면 어떻게 하실 건가요?",
		a: [
			{answer:"1. 우산 사기 아까우니 비를 맞으면서 집을 간다." ,score:3},
			{answer:"2. 근처 편의점에서 우산을 사서 간다." ,score:5},
			{answer:"3. 비가 멈출때까지 기다렸다가 간다." ,score:1},
			{answer:"4. 동료의 우산을 뺏어서 혼자 쓰고 집을 간다." ,score:7}
		]
	},
	{
		q:"8. 당신이 갑자기 회식이 잡혔을 때 당신은 어떤 행동을 하나요?",
		a: [
			{answer:"1. 가기 싫으니 선약이 있다고 하고 집으로 간다." ,score:4},
			{answer:"2. 술을 좋아하니 회식에 무조건 참여한다." ,score:4},
			{answer:"3. 회식은 점수 딸 기회이니 부장님에게 아부를 떤다." ,score:7},
			{answer:"4. 회식의 주인공은 바로 나! 가서 분위기를 띄운다." ,score:10}
		]
	}
]

const infoList = [ //결과 7개
	{
		from: 15,
		to: 21,
		mLeft: '10%',
		name: '미어캣',
		desc: '주변에 소리가 나면 벌떡일어나 주변을 살피는 미어캣처럼 당신은 눈치가 굉장히 빠르고\
		주변 일에 대해 관심이 많습니다.\
        당신은 사람에 대해 정이 많고 남을 도와주는 것을 좋아하고 스스로 혼자 뿌듯함을 느낍니다.\
        상담, 고민등 다른 사람의 말을 잘 들어주고 또한 리액션이 굉장히 좋습니다.\
        하지만 주기적으로 연락하는 경향이 있기 때문에 사람들을 귀찮게 할 수도 있습니다.\
        또한 오지랖이 넓고 집중력이 좋지 않아 다소 산만합니다. \
        그리고 남이 자신을 어떻게 보는지에 대해 많은 신경을 쏟습니다.'
	},
	{
		from: 22,
		to: 28,
		mLeft: '25%',
		name: '영양',
		desc: '포식자의 미세한 기척만으로도 도망가는 영양처럼 당신은 겁이 많은 스타일입니다.\
        당신은 배려심이 깊어 양보를 잘 하고 다른사람들에게 민폐 끼치는 것을 싫어합니다. \
        또한 인간관계가 틀어지는 것을 용납하지 못합니다.\
        그리고 다른 사람이 자신을 험담하면 마음속 깊게 남아 혼자 끙끙 앓습니다.\
        친구들과 놀때는 무리지어 놀기보단 친하고 마음 맞는 사람과 단 둘이 노는 것을 좋아합니다.\
        또한 과거의 추억과 사진들을 되돌아 보는 것을 좋아합니다.\
        모든 일에 의미를 부여하고 걱정이 많아 주변의 시선을 많이 의식합니다.'
	},
	{
		from: 29,
		to: 35,
		mLeft: '40%',
		name: '기린',
		desc: '나 외의 다른 사람한테 관심도 없고 관심 받는것도 싫어해서 주변 소식도 늦게 접하고 남도 잘 믿지 않는 의심병도 있습니다.\
		그리고 공감 능력도 낮고 웬만한 일에  상처도 받지 않습니다.\
		집에 있는것을 좋아하기 때문에 인싸가 한다는 것 들도 따라하지 않고\
		친한 친구라도 별일 없으면 선톡 하거나 답장 하는거 귀찮아합니다.\
		또 빈말 못하고 애정 표현도 잘 안합니다.'
	},
	{
		from: 36,
		to: 42,
		mLeft: '55%',
		name: '하마',
		desc: '힘숨찐으로 평소에 조용하지만 건들면 큰일납니다.\
		아싸 중의 인싸, 인싸 중의 아싸라고 생각을 하고 있습니다.\
 		난 낯 가린다고 생각하는데 남들은 낯 가리는 줄 모르고 있습니다.\
		싸우는 거를 싫어하지만 그렇다고 싸움에서 지는것은 안됩니다.\
 		관종 같아보이지만 은근히 내향적, 독립적이고 에너지가 적어 효율적인 일만 찾아서 합니다.\
 		위계질서는 싫어하고 내 일에 누군가 간섭하면 짜증납니다.\
 		누가 내 일하는 방식에 대해 간섭하는거를 싫어합니다.\
		자발적 아웃사이더로 혼자 있을 때 제일 좋아합니다.'
	},
	{
		from: 43,
		to: 49,
		mLeft:'70%',
		name: '치타',
		desc: '당신은 사냥감에 집중하는 치타입니다.\
		당신은 목표나 계획세우기를 좋아하며 꼭 지키는 스타일입니다.\
		계획이 만일 어긋나면 짜증나고 호불호가 갈리는 것이 명확합니다.\
		또한 궁금한 것이 생기면 무조건 알아내야하고 꽃히는 일은 꼭 해야합니다.\
		새로운 일을 혼자서 해야할 때에는 하기 직전까지 시뮬레이션을 돌려보고 시작합니다.\
		그리고 어딜 가든 친해질수는 있지만 굳이 친해지지 않으며 \
		요점만 듣고 얘기 하고 싶어해서 쓸데 없는 일로 전화 오는 것을 싫어합니다.\
		무언가를 할 때 집중하고 신중해서 시간이 오래 걸리는 성격입니다.'
	},
	{
		from: 50,
		to: 56,
		mLeft: '85%',
		name: '하이에나',
		desc: '당신은 어디서든 이익을 추구 합니다.\
		당신은 좋아하는 사람, 싫어하는 사람 구분이 명확하며 자기 사람이라고 생각되는 사람에게는 잘해줍니다.\
		싫어하는 사람에게는 눈치도 안보고 무신경하며 과정보다는 결과를 중요시 해\
		그 결과를 이루기 위해 어떤 방법이든 가리지 않고 다 합니다.\
		또한 공감 능력이 부족하지만 자신이 좋아하는 분야에서는 말이 많아지는 성격입니다.'
	},
	{
		from: 57,
		to: 63,
		mLeft: '100%',
		name: '사자',
		desc: '당신은 하고 싶은 뜻대로 살고 싶어 합니다.\
		당신은 하고 싶은 뜻대로 살고 싶어하고 자존감이 높으며 승부욕이 강해 지는것을 용납 못합니다. \
		또한 자기애와 근자감이 높아 합리화를 잘합니다. \
		고집이 강해 하고 싶은 일을 다 해야하며 규칙이나 관습에 묶이는 걸 싫어합니다.\
		다수와 함께 할 때 자기 뜻대로 되도록 이끌어야 직성이 풀리는 성격입니다.'
	}
]
