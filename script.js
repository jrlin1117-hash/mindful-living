const attitudes = [
  {
    name: "非评判",
    tagline: "今天先不急着给体验贴标签，只去感受它本来的样子。",
    practice: "当情绪、声音或他人的反应出现时，先把“好/坏、对/错”放到一边，给体验几秒钟的原样空间。",
    action: "喝第一口水时，只感受温度、流动和停留，不评价它是否够好喝。"
  },
  {
    name: "耐心",
    tagline: "允许事情按它自己的节奏展开，不催促当下。",
    practice: "当你等电梯、等回复、等水烧开时，不立刻掏手机，把等待变成呼吸练习。",
    action: "今天挑一个排队或等待时刻，默数 5 次呼吸。"
  },
  {
    name: "初学者之心",
    tagline: "像第一次那样看待熟悉的日常，世界会重新打开。",
    practice: "把每天最熟悉的一件事当成第一次做，留意以前忽略的小细节。",
    action: "去看一朵花、一片叶子或一只杯子，观察颜色、纹理和光线停留 2 分钟。"
  },
  {
    name: "信任",
    tagline: "练习信任身体、直觉和真实经验，而不是一直向外寻找标准答案。",
    practice: "当你想立刻确认“我做得对不对”时，先问自己：我身体此刻真正需要什么？",
    action: "今天在一个小决定里，先停 10 秒，感受身体的倾向再行动。"
  },
  {
    name: "不争",
    tagline: "不把每一刻都变成要优化、要证明、要达成的目标。",
    practice: "允许今天有一个时刻只是存在，不需要产出、不需要表现。",
    action: "留出 3 分钟坐着看窗外，不听课、不刷手机、不安排任务。"
  },
  {
    name: "接纳",
    tagline: "如实看见此刻已经发生的样子，是改变真正开始的地方。",
    practice: "如果今天疲惫、心烦或分心，不先责备，先承认：是的，我现在就是这样。",
    action: "把你此刻最明显的身体感受写成一句事实描述，不解释。"
  },
  {
    name: "放下",
    tagline: "松开那些已经抓得太紧的念头，让心有回旋的空间。",
    practice: "当你发现自己反复想着一件事，轻轻说一句“我注意到我又抓住它了”，然后把注意带回身体。",
    action: "今天做一次肩膀放松练习，呼气时有意识地下沉肩膀。"
  },
  {
    name: "感恩",
    tagline: "把习以为常的事重新看见，日常就会重新发光。",
    practice: "留意今天一个平常却支持着你的存在，比如一顿饭、一束光、一句问候。",
    action: "晚上记下今天最值得感谢的一件小事。"
  },
  {
    name: "慷慨",
    tagline: "把温柔和善意分一点给别人，也分一点给自己。",
    practice: "在日常互动里，多给别人半秒钟倾听，也给自己少一点苛责。",
    action: "今天对一个人说一句真诚而具体的感谢，或对自己说一句温柔的话。"
  }
];

const tasks = [
  {
    name: "正念赏花",
    scene: "适合在散步、通勤或经过一棵树时完成",
    guide: "停下来，看一朵花或一片叶子。不要立刻叫出它的名字，先看颜色、边缘、形状和光影。",
    reflection: "我真正看见了什么，是平时会被我忽略的？"
  },
  {
    name: "正念走路 10 分钟",
    scene: "适合去食堂、下楼取快递或饭后散步时完成",
    guide: "放慢一点步伐，感受脚掌接触地面的顺序，注意摆臂、呼吸和周围声音。",
    reflection: "当我慢下来时，身体和情绪有什么变化？"
  },
  {
    name: "正念吃一餐",
    scene: "适合早餐或今天任意一顿饭",
    guide: "第一口先不要看手机，留意食物的温度、气味、咀嚼和吞咽过程。",
    reflection: "我通常吃饭时最容易忽略什么？"
  },
  {
    name: "正念洗手",
    scene: "适合洗手间里的 30 秒微练习",
    guide: "把水流、温度、手心与手背的触感都当作练习对象，让这 30 秒完整属于你。",
    reflection: "这么短的停留，能不能也成为一种回到当下的方式？"
  },
  {
    name: "正念整理桌面",
    scene: "适合工作开始前或结束后",
    guide: "只整理一个小区域，感受拿起、放下、归位，不把它变成必须高效完成的任务。",
    reflection: "当空间被整理时，我的内在空间有变化吗？"
  },
  {
    name: "正念倾听",
    scene: "适合今天和任何一个人对话时",
    guide: "对方说话时，不急着想回应。先听声音、节奏、停顿和情绪，再开口。",
    reflection: "今天的倾听里，我少了一点什么惯性，多了一点什么空间？"
  },
  {
    name: "正念等红灯",
    scene: "适合通勤、过马路或等车时",
    guide: "红灯亮起的这几十秒，不刷手机。感受脚底、风、周围人流和自己呼吸。",
    reflection: "等待有没有可能不是浪费，而是一种恢复？"
  },
  {
    name: "正念听声音",
    scene: "适合打开窗户或坐在室内时",
    guide: "闭眼 1 分钟，只听声音的远近、高低、停顿和消失，不追随内容。",
    reflection: "今天有哪些声音原来一直都在，只是我没听见？"
  }
];

