const quizData = [
  {
    id: 1,
    tag: "レッスン 1",
    prompt: "初出社。最初の一手は？",
    focus: "あいさつ",
    choices: [
      "あとでまとめてあいさつする",
      "近くの人へ先にあいさつする",
      "席に着いてから様子を見る",
      "スマホで予定を確認する"
    ],
    answer: 1,
    correctNote: "先に声をかけるだけで、空気がぐっとやわらぐ。",
    incorrectNote: "あと回しにすると、最初の印象づくりが遅れてしまう。",
    explanation: "第一印象は、先に動いた人が強い。"
  },
  {
    id: 2,
    tag: "レッスン 2",
    prompt: "電話の第一声。いちばん自然なのは？",
    focus: "第一声",
    choices: [
      "もしもし、どちら様ですか",
      "株式会社〇〇、△△でございます",
      "はい、△△です",
      "少々お待ちください"
    ],
    answer: 1,
    correctNote: "社名と名前がそろうと、相手はすぐ安心できる。",
    incorrectNote: "会社名がないと、相手が確認しづらくなりやすい。",
    explanation: "社名と名前まで入ると、安心感が出る。"
  },
  {
    id: 3,
    tag: "レッスン 3",
    prompt: "会議に早く着いた。どうする？",
    focus: "落ち着き",
    choices: [
      "資料を机いっぱいに広げる",
      "入口で立って待つ",
      "静かに着席して準備する",
      "全員へ話しかける"
    ],
    answer: 2,
    correctNote: "落ち着いて準備できる人は、それだけで信頼感がある。",
    incorrectNote: "早く着いた時間は、静かな準備に使うのがいちばんきれい。",
    explanation: "早め行動は、静かな準備で光る。"
  },
  {
    id: 4,
    tag: "レッスン 4",
    prompt: "名刺を先に出された。どう受ける？",
    focus: "敬意",
    choices: [
      "片手で受ける",
      "両手で受けて確認する",
      "順番を直して出し直す",
      "すぐしまう"
    ],
    answer: 1,
    correctNote: "受け取り方ひとつで、ていねいさがきちんと伝わる。",
    incorrectNote: "片手や即しまう動きは、雑に見えやすいポイント。",
    explanation: "名刺の扱いは、そのまま敬意になる。"
  },
  {
    id: 5,
    tag: "レッスン 5",
    prompt: "遅刻連絡メール。件名は？",
    focus: "件名",
    choices: [
      "すみません",
      "本日の件",
      "【遅刻のご連絡】本日9時出社予定の△△",
      "至急確認"
    ],
    answer: 2,
    correctNote: "件名だけで状況が伝わると、相手がすぐ動ける。",
    incorrectNote: "急ぎの連絡ほど、件名で要点が見える形が大切。",
    explanation: "急ぎほど、件名だけで伝わる形が強い。"
  },
  {
    id: 6,
    tag: "レッスン 6",
    prompt: "指示を受けた直後。ベストは？",
    focus: "復唱",
    choices: [
      "返事だけして動く",
      "無言でメモする",
      "復唱して期限を確認する",
      "まず自分流で進める"
    ],
    answer: 2,
    correctNote: "復唱と期限確認で、すれ違いをかなり減らせる。",
    incorrectNote: "返事だけだと、解釈のズレがそのまま残りやすい。",
    explanation: "ズレを消すなら、復唱がいちばん速い。"
  },
  {
    id: 7,
    tag: "レッスン 7",
    prompt: "来客へお茶。順番は？",
    focus: "来客優先",
    choices: [
      "入口側から出す",
      "役職が高い人から出す",
      "若い人から出す",
      "自社上司から出す"
    ],
    answer: 1,
    correctNote: "来客を先に立てる動きが、基本マナーの芯になる。",
    incorrectNote: "社内の順番より、まずはお客様への配慮が優先。",
    explanation: "お客様を先に立てる。ここが基本。"
  },
  {
    id: 8,
    tag: "レッスン 8",
    prompt: "ミス発生。最初にするのは？",
    focus: "早め報告",
    choices: [
      "自分で直してから報告",
      "整理して早めに報告",
      "同僚にだけ相談",
      "気づかれないよう修正"
    ],
    answer: 1,
    correctNote: "早めの共有は、被害も不安も小さくしやすい。",
    incorrectNote: "抱え込むほど、修正も報告も重くなりやすい。",
    explanation: "早い共有が、いちばん被害を小さくする。"
  }
];

