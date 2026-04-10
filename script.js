const attitudes = [
  {
    name: "非评判",
    plant: "梅",
    icon: "梅",
    stage: "傲雪初开",
    score: 42,
    summary: "梅在寒气里先开，不争春色，也不评判风雪。",
    meaning: "梅花在东方意象里象征清明、坚贞与自持。它适合代表非评判，因为它提醒我们在境遇里先安住，不急着贴标签。",
    intro: "先不急着说好坏、对错，只让事情如实显现片刻。",
    practice: "当情绪升起时，先把“这不该发生”放一放，只描述身体与感受的事实。",
    action: "下一次心里想评价自己时，先停一息，只说一句“我注意到了”。",
    gradient: "linear-gradient(135deg, #e5ead8, #efd6dd)"
  },
  {
    name: "耐心",
    plant: "竹",
    icon: "竹",
    stage: "新篁抽节",
    score: 63,
    summary: "竹一节一节向上，从不催促自己的生长。",
    meaning: "竹象征节律、韧性与留白。它很适合耐心，因为竹的成长不是爆发，而是顺着时序稳稳成形。",
    intro: "不是拖延，也不是忍耐，而是相信时间自有它的次序。",
    practice: "把等待、排队、加载和沉默，当成呼吸可以停留的地方。",
    action: "今天挑一个等待时刻，不碰手机，只数五次呼吸。",
    gradient: "linear-gradient(135deg, #d8ead0, #bfd7a2)"
  },
  {
    name: "初学者之心",
    plant: "兰",
    icon: "兰",
    stage: "幽谷新芽",
    score: 55,
    summary: "兰在幽静中发芽，像第一次闻见空气里的细微香气。",
    meaning: "兰在东方传统里象征清雅、谦和与敏锐感受。它很贴近初学者之心，因为它需要细致地重新感知，而不是用熟悉感覆盖世界。",
    intro: "把熟悉的一切重新看一眼，像今天才第一次遇见它。",
    practice: "选一个再普通不过的物件，重新观察它的颜色、纹理和气息。",
    action: "看一片叶子两分钟，不说名字，只看它如何存在。",
    gradient: "linear-gradient(135deg, #dce8d4, #eef1d5)"
  },
  {
    name: "信任",
    plant: "松",
    icon: "松",
    stage: "深根长青",
    score: 68,
    summary: "松先把根扎深，再在风里安静站稳。",
    meaning: "松在东方文化中常象征稳定、持守与内在力量。它对应信任，因为真正的信任来自内在站稳，而不是不断向外确认。",
    intro: "先听自己身体和经验的声音，再决定怎么走。",
    practice: "面对一个小决定时，先感受身体是收紧还是舒展。",
    action: "今天做一个选择前，先停十秒，感受身体的方向。",
    gradient: "linear-gradient(135deg, #cadfc9, #b6c9a1)"
  },
  {
    name: "不争",
    plant: "苔",
    icon: "苔",
    stage: "静处铺青",
    score: 39,
    summary: "苔不争高下，只在安静的角落慢慢铺开自己的绿意。",
    meaning: "苔的气质非常东方，也非常贴近不争。它不抢眼、不张扬，却有完整而柔和的存在方式。",
    intro: "让此刻不必立刻成为成果，只是如实地存在。",
    practice: "给自己留一小段不为任何目标服务的时间。",
    action: "留三分钟坐着，不优化、不安排、不判断。",
    gradient: "linear-gradient(135deg, #c9dcc4, #dce5cb)"
  },
  {
    name: "接纳",
    plant: "莲",
    icon: "莲",
    stage: "水面舒展",
    score: 74,
    summary: "莲从水里展开，不急着躲开水，也不抗拒风。",
    meaning: "莲象征澄明、包容与如实。它适合代表接纳，因为它并不否认所处环境，而是在其中展开自己。",
    intro: "先承认此刻就是这样，改变才有真实的起点。",
    practice: "疲惫、烦躁或分心时，不先责备，先如实命名它。",
    action: "把你此刻最明显的感受写成一句事实描述。",
    gradient: "linear-gradient(135deg, #ead8df, #f1edcf)"
  },
  {
    name: "放下",
    plant: "柳",
    icon: "柳",
    stage: "随风低垂",
    score: 51,
    summary: "柳枝顺风而下，轻轻松开，不和风硬碰。",
    meaning: "柳有柔韧、流动和顺势的东方气质。它适合代表放下，因为放下不是断裂，而是松开执拗。",
    intro: "发现自己抓得太紧时，试着把力道放轻一点。",
    practice: "当念头反复盘旋时，把注意拉回脚底和呼吸。",
    action: "做一次呼气放松，让肩膀有意识地下沉。",
    gradient: "linear-gradient(135deg, #d2e3cb, #dde8bc)"
  },
  {
    name: "感恩",
    plant: "桂",
    icon: "桂",
    stage: "暗香浮动",
    score: 82,
    summary: "桂不张扬，却总在靠近时让人想起生活里的温暖。",
    meaning: "桂花在东方意境里常与团圆、秋意和温润日常相连。它很适合感恩，因为感恩往往不是轰烈的，而是从平常里重新闻见香气。",
    intro: "重新留意那些一直支持着你的小事。",
    practice: "今天看见一个平常却持续滋养你的存在。",
    action: "晚上记下一件值得感谢的小事，哪怕只是一阵风。",
    gradient: "linear-gradient(135deg, #f1e4bf, #dfe8be)"
  },
  {
    name: "慷慨",
    plant: "葵",
    icon: "葵",
    stage: "向光盛放",
    score: 77,
    summary: "葵把脸转向光，也把温暖带给周围。",
    meaning: "葵代表明亮、外展和给予。放在东方意象里，它有一种坦荡而不吝惜的生命力，很适合慷慨。",
    intro: "把一点光分给别人，也分给今天的自己。",
    practice: "在一段关系里多给一点倾听，在一次自责里少给一点苛刻。",
    action: "今天向一个人表达一次具体感谢，或对自己说一句温柔的话。",
    gradient: "linear-gradient(135deg, #f2da98, #dbe7a8)"
  }
];