const sceneLibrary = [
  { title: "起床时", label: "1 分钟", body: "睁眼后先不碰手机，感受身体重量、被子的触感和第一口呼吸。" },
  { title: "通勤中", label: "3 分钟", body: "把一段路变成脚步练习，注意节奏、视线和城市里的颜色。" },
  { title: "工作前", label: "2 分钟", body: "开始任务前先坐定，确认身体是否紧绷，再温柔地放松肩颈。" },
  { title: "吃饭时", label: "5 分钟", body: "把前几口饭吃慢一点，让味觉而不是信息流占据注意。" },
  { title: "情绪起伏时", label: "90 秒", body: "先命名身体感觉，再决定是否要处理事情，而不是直接跟着反应走。" },
  { title: "睡前", label: "3 分钟", body: "回想今天真正注意到的一件小事，让它成为一天的落点。" }
];

const moodPresets = [
  {
    mood: "焦虑",
    answer: "试试“接纳 + 正念洗手”。先不要立刻解决全部问题，让身体先回到一个可以呼吸的位置。"
  },
  {
    mood: "很忙",
    answer: "试试“不争 + 正念等红灯”。你不需要把每一秒都利用起来，留白会让效率更稳。"
  },
  {
    mood: "心烦",
    answer: "试试“非评判 + 正念听声音”。先减少解释和内心评论，让感官接手几分钟。"
  },
  {
    mood: "提不起劲",
    answer: "试试“感恩 + 正念赏花”。从一个具体、美的细节重新点亮注意力。"
  },
  {
    mood: "平静",
    answer: "试试“初学者之心 + 正念走路”。在状态不错的时候，最适合把觉察练得更细致。"
  },
  {
    mood: "想重新开始",
    answer: "试试“信任 + 正念整理桌面”。从一个小范围的整理动作，重新建立和自己的连接。"
  }
];

const weekdayNames = ["一", "二", "三", "四", "五", "六", "日"];
const storageKeys = {
  completed: "mindful-pantries-completed-days",
  journal: "mindful-pantries-journal"
};

const attitudeName = document.querySelector("#attitude-name");
const attitudeTagline = document.querySelector("#attitude-tagline");
const attitudePractice = document.querySelector("#attitude-practice");
const attitudeAction = document.querySelector("#attitude-action");
const taskName = document.querySelector("#task-name");
const taskScene = document.querySelector("#task-scene");
const taskGuide = document.querySelector("#task-guide");
const taskReflection = document.querySelector("#task-reflection");
const completionMessage = document.querySelector("#completion-message");
const moodOptions = document.querySelector("#mood-options");
const moodResult = document.querySelector("#mood-result");
const attitudeGrid = document.querySelector("#attitude-grid");
const sceneGrid = document.querySelector("#scene-grid");
const calendarWeekdays = document.querySelector("#calendar-weekdays");
const calendarGrid = document.querySelector("#calendar-grid");
const calendarTitle = document.querySelector("#calendar-title");
const journalEntry = document.querySelector("#journal-entry");
const journalStatus = document.querySelector("#journal-status");

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const day = `${today.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getIndexFromDate(total) {
  const today = new Date();
  return (today.getDate() + today.getMonth() * 3 + today.getFullYear()) % total;
}

function renderDailyAttitude(index = getIndexFromDate(attitudes.length)) {
  const item = attitudes[index];
  attitudeName.textContent = item.name;
  attitudeTagline.textContent = item.tagline;
  attitudePractice.textContent = item.practice;
  attitudeAction.textContent = item.action;
}

function renderDailyTask(index = getIndexFromDate(tasks.length)) {
  const item = tasks[index];
  taskName.textContent = item.name;
  taskScene.textContent = item.scene;
  taskGuide.textContent = item.guide;
  taskReflection.textContent = item.reflection;
}

function renderMoodOptions() {
  moodPresets.forEach((preset, index) => {
    const button = document.createElement("button");
    button.className = "mood-chip";
    button.type = "button";
    button.textContent = preset.mood;
    button.addEventListener("click", () => {
      document.querySelectorAll(".mood-chip").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      moodResult.textContent = preset.answer;
    });

    if (index === 0) {
      button.classList.add("active");
      moodResult.textContent = preset.answer;
    }

    moodOptions.appendChild(button);
  });
}

function renderAttitudeGrid() {
  attitudes.forEach((item) => {
    const tile = document.createElement("article");
    tile.className = "attitude-tile";
    tile.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.tagline}</p>
    `;
    attitudeGrid.appendChild(tile);
  });
}

