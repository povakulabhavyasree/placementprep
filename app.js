/* =====================================================
   Placement Prep Starter – Application Logic
   ===================================================== */

// ===================== DATA LAYER =====================

const ROADMAP_DATA = {
  // ---- Week generators per branch+goal combination ----

  categories: {
    coding:        { label: "Coding & DSA",       icon: "🧩", color: "#4f9cf9" },
    tools:         { label: "Tools & Git",         icon: "🔧", color: "#34d399" },
    linkedin:      { label: "LinkedIn & Resume",   icon: "💼", color: "#a78bfa" },
    communication: { label: "Communication",       icon: "🗣️", color: "#fb923c" },
    projects:      { label: "Projects",            icon: "🛠️", color: "#f472b6" },
    domain:        { label: "Domain Knowledge",    icon: "📡", color: "#fbbf24" },
    softskills:    { label: "Soft Skills",         icon: "🌟", color: "#e879f9" },
    ml:            { label: "AI / ML Basics",      icon: "🤖", color: "#38bdf8" },
  },

  quotes: [
    "The best time to plant a tree was 20 years ago. The second best time is now. Start today!",
    "Consistency beats intensity. 30 minutes a day beats 5 hours once a week.",
    "Every expert was once a beginner. Your first year is the perfect time to start.",
    "You don't have to be great to start, but you have to start to be great.",
    "Small daily improvements over time lead to stunning results.",
    "The discipline you build in 1st year is your unfair advantage in 3rd year.",
    "LinkedIn connections made early are worth 10x more than those made at the last minute.",
    "Code every day, even if it's just 10 lines. Habit > Intensity.",
    "Your GitHub profile is your silent resume. Start filling it from today.",
    "Communication is 50% of placement success. Practice speaking every week.",
  ],

  weekThemes: [
    "🌱 Foundation & Mindset",
    "⌨️ Coding Fundamentals",
    "🔧 Tools & Professional Setup",
    "💡 Problem Solving Begins",
    "🌐 Projects & Portfolio",
    "💼 Personal Branding",
    "🗣️ Communication & Soft Skills",
    "🎯 Final Review & Habits",
  ],

  resources: {
    python_basics:     { label: "Python Crash Course", url: "https://realpython.com/start-here/" },
    c_basics:          { label: "C Language Tutorial", url: "https://www.learn-c.org/" },
    java_basics:       { label: "Java Basics – Oracle", url: "https://dev.java/learn/" },
    cpp_basics:        { label: "C++ Tutorial", url: "https://www.learncpp.com/" },
    git_basics:        { label: "Git in 30 min – Atlassian", url: "https://www.atlassian.com/git/tutorials/what-is-version-control" },
    github_profile:    { label: "Perfect GitHub Profile Guide", url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme" },
    linkedin_guide:    { label: "LinkedIn Student Guide", url: "https://university.linkedin.com/linkedin-for-students" },
    resume_template:   { label: "Jake's Resume Template", url: "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs" },
    dsa_roadmap:       { label: "DSA Roadmap – Striver", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
    leetcode:          { label: "LeetCode – Easy Problems", url: "https://leetcode.com/problemset/all/?difficulty=EASY" },
    cs50:              { label: "CS50 – Harvard Free Course", url: "https://cs50.harvard.edu/x/" },
    vim_basics:        { label: "Vim Adventures (game)", url: "https://vim-adventures.com/" },
    vscode:            { label: "VS Code Setup Guide", url: "https://code.visualstudio.com/docs/introvideos/basics" },
    typing_practice:   { label: "Typing Practice – Keybr", url: "https://www.keybr.com/" },
    html_css:          { label: "HTML/CSS – freeCodeCamp", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
    js_basics:         { label: "JavaScript.info", url: "https://javascript.info/" },
    communication:     { label: "English Communication – Coursera", url: "https://www.coursera.org/learn/how-to-speak" },
    toastmasters:      { label: "Toastmasters International", url: "https://www.toastmasters.org/" },
    youtube_tech:      { label: "YouTube – CS Channels List", url: "https://www.youtube.com/@TechWithTim" },
    python_projects:   { label: "Python Project Ideas", url: "https://realpython.com/tutorials/projects/" },
    portfolio_guide:   { label: "Dev Portfolio Guide", url: "https://github.com/nicedoc/awesome-portfolio" },
    oop_concepts:      { label: "OOP Concepts – GeeksForGeeks", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
    arrays_strings:    { label: "Arrays & Strings – GFG", url: "https://www.geeksforgeeks.org/array-data-structure/" },
    ml_intro:          { label: "ML Crash Course – Google", url: "https://developers.google.com/machine-learning/crash-course" },
    data_science:      { label: "Data Science Roadmap", url: "https://roadmap.sh/data-science" },
    webdev_roadmap:    { label: "Web Dev Roadmap", url: "https://roadmap.sh/frontend" },
    fullstack_guide:   { label: "Full Stack Guide – The Odin Project", url: "https://www.theodinproject.com/" },
    competitive:       { label: "CP Guide – Codeforces", url: "https://codeforces.com/blog/entry/99660" },
    codeforces:        { label: "Codeforces – DIV 4 Problems", url: "https://codeforces.com/problemset?tags=800" },
    aptitude:          { label: "IndiaBix Aptitude", url: "https://www.indiabix.com/" },
    time_management:   { label: "Time Management – James Clear", url: "https://jamesclear.com/time-management" },
    notion_template:   { label: "Notion Student Template", url: "https://www.notion.so/templates/student-os" },
    circuits:          { label: "Circuits – CircuitLab", url: "https://www.circuitlab.com/" },
    ece_roadmap:       { label: "ECE Placement Guide", url: "https://www.geeksforgeeks.org/best-resources-for-ece-students/" },
    matlab:            { label: "MATLAB Onramp – Free", url: "https://matlabacademy.mathworks.com/" },
    autocad:           { label: "AutoCAD Intro – Autodesk", url: "https://www.autodesk.com/campaigns/autocad-online" },
    solid_works:       { label: "SolidWorks Tutorials", url: "https://www.solidworks.com/support/home/learning" },
    core_engg:         { label: "Core Engineering Roadmap – GFG", url: "https://www.geeksforgeeks.org/different-job-roles-in-core-engineering/" },
    kaggle:            { label: "Kaggle – Learn for Free", url: "https://www.kaggle.com/learn" },
    tensorflow:        { label: "TensorFlow.js Playground", url: "https://playground.tensorflow.org/" },
    numpy:             { label: "NumPy Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" },
    pandas:            { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/" },
    soft_skills_book:  { label: "How to Win Friends – Free Summary", url: "https://www.blinkist.com/en/books/how-to-win-friends-and-influence-people-en" },
    interview_prep:    { label: "Interview Prep Guide – GFG", url: "https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/" },
    github_actions:    { label: "GitHub Actions Intro", url: "https://docs.github.com/en/actions" },
    markdown_guide:    { label: "Markdown Guide", url: "https://www.markdownguide.org/" },
  }
};

// ===================== ROADMAP GENERATOR =====================

function generateRoadmap(profile) {
  const { branch, goal, skill, hours, interests, name } = profile;
  const isAbsolute   = skill === "absolute";
  const isBeginner   = skill === "beginner";
  const isCS         = ["CSE", "IT", "AIDS", "AIML"].includes(branch);
  const isECE        = ["ECE", "EEE"].includes(branch);
  const isMech       = branch === "MECH";
  const isCivil      = branch === "CIVIL";
  const isData       = goal === "DATA";
  const isFullStack  = goal === "FULLSTACK";
  const isCore       = goal === "CORE";
  const isSWE        = goal === "SWE" || goal === "GENERAL";

  const R  = ROADMAP_DATA.resources;
  const C  = ROADMAP_DATA.categories;

  // Helper to build a task
  const task = (text, category, duration, resource, difficulty = "easy") => ({
    id: `${category}-${Math.random().toString(36).slice(2,9)}`,
    text, category, duration, resource, difficulty,
    completed: false
  });

  // ----- BASE WEEKS (common for all) -----
  const weeks = [
    // WEEK 1 — Foundation
    {
      title: "Set the Foundation",
      theme: ROADMAP_DATA.weekThemes[0],
      tasks: [
        task("Read about the placement process at top companies and write down your 3-year plan", "softskills", "1 hr", null, "easy"),
        task("Set up VS Code with essential extensions (Prettier, GitLens, auto-save)", "tools", "1 hr", R.vscode, "easy"),
        task("Learn touch-typing basics — aim for 35+ WPM", "tools", "20 min/day", R.typing_practice, "easy"),
        task("Create a structured Notion workspace for tracking prep", "tools", "30 min", R.notion_template, "easy"),
        task("Watch CS50 Week 0 – Scratch & computational thinking", "coding", "1.5 hr", R.cs50, "easy"),
        ...(isAbsolute ? [
          task("Understand what programming is – read 'Hello World' articles", "coding", "45 min", R.youtube_tech, "easy"),
        ] : []),
        task("Connect with 5 seniors on LinkedIn for placement insights", "linkedin", "30 min", null, "easy"),
      ]
    },

    // WEEK 2 — Coding Fundamentals
    {
      title: "Learn Your First Language",
      theme: ROADMAP_DATA.weekThemes[1],
      tasks: [
        ...(isCS  ? [task("Start Python: variables, data types, input/output, conditionals", "coding", "2 hr", R.python_basics, "easy")] : []),
        ...(!isCS && !isECE ? [task("Start C language: syntax, variables, printf/scanf basics", "coding", "2 hr", R.c_basics, "easy")] : []),
        ...(isECE ? [task("Start C basics: variables, control flow, functions", "coding", "1.5 hr", R.c_basics, "easy")] : []),
        task("Practice loops: print patterns using for/while loops (5 patterns)", "coding", "1.5 hr", R.leetcode, "easy"),
        task("Solve 5 beginner warmup problems on LeetCode (Two Sum, Palindrome, etc.)", "coding", "2 hr", R.leetcode, "easy"),
        task("Create your GitHub account and set a profile picture + bio", "tools", "30 min", R.github_profile, "easy"),
        task("Learn Git basics: init, add, commit, push to GitHub", "tools", "1.5 hr", R.git_basics, "easy"),
        ...(isBeginner || isAbsolute ? [task("Complete 10 aptitude questions (number series, percentages)", "coding", "45 min", R.aptitude, "easy")] : []),
      ]
    },

    // WEEK 3 — Tools & Professional Setup
    {
      title: "Build Your Professional Identity",
      theme: ROADMAP_DATA.weekThemes[2],
      tasks: [
        task("Set up a complete LinkedIn profile: photo, headline, about section, contact info", "linkedin", "1.5 hr", R.linkedin_guide, "easy"),
        task("Add 3 relevant skills on LinkedIn and request connections from classmates/professors", "linkedin", "30 min", R.linkedin_guide, "easy"),
        task("Learn Markdown and write a beautiful GitHub README for your profile", "tools", "1 hr", R.markdown_guide, "easy"),
        task("Set up a simple resume skeleton using Jake's LaTeX template", "linkedin", "1 hr", R.resume_template, "easy"),
        task("Practice functions in your language: write 5 helper functions", "coding", "1.5 hr", isCS ? R.python_basics : R.c_basics, "easy"),
        task("Study time complexity basics: O(1), O(n), O(n²) with examples", "coding", "1 hr", R.dsa_roadmap, "medium"),
        task("Record yourself speaking for 2 minutes about your branch – watch it back", "communication", "30 min", R.communication, "easy"),
      ]
    },

    // WEEK 4 — Problem Solving
    {
      title: "Start Problem Solving",
      theme: ROADMAP_DATA.weekThemes[3],
      tasks: [
        task("Learn Arrays and Strings in detail with operations", "coding", "2 hr", R.arrays_strings, "medium"),
        task("Solve 8 easy Array problems on LeetCode", "coding", "2.5 hr", R.leetcode, "easy"),
        task("Learn OOP basics: classes, objects, methods, constructors", "coding", "1.5 hr", R.oop_concepts, "medium"),
        task("Push a small 'Hello OOP' project to GitHub with a good README", "tools", "1 hr", R.github_profile, "easy"),
        task("Complete 15 aptitude questions – time & work, ratios, averages", "coding", "1 hr", R.aptitude, "medium"),
        task("Follow 5 industry leaders on LinkedIn and engage with 3 posts", "linkedin", "20 min", null, "easy"),
        ...(isData ? [task("Install Anaconda and run your first Jupyter notebook", "ml", "1 hr", R.kaggle, "easy")] : []),
      ]
    },

    // WEEK 5 — Projects
    {
      title: "Start Your First Project",
      theme: ROADMAP_DATA.weekThemes[4],
      tasks: [
        ...(isCS && (isFullStack || isSWE) ? [
          task("Learn HTML basics: tags, headings, links, forms, divs", "projects", "1.5 hr", R.html_css, "easy"),
          task("Learn CSS basics: selectors, colors, flexbox, responsive units", "projects", "1.5 hr", R.html_css, "easy"),
        ] : []),
        ...(isCS && isData ? [
          task("Learn NumPy basics: arrays, operations, slicing", "ml", "1.5 hr", R.numpy, "easy"),
          task("Learn Pandas basics: DataFrames, read CSV, describe, groupby", "ml", "1.5 hr", R.pandas, "easy"),
        ] : []),
        ...(!isCS ? [
          task("Build a simple calculator in C/Python and push to GitHub", "projects", "2 hr", isCS ? R.python_projects : R.c_basics, "easy"),
        ] : []),
        task("Build Beginner Project #1: To-Do list app or Calculator with GUI", "projects", "3 hr", isCS ? R.python_projects : R.c_basics, "medium"),
        task("Write a concise project description for your GitHub README", "tools", "30 min", R.github_profile, "easy"),
        task("Add the project to LinkedIn profile under 'Featured'", "linkedin", "15 min", R.linkedin_guide, "easy"),
        task("Solve 5 more LeetCode easy problems (focus on Strings)", "coding", "1.5 hr", R.leetcode, "easy"),
      ]
    },

    // WEEK 6 — Personal Branding
    {
      title: "Grow Your Brand",
      theme: ROADMAP_DATA.weekThemes[5],
      tasks: [
        task("Write your first LinkedIn post about your learning journey (min 150 words)", "linkedin", "30 min", R.linkedin_guide, "easy"),
        task("Complete the 'Education' section on LinkedIn with your college details + CGPA", "linkedin", "20 min", null, "easy"),
        task("Populate resume with education, skills, and Project #1", "linkedin", "1.5 hr", R.resume_template, "medium"),
        task("Learn Searching & Sorting: Binary Search, Bubble Sort, Selection Sort", "coding", "2 hr", R.dsa_roadmap, "medium"),
        task("Solve 5 medium LeetCode problems (Sorting/Searching)", "coding", "2 hr", R.leetcode, "medium"),
        ...(isFullStack ? [
          task("Learn JS basics: variables, functions, DOM manipulation", "projects", "2 hr", R.js_basics, "medium"),
        ] : []),
        ...(isData || goal === "AIML" ? [
          task("Complete 1 Kaggle tutorial: Titanic survival prediction", "ml", "2 hr", R.kaggle, "medium"),
        ] : []),
        task("Ask a professor or senior to review your resume – implement feedback", "linkedin", "1 hr", null, "easy"),
      ]
    },

    // WEEK 7 — Communication & Soft Skills
    {
      title: "Communication & Soft Skills",
      theme: ROADMAP_DATA.weekThemes[6],
      tasks: [
        task("Watch 'How to Speak' by MIT Professor Patrick Winston (YouTube – 1 hr)", "communication", "1 hr", R.communication, "easy"),
        task("Practice giving a 3-minute self-introduction speech daily for 5 days", "communication", "15 min/day", R.communication, "easy"),
        task("Do 1 mock interview with a friend or record yourself answering: 'Tell me about yourself'", "communication", "45 min", null, "medium"),
        task("Read 'How to Win Friends & Influence People' summary (key chapters)", "softskills", "45 min", R.soft_skills_book, "easy"),
        task("Attend at least 1 college technical talk/seminar this week", "softskills", "1.5 hr", null, "easy"),
        task("Learn Recursion basics with examples: factorial, fibonacci", "coding", "2 hr", R.dsa_roadmap, "medium"),
        task("Solve 5 recursion problems on LeetCode", "coding", "1.5 hr", R.leetcode, "medium"),
        ...(isMech || isCivil ? [
          task("Research 1 core domain company and their hiring criteria for freshers", "domain", "1 hr", R.core_engg, "easy"),
        ] : []),
      ]
    },

    // WEEK 8 — Review & Habits
    {
      title: "Consolidate & Plan Ahead",
      theme: ROADMAP_DATA.weekThemes[7],
      tasks: [
        task("Review all 8 weeks: mark incomplete tasks and create a Week 9+ plan", "softskills", "1 hr", null, "easy"),
        task("Solve a 'mini contest': 3 LeetCode problems in 60 minutes", "coding", "1 hr", R.leetcode, "hard"),
        task("Update GitHub profile: pin 2 best repos, add a professional bio", "tools", "30 min", R.github_profile, "easy"),
        task("Update LinkedIn: add new skills, projects, and a weekly post", "linkedin", "45 min", null, "easy"),
        task("Send a cold message to 3 alumni from your college working at companies you admire", "communication", "30 min", null, "medium"),
        task("Set a recurring 30-min daily DSA practice habit for the next semester", "softskills", "20 min", R.time_management, "easy"),
        task("Solve 5 beginner competitive programming problems on Codeforces", "coding", "2 hr", R.codeforces, "medium"),
        task("Celebrate your progress! Share a LinkedIn post about completing 8 weeks 🎉", "linkedin", "15 min", null, "easy"),
      ]
    },
  ];

  // ---- Domain-specific enrichment ----
  if (isECE) {
    weeks[1].tasks.push(task("Start learning basics of digital logic gates (AND, OR, NOT, NAND)", "domain", "1 hr", R.ece_roadmap, "easy"));
    weeks[4].tasks.push(task("Explore basic circuit simulation with CircuitLab (online tool)", "domain", "1 hr", R.circuits, "easy"));
    weeks[6].tasks.push(task("Read about embedded systems and microcontrollers – beginner roadmap", "domain", "1 hr", R.ece_roadmap, "medium"));
  }
  if (isMech) {
    weeks[1].tasks.push(task("Learn basic AutoCAD navigation and sketching", "domain", "1.5 hr", R.autocad, "easy"));
    weeks[4].tasks.push(task("Try SolidWorks intro module – create a basic part", "domain", "1.5 hr", R.solid_works, "medium"));
    weeks[6].tasks.push(task("Research core mechanical roles: design, manufacturing, ESDG, and PSU paths", "domain", "1 hr", R.core_engg, "easy"));
  }
  if (isData) {
    weeks[3].tasks.push(task("Complete Google's ML Crash Course – first 3 modules", "ml", "2 hr", R.ml_intro, "medium"));
    weeks[7].tasks.push(task("Set up a Kaggle account and complete your profile", "ml", "30 min", R.kaggle, "easy"));
  }
  if (isFullStack) {
    weeks[7].tasks.push(task("Deploy your beginner project to GitHub Pages (free hosting)", "projects", "1 hr", R.github_profile, "medium"));
  }

  return weeks;
}

// ===================== APP STATE =====================

let state = {
  profile: null,
  roadmap: [],
  activeWeek: 0,
};

// ===================== PERSISTENCE =====================

const STORAGE_KEY = "placementPrepStarter_v2";

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) { Object.assign(state, JSON.parse(saved)); return true; }
  } catch(e) {}
  return false;
}

// ===================== UI HELPERS =====================

function showToast(msg, color = "green") {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.background = color === "green"
    ? "rgba(52,211,153,0.15)" : "rgba(79,156,249,0.15)";
  toast.style.borderColor = color === "green"
    ? "rgba(52,211,153,0.35)" : "rgba(79,156,249,0.35)";
  toast.style.color = color === "green" ? "#34d399" : "#4f9cf9";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function animateCounter(el, target, suffix = "") {
  let current = 0;
  const step  = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

function spawnConfettiAt(x, y) {
  const ring = document.createElement("div");
  ring.className = "confetti-ring";
  ring.style.left = `${x - 25}px`;
  ring.style.top  = `${y - 25}px`;
  document.body.appendChild(ring);
  setTimeout(() => ring.remove(), 700);
}

// ===================== ONBOARDING FORM =====================

let selectedSkill  = "absolute";
const selectedInterests = new Set();

document.querySelectorAll(".pill[data-value]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill[data-value]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedSkill = btn.dataset.value;
  });
});

document.querySelectorAll(".pill-interest").forEach(btn => {
  btn.addEventListener("click", () => {
    if (selectedInterests.has(btn.dataset.value)) {
      selectedInterests.delete(btn.dataset.value);
      btn.classList.remove("selected");
    } else {
      selectedInterests.add(btn.dataset.value);
      btn.classList.add("selected");
    }
  });
});

const hoursRange = document.getElementById("weeklyHours");
const hoursDisplay = document.getElementById("hoursDisplay");
hoursRange?.addEventListener("input", () => { hoursDisplay.textContent = hoursRange.value; });

document.getElementById("onboardingForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name   = document.getElementById("studentName").value.trim();
  const branch = document.getElementById("branch").value;
  const goal   = document.getElementById("goal").value;

  if (!name || !branch || !goal) {
    showToast("⚠️ Please fill all required fields!", "blue");
    return;
  }

  const btn = document.getElementById("generateBtn");
  const btnText = btn.querySelector(".btn-text");
  const btnLoader = btn.querySelector(".btn-loader");
  btn.disabled = true;
  btnText.hidden = true;
  btnLoader.hidden = false;

  // Simulate AI generation delay
  setTimeout(() => {
    state.profile = { name, branch, goal, skill: selectedSkill, hours: +hoursRange.value, interests: [...selectedInterests] };
    state.roadmap = generateRoadmap(state.profile);
    state.activeWeek = 0;
    saveState();
    renderRoadmap();

    btn.disabled = false;
    btnText.hidden = false;
    btnLoader.hidden = true;
  }, 1400);
});

