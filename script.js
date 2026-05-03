const challengePool = [
  {
    title: "在人多的地方躺下睡觉",
    action: "选择安全、干净、不影响通行的位置，例如公园草坪或商场休息区旁边的空地。躺下 10-20 秒，假装小憩，然后自然起身离开。不要挡路，不要影响他人。"
  },
  {
    title: "问商场里的装饰多少钱",
    action: "找到商场里的大型装饰物，比如花艺、雕塑或节日布置，礼貌地问工作人员：你好，我想问一下这个装饰大概多少钱？问完后说谢谢。"
  },
  {
    title: "在人多的地方跳舞唱歌",
    action: "选择一个不影响通行的开放区域，播放或哼一小段熟悉的歌，配合简单动作表演 10 秒钟。完成后可以鞠躬或比个耶。"
  },
  {
    title: "对陌生人说我要送你三千万",
    action: "找一位看起来不忙、不赶时间的人，微笑说：你好，我要送你三千万——千万要开心、千万要健康、千万要顺利。说完后祝对方今天愉快。"
  },
  {
    title: "找路人帮忙拍段视频",
    action: "找一位看起来方便帮忙的路人，礼貌询问：你好，可以麻烦你帮我拍一小段 5 秒的视频吗？拍完后认真道谢。"
  },
  {
    title: "问保安要签名",
    action: "找到一位不忙的保安，礼貌地说：你好，我在做一个勇气挑战，可以请你给我签个名作为纪念吗？如果对方拒绝，就笑着说没关系，谢谢你。"
  },
  {
    title: "只买一颗水果",
    action: "去水果店或超市，认真挑选一颗水果，比如一颗葡萄、一颗草莓或一颗橘子，正常排队结账。重点是练习承受一点点尴尬。"
  },
  {
    title: "在商场门口说：欢迎光临",
    action: "站在商场门口旁边，不挡路，看到有人经过时，用正常音量说 1-3 次：欢迎光临。说完后自然离开。"
  },
  {
    title: "借路人的星巴克拍个照片",
    action: "找一位拿着星巴克、看起来不忙的人，礼貌问：你好，我在做一个挑战，可以借你的杯子拍一张照片吗？不碰饮品也可以，只拍杯子。对方拒绝就立刻道谢离开。"
  },
  {
    title: "问路人我能喝口你的奶茶吗",
    action: "这个任务只做表达练习，不真的喝。找一位看起来不忙的人，开玩笑式地问：你好，我在做社恐挑战，可以问一句“我能喝口你的奶茶吗”吗？问完马上补充：我不会真的喝，谢谢你配合。"
  },
  {
    title: "在路口说觉得我长得帅的都往前走",
    action: "选择安全的人行道旁边，不挡路。用开玩笑的语气说一句：觉得我长得帅的都往前走。说完观察大家自然经过即可，不要追问或拦人。"
  },
  {
    title: "在电梯里带着耳机唱歌",
    action: "在电梯里戴上耳机，轻声唱 5-10 秒，不要音量太大，不要盯着别人。唱完后保持自然。"
  },
  {
    title: "做电梯管理员",
    action: "选择人不太多的电梯，站在按钮旁边。有人进入时礼貌问：您好，几楼？然后帮对方按楼层。完成 1-3 次即可。"
  }
];

const wheelElement = document.querySelector("#challenge-wheel");
const wheelLabels = document.querySelector("#wheel-labels");
const spinWheelButton = document.querySelector("#spin-button");
const shuffleChallengesButton = document.querySelector("#shuffle-button");
const respinButton = document.querySelector("#respin-button");
const resultCard = document.querySelector("#result-card");
const resultTitle = document.querySelector("#result-title");
const resultAction = document.querySelector("#result-action");

const wheelColors = [
  "#F7BAB9",
  "#FBDAD9",
  "#FAF3B0",
  "#BBEC6C",
  "#A0E6EB",
  "#9FDDDE",
  "#FFDA96",
  "#FFE287",
  "#B7BBEF",
  "#B2A4DE",
  "#DC93BF",
  "#FFB6C8"
];