function renderSceneGrid() {
  sceneLibrary.forEach((item) => {
    const card = document.createElement("article");
    card.className = "scene-card";
    card.innerHTML = `
      <span>${item.label}</span>
      <h4>${item.title}</h4>
      <p>${item.body}</p>
    `;
    sceneGrid.appendChild(card);
  });
}

function getCompletedDays() {
  return JSON.parse(localStorage.getItem(storageKeys.completed) || "[]");
}

function saveCompletedDay() {
  const current = new Set(getCompletedDays());
  current.add(getTodayKey());
  localStorage.setItem(storageKeys.completed, JSON.stringify([...current]));
}

function renderCalendar() {
  calendarWeekdays.innerHTML = "";
  calendarGrid.innerHTML = "";

  weekdayNames.forEach((day) => {
    const label = document.createElement("div");
    label.textContent = day;
    calendarWeekdays.appendChild(label);
  });

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;
  const completed = new Set(getCompletedDays());
  const journalMap = JSON.parse(localStorage.getItem(storageKeys.journal) || "{}");

  calendarTitle.textContent = `${year} 年 ${month + 1} 月正念日历`;

  for (let index = 0; index < startOffset; index += 1) {
    const empty = document.createElement("div");
    empty.className = "day-cell empty";
    calendarGrid.appendChild(empty);
  }

  for (let day = 1; day <= lastDate; day += 1) {
    const dateKey = `${year}-${`${month + 1}`.padStart(2, "0")}-${`${day}`.padStart(2, "0")}`;
    const cell = document.createElement("div");
    cell.className = "day-cell";

    if (completed.has(dateKey)) {
      cell.classList.add("completed");
    }

    const note = journalMap[dateKey] ? `${journalMap[dateKey].slice(0, 18)}${journalMap[dateKey].length > 18 ? "..." : ""}` : "留白也算练习";
    cell.innerHTML = `
      <div class="day-number">${day}</div>
      <div class="day-note">${note}</div>
    `;
    calendarGrid.appendChild(cell);
  }
}

function saveJournal() {
  const value = journalEntry.value.trim();

  if (!value) {
    journalStatus.textContent = "写下一句今天真正注意到的事，再保存。";
    return;
  }

  const current = JSON.parse(localStorage.getItem(storageKeys.journal) || "{}");
  current[getTodayKey()] = value;
  localStorage.setItem(storageKeys.journal, JSON.stringify(current));
  journalStatus.textContent = "已保存。今天的观察已经留在你的日历里。";
  renderCalendar();
}

function loadJournalForToday() {
  const current = JSON.parse(localStorage.getItem(storageKeys.journal) || "{}");
  journalEntry.value = current[getTodayKey()] || "";
}

document.querySelector("#refresh-attitude").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * attitudes.length);
  renderDailyAttitude(randomIndex);
});

document.querySelector("#draw-task").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  renderDailyTask(randomIndex);
});

document.querySelector("#complete-task").addEventListener("click", () => {
  saveCompletedDay();
  completionMessage.textContent = "今天的练习已放进你的日历足迹。做完之后，别忘了留下一句观察。";
  renderCalendar();
});

document.querySelector("#save-journal").addEventListener("click", saveJournal);

renderDailyAttitude();
renderDailyTask();
renderMoodOptions();
renderAttitudeGrid();
renderSceneGrid();
loadJournalForToday();
renderCalendar();
