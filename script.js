const questions = [
  {
    question: "როდის დაიწყო პირველი მსოფლიო ომი?",
    options: ["1899", "1914", "1918", "2008"],
    answer: 1,
  },
  {
    question: "ვინ დაწერა ვეფხისტყაოსანი?",
    options: [
      "შოთა რუსთაველმა",
      "ილია ჭავჭავაძემ",
      "აკაკი წერეთელმა",
      "გალაქტიონ ტაბიძემ",
    ],
    answer: 0,
  },
  {
    question: "ვინ იყო დამოუკიდებელი საქართველოს პირველი პრეზიდენტი?",
    options: [
      "მიხეილ სააკაშვილი",
      "მერაბ კოსტავა",
      "ედუარდ შევარდნაძე",
      "ზვიად გამსახურდია",
    ],
    answer: 3,
  },
  {
    question: "დაასრულეთ ფრაზა: რაც მოგივა დავითაო ყველა შენი...",
    options: ["გულითაო", "ბრალიაო", "თავითაო", "დავითაო"],
    answer: 2,
  },
];

let Question = 0;
let point = 0;

const questionEl = document.getElementById("question");
const pointEl = document.getElementById("point");
const btn0 = document.getElementById("button0");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function loadQuestion() {
  const q = questions[Question];
  questionEl.innerHTML = q.question;
  btn0.innerHTML = q.options[0];
  btn1.innerHTML = q.options[1];
  btn2.innerHTML = q.options[2];
  btn3.innerHTML = q.options[3];
}

function checkAnswer(answer) {
  if (answer === questions[Question].answer) {
    point++;
    pointEl.innerHTML = `Score: ${point}`;
  }
  Question++;
  if (Question >= questions.length) {
    let finalpoint = getElementById("point");
    Question = 0;
    point = 0;
    pointEl.innerHTML = `Score: ${point}`;
  }
  loadQuestion();
}

loadQuestion();