// ===================== RENDER ROADMAP =====================

const BRANCH_LABELS = { CSE:"CSE", IT:"IT", ECE:"ECE", EEE:"EEE", MECH:"Mechanical", CIVIL:"Civil", AIDS:"AI & DS", AIML:"AI & ML", OTHER:"Engineering" };
const GOAL_LABELS   = { SWE:"SWE/Product", CORE:"Core/PSU", DATA:"Data Science", FULLSTACK:"Full Stack", STARTUP:"Startup", GENERAL:"General Exploration" };

function renderRoadmap() {
  document.getElementById("onboardingScreen").hidden = true;
  document.getElementById("onboardingScreen").classList.remove("active");
  const roadmapScreen = document.getElementById("roadmapScreen");
  roadmapScreen.hidden = false;

  const { profile, roadmap } = state;

  // Profile bar
  const initials = profile.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0,2);
  document.getElementById("profileBar").innerHTML = `
    <div class="profile-avatar">${initials}</div>
    <div class="profile-info">
      <div class="profile-name">Hi, ${profile.name}! 👋</div>
      <div class="profile-meta">${profile.hours} hrs/week · ${profile.skill === "absolute" ? "Absolute Beginner" : profile.skill === "beginner" ? "Knows Basics" : "Intermediate"}</div>
    </div>
    <div class="profile-tags">
      <span class="profile-tag tag-blue">${BRANCH_LABELS[profile.branch] || profile.branch}</span>
      <span class="profile-tag tag-purple">${GOAL_LABELS[profile.goal] || profile.goal}</span>
      ${profile.interests.length ? `<span class="profile-tag tag-green">+${profile.interests.length} interests</span>` : ""}
    </div>
  `;

  // Dashboard subtitle
  document.getElementById("dashSub").textContent = `Personalized for ${BRANCH_LABELS[profile.branch]} → ${GOAL_LABELS[profile.goal]}`;

  // Week tabs
  const tabsEl = document.getElementById("weekTabs");
  tabsEl.innerHTML = roadmap.map((week, i) => {
    const done = week.tasks.filter(t => t.completed).length;
    const total = week.tasks.length;
    return `<button class="week-tab${i === state.activeWeek ? " active" : ""}" id="tab-${i}" role="tab" aria-selected="${i === state.activeWeek}" data-week="${i}">
      Week ${i + 1}
      ${done === total && total > 0 ? `<span class="tab-badge">✓</span>` : ""}
    </button>`;
  }).join("");

  tabsEl.querySelectorAll(".week-tab").forEach(tab => {
    tab.addEventListener("click", () => switchWeek(+tab.dataset.week));
  });

  // Render all week sections
  const contentEl = document.getElementById("roadmapContent");
  contentEl.innerHTML = roadmap.map((week, wi) => renderWeekSection(week, wi)).join("");

  // Attach task checkboxes
  contentEl.querySelectorAll(".task-item").forEach(item => {
    item.addEventListener("click", (e) => {
      if (e.target.tagName === "A") return; // don't intercept resource links
      toggleTask(item.dataset.week, item.dataset.task, e);
    });
  });

  // Attach category expand/collapse
  contentEl.querySelectorAll(".category-header").forEach(header => {
    header.addEventListener("click", () => {
      header.closest(".category-card").classList.toggle("expanded");
    });
  });

  showWeek(state.activeWeek);
  updateProgress();
  renderMotivational();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderWeekSection(week, wi) {
  // Group tasks by category
  const catGroups = {};
  week.tasks.forEach(t => {
    if (!catGroups[t.category]) catGroups[t.category] = [];
    catGroups[t.category].push(t);
  });

  const catHTML = Object.entries(catGroups).map(([catKey, tasks]) => {
    const cat = ROADMAP_DATA.categories[catKey] || { label: catKey, icon: "📌", color: "#999" };
    const done = tasks.filter(t => t.completed).length;
    return `
      <div class="category-card ${done === tasks.length && tasks.length > 0 ? "completed-cat" : ""} expanded" data-cat="${catKey}">
        <div class="category-header">
          <span class="cat-icon" style="background:${cat.color}22">${cat.icon}</span>
          <span class="cat-title">${cat.label}</span>
          <span class="cat-count">${done}/${tasks.length}</span>
          <span class="cat-chevron">▾</span>
        </div>
        <div class="task-list">
          ${tasks.map(t => renderTaskItem(t, wi)).join("")}
        </div>
      </div>`;
  }).join("");

  const doneTasks  = week.tasks.filter(t => t.completed).length;
  const totalTasks = week.tasks.length;
  const pct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return `
    <div class="week-section" id="week-${wi}" data-wi="${wi}">
      <div class="week-header">
        <div class="week-number">W${wi + 1}</div>
        <div class="week-info">
          <div class="week-title">${week.title}</div>
          <div class="week-theme">${week.theme}</div>
          <div class="week-progress-bar">
            <div class="week-progress-fill" style="width:${pct}%"></div>
          </div>
        </div>
      </div>
      <div class="task-categories">${catHTML}</div>
    </div>`;
}

