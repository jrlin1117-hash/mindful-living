const STORAGE_KEY = "mindful_forest_state_v1";

const attitudes = [
  {
    id: "non_judging",
    name: "非评判",
    plant: "梅",
    icon: "梅",
    stage: "傲雪初开",
    summary: "梅在寒气里先开，不争春色，也不评判风雪。",
    meaning: "梅花在东方意象里象征清明、坚贞与自持。它适合代表非评判，因为它提醒我们在境遇里先安住，不急着贴标签。",
    intro: "先不急着说好坏、对错，只让事情如实显现片刻。",
    practice: "当情绪升起时，先把“这不该发生”放一放，只描述身体与感受的事实。",
    action: "下一次心里想评价自己时，先停一息，只说一句“我注意到了”。"
  },
  {
    id: "patience",
    name: "耐心",
    plant: "竹",
    icon: "竹",
    stage: "新篁抽节",
    summary: "竹一节一节向上，从不催促自己的生长。",
    meaning: "竹象征节律、韧性与留白。它很适合耐心，因为竹的成长不是爆发，而是顺着时序稳稳成形。",
    intro: "不是拖延，也不是忍耐，而是相信时间自有它的次序。",
    practice: "把等待、排队、加载和沉默，当成呼吸可以停留的地方。",
    action: "今天挑一个等待时刻，不碰手机，只数五次呼吸。"
  },
  {
    id: "beginners_mind",
    name: "初学者之心",
    plant: "兰",
    icon: "兰",
    stage: "幽谷新芽",
    summary: "兰在幽静中发芽，像第一次闻见空气里的细微香气。",
    meaning: "兰在东方传统里象征清雅、谦和与敏锐感受。它很贴近初学者之心，因为它需要细致地重新感知，而不是用熟悉感覆盖世界。",
    intro: "把熟悉的一切重新看一眼，像今天才第一次遇见它。",
    practice: "选一个再普通不过的物件，重新观察它的颜色、纹理和气息。",
    action: "看一片叶子两分钟，不说名字，只看它如何存在。"
  },
  {
    id: "trust",
    name: "信任",
    plant: "松",
    icon: "松",
    stage: "深根长青",
    summary: "松先把根扎深，再在风里安静站稳。",
    meaning: "松在东方文化中常象征稳定、持守与内在力量。它对应信任，因为真正的信任来自内在站稳，而不是不断向外确认。",
    intro: "先听自己身体和经验的声音，再决定怎么走。",
    practice: "面对一个小决定时，先感受身体是收紧还是舒展。",
    action: "今天做一个选择前，先停十秒，感受身体的方向。"
  },
  {
    id: "non_striving",
    name: "不争",
    plant: "苔",
    icon: "苔",
    stage: "静处铺青",
    summary: "苔不争高下，只在安静的角落慢慢铺开自己的绿意。",
    meaning: "苔的气质非常东方，也非常贴近不争。它不抢眼、不张扬，却有完整而柔和的存在方式。",
    intro: "让此刻不必立刻成为成果，只是如实地存在。",
    practice: "给自己留一小段不为任何目标服务的时间。",
    action: "留三分钟坐着，不优化、不安排、不判断。"
  },
  {
    id: "acceptance",
    name: "接纳",
    plant: "莲",
    icon: "莲",
    stage: "水面舒展",
    summary: "莲从水里展开，不急着躲开水，也不抗拒风。",
    meaning: "莲象征澄明、包容与如实。它适合代表接纳，因为它并不否认所处环境，而是在其中展开自己。",
    intro: "先承认此刻就是这样，改变才有真实的起点。",
    practice: "疲惫、烦躁或分心时，不先责备，先如实命名它。",
    action: "把你此刻最明显的感受写成一句事实描述。"
  },
  {
    id: "letting_go",
    name: "放下",
    plant: "柳",
    icon: "柳",
    stage: "随风低垂",
    summary: "柳枝顺风而下，轻轻松开，不和风硬碰。",
    meaning: "柳有柔韧、流动和顺势的东方气质。它适合代表放下，因为放下不是断裂，而是松开执拗。",
    intro: "发现自己抓得太紧时，试着把力道放轻一点。",
    practice: "当念头反复盘旋时，把注意拉回脚底和呼吸。",
    action: "做一次呼气放松，让肩膀有意识地下沉。"
  },
  {
    id: "gratitude",
    name: "感恩",
    plant: "桂",
    icon: "桂",
    stage: "暗香浮动",
    summary: "桂不张扬，却总在靠近时让人想起生活里的温暖。",
    meaning: "桂花在东方意境里常与团圆、秋意和温润日常相连。它很适合感恩，因为感恩往往不是轰烈的，而是从平常里重新闻见香气。",
    intro: "重新留意那些一直支持着你的小事。",
    practice: "今天看见一个平常却持续滋养你的存在。",
    action: "晚上记下一件值得感谢的小事，哪怕只是一阵风。"
  },
  {
    id: "generosity",
    name: "慷慨",
    plant: "葵",
    icon: "葵",
    stage: "向光盛放",
    summary: "葵把脸转向光，也把温暖带给周围。",
    meaning: "葵代表明亮、外展和给予。放在东方意象里，它有一种坦荡而不吝惜的生命力，很适合慷慨。",
    intro: "把一点光分给别人，也分给今天的自己。",
    practice: "在一段关系里多给一点倾听，在一次自责里少给一点苛刻。",
    action: "今天向一个人表达一次具体感谢，或对自己说一句温柔的话。"
  }
];

