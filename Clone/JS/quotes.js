const quotes = [
    {
        quote : "신뢰는 만들어 지는데 평생이 걸리지만, 무너지는데는 단 5분도 안걸린다.",
        author : "워런 버핏",
    },
    {
        quote : "나보다 나은 사람들과 어울리는 것이 좋다. 그러면 그 좋은 행동의 방향으로 흘러가게 되리라.",
        author : "워런 버핏",
    },
    {
        quote : "남들이 겁을 먹고 있을 때 욕심을 부려라. 남들이 겁을 먹고 있을 때가 욕심을 부려도 되는 때이다.",
        author : "워런 버핏",
    },
    {
        quote : "첫째, 생각하라. 둘째, 믿어라. 셋째, 꿈꿔라. 그리고 마지막으로 덤벼들어라.",
        author : "월트 디즈니",
    },
    {
        quote : "확실한 일을 실행할 힘은 누구나 가지고 있다. ",
        author : "괴테",
    },
    {
        quote : "오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한걸음 더 진보한다.",
        author : "뉴턴",
    },
    {
        quote : "전문가가 필요할 때는 전문가를 채용하십시오. 당신이 전문가가 되려고 하지 마십시오.",
        author : "로버트 H. 슐러",
    },
    {
        quote : "부자처럼 생각하고 부자처럼 행동하라. 나도 모르는 사이에 부자가 되어 있다.",
        author : "이건희",
    },
    {
        quote : "돈이란 힘이고 자유이며, 모든 악의 근원이기도 한 동시에, 한편으로는 최대의 행복이 되기도 한다.",
        author : "칼 샌드버그",
    },
    {
        quote : "돈은 거짓말을 하지 않는다. 돈 앞에서 진실하라. ",
        author : "이건희",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;