const starThresholds = [
  { minScore: 0, stars: 1, title: "はじめの一歩", copy: "ここから強くなる。" },
  { minScore: 2, stars: 2, title: "いい感じ", copy: "リズムが出てきた。" },
  { minScore: 4, stars: 3, title: "かなり上手", copy: "判断が速い。" },
  { minScore: 6, stars: 4, title: "頼れるレベル", copy: "安定して強い。" },
  { minScore: 8, stars: 5, title: "マナー名人", copy: "とてもいい。" }
];

const questionMentorMoods = [
  {
    key: "thinking",
    label: "いっしょに考えよう",
    emoji: "🤔",
    line: "うーん、まずは自然でていねいな動きを見てみよう。"
  },
  {
    key: "worry",
    label: "ここが分かれ道",
    emoji: "😣",
    line: "迷ったら、相手が安心できるほうを選ぶと強いよ。"
  },
  {
    key: "spark",
    label: "ヒント",
    emoji: "✨",
    line: "基本に忠実かどうかで見ると、かなり選びやすい。"
  },
  {
    key: "cheer",
    label: "いい流れ",
    emoji: "🫶",
    line: "だいじょうぶ。いちばんきれいな対応をいっしょに選ぼう。"
  }
];

const mentorExpressions = {
  neutral: "./assets/mentor-idol-cutout-cropped.png",
  thinking: "./assets/mentor-thinking.png",
  sad: "./assets/mentor-sad.png",
  happy: "./assets/mentor-happy.png"
};

const sugorokuPositions = [
  { x: 4, y: 56 },
  { x: 16, y: 20 },
  { x: 30, y: 66 },
  { x: 42, y: 18 },
  { x: 56, y: 58 },
  { x: 68, y: 18 },
  { x: 80, y: 66 },
  { x: 90, y: 24 },
  { x: 96, y: 56 }
];

const maxLives = 5;

