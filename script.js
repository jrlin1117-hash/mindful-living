const attitudes = [
  {
    id: "non-judging",
    name: "非评判",
    plant: "梅花",
    icon: "梅",
    stage: "含苞",
    summary: "像寒冬里先开的梅花，不急着评论天气，只安静地盛开。",
    meaning: "梅花常被视为坚韧与清明。它提醒我们在情绪和评价出现时，不马上跟随判断，而是保留一份清醒。",
    intro: "今天先不急着给一切贴标签，只让经验先以它本来的样子出现。",
    practice: "当你想说“这太糟了”或“我又做不好”时，先停一停，只描述事实，不加结论。",
    action: "下一次拿起手机前，先感受一口呼吸，再决定自己是否真的要打开它。",
    gradient: "linear-gradient(135deg, #dfe6cf, #f2d7d7)"
  },
  {
    id: "patience",
    name: "耐心",
    plant: "竹",
    icon: "竹",
    stage: "抽节",
    summary: "竹子不会催自己长高，它一节一节地完成自己的时间。",
    meaning: "竹常象征节律、韧性与从容。它代表耐心不是拖延，而是信任成长有它的节拍。",
    intro: "不催促结果出现，先陪伴过程慢慢展开。",
    practice: "把等待电梯、排队、加载页面的时间，变成呼吸和身体感受的时间。",
    action: "今天挑一个等待时刻，安静数 5 次呼吸，不用手机填满空隙。",
    gradient: "linear-gradient(135deg, #d5e7c4, #bfd7a2)"
  },
  {
    id: "beginners-mind",
    name: "初学者之心",
    plant: "雏菊",
    icon: "菊",
    stage: "初开",
    summary: "像雏菊一样轻盈地重新看见熟悉的日常，世界会变新。",
    meaning: "雏菊常带着纯真与新的开始。它提醒我们把熟悉的东西也当作第一次遇见。",
    intro: "暂时放下“我早就知道了”，给生活一点重新发现的空间。",
    practice: "用第一次看见的目光观察一个常见物件，像第一次遇见它一样。",
    action: "看一片叶子 2 分钟，只观察颜色、纹理和边缘，不急着说出它的名字。",
    gradient: "linear-gradient(135deg, #f4ecd2, #e7f4cf)"
  },
  {
    id: "trust",
    name: "信任",
    plant: "松树",
    icon: "松",
    stage: "扎根",
    summary: "松树先把根扎稳，再静静向上，不急着向外证明。",
    meaning: "松树象征稳定和内在力量。它对应的是对身体、经验与内心判断的信任。",
    intro: "不总向外确认自己对不对，先听一听身体真正的感觉。",
    practice: "面对一个小选择时，先感受身体是收紧还是舒展，再决定怎么做。",
    action: "今天做一个小决定前，先安静停 10 秒，再行动。",
    gradient: "linear-gradient(135deg, #c7dcc6, #b5c79e)"
  },
  {
    id: "non-striving",
    name: "不争",
    plant: "苔藓",
    icon: "苔",
    stage: "铺展",
    summary: "苔藓不争光、不争高，却能在安静处完整地铺展开来。",
    meaning: "苔藓提醒我们，生命不是每时每刻都要表现和竞争。有些时刻，只是存在就已经足够。",
    intro: "不把每一个瞬间都变成需要优化和完成的任务。",
    practice: "留一小段时间，不学习、不工作、不刷消息，只单纯地坐着或看窗外。",
    action: "给自己 3 分钟，只是坐着呼吸，不追求任何状态。",
    gradient: "linear-gradient(135deg, #c8dcc5, #dbe6c8)"
  },
  {
    id: "acceptance",
    name: "接纳",
    plant: "莲",
    icon: "莲",
    stage: "舒展",
    summary: "莲花从水面安静展开，像在说：先如实看见，再慢慢打开。",
    meaning: "莲常被赋予澄明与包容。它提醒我们先承认此刻真实存在的状态，而不是急着排斥。",
    intro: "我现在就是这样，这不是失败，而是练习开始的地方。",
    practice: "当疲惫、烦躁或分心出现时，先说一句：我注意到我现在正在这样。",
    action: "把你此刻最明显的身体感受写成一句事实，比如“胸口有点紧”。",
    gradient: "linear-gradient(135deg, #e9d7dc, #f1ecce)"
  },
  {
    id: "letting-go",
    name: "放下",
    plant: "柳树",
    icon: "柳",
    stage: "摇曳",
    summary: "柳枝会顺着风放松下来，不把每一阵风都抓住。",
    meaning: "柳树的柔软与下垂感，很适合代表松手与流动。放下不是放弃，而是不再死抓。",
    intro: "发现自己又紧紧抓住一个念头时，轻轻把它放回风里。",
    practice: "当反复想同一件事时，把注意力带回脚底和呼吸，而不是继续追着想。",
    action: "做一次肩膀放松，呼气时有意识地让肩膀往下沉。",
    gradient: "linear-gradient(135deg, #cfe1c7, #dfe9b7)"
  },
  {
    id: "gratitude",
    name: "感恩",
    plant: "桂花",
    icon: "桂",
    stage: "飘香",
    summary: "桂花不张扬，却总在靠近时让人突然闻见生活里的好。",
    meaning: "桂花常象征温暖、丰盈与被看见的日常福气。它代表对平常事物重新生出珍惜。",
    intro: "重新留意那些一直支持着你、却常被忽略的小事。",
    practice: "今天留意一个习以为常却在支持你的存在，比如一顿饭、一盏灯、一次陪伴。",
    action: "晚上写下一件今天值得感谢的小事，哪怕只是一阵风。",
    gradient: "linear-gradient(135deg, #f0e3bf, #dfe8be)"
  },
  {
    id: "generosity",
    name: "慷慨",
    plant: "向日葵",
    icon: "葵",
    stage: "向光",
    summary: "向日葵总把脸转向光，也把明亮带给周围的人。",
    meaning: "向日葵适合代表善意、温暖和分享。慷慨不仅给别人，也包括对自己的温柔。",
    intro: "把一点善意分给别人，也分给今天的自己。",
    practice: "在一段对话里多听半分钟，在一次自责里少苛刻一点。",
    action: "今天向一个人表达一次具体感谢，或对自己说一句温柔的话。",
    gradient: "linear-gradient(135deg, #f2d990, #dbe8a5)"
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
  element.style.setProperty("--plant-gradient", gradient);
}

function showAttitude(attitude) {
  growthStage.textContent = `生长阶段 · ${attitude.stage}`;
  growthTitle.textContent = `${attitude.name} · ${attitude.plant}`;
  growthSummary.textContent = attitude.summary;
  growthMeaning.textContent = attitude.meaning;
  growthPractice.textContent = attitude.practice;
  updatePlantSurface(growthVisual, attitude.gradient);
}

function renderForest() {
  forestGrid.innerHTML = "";

  attitudes.forEach((attitude, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "forest-node";
    button.innerHTML = `
      <div class="plant-icon">${attitude.icon}</div>
      <strong>${attitude.name}</strong>
      <span>${attitude.plant}</span>
    `;

    updatePlantSurface(button.querySelector(".plant-icon"), attitude.gradient);

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
  todayPlant.textContent = `今日植物 · ${attitude.plant}`;
  todayAttitudeName.textContent = attitude.name;
  todayAttitudeLine.textContent = attitude.summary;
  todayAttitudeIntro.textContent = attitude.intro;
  todayAttitudeAction.textContent = attitude.action;
  updatePlantSurface(plantBackdrop, attitude.gradient);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function refreshTimerDisplay() {
  timerDisplay.textContent = formatTime(remainingSeconds);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  if (timerId) {
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
  timerStatus.textContent = "计时已暂停。你可以继续，也可以就这样安静坐一会儿。";
}

function resetTimer() {
  stopTimer();
  remainingSeconds = selectedDuration;
  refreshTimerDisplay();
  timerStatus.textContent = "给自己一个不需要完成什么的时段，只是坐下来呼吸。";
}

document.querySelector("#draw-attitude").addEventListener("click", drawTodayAttitude);

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    presetButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
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

renderForest();
drawTodayAttitude();
refreshTimerDisplay();