function renderTaskItem(task, wi) {
  const diff = task.difficulty;
  const res  = task.resource;
  return `
    <div class="task-item ${task.completed ? "completed" : ""}" data-week="${wi}" data-task="${task.id}">
      <div class="task-checkbox"></div>
      <div class="task-content">
        <div class="task-text">${task.text}</div>
        <div class="task-meta">
          ${task.duration ? `<span class="task-duration">⏱ ${task.duration}</span>` : ""}
          ${res ? `<span class="task-resource"><a href="${res.url}" target="_blank" rel="noopener">${res.label} ↗</a></span>` : ""}
          <span class="task-difficulty diff-${diff}">${diff}</span>
        </div>
      </div>
    </div>`;
}

function switchWeek(index) {
  state.activeWeek = index;
  document.querySelectorAll(".week-tab").forEach(t => {
    t.classList.toggle("active", +t.dataset.week === index);
    t.setAttribute("aria-selected", +t.dataset.week === index);
  });
  showWeek(index);
  saveState();
}

function showWeek(index) {
  document.querySelectorAll(".week-section").forEach((s, i) => {
    s.classList.toggle("visible", i === index);
  });
}

// ===================== TASK TOGGLE =====================

function toggleTask(weekIdx, taskId, event) {
  const week = state.roadmap[weekIdx];
  if (!week) return;
  const task = week.tasks.find(t => t.id === taskId);
  if (!task) return;
  task.completed = !task.completed;
  saveState();

  // Visual update
  const itemEl = document.querySelector(`.task-item[data-task="${taskId}"]`);
  if (itemEl) {
    itemEl.classList.toggle("completed", task.completed);
    if (task.completed) {
      spawnConfettiAt(event.clientX, event.clientY);
      showToast("✅ Task marked complete!");
    }
  }

  updateProgress();
  refreshWeekTab(weekIdx);
  refreshWeekProgress(weekIdx);
  refreshCategoryCount(weekIdx, task.category);
}