const introScreen = document.getElementById("introScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startPanel = document.getElementById("startPanel");
const nextButton = document.getElementById("nextButton");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const livesText = document.getElementById("livesText");
const starCountLabel = document.getElementById("starCountLabel");
const questionCountLabel = document.getElementById("questionCountLabel");
const questionTag = document.getElementById("questionTag");
const questionHelper = document.getElementById("questionHelper");
const questionPrompt = document.getElementById("questionPrompt");
const scenarioLabel = document.getElementById("scenarioLabel");
const mentorSpeech = document.getElementById("mentorSpeech");
const mentorMoodEmoji = document.getElementById("mentorMoodEmoji");
const questionMentor = document.getElementById("questionMentor");
const questionMentorImage = document.getElementById("questionMentorImage");
const questionFocus = document.getElementById("questionFocus");
const choicesContainer = document.getElementById("choicesContainer");
const explanationCard = document.getElementById("explanationCard");
const explanationTag = document.getElementById("explanationTag");
const explanationHelper = document.getElementById("explanationHelper");
const explanationMentor = document.getElementById("explanationMentor");
const explanationMentorImage = document.getElementById("explanationMentorImage");
const explanationMentorLine = document.getElementById("explanationMentorLine");
const sugorokuCard = document.getElementById("sugorokuCard");
const sugorokuSteps = document.getElementById("sugorokuSteps");
const sugorokuTrack = document.getElementById("sugorokuTrack");
const sugorokuAvatar = document.getElementById("sugorokuAvatar");
const sugorokuAvatarImage = document.getElementById("sugorokuAvatarImage");
const sugorokuProgressLabel = document.getElementById("sugorokuProgressLabel");
const sugorokuCaption = document.getElementById("sugorokuCaption");
const feedbackPill = document.getElementById("feedbackPill");
const feedbackAnswer = document.getElementById("feedbackAnswer");
const feedbackMini = document.getElementById("feedbackMini");
const feedbackExplanation = document.getElementById("feedbackExplanation");
const resultTitle = document.getElementById("resultTitle");
const resultStars = document.getElementById("resultStars");
const resultScore = document.getElementById("resultScore");
const resultCopy = document.getElementById("resultCopy");
const resultMeterFill = document.getElementById("resultMeterFill");
const restartButton = document.getElementById("restartButton");
const restartTopButton = document.getElementById("restartTopButton");
const mentorStage = document.getElementById("mentorStage");
const quizCard = document.getElementById("quizCard");

let currentIndex = 0;
let score = 0;
let mistakes = 0;
let locked = false;
let mentorResetTimer;
let activeScreen = introScreen;
let screenTransitionToken = 0;
let questionMotionToken = 0;
let isTransitioning = false;
let reviewMode = false;
let sugorokuAdvanceTimer;
let sugorokuGoalTimer;

questionCountLabel.textContent = `${quizData.length}`;

function renderStars(stars) {
  return "★".repeat(stars) + "☆".repeat(5 - stars);
}

function renderLives() {
  const remaining = Math.max(maxLives - mistakes, 0);
  livesText.textContent = "♥".repeat(remaining) + "♡".repeat(maxLives - remaining);
}

function getLevel(scoreValue) {
  return [...starThresholds].reverse().find((level) => scoreValue >= level.minScore);
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function buildSugorokuTrack() {
  sugorokuSteps.innerHTML = "";
  for (let index = 0; index <= quizData.length; index += 1) {
    const step = document.createElement("span");
    step.className = "sugoroku-step";
    const point = sugorokuPositions[index] || sugorokuPositions[sugorokuPositions.length - 1];
    step.style.setProperty("--step-x", `${point.x}%`);
    step.style.setProperty("--step-y", `${point.y}%`);

    if (index === 0) {
      step.classList.add("start-step");
      step.textContent = "S";
    } else if (index === quizData.length) {
      step.classList.add("goal-step");
      step.textContent = "G";
    } else if (index % 3 === 0) {
      step.classList.add(index === 3 ? "flag-step" : "reward-step");
      step.textContent = index === 3 ? "⚑" : "★";
    }

    sugorokuSteps.appendChild(step);
  }
}

function updateSugorokuStepState(position) {
  const steps = [...sugorokuSteps.children];
  steps.forEach((step, index) => {
    step.classList.toggle("is-cleared", index < position);
    step.classList.toggle("is-current", index === position);
  });
}

function updateSugorokuCopy(position, isCorrect) {
  sugorokuProgressLabel.textContent = `${position} / ${quizData.length}`;
  if (isCorrect) {
    sugorokuCaption.textContent = position >= quizData.length
      ? "ゴール！ぜんぶできた。"
      : position === quizData.length - 1
        ? "あと1マス。ゴールが見えてきた。"
        : "せいかい。1マスすすんだ。";
    return;
  }

  if (position === 0) {
    sugorokuCaption.textContent = "スタート地点だよ。";
    return;
  }

  if (position === quizData.length - 1) {
    sugorokuCaption.textContent = "あと1マス。次で決めよう。";
    return;
  }

  sugorokuCaption.textContent = "ここでキープ。次で進もう。";
}

function setSugorokuPosition(position) {
  const point = sugorokuPositions[position] || sugorokuPositions[sugorokuPositions.length - 1];
  sugorokuTrack.style.setProperty("--avatar-x", `${point.x}%`);
  sugorokuTrack.style.setProperty("--avatar-y", `${point.y}%`);
  sugorokuCard.classList.toggle("near-goal", position === quizData.length - 1);
  sugorokuCard.classList.toggle("is-goal", position >= quizData.length);
  updateSugorokuStepState(position);
}

function prepareSugorokuBoard(position) {
  window.clearTimeout(sugorokuAdvanceTimer);
  window.clearTimeout(sugorokuGoalTimer);
  sugorokuAvatar.classList.remove("is-advancing");
  sugorokuAvatar.classList.remove("is-goal-jump");
  setSugorokuPosition(position);
}

function animateSugorokuAdvance(fromPosition, toPosition, isCorrect) {
  prepareSugorokuBoard(fromPosition);
  sugorokuAvatarImage.src = isCorrect ? mentorExpressions.happy : mentorExpressions.sad;
  updateSugorokuCopy(toPosition, isCorrect);

  if (!isCorrect || toPosition <= fromPosition) {
    setSugorokuPosition(toPosition);
    return;
  }

  requestAnimationFrame(() => {
    sugorokuAdvanceTimer = window.setTimeout(() => {
      sugorokuAvatar.classList.add("is-advancing");
      setSugorokuPosition(toPosition);
      if (toPosition >= quizData.length) {
        sugorokuAvatar.classList.add("is-goal-jump");
        sugorokuGoalTimer = window.setTimeout(() => {
          sugorokuAvatar.classList.remove("is-goal-jump");
        }, 1100);
      }
    }, 180);
  });
}

async function activateScreen(screen, direction = "forward") {
  if (activeScreen === screen) {
    [introScreen, quizScreen, resultScreen].forEach((item) => {
      item.classList.toggle("is-active", item === screen);
    });
    return;
  }

  const currentScreen = activeScreen;
  const enterClass = direction === "backward" ? "is-entering-from-left" : "is-entering-from-right";
  const leaveClass = direction === "backward" ? "is-leaving-to-right" : "is-leaving-to-left";
  const token = ++screenTransitionToken;

  screen.classList.add(enterClass);
  screen.classList.add("is-active");

  requestAnimationFrame(() => {
    if (token !== screenTransitionToken) {
      return;
    }

    currentScreen.classList.add(leaveClass);
    screen.classList.remove(enterClass);
  });

  await wait(260);
  if (token !== screenTransitionToken) {
    return;
  }

  currentScreen.classList.remove("is-active", "is-leaving-to-left", "is-leaving-to-right");
  screen.classList.remove("is-entering-from-left", "is-entering-from-right");
  activeScreen = screen;
}

function setMentorState(state) {
  window.clearTimeout(mentorResetTimer);
  mentorStage.dataset.state = state;
}

function updateStatus() {
  const currentNumber = Math.min(currentIndex + 1, quizData.length);
  progressText.textContent = `${currentNumber}/${quizData.length}`;
  progressFill.style.width = `${(currentNumber / quizData.length) * 100}%`;
  starCountLabel.textContent = renderStars(getLevel(score).stars);
  renderLives();
}

function renderQuestionMentor(index) {
  const mood = questionMentorMoods[index % questionMentorMoods.length];
  questionMentor.dataset.mood = mood.key;
  questionMentorImage.src = mentorExpressions.thinking;
  scenarioLabel.textContent = mood.label;
  mentorMoodEmoji.textContent = mood.emoji;
  mentorSpeech.textContent = mood.line;
}

function renderExplanationMentor(isCorrect) {
  explanationMentor.dataset.state = isCorrect ? "happy" : "sad";
  explanationMentorImage.src = isCorrect ? mentorExpressions.happy : mentorExpressions.sad;
  explanationMentorLine.textContent = isCorrect
    ? "やったね。きれいに選べてる。"
    : "おしい。次はもっとよくなるよ。";
}

function renderQuestion() {
  locked = false;
  reviewMode = false;
  explanationCard.hidden = true;
  quizCard.hidden = false;
  explanationCard.classList.remove(
    "correct-panel",
    "incorrect-panel",
    "play-success-fx",
    "play-fail-fx",
    "is-sliding-in-right",
    "is-sliding-in-left",
    "is-sliding-out-left",
    "is-sliding-out-right"
  );
  quizCard.classList.remove("is-sliding-in-right", "is-sliding-in-left", "is-sliding-out-left", "is-sliding-out-right");
  setMentorState("idle");
  prepareSugorokuBoard(score);

  const item = quizData[currentIndex];
  questionTag.textContent = item.tag;
  questionHelper.textContent = "1つえらぶ";
  questionPrompt.textContent = item.prompt;
  renderQuestionMentor(currentIndex);
  questionFocus.textContent = `ヒント: ${item.focus}`;
  choicesContainer.innerHTML = "";

  item.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `
      <span class="choice-letter">${String.fromCharCode(65 + index)}</span>
      <span class="choice-copy">${choice}</span>
    `;
    button.addEventListener("click", () => handleAnswer(index));
    choicesContainer.appendChild(button);
  });

  updateStatus();
}