let currentAttitude = null;
let selectedDuration = 300;
let remainingSeconds = selectedDuration;
let timerId = null;

const forestGrid = document.querySelector("#forest-grid");
const growthVisual = document.querySelector("#growth-visual");
const growthStage = document.querySelector("#growth-stage");
const growthTitle = document.querySelector("#growth-title");
const growthSummary = document.querySelector("#growth-summary");
const growthMeaning = document.querySelector("#growth-meaning");
const growthPractice = document.querySelector("#growth-practice");
const recordList = document.querySelector("#record-list");
const calendarTitle = document.querySelector("#calendar-title");
const calendarWeekdays = document.querySelector("#calendar-weekdays");
const practiceCalendar = document.querySelector("#practice-calendar");
const calendarDayDetail = document.querySelector("#calendar-day-detail");

const plantBackdrop = document.querySelector("#plant-backdrop");
const todayPlant = document.querySelector("#today-plant");
const todayAttitudeName = document.querySelector("#today-attitude-name");
const todayAttitudeLine = document.querySelector("#today-attitude-line");
const todayAttitudeIntro = document.querySelector("#today-attitude-intro");
const todayAttitudeAction = document.querySelector("#today-attitude-action");
const attitudeDialog = document.querySelector("#attitude-dialog");
const closeDialogButton = document.querySelector("#close-dialog");
const completeAttitudeButton = document.querySelector("#complete-attitude");
const attitudeNote = document.querySelector("#attitude-note");

const timerDisplay = document.querySelector("#timer-display");
const timerStatus = document.querySelector("#timer-status");
const presetButtons = document.querySelectorAll(".preset");
const startButton = document.querySelector("#start-timer");
const pauseButton = document.querySelector("#pause-timer");
const resetButton = document.querySelector("#reset-timer");
const meditationDialog = document.querySelector("#meditation-dialog");
const meditationNote = document.querySelector("#meditation-note");
const saveMeditationRecordButton = document.querySelector("#save-meditation-record");
const skipMeditationRecordButton = document.querySelector("#skip-meditation-record");

function getInitialScores() {
  return attitudes.reduce((scores, attitude) => {
    scores[attitude.id] = 0;
    return scores;
  }, {});
}