function refreshCategoryCount(wi, catKey) {
  const weekEl = document.getElementById(`week-${wi}`);
  if (!weekEl) return;
  const catCard = weekEl.querySelector(`[data-cat="${catKey}"]`);
  if (!catCard) return;
  const tasks = state.roadmap[wi].tasks.filter(t => t.category === catKey);
  const done  = tasks.filter(t => t.completed).length;
  const countEl = catCard.querySelector(".cat-count");
  if (countEl) countEl.textContent = `${done}/${tasks.length}`;
}

function refreshWeekProgress(wi) {
  const week = state.roadmap[wi];
  const done  = week.tasks.filter(t => t.completed).length;
  const total = week.tasks.length;
  const pct   = total ? Math.round((done / total) * 100) : 0;
  const weekEl = document.getElementById(`week-${wi}`);
  if (weekEl) {
    const fill = weekEl.querySelector(".week-progress-fill");
    if (fill) fill.style.width = pct + "%";
  }
}

function refreshWeekTab(wi) {
  const tab   = document.getElementById(`tab-${wi}`);
  if (!tab) return;
  const week  = state.roadmap[wi];
  const done  = week.tasks.filter(t => t.completed).length;
  const total = week.tasks.length;
  const badge = tab.querySelector(".tab-badge");
  if (done === total && total > 0) {
    if (!badge) tab.insertAdjacentHTML("beforeend", `<span class="tab-badge">✓</span>`);
  } else {
    badge?.remove();
  }
}