async function animateQuestionTransition(direction = "forward") {
  const token = ++questionMotionToken;
  const outClass = direction === "backward" ? "is-sliding-out-right" : "is-sliding-out-left";
  const inClass = direction === "backward" ? "is-sliding-in-left" : "is-sliding-in-right";

  explanationCard.classList.add(outClass);
  await wait(180);
  if (token !== questionMotionToken) {
    return;
  }

  explanationCard.hidden = true;
  explanationCard.classList.remove(outClass, "correct-panel", "incorrect-panel", "play-success-fx", "play-fail-fx");
  quizCard.hidden = false;
  quizCard.classList.add(inClass);
  renderQuestion();

  requestAnimationFrame(() => {
    if (token !== questionMotionToken) {
      return;
    }

    quizCard.classList.remove(inClass);
  });
}

async function animateToExplanation(isCorrect, item, previousScore, nextScore) {
  const token = ++questionMotionToken;
  quizCard.classList.add("is-sliding-out-left");
  await wait(180);
  if (token !== questionMotionToken) {
    return;
  }

  quizCard.hidden = true;
  quizCard.classList.remove("is-sliding-out-left");
  explanationCard.hidden = false;
  explanationCard.classList.add("is-sliding-in-right");
  explanationCard.classList.remove("correct-panel", "incorrect-panel", "play-success-fx", "play-fail-fx");
  explanationCard.classList.add(isCorrect ? "correct-panel" : "incorrect-panel");
  void explanationCard.offsetWidth;
  explanationCard.classList.add(isCorrect ? "play-success-fx" : "play-fail-fx");

  explanationTag.textContent = isCorrect ? "せいかい" : "チェック";
  explanationHelper.textContent = "解説";
  renderExplanationMentor(isCorrect);
  feedbackPill.textContent = isCorrect ? "せいかい" : "おしい";
  feedbackPill.className = `feedback-pill ${isCorrect ? "success" : "fail"}`;
  feedbackAnswer.textContent = `正解は「${item.choices[item.answer]}」`;
  feedbackMini.textContent = isCorrect ? item.correctNote : item.incorrectNote;
  feedbackExplanation.textContent = item.explanation;
  animateSugorokuAdvance(previousScore, nextScore, isCorrect);

  requestAnimationFrame(() => {
    if (token !== questionMotionToken) {
      return;
    }

    explanationCard.classList.remove("is-sliding-in-right");
  });
}