let currentTasks = [];
let currentRotation = 0;
let isWheelSpinning = false;

function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function normalizeAngle(angle) {
  return ((angle % 360) + 360) % 360;
}

function buildWheelGradient(totalSegments) {
  const segmentAngle = 360 / totalSegments;
  const slices = Array.from({ length: totalSegments }, (_, index) => {
    const color = wheelColors[index % wheelColors.length];
    const startAngle = index * segmentAngle;
    const endAngle = (index + 1) * segmentAngle;
    return `${color} ${startAngle}deg ${endAngle}deg`;
  });

  return `conic-gradient(from -${segmentAngle / 2}deg, ${slices.join(", ")})`;
}

function renderChallengeWheel() {
  const segmentAngle = 360 / currentTasks.length;
  wheelElement.style.setProperty("--wheel-gradient", buildWheelGradient(currentTasks.length));
  wheelLabels.innerHTML = "";

  currentTasks.forEach((task, index) => {
    const label = document.createElement("div");
    label.className = "wheel-segment";
    label.style.setProperty("--segment-index", index);
    label.style.setProperty("--segment-angle", `${segmentAngle}deg`);
    label.textContent = task.title;
    wheelLabels.appendChild(label);
  });
}

function setChallengeButtonsDisabled(disabled) {
  [spinWheelButton, shuffleChallengesButton, respinButton].forEach((button) => {
    button.disabled = disabled;
  });
}

function showChallengeResult(targetIndex) {
  const selectedTask = currentTasks[targetIndex];
  const labels = wheelLabels.querySelectorAll(".wheel-segment");

  labels.forEach((label) => label.classList.remove("winner"));
  labels[targetIndex].classList.add("winner");

  resultTitle.textContent = `【${selectedTask.title}】`;
  resultAction.textContent = selectedTask.action;
  resultCard.hidden = false;
  resultCard.classList.remove("show");
  void resultCard.offsetWidth;
  resultCard.classList.add("show");
}

function spinChallengeWheel() {
  if (isWheelSpinning || currentTasks.length === 0) {
    return;
  }

  const segmentAngle = 360 / currentTasks.length;
  const targetIndex = Math.floor(Math.random() * currentTasks.length);
  const targetCenterAngle = targetIndex * segmentAngle;
  const desiredRotation = normalizeAngle(-targetCenterAngle);
  const currentRotationMod = normalizeAngle(currentRotation);
  const rotationDelta = normalizeAngle(desiredRotation - currentRotationMod);
  const fullSpins = 5;
  const finalRotation = currentRotation + fullSpins * 360 + rotationDelta;

  isWheelSpinning = true;
  setChallengeButtonsDisabled(true);
  spinWheelButton.textContent = "转盘转动中...";
  wheelElement.classList.add("spinning");
  wheelLabels.querySelectorAll(".wheel-segment").forEach((label) => label.classList.remove("winner"));

  currentRotation = finalRotation;
  wheelElement.style.transform = `rotate(${finalRotation}deg)`;

  window.setTimeout(() => {
    isWheelSpinning = false;
    wheelElement.classList.remove("spinning");
    spinWheelButton.textContent = "开始转盘";
    setChallengeButtonsDisabled(false);
    showChallengeResult(targetIndex);
  }, 4300);
}

function refreshChallengeSet() {
  if (isWheelSpinning) {
    return;
  }

  currentTasks = shuffleArray(challengePool).slice(0, 12);
  renderChallengeWheel();
  wheelLabels.querySelectorAll(".wheel-segment").forEach((label) => label.classList.remove("winner"));
  resultCard.hidden = true;
  resultCard.classList.remove("show");
}

refreshChallengeSet();
spinWheelButton.addEventListener("click", spinChallengeWheel);
respinButton.addEventListener("click", spinChallengeWheel);
shuffleChallengesButton.addEventListener("click", refreshChallengeSet);