function updateProgress() {
  const allTasks  = state.roadmap.flatMap(w => w.tasks);
  const done      = allTasks.filter(t => t.completed).length;
  const total     = allTasks.length;
  const pct       = total ? Math.round((done / total) * 100) : 0;

  // Ring
  const circumference = 314; // 2 * PI * 50
  const offset = circumference - (circumference * pct / 100);
  const ring = document.getElementById("ringFill");
  if (ring) ring.style.strokeDashoffset = offset;

  // Text
  const pctEl = document.getElementById("ringPct");
  if (pctEl) animateCounter(pctEl, pct, "%");

  // Counts
  const doneEl  = document.getElementById("doneCount");
  const totalEl = document.getElementById("totalCount");
  if (doneEl)  animateCounter(doneEl, done);
  if (totalEl) totalEl.textContent = total;
}

// ===================== MOTIVATIONAL QUOTE =====================

function renderMotivational() {
  const quotes = ROADMAP_DATA.quotes;
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  const motEl = document.getElementById("motText");
  if (motEl) motEl.textContent = q;
}

// ===================== EXPORT =====================

document.getElementById("exportBtn")?.addEventListener("click", () => {
  if (!state.profile) { showToast("Generate your roadmap first!", "blue"); return; }
  const lines = [];
  lines.push(`PLACEMENT PREP ROADMAP – ${state.profile.name.toUpperCase()}`);
  lines.push(`Branch: ${state.profile.branch} | Goal: ${state.profile.goal} | Skill: ${state.profile.skill}`);
  lines.push("=".repeat(60));
  lines.push("");
  state.roadmap.forEach((week, wi) => {
    lines.push(`WEEK ${wi + 1}: ${week.title}`);
    lines.push(`Theme: ${week.theme}`);
    lines.push("-".repeat(40));
    week.tasks.forEach((t, ti) => {
      lines.push(`  ${t.completed ? "[x]" : "[ ]"} ${ti + 1}. ${t.text}`);
      if (t.resource) lines.push(`       Resource: ${t.resource.url}`);
    });
    lines.push("");
  });
  document.getElementById("exportText").value = lines.join("\n");
  document.getElementById("exportModal").hidden = false;
});