function loadState() {
  const fallback = {
    scores: getInitialScores(),
    records: []
  };

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) {
      return fallback;
    }

    return {
      scores: { ...fallback.scores, ...(saved.scores || {}) },
      records: Array.isArray(saved.records) ? saved.records : []
    };
  } catch {
    return fallback;
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function increaseScore(attitudeId, amount) {
  const state = loadState();
  const current = state.scores[attitudeId] || 0;
  state.scores[attitudeId] = Math.min(100, current + amount);
  saveState(state);
}

function increaseAllScores(amount) {
  const state = loadState();
  attitudes.forEach((attitude) => {
    const current = state.scores[attitude.id] || 0;
    state.scores[attitude.id] = Math.min(100, current + amount);
  });
  saveState(state);
}

function addRecord(record) {
  const state = loadState();
  state.records.unshift({
    id: `${Date.now()}`,
    date: formatDate(),
    dateKey: getDateKey(),
    ...record
  });
  saveState(state);
}

function showAttitude(attitude) {
  if (!growthVisual) {
    return;
  }

  const score = loadState().scores[attitude.id] || 0;
  growthStage.textContent = `生长阶段 · ${attitude.stage} · 正念值 ${score}`;
  growthTitle.textContent = `${attitude.name} · ${attitude.plant}`;
  growthSummary.textContent = attitude.summary;
  growthMeaning.textContent = attitude.meaning;
  growthPractice.textContent = attitude.practice;
}

function renderForest() {
  if (!forestGrid) {
    return;
  }

  const state = loadState();
  forestGrid.innerHTML = "";

  attitudes.forEach((attitude, index) => {
    const score = state.scores[attitude.id] || 0;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "forest-node card card-body";
    button.innerHTML = `
      <div class="forest-card-top">
        <div class="plant-chip">${attitude.icon}</div>
        <span class="score-text">${score}/100</span>
      </div>
      <div>
        <strong class="plant-name">${attitude.name}</strong>
        <span class="plant-label">${attitude.plant}</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <span class="progress-fill" style="width:${score}%"></span>
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

function renderRecords() {
  if (!recordList) {
    return;
  }

  const records = loadState().records;
  recordList.innerHTML = "";

  if (records.length === 0) {
    recordList.innerHTML = '<p class="body-sm">还没有记录。完成一次冥想或态度任务后，这里会出现你的练习足迹。</p>';
    return;
  }

  records.forEach((record) => {
    const item = document.createElement("article");
    item.className = "record-item";
    item.innerHTML = `
      <div class="record-meta">
        <span>${record.date}</span>
        <span>${record.type}</span>
      </div>
      <p class="record-content">${record.note || "这次练习没有留下文字记录。"}</p>
    `;
    recordList.appendChild(item);
  });
}

function renderCalendar() {
  if (!practiceCalendar || !calendarWeekdays || !calendarTitle) {
    return;
  }

  const weekdayNames = ["一", "二", "三", "四", "五", "六", "日"];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;
  const records = loadState().records;
  const grouped = records.reduce((map, record) => {
    const key = record.dateKey || "";
    if (!key) {
      return map;
    }
    map[key] = map[key] || [];
    map[key].push(record);
    return map;
  }, {});

  calendarTitle.textContent = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
  }).format(today);
  calendarWeekdays.innerHTML = weekdayNames.map((day) => `<div>${day}</div>`).join("");
  practiceCalendar.innerHTML = "";

  for (let index = 0; index < startOffset; index += 1) {
    const empty = document.createElement("div");
    empty.className = "calendar-day empty";
    practiceCalendar.appendChild(empty);
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const key = `${year}-${`${month + 1}`.padStart(2, "0")}-${`${day}`.padStart(2, "0")}`;
    const dayRecords = grouped[key] || [];
    const cell = document.createElement("div");
    cell.className = `calendar-day${dayRecords.length ? " has-record" : ""}`;
    cell.type = "button";
    const practices = dayRecords
      .slice(0, 3)
      .map((record) => `<span class="calendar-practice">${record.type}</span>`)
      .join("");
    const more = dayRecords.length > 3 ? `<span class="calendar-practice">+${dayRecords.length - 3} 项</span>` : "";
    cell.innerHTML = `
      <span class="calendar-date">${day}</span>
      ${practices || '<span class="calendar-practice">未记录</span>'}
      ${more}
    `;

    cell.addEventListener("click", () => {
      document.querySelectorAll(".calendar-day").forEach((dayCell) => dayCell.classList.remove("selected"));
      cell.classList.add("selected");

      if (!calendarDayDetail) {
        return;
      }

      if (dayRecords.length === 0) {
        calendarDayDetail.textContent = `${month + 1}月${day}日还没有练习记录。`;
        return;
      }

      calendarDayDetail.innerHTML = `<strong>${month + 1}月${day}日</strong><br />${dayRecords
        .map((record) => record.type)
        .join("<br />")}`;
    });

    practiceCalendar.appendChild(cell);
  }
}

function drawTodayAttitude() {
  currentAttitude = attitudes[Math.floor(Math.random() * attitudes.length)];

  if (!plantBackdrop) {
    return;
  }

  todayPlant.textContent = `今日植物 · ${currentAttitude.plant}`;
  todayAttitudeName.textContent = currentAttitude.name;
  todayAttitudeLine.textContent = currentAttitude.summary;
  todayAttitudeIntro.textContent = currentAttitude.intro;
  todayAttitudeAction.textContent = currentAttitude.action;

  if (attitudeNote) {
    attitudeNote.value = "";
  }

  if (attitudeDialog && !attitudeDialog.open) {
    attitudeDialog.showModal();
  }
}

function completeAttitudePractice() {
  if (!currentAttitude) {
    return;
  }

  increaseScore(currentAttitude.id, 10);
  addRecord({
    type: `态度任务 · ${currentAttitude.name}`,
    note: attitudeNote?.value.trim() || `完成了“${currentAttitude.name}”的今日浇灌。`
  });

  if (attitudeDialog?.open) {
    attitudeDialog.close();
  }

  renderForest();
  renderRecords();
  renderCalendar();
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

function openMeditationRecordDialog() {
  if (meditationNote) {
    meditationNote.value = "";
  }

  if (meditationDialog && !meditationDialog.open) {
    meditationDialog.showModal();
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
    timerStatus.textContent = "这一段冥想已经完成。请记录一下此刻的感受。";
    openMeditationRecordDialog();
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

function saveMeditationRecord() {
  increaseAllScores(3);
  addRecord({
    type: `冥想练习 · ${Math.round(selectedDuration / 60)} 分钟`,
    note: meditationNote?.value.trim() || "完成了一次正式正念冥想。"
  });

  if (meditationDialog?.open) {
    meditationDialog.close();
  }

  renderForest();
  renderRecords();
  renderCalendar();
  resetTimer();
}

const drawButton = document.querySelector("#draw-attitude");
if (drawButton) {
  drawButton.addEventListener("click", drawTodayAttitude);
}

if (completeAttitudeButton) {
  completeAttitudeButton.addEventListener("click", completeAttitudePractice);
}

if (closeDialogButton && attitudeDialog) {
  closeDialogButton.addEventListener("click", () => attitudeDialog.close());
}

renderForest();
renderRecords();
renderCalendar();

if (timerDisplay && timerStatus && presetButtons.length > 0) {
  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      presetButtons.forEach((item) => item.classList.remove("active", "preset-active"));
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

if (saveMeditationRecordButton) {
  saveMeditationRecordButton.addEventListener("click", saveMeditationRecord);
}

if (skipMeditationRecordButton && meditationDialog) {
  skipMeditationRecordButton.addEventListener("click", () => {
    saveMeditationRecord();
  });
}