function handleAnswer(selectedIndex) {
  if (locked) {
    return;
  }

  locked = true;
  const item = quizData[currentIndex];
  const buttons = [...choicesContainer.querySelectorAll(".choice-button")];
  const isCorrect = selectedIndex === item.answer;
  const previousScore = score;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score += 1;
  } else {
    mistakes += 1;
  }

  questionHelper.textContent = "つぎへ";
  reviewMode = true;
  setMentorState(isCorrect ? "correct" : "incorrect");

  mentorResetTimer = window.setTimeout(() => {
    if (locked && currentIndex < quizData.length) {
      mentorStage.dataset.state = "idle";
    }
  }, 900);

  updateStatus();
  animateToExplanation(isCorrect, item, previousScore, score);
}

async function showResults() {
  const level = getLevel(score);
  setMentorState("finish");
  resultTitle.textContent = level.title;
  resultStars.textContent = renderStars(level.stars);
  resultScore.textContent = `${quizData.length}問中 ${score}問正解`;
  resultCopy.textContent = level.copy;
  resultMeterFill.style.width = `${(score / quizData.length) * 100}%`;
  progressText.textContent = `${quizData.length}/${quizData.length}`;
  progressFill.style.width = "100%";
  starCountLabel.textContent = renderStars(level.stars);
  await activateScreen(resultScreen, "forward");
}

async function goNext() {
  if (!locked || isTransitioning || !reviewMode) {
    return;
  }

  isTransitioning = true;
  currentIndex += 1;
  if (currentIndex >= quizData.length) {
    await showResults();
    isTransitioning = false;
    return;
  }

  await animateQuestionTransition("forward");
  isTransitioning = false;
}

async function startQuiz() {
  if (activeScreen === quizScreen || isTransitioning) {
    return;
  }

  isTransitioning = true;
  await activateScreen(quizScreen, "forward");
  renderQuestion();
  isTransitioning = false;
}

async function restartQuiz() {
  if (isTransitioning) {
    return;
  }

  isTransitioning = true;
  currentIndex = 0;
  score = 0;
  mistakes = 0;
  locked = false;
  reviewMode = false;
  window.clearTimeout(mentorResetTimer);
  window.clearTimeout(sugorokuAdvanceTimer);
  starCountLabel.textContent = renderStars(getLevel(0).stars);
  prepareSugorokuBoard(0);
  updateSugorokuCopy(0, false);
  await activateScreen(introScreen, "backward");
  renderQuestion();
  isTransitioning = false;
}

startPanel.addEventListener("click", () => {
  startQuiz();
});

nextButton.addEventListener("click", () => {
  goNext();
});

restartButton.addEventListener("click", () => {
  restartQuiz();
});

restartTopButton.addEventListener("click", () => {
  restartQuiz();
});

starCountLabel.textContent = renderStars(getLevel(0).stars);
renderLives();
buildSugorokuTrack();
prepareSugorokuBoard(0);
updateSugorokuCopy(0, false);
activeScreen = introScreen;
activateScreen(introScreen);
renderQuestion();