document.getElementById("closeExport")?.addEventListener("click", () => {
  document.getElementById("exportModal").hidden = true;
});
document.getElementById("exportModal")?.addEventListener("click", (e) => {
  if (e.target === document.getElementById("exportModal"))
    document.getElementById("exportModal").hidden = true;
});

document.getElementById("copyBtn")?.addEventListener("click", () => {
  const text = document.getElementById("exportText");
  text.select();
  navigator.clipboard?.writeText(text.value).then(() => {
    showToast("📋 Copied to clipboard!");
  }).catch(() => {
    document.execCommand("copy");
    showToast("📋 Copied to clipboard!");
  });
});

// ===================== RESET =====================

document.getElementById("resetBtn")?.addEventListener("click", () => {
  if (confirm("Reset your roadmap and start over?")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
});

// ===================== STATS COUNTER ANIMATION =====================

function animateHeroStats() {
  document.querySelectorAll(".stat-num[data-target]").forEach(el => {
    animateCounter(el, +el.dataset.target);
  });
}

// ===================== PARTICLES =====================

function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left   = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 20 + 15) + "s";
    p.style.animationDelay = -(Math.random() * 20) + "s";
    p.style.opacity = (Math.random() * 0.4 + 0.1).toString();
    container.appendChild(p);
  }
}

// ===================== SVG GRADIENT DEFS =====================

function injectSVGDefs() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
  svg.innerHTML = `<defs>
    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f9cf9"/>
      <stop offset="50%" stop-color="#a78bfa"/>
      <stop offset="100%" stop-color="#f472b6"/>
    </linearGradient>
  </defs>`;
  document.body.prepend(svg);
}

// ===================== BOOT =====================

function init() {
  injectSVGDefs();
  createParticles();

  const hasSaved = loadState();
  if (hasSaved && state.profile && state.roadmap.length > 0) {
    renderRoadmap();
    showToast("Welcome back! Progress restored 🔥", "blue");
  } else {
    animateHeroStats();
    document.getElementById("onboardingScreen").removeAttribute("hidden");
  }
}

document.addEventListener("DOMContentLoaded", init);