const forestGrid = document.querySelector("#forest-grid");
const growthVisual = document.querySelector("#growth-visual");
const growthStage = document.querySelector("#growth-stage");
const growthTitle = document.querySelector("#growth-title");
const growthSummary = document.querySelector("#growth-summary");
const growthMeaning = document.querySelector("#growth-meaning");
const growthPractice = document.querySelector("#growth-practice");
const plantBackdrop = document.querySelector("#plant-backdrop");
const todayPlant = document.querySelector("#today-plant");
const todayAttitudeName = document.querySelector("#today-attitude-name");
const todayAttitudeLine = document.querySelector("#today-attitude-line");
const todayAttitudeIntro = document.querySelector("#today-attitude-intro");
const todayAttitudeAction = document.querySelector("#today-attitude-action");
const attitudeDialog = document.querySelector("#attitude-dialog");
const closeDialogButton = document.querySelector("#close-dialog");

const timerDisplay = document.querySelector("#timer-display");
const timerStatus = document.querySelector("#timer-status");
const presetButtons = document.querySelectorAll(".preset");
const startButton = document.querySelector("#start-timer");
const pauseButton = document.querySelector("#pause-timer");
const resetButton = document.querySelector("#reset-timer");

let selectedDuration = 300;
let remainingSeconds = selectedDuration;
let timerId = null;

function updatePlantSurface(element, gradient) {
  return gradient;
}

function showAttitude(attitude) {
  if (!growthVisual) {
    return;
  }

  growthStage.textContent = `生长阶段 · ${attitude.stage} · 正念值 ${attitude.score}`;
  growthTitle.textContent = `${attitude.name} · ${attitude.plant}`;
  growthSummary.textContent = attitude.summary;
  growthMeaning.textContent = attitude.meaning;
  growthPractice.textContent = attitude.practice;
  growthVisual.className = "detail-cover";
}

function renderForest() {
  if (!forestGrid) {
    return;
  }

  forestGrid.innerHTML = "";

  attitudes.forEach((attitude, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "forest-node card card-body";
    button.innerHTML = `
      <div class="forest-card-top">
        <div class="plant-chip">${attitude.icon}</div>
        <span class="score-text">${attitude.score}/100</span>
      </div>
      <div>
        <strong class="plant-name">${attitude.name}</strong>
        <span class="plant-label">${attitude.plant}</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <span class="progress-fill" style="width:${attitude.score}%"></span>
      </div>
    `;

    button.addEventListener("click", () => {
      document.querySelectorAll(".forest-node").forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
      showAttitude(attitude);
    });

    if (index === 0) {
      button.classList.add("active");
      showAttitude(attitude);
    }

    forestGrid.appendChild(button);
  });
}

function drawTodayAttitude() {
  const attitude = attitudes[Math.floor(Math.random() * attitudes.length)];

  if (!plantBackdrop) {
    return;
  }

  todayPlant.textContent = `今日植物 · ${attitude.plant}`;
  todayAttitudeName.textContent = attitude.name;
  todayAttitudeLine.textContent = attitude.summary;
  todayAttitudeIntro.textContent = attitude.intro;
  todayAttitudeAction.textContent = attitude.action;
  plantBackdrop.className = "dialog-cover";

  if (attitudeDialog && !attitudeDialog.open) {
    attitudeDialog.showModal();
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function refreshTimerDisplay() {
  if (timerDisplay) {
    timerDisplay.textContent = formatTime(remainingSeconds);
  }
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  if (timerId || !timerStatus) {
    return;
  }

  timerStatus.textContent = "让呼吸自然来去，不用追求平静，只需要留在这里。";

  timerId = window.setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds -= 1;
      refreshTimerDisplay();
      return;
    }

    stopTimer();
    timerStatus.textContent = "这一段冥想已经完成。先别急着起身，感觉一下此刻的身体。";
  }, 1000);
}

function pauseTimer() {
  stopTimer();
  if (timerStatus) {
    timerStatus.textContent = "计时已暂停。你可以继续，也可以就这样安静坐一会儿。";
  }
}

function resetTimer() {
  stopTimer();
  remainingSeconds = selectedDuration;
  refreshTimerDisplay();
  if (timerStatus) {
    timerStatus.textContent = "给自己一个不需要完成什么的时段，只是坐下来呼吸。";
  }
}

const drawButton = document.querySelector("#draw-attitude");
if (drawButton) {
  drawButton.addEventListener("click", drawTodayAttitude);
}

if (closeDialogButton && attitudeDialog) {
  closeDialogButton.addEventListener("click", () => attitudeDialog.close());
}

renderForest();

if (timerDisplay && timerStatus && presetButtons.length > 0) {
  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      presetButtons.forEach((item) => item.classList.remove("active"));
      presetButtons.forEach((item) => item.classList.remove("preset-active"));
      button.classList.add("active", "preset-active");
      selectedDuration = Number(button.dataset.seconds);
      remainingSeconds = selectedDuration;
      refreshTimerDisplay();
      stopTimer();
      timerStatus.textContent = "时长已更新。找到一个舒服的姿势，准备开始。";
    });
  });

  startButton.addEventListener("click", startTimer);
  pauseButton.addEventListener("click", pauseTimer);
  resetButton.addEventListener("click", resetTimer);
  refreshTimerDisplay();
}
