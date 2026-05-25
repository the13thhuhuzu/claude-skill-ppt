import fs from "node:fs";
import path from "node:path";

const root = "/Users/huhuzu/Documents/codex项目/PDF合并-html演示";
const pptDir = path.join(root, "ppt");
const imageDir = path.join(pptDir, "images");
const templatePath = "/Users/huhuzu/.codex/skills/guizang-ppt-skill/assets/template.html";

fs.mkdirSync(imageDir, { recursive: true });

const visualSpecs = {
  "01-cover-agent-worker.svg": { title: "数字员工", subtitle: "从聊天气泡到可执行工作台", kind: "network" },
  "02-ai-chat-trap.svg": { title: "陪聊陷阱", subtitle: "热闹对话不等于完成工作", kind: "phone" },
  "04-from-chat-to-work.svg": { title: "从聊天到交付", subtitle: "Prompt → Context → Tool → Output", kind: "compare" },
  "05-digital-worker-portrait.svg": { title: "专属数字员工", subtitle: "记住你的标准、资料与流程", kind: "desk" },
  "07-skill-stack.svg": { title: "Skill Stack", subtitle: "目标 / 资料 / 手册 / 脚本 / 输出", kind: "stack" },
  "10-references-scripts.svg": { title: "References + Scripts", subtitle: "左手资料库，右手执行手册", kind: "split" },
  "12-system-prompt-blueprint.svg": { title: "System Prompt 蓝图", subtitle: "角色、边界、步骤、验收标准", kind: "blueprint" },
  "14-document-feeding.svg": { title: "喂给 AI 的不是一句话", subtitle: "而是一整份可工作的上下文", kind: "documents" },
  "16-workflow-pipeline.svg": { title: "Workflow Pipeline", subtitle: "输入 → 理解 → 执行 → 校验 → 交付", kind: "pipeline" },
  "18-local-tools.svg": { title: "本地工具矩阵", subtitle: "PDF / 数据 / 脚本 / 软件操作", kind: "matrix" },
  "20-knife-and-cookbook.svg": { title: "刀具与菜谱", subtitle: "MCP 是手，Skill 是脑", kind: "knife" },
  "21-resource-allocation.svg": { title: "资源配置", subtitle: "聪明程度取决于你给了什么", kind: "resource" },
  "23-human-agent-division.svg": { title: "人机分工", subtitle: "人定方向，Agent 跑流程", kind: "division" },
  "25-agent-command-center.svg": { title: "Agent Command Center", subtitle: "你的职场指挥台", kind: "command" },
  "26-first-skill.svg": { title: "第一个 Skill", subtitle: "把经验写成可复用的系统提示词", kind: "writing" },
  "27-feed-a-file.svg": { title: "喂一份复杂文件", subtitle: "让 AI 提炼结构，而不是泛泛回答", kind: "file" },
  "29-tonight-two-things.svg": { title: "今晚两件事", subtitle: "写 Prompt，喂文件", kind: "checks" },
  "30-own-your-digital-future.svg": { title: "数字未来", subtitle: "掌控属于你的执行系统", kind: "door" },
};

function shape(kind) {
  const ink = "#0a1f3d";
  const pale = "#d9e1e8";
  const accent = "#6f8fae";
  const rust = "#b9795d";
  const line = `stroke="${ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const fine = `stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const softFill = `fill="${pale}" stroke="${ink}" stroke-width="3"`;
  const rustFill = `fill="${rust}" stroke="${ink}" stroke-width="3"`;
  const pieces = {
    network: `<circle cx="330" cy="290" r="70" ${softFill}/><circle cx="610" cy="210" r="54" ${rustFill}/><circle cx="735" cy="420" r="62" ${softFill}/><circle cx="485" cy="520" r="48" ${rustFill}/><path d="M398 274 L557 224 M646 258 L710 368 M690 438 L530 505 M456 492 L365 348" ${line}/><rect x="220" y="620" width="650" height="92" rx="18" ${softFill}/><path d="M285 666 H805 M310 692 H640" ${fine}/>` ,
    phone: `<rect x="260" y="115" width="360" height="650" rx="54" ${softFill}/><path d="M350 190 H535 M340 255 H545 M340 300 H560 M340 345 H525 M340 390 H565 M340 435 H515 M340 480 H550 M340 525 H530 M340 570 H560" ${fine}/><circle cx="735" cy="485" r="112" ${rustFill}/><path d="M735 405 V505 M735 570 V575" ${line}/>` ,
    compare: `<rect x="130" y="180" width="370" height="430" rx="24" ${softFill}/><rect x="620" y="180" width="370" height="430" rx="24" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><path d="M530 395 H590 M570 370 L595 395 L570 420" ${line}/><path d="M205 275 H410 M205 330 H385 M205 385 H430 M205 440 H360" ${fine}/><path d="M690 300 H900 M690 360 H865 M690 420 H930" ${fine}/><circle cx="780" cy="515" r="45" ${rustFill}/><path d="M765 515 L778 530 L805 494" ${line}/>` ,
    desk: `<rect x="180" y="190" width="760" height="390" rx="34" ${softFill}/><rect x="250" y="255" width="280" height="210" rx="18" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><path d="M600 270 H845 M600 330 H810 M600 390 H870 M600 450 H760" ${fine}/><circle cx="390" cy="360" r="76" ${rustFill}/><path d="M340 620 H780 M405 580 V620 M700 580 V620" ${line}/>` ,
    stack: `<rect x="240" y="150" width="640" height="90" rx="18" ${softFill}/><rect x="200" y="270" width="720" height="90" rx="18" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><rect x="240" y="390" width="640" height="90" rx="18" ${softFill}/><rect x="285" y="510" width="550" height="90" rx="18" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><path d="M310 195 H810 M290 315 H830 M310 435 H810 M360 555 H760" ${fine}/>` ,
    split: `<rect x="120" y="170" width="390" height="470" rx="24" ${softFill}/><rect x="610" y="170" width="390" height="470" rx="24" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><path d="M220 260 H410 M220 318 H390 M220 376 H430 M220 434 H370 M220 492 H415" ${fine}/><path d="M720 245 L865 330 L735 415 L875 500 M720 245 V500" ${line}/><circle cx="720" cy="245" r="22" ${rustFill}/><circle cx="865" cy="330" r="22" ${rustFill}/><circle cx="735" cy="415" r="22" ${rustFill}/><circle cx="875" cy="500" r="22" ${rustFill}/>` ,
    blueprint: `<rect x="170" y="130" width="780" height="540" rx="20" fill="#eef3f8" stroke="${ink}" stroke-width="3"/><path d="M260 230 H860 M260 330 H860 M260 430 H860 M260 530 H860 M390 170 V640 M620 170 V640" ${fine}/><circle cx="285" cy="230" r="18" ${rustFill}/><circle cx="285" cy="330" r="18" ${rustFill}/><circle cx="285" cy="430" r="18" ${rustFill}/><circle cx="285" cy="530" r="18" ${rustFill}/>` ,
    documents: `<path d="M270 180 H610 L740 310 V690 H270 Z" ${softFill}/><path d="M610 180 V310 H740" ${line}/><path d="M350 360 H660 M350 420 H690 M350 480 H650 M350 540 H700" ${fine}/><path d="M800 390 H940 M900 350 L950 390 L900 430" ${line}/>` ,
    pipeline: `<circle cx="170" cy="395" r="64" ${softFill}/><circle cx="365" cy="395" r="64" ${rustFill}/><circle cx="560" cy="395" r="64" ${softFill}/><circle cx="755" cy="395" r="64" ${rustFill}/><circle cx="950" cy="395" r="64" ${softFill}/><path d="M235 395 H300 M430 395 H495 M625 395 H690 M820 395 H885" ${line}/><path d="M150 510 H190 M345 510 H385 M540 510 H580 M735 510 H775 M930 510 H970" ${fine}/>` ,
    matrix: `<rect x="170" y="145" width="780" height="560" rx="24" ${softFill}/><path d="M170 330 H950 M170 515 H950 M430 145 V705 M690 145 V705" ${fine}/><path d="M270 230 H335 M270 600 H350 M520 230 H590 M520 600 H610 M780 230 H850 M780 600 H870" ${line}/><circle cx="560" cy="422" r="45" ${rustFill}/>` ,
    knife: `<path d="M230 590 C410 420 515 325 650 205 C705 155 780 170 835 225 C710 355 620 455 450 660 C395 728 278 685 230 590 Z" fill="#f8fafc" stroke="${ink}" stroke-width="4"/><path d="M690 205 L835 225 M420 630 L300 725" ${line}/><rect x="680" y="455" width="270" height="190" rx="18" ${softFill}/><path d="M735 520 H895 M735 565 H870" ${fine}/>` ,
    resource: `<circle cx="560" cy="390" r="90" ${rustFill}/><circle cx="260" cy="245" r="62" ${softFill}/><circle cx="860" cy="245" r="62" ${softFill}/><circle cx="260" cy="555" r="62" ${softFill}/><circle cx="860" cy="555" r="62" ${softFill}/><path d="M318 268 L480 350 M802 268 L640 350 M318 532 L480 430 M802 532 L640 430" ${line}/><path d="M515 390 H605 M560 345 V435" ${line}/>` ,
    division: `<rect x="150" y="170" width="360" height="470" rx="26" ${softFill}/><rect x="610" y="170" width="360" height="470" rx="26" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><circle cx="330" cy="310" r="64" ${rustFill}/><path d="M270 455 H410 M270 510 H390" ${fine}/><path d="M720 295 H860 M720 350 H830 M720 405 H880 M720 460 H800" ${fine}/><path d="M520 405 H595 M570 375 L600 405 L570 435" ${line}/>` ,
    command: `<rect x="150" y="155" width="820" height="500" rx="30" ${softFill}/><rect x="220" y="225" width="300" height="360" rx="20" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><rect x="575" y="225" width="320" height="140" rx="18" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><rect x="575" y="410" width="320" height="175" rx="18" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><path d="M270 305 H460 M270 360 H430 M270 415 H470 M625 285 H835 M625 475 H835 M625 530 H780" ${fine}/>` ,
    writing: `<rect x="210" y="250" width="700" height="360" rx="18" ${softFill}/><path d="M300 340 H820 M300 405 H780 M300 470 H840 M300 535 H650" ${fine}/><path d="M755 175 L865 285 L600 550 L510 570 L535 480 Z" fill="#f8fafc" stroke="${ink}" stroke-width="4"/><path d="M720 210 L830 320" ${line}/>` ,
    file: `<rect x="230" y="155" width="330" height="480" rx="20" ${softFill}/><path d="M305 260 H490 M305 325 H470 M305 390 H505 M305 455 H450" ${fine}/><path d="M610 395 H830 M790 350 L850 395 L790 440" ${line}/><rect x="835" y="260" width="130" height="270" rx="20" ${rustFill}/>` ,
    checks: `<rect x="170" y="210" width="300" height="300" rx="30" ${softFill}/><rect x="650" y="210" width="300" height="300" rx="30" fill="#f8fafc" stroke="${ink}" stroke-width="3"/><path d="M245 360 L310 425 L405 285 M725 360 L790 425 L885 285" ${line}/><path d="M185 590 H445 M665 590 H930" ${fine}/>` ,
    door: `<path d="M405 165 H720 V680 H405 Z" fill="#f8fafc" stroke="${ink}" stroke-width="4"/><path d="M720 165 L865 235 V620 L720 680 Z" ${softFill}/><path d="M760 430 H790" ${line}/><path d="M865 425 H980 M940 385 L995 425 L940 465" ${line}/><path d="M245 680 H890" ${fine}/>` ,
  };
  return pieces[kind] ?? pieces.network;
}

function visualArgument(kind) {
  const ink = "#0a1f3d";
  const accent = "#6f8fae";
  const rust = "#b9795d";
  const label = (x, y, text, fill = ink, size = 20, weight = 700) =>
    `<text x="${x}" y="${y}" font-family="Noto Sans SC, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${text}</text>`;
  const mono = (x, y, text) =>
    `<text x="${x}" y="${y}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="14" letter-spacing="2" fill="${accent}">${text}</text>`;
  const box = (x, y, w, h, text, sub = "", tone = "light") => {
    const fill = tone === "rust" ? "#b9795d" : tone === "blue" ? "#d9e1e8" : "#f8fafc";
    const textFill = tone === "rust" ? "#0a1f3d" : ink;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${fill}" stroke="${ink}" stroke-width="2.5"/>
      ${label(x + 22, y + 36, text, textFill, 19)}
      ${sub ? label(x + 22, y + 68, sub, "#415a72", 15, 400) : ""}`;
  };
  const arrow = (x1, y1, x2, y2) =>
    `<path d="M${x1} ${y1} H${x2 - 24}" stroke="${ink}" stroke-width="3" stroke-linecap="round"/><path d="M${x2 - 24} ${y2 - 14} L${x2} ${y2} L${x2 - 24} ${y2 + 14}" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
  const map = {
    network: `${mono(92, 610, "OPERATING MODEL")}
      ${box(90, 640, 220, 78, "聊天气泡", "零散问答", "light")}
      ${arrow(326, 680, 486, 680)}
      ${box(500, 640, 220, 78, "工作台", "资料 + 工具", "blue")}
      ${arrow(736, 680, 896, 680)}
      ${box(910, 640, 160, 78, "交付", "可复用", "rust")}`,
    phone: `${box(92, 590, 240, 82, "热闹对话", "越聊越散", "light")}
      ${box(440, 590, 250, 82, "缺失现场", "目标 / 资料 / 标准", "blue")}
      ${box(798, 590, 230, 82, "结果漂移", "像开盲盒", "rust")}
      ${arrow(345, 631, 432, 631)}${arrow(705, 631, 790, 631)}`,
    compare: `${mono(130, 645, "MODE CHANGE")}
      ${label(190, 250, "旧：一句话求答案", ink, 22)}
      ${label(690, 250, "新：一套条件跑流程", ink, 22)}
      ${box(165, 515, 280, 72, "Prompt", "临时输入", "light")}
      ${box(675, 515, 280, 72, "Skill", "稳定系统", "rust")}`,
    desk: `${box(92, 596, 210, 76, "岗位", "角色定义", "light")}
      ${box(335, 596, 210, 76, "记忆", "偏好标准", "blue")}
      ${box(578, 596, 210, 76, "工具", "可执行动作", "light")}
      ${box(821, 596, 210, 76, "输出", "交付格式", "rust")}`,
    stack: `${mono(110, 642, "AGENT SKILL = REUSABLE WORK SYSTEM")}
      ${box(106, 520, 155, 74, "目标", "做什么", "rust")}
      ${box(286, 520, 155, 74, "资料", "看什么", "blue")}
      ${box(466, 520, 155, 74, "手册", "怎么做", "light")}
      ${box(646, 520, 155, 74, "脚本", "用什么", "blue")}
      ${box(826, 520, 155, 74, "验收", "好不好", "rust")}`,
    split: `${label(190, 620, "References：证据和背景", ink, 21)}
      ${label(660, 620, "Scripts：动作和执行", ink, 21)}
      ${box(225, 255, 190, 66, "内部手册", "随用随查", "blue")}
      ${box(690, 535, 210, 66, "本地脚本", "直接干活", "rust")}`,
    blueprint: `${box(105, 580, 185, 70, "角色", "我是谁", "light")}
      ${box(315, 580, 185, 70, "边界", "不做什么", "blue")}
      ${box(525, 580, 185, 70, "步骤", "先后顺序", "light")}
      ${box(735, 580, 185, 70, "验收", "判断标准", "rust")}`,
    documents: `${box(115, 585, 240, 78, "长文档", "事实材料", "light")}
      ${arrow(370, 624, 515, 624)}
      ${box(530, 585, 240, 78, "结构提炼", "要点 / 风险", "blue")}
      ${arrow(785, 624, 930, 624)}
      ${box(945, 585, 130, 78, "行动", "下一步", "rust")}`,
    pipeline: `${mono(130, 600, "EXECUTION, NOT CONVERSATION")}
      ${box(122, 625, 160, 62, "输入", "目标", "light")}
      ${box(322, 625, 160, 62, "理解", "上下文", "blue")}
      ${box(522, 625, 160, 62, "执行", "工具", "rust")}
      ${box(722, 625, 160, 62, "校验", "标准", "blue")}
      ${box(922, 625, 120, 62, "交付", "结果", "light")}`,
    matrix: `${label(216, 296, "文档", ink, 18)}${label(476, 296, "数据", ink, 18)}${label(736, 296, "脚本", ink, 18)}
      ${label(216, 480, "网页", ink, 18)}${label(476, 480, "软件", ink, 18)}${label(736, 480, "输出", ink, 18)}
      ${mono(214, 665, "工具越贴近任务，执行越稳定")}`,
    knife: `${box(95, 560, 240, 74, "MCP", "刀具接口：能触达世界", "blue")}
      ${box(440, 560, 240, 74, "Agent Skill", "菜谱经验：知道怎么做", "rust")}
      ${box(785, 560, 240, 74, "复杂业务", "两者配合才可交付", "light")}
      ${arrow(350, 598, 430, 598)}${arrow(695, 598, 775, 598)}
      ${label(145, 672, "光有刀不会做饭；光有菜谱也切不开食材。", ink, 20)}`,
    resource: `${box(90, 600, 220, 78, "资料", "知道事实", "light")}
      ${box(330, 600, 220, 78, "工具", "能做动作", "blue")}
      ${box(570, 600, 220, 78, "流程", "稳定推进", "light")}
      ${box(810, 600, 220, 78, "标准", "可被验收", "rust")}`,
    division: `${box(190, 590, 240, 76, "人类", "方向 / 判断 / 责任", "rust")}
      ${box(690, 590, 240, 76, "Agent", "检索 / 整理 / 执行", "blue")}
      ${label(470, 616, "协作边界", accent, 18)}`,
    command: `${box(206, 610, 185, 68, "任务池", "待办", "light")}
      ${box(420, 610, 185, 68, "Skill 库", "复用", "blue")}
      ${box(634, 610, 185, 68, "执行器", "跑流程", "light")}
      ${box(848, 610, 170, 68, "交付", "验收", "rust")}`,
    writing: `${box(92, 600, 230, 74, "写角色", "谁来做", "light")}
      ${box(347, 600, 230, 74, "写步骤", "怎么做", "blue")}
      ${box(602, 600, 230, 74, "写标准", "好不好", "light")}
      ${box(857, 600, 170, 74, "沉淀", "可复用", "rust")}`,
    file: `${box(105, 590, 230, 76, "复杂文件", "不是一句话", "light")}
      ${box(445, 590, 230, 76, "提取结构", "三要点 / 风险", "blue")}
      ${box(785, 590, 230, 76, "变成行动", "问题 / 下一步", "rust")}
      ${arrow(350, 628, 435, 628)}${arrow(690, 628, 775, 628)}`,
    checks: `${label(210, 565, "1. 写 System Prompt", ink, 22)}
      ${label(690, 565, "2. 喂复杂文件", ink, 22)}
      ${mono(250, 635, "今晚开始，让流程先跑起来")}`,
    door: `${box(105, 590, 250, 76, "陪聊", "随机回答", "light")}
      ${arrow(370, 628, 505, 628)}
      ${box(520, 590, 250, 76, "系统", "稳定执行", "blue")}
      ${arrow(785, 628, 920, 628)}
      ${box(935, 590, 130, 76, "掌控", "未来", "rust")}`,
  };
  return `<g class="argument-layer">${map[kind] ?? ""}</g>`;
}

function makeSvg(filename, spec) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1120 700">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#b8c4cf" stroke-width="1" opacity=".42"/>
    </pattern>
    <filter id="grain"><feTurbulence baseFrequency=".8" numOctaves="2" stitchTiles="stitch" type="fractalNoise"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .08"/></feComponentTransfer></filter>
  </defs>
  <rect width="1120" height="700" fill="#f1f3f5"/>
  <rect width="1120" height="700" fill="url(#grid)" opacity=".6"/>
  <rect width="1120" height="700" filter="url(#grain)" opacity=".35"/>
  <g opacity=".18" transform="translate(55 36) scale(.9)">
    ${shape(spec.kind)}
  </g>
  ${visualArgument(spec.kind)}
  <text x="70" y="92" font-family="Noto Serif SC, Songti SC, serif" font-size="48" font-weight="700" fill="#0a1f3d">${spec.title}</text>
  <text x="72" y="142" font-family="Noto Sans SC, sans-serif" font-size="24" fill="#415a72">${spec.subtitle}</text>
  <path d="M70 168H405" stroke="#0a1f3d" stroke-width="2" opacity=".45"/>
</svg>`;
}

for (const [filename, spec] of Object.entries(visualSpecs)) {
  fs.writeFileSync(path.join(imageDir, filename), makeSvg(filename, spec));
}

const img = (name, cls = "r-16x10", cap = "") => `<figure class="frame-img ${cls}" data-anim="right"><img src="images/${name}" alt="${cap || name}">${cap ? `<span class="img-cap">${cap}</span>` : ""}</figure>`;

const chrome = (left, page, act = "Deck") => `<div class="chrome"><div>${left}</div><div>${act} · ${String(page).padStart(2, "0")} / 30</div></div>`;
const foot = (left = "职场人的 Agent Skill 启蒙课", right = "Agent Skill Deck") => `<div class="foot"><div>${left}</div><div>${right}</div></div>`;

const slides = [
`<section class="slide hero dark">
  ${chrome("Opening · Digital Worker", 1, "Vol.01")}
  <div class="frame grid-2-6-6" style="align-items:center; min-height:80vh">
    <div>
      <div class="kicker" data-anim>职场人的 Agent Skill 启蒙课</div>
      <h1 class="h-hero" style="font-size:7.5vw" data-anim>告别“陪聊”</h1>
      <p class="lead" style="max-width:42vw" data-anim>把 AI 从聊天伙伴，训练成拥有资料、工具和执行手册的专属数字员工。</p>
      <div class="meta-row" data-anim><span>Agent Skill</span><span>·</span><span>Work OS</span></div>
    </div>
    ${img("01-cover-agent-worker.svg", "r-16x10 fit-contain", "chat bubble to operating desk")}
  </div>
  ${foot("开场 · 从陪聊到交付", "2026")}
</section>`,
`<section class="slide light">
  ${chrome("Act I · Misread AI", 2)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <div class="kicker" data-anim>为什么总是那样“笨”？</div>
      <h1 class="h-xl" data-anim>把 AI 当作聊天伴侣，方向一开始就错了。</h1>
      <p class="lead" data-anim>很多人还在钻研怎么聊天，以为背几句神仙提示词就能掌控一切。真正的问题不是话术，而是没有给 AI 工作现场。</p>
      <div class="callout" data-anim>它听起来很会说，但并不知道你的目标、资料、标准和下一步动作。</div>
    </div>
    ${img("02-ai-chat-trap.svg", "r-4x3 fit-contain", "chat trap")}
  </div>
  ${foot("误区 · 陪聊不是执行")}
</section>`,
`<section class="slide dark" data-animate="quote">
  ${chrome("Act I · Friction", 3)}
  <div class="frame center" style="min-height:78vh">
    <div class="kicker" data-anim>Truth</div>
    <h1 class="h-xl" style="max-width:78vw" data-anim>
      <span data-anim="line" style="display:block">一句话越万能，</span>
      <span data-anim="line" style="display:block">越像没有岗位说明书。</span>
    </h1>
    <p class="lead" style="max-width:52vw; margin-inline:auto" data-anim>AI 不是被一句咒语点亮的机器，它更像新人：你给它什么工作条件，它就呈现什么工作质量。</p>
  </div>
  ${foot("问题 · 没有上下文")}
</section>`,
`<section class="slide light" data-animate="directional">
  ${chrome("Act I · Mode Shift", 4)}
  <div class="frame grid-2-6-6" style="padding-top:7vh">
    <div data-anim="left">
      <div class="kicker">Old Mode</div>
      <h2 class="h-md">陪聊式 AI</h2>
      <p class="body-zh">临时问一句，临时追问一句。上下文散落在对话里，输出质量靠运气。</p>
    </div>
    <div data-anim="right">
      ${img("04-from-chat-to-work.svg", "r-16x10 fit-contain", "mode shift")}
      <h2 class="h-md" style="margin-top:2vh">工作流式 AI</h2>
      <p class="body-zh">目标、资料、工具、验收标准被组织起来，AI 才能从回答问题转向完成任务。</p>
    </div>
  </div>
  ${foot("转向 · 从聊天到工作")}
</section>`,
`<section class="slide hero light">
  ${chrome("Act II · Digital Employee", 5)}
  <div class="frame grid-2-6-6" style="align-items:center; min-height:80vh">
    <div>
      <div class="kicker" data-anim>Act II</div>
      <h1 class="h-hero" style="font-size:8vw" data-anim>数字员工</h1>
      <p class="lead" data-anim>不是让 AI 更会聊天，而是让它进入你的岗位、记住你的偏好、接住你的业务。</p>
    </div>
    ${img("05-digital-worker-portrait.svg", "r-16x10 fit-contain", "digital worker")}
  </div>
  ${foot("第二幕 · 拥有专属系统")}
</section>`,
`<section class="slide dark">
  ${chrome("Act II · Job Description", 6)}
  <div class="frame" style="display:grid; align-content:center; gap:5vh; min-height:78vh">
    <div class="kicker" data-anim>把岗位说清楚</div>
    <h1 class="h-xl" data-anim>你不是在“问 AI”，你是在给一个员工安排工作。</h1>
    <div class="grid-3" style="margin-top:2vh">
      <div class="stat-card" data-anim><span class="stat-label">Role</span><span class="stat-nb">01</span><span class="stat-note">它是谁，负责什么。</span></div>
      <div class="stat-card" data-anim><span class="stat-label">Context</span><span class="stat-nb">02</span><span class="stat-note">它能看见哪些资料。</span></div>
      <div class="stat-card" data-anim><span class="stat-label">Output</span><span class="stat-nb">03</span><span class="stat-note">它要交付什么标准。</span></div>
    </div>
  </div>
  ${foot("原则 · 岗位化")}
</section>`,
`<section class="slide light">
  ${chrome("Act II · Skill Stack", 7)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <div class="kicker" data-anim>核心结构</div>
      <h1 class="h-xl" data-anim>Agent Skill 是把经验封装成可执行资产。</h1>
      <p class="lead" data-anim>它不只是一段提示词，而是一组能被反复调用的工作条件：目标、资料、流程、工具和验收口径。</p>
    </div>
    ${img("07-skill-stack.svg", "r-16x10 fit-contain", "skill stack")}
  </div>
  ${foot("结构 · 技能栈")}
</section>`,
`<section class="slide dark" data-animate="quote">
  ${chrome("Act II · Reusable Memory", 8)}
  <div class="frame center" style="min-height:78vh">
    <div class="kicker" data-anim>Memory</div>
    <h1 class="h-xl" data-anim>
      <span data-anim="line" style="display:block">真正值钱的不是一句 Prompt，</span>
      <span data-anim="line" style="display:block">而是你把经验变成了系统。</span>
    </h1>
    <p class="lead" data-anim>可复用，才是从个人灵感走向组织能力的起点。</p>
  </div>
  ${foot("金句 · 经验资产化")}
</section>`,
`<section class="slide light">
  ${chrome("Act II · Three Inputs", 9)}
  <div class="frame grid-3-3" style="padding-top:7vh">
    <div class="stat-card" data-anim><span class="stat-label">01 · Goal</span><span class="stat-nb">目标</span><span class="stat-note">不要只说“帮我做”，说清楚你要达成什么。</span></div>
    <div class="stat-card" data-anim><span class="stat-label">02 · Material</span><span class="stat-nb">资料</span><span class="stat-note">把文档、案例、标准、旧稿喂进去。</span></div>
    <div class="stat-card" data-anim><span class="stat-label">03 · Tool</span><span class="stat-nb">工具</span><span class="stat-note">让 AI 知道能调用什么脚本、接口和本地能力。</span></div>
  </div>
  ${foot("输入 · 目标、资料、工具")}
</section>`,
`<section class="slide light">
  ${chrome("Act II · External Brain", 10)}
  <div class="frame grid-2-6-6" style="padding-top:5vh">
    <div>
      <h1 class="h-xl" data-anim>核心组件三与四：带资进组的“超强外援”</h1>
      <p class="lead" data-anim>References 让 AI 随用随查，Scripts 让 AI 真刀真枪地干活。一个补脑，一个补手。</p>
      <div class="callout" data-anim>彻底告别“幻觉”，不是靠提醒它别编，而是把证据和动作放到它手边。</div>
    </div>
    ${img("10-references-scripts.svg", "r-16x10 fit-contain", "references and scripts")}
  </div>
  ${foot("组件 · References / Scripts")}
</section>`,
`<section class="slide hero dark">
  ${chrome("Act III · Prompt as System", 11)}
  <div class="frame" style="display:grid; align-content:center; min-height:80vh">
    <div class="kicker" data-anim>Act III</div>
    <h1 class="h-hero" style="font-size:8.5vw" data-anim>系统提示词</h1>
    <p class="lead" style="max-width:56vw" data-anim>它不是一句开场白，而是你的第一份岗位说明书、流程手册和质检标准。</p>
  </div>
  ${foot("第三幕 · 写下操作系统")}
</section>`,
`<section class="slide light">
  ${chrome("Act III · Blueprint", 12)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <div class="kicker" data-anim>Blueprint</div>
      <h1 class="h-xl" data-anim>一个好的 System Prompt，像一张蓝图。</h1>
      <p class="lead" data-anim>角色、任务边界、输入材料、步骤、语气、禁区、验收标准，都需要被写清楚。</p>
    </div>
    ${img("12-system-prompt-blueprint.svg", "r-16x10 fit-contain", "system prompt blueprint")}
  </div>
  ${foot("方法 · 蓝图化")}
</section>`,
`<section class="slide dark">
  ${chrome("Act III · No Magic", 13)}
  <div class="frame center" style="min-height:78vh">
    <div class="kicker" data-anim>不是咒语</div>
    <h1 class="h-xl" data-anim>别再问“你会写周报吗？”</h1>
    <p class="lead" style="max-width:62vw; margin-inline:auto" data-anim>告诉它：你是谁、面对什么场景、遵守什么格式、如何判断好坏。AI 需要的是工作制度，不是临时聊天。</p>
  </div>
  ${foot("提示词 · 从问题到制度")}
</section>`,
`<section class="slide light">
  ${chrome("Act III · Feed Documents", 14)}
  <div class="frame grid-2-6-6" style="padding-top:5vh">
    <div>
      <h1 class="h-xl" data-anim>资料不是附件，是 AI 的工作现场。</h1>
      <p class="lead" data-anim>把长篇 PDF、旧方案、客户材料、过往案例交给它，让它先提炼结构，再进入执行。</p>
      <div class="callout" data-anim>你给它一份复杂文件，它才知道“这件事”的真实语境。</div>
    </div>
    ${img("14-document-feeding.svg", "r-16x10 fit-contain", "document feeding")}
  </div>
  ${foot("资料 · 工作现场")}
</section>`,
`<section class="slide dark" data-animate="pipeline">
  ${chrome("Act III · Runbook", 15)}
  <div class="frame" style="padding-top:5vh">
    <div class="kicker" data-anim>执行手册</div>
    <h1 class="h-xl" style="font-size:5.2vw" data-anim>把“怎么做”拆成可推进步骤。</h1>
    <div class="pipeline-section">
      <div class="pipeline-label" data-anim>Skill Runbook</div>
      <div class="pipeline" data-cols="5">
        <div class="step" data-anim="step"><span class="step-nb">01</span><span class="step-title">读目标</span><span class="step-desc">确认这次到底要交付什么。</span></div>
        <div class="step" data-anim="step"><span class="step-nb">02</span><span class="step-title">查资料</span><span class="step-desc">先看上下文，不急着回答。</span></div>
        <div class="step" data-anim="step"><span class="step-nb">03</span><span class="step-title">跑工具</span><span class="step-desc">调用脚本、文件或本地能力。</span></div>
        <div class="step" data-anim="step"><span class="step-nb">04</span><span class="step-title">产出</span><span class="step-desc">按模板输出可用结果。</span></div>
        <div class="step" data-anim="step"><span class="step-nb">05</span><span class="step-title">自检</span><span class="step-desc">对照验收口径修正。</span></div>
      </div>
    </div>
  </div>
  ${foot("流程 · 可推进")}
</section>`,
`<section class="slide light">
  ${chrome("Act III · Pipeline", 16)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <div class="kicker" data-anim>从输入到交付</div>
      <h1 class="h-xl" data-anim>听懂一万遍，不如动手试一遍。</h1>
      <p class="lead" data-anim>AI 的价值不在于“说得像懂了”，而在于它能沿着流程把结果交出来。</p>
    </div>
    ${img("16-workflow-pipeline.svg", "r-16x10 fit-contain", "workflow pipeline")}
  </div>
  ${foot("流程图 · 执行链路")}
</section>`,
`<section class="slide dark">
  ${chrome("Act III · Local Actions", 17)}
  <div class="frame center" style="min-height:78vh">
    <div class="kicker" data-anim>突破聊天框</div>
    <h1 class="h-xl" data-anim>不只是动嘴，还能真干活。</h1>
    <p class="lead" style="max-width:60vw; margin-inline:auto" data-anim>调用脚本、处理文件、生成 PDF、分析数据、操作本地软件，这些能力把 AI 从“建议者”推进到“执行者”。</p>
  </div>
  ${foot("能力 · 本地执行")}
</section>`,
`<section class="slide light">
  ${chrome("Act III · Tool Matrix", 18)}
  <div class="frame grid-2-6-6" style="padding-top:5vh">
    <div>
      <h1 class="h-xl" data-anim>工具矩阵，决定了 AI 能走多远。</h1>
      <p class="lead" data-anim>当 PDF、数据、脚本、网页和本地软件都进入工作流，AI 才真正拥有“手”。</p>
    </div>
    ${img("18-local-tools.svg", "r-16x10 fit-contain", "local tools")}
  </div>
  ${foot("工具 · 扩展物理边界")}
</section>`,
`<section class="slide hero light">
  ${chrome("Act IV · Metaphor", 19)}
  <div class="frame" style="display:grid; align-content:center; min-height:80vh">
    <div class="kicker" data-anim>Act IV</div>
    <h1 class="h-hero" style="font-size:8vw" data-anim>刀具与菜谱</h1>
    <p class="lead" style="max-width:58vw" data-anim>决定 AI 聪不聪明的，不只是模型，而是你如何配置资源。</p>
  </div>
  ${foot("第四幕 · 配置资源")}
</section>`,
`<section class="slide light">
  ${chrome("Act IV · MCP vs Skill", 20)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <h1 class="h-xl" data-anim>MCP 是手，Agent Skill 是脑。</h1>
      <p class="lead" data-anim>MCP 给 AI 读写文件、联网搜索、调用接口的物理能力；Agent Skill 告诉它遇到什么肉、该用哪把刀、切多厚。</p>
      <div class="callout" data-anim>光有刀，不会做饭；光有菜谱，也切不开食材。</div>
    </div>
    ${img("20-knife-and-cookbook.svg", "r-16x10 fit-contain", "knife and cookbook")}
  </div>
  ${foot("比喻 · 手与脑")}
</section>`,
`<section class="slide dark">
  ${chrome("Act IV · Allocation", 21)}
  <div class="frame grid-2-6-6" style="padding-top:5vh; align-items:center">
    <div>
      <div class="kicker" data-anim>Resource Allocation</div>
      <h1 class="h-xl" data-anim>聪明程度，取决于你给了它什么。</h1>
      <p class="lead" data-anim>资料越清楚，工具越贴近任务，流程越可验证，AI 的表现就越稳定。</p>
    </div>
    ${img("21-resource-allocation.svg", "r-16x10 fit-contain", "resource allocation")}
  </div>
  ${foot("资源 · 可用条件")}
</section>`,
`<section class="slide light" data-animate="directional">
  ${chrome("Act IV · Before After", 22)}
  <div class="frame grid-2-6-6" style="padding-top:7vh">
    <div data-anim="left">
      <div class="kicker">Before</div>
      <h2 class="h-md">一个人追着 AI 解释</h2>
      <p class="body-zh">每次重新交代背景、格式、偏好和禁区，输出像开盲盒。</p>
    </div>
    <div data-anim="right">
      <div class="kicker">After</div>
      <h2 class="h-md">一套 Skill 托住流程</h2>
      <p class="body-zh">资料和动作沉淀下来，下一次直接调用，交付质量更稳定。</p>
    </div>
  </div>
  ${foot("对比 · 人追流程 vs 流程托人")}
</section>`,
`<section class="slide light">
  ${chrome("Act IV · Human Agent", 23)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <div class="kicker" data-anim>分工</div>
      <h1 class="h-xl" data-anim>人定方向，Agent 跑流程。</h1>
      <p class="lead" data-anim>你负责判断、审美、取舍和责任；AI 负责检索、整理、执行和重复劳动。</p>
    </div>
    ${img("23-human-agent-division.svg", "r-16x10 fit-contain", "human agent division")}
  </div>
  ${foot("协作 · 分工清晰")}
</section>`,
`<section class="slide dark" data-animate="quote">
  ${chrome("Act IV · Ownership", 24)}
  <div class="frame center" style="min-height:78vh">
    <div class="kicker" data-anim>Ownership</div>
    <h1 class="h-xl" data-anim>
      <span data-anim="line" style="display:block">把经验写出来，</span>
      <span data-anim="line" style="display:block">你就拥有了一个可复制的自己。</span>
    </h1>
    <p class="lead" data-anim>这不是替代你，而是把你最稳定的工作方式外化出来。</p>
  </div>
  ${foot("金句 · 外化经验")}
</section>`,
`<section class="slide light">
  ${chrome("Act V · Command Center", 25)}
  <div class="frame grid-2-6-6" style="padding-top:5vh">
    <div>
      <div class="kicker" data-anim>你的指挥台</div>
      <h1 class="h-xl" data-anim>从今天开始，给自己搭一个 Agent 工作台。</h1>
      <p class="lead" data-anim>不是收藏工具，而是把最常见、最费脑、最重复的工作封装成 Skill。</p>
    </div>
    ${img("25-agent-command-center.svg", "r-16x10 fit-contain", "agent command center")}
  </div>
  ${foot("落地 · 指挥台")}
</section>`,
`<section class="slide dark">
  ${chrome("Act V · First Skill", 26)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <h1 class="h-xl" data-anim>第一件事：写下你的第一个 System Prompt。</h1>
      <p class="lead" data-anim>别再问“你会写周报吗？”告诉它你的身份、受众、方法、结构和判断标准。</p>
      <div class="callout" data-anim>把脑内经验写成制度，AI 才能反复调用。</div>
    </div>
    ${img("26-first-skill.svg", "r-16x10 fit-contain", "first skill")}
  </div>
  ${foot("行动一 · 写 Prompt")}
</section>`,
`<section class="slide light">
  ${chrome("Act V · Feed File", 27)}
  <div class="frame grid-2-6-6" style="padding-top:5vh">
    <div>
      <h1 class="h-xl" data-anim>第二件事：给 AI 喂一份复杂文件。</h1>
      <p class="lead" data-anim>找一份明天要看的长篇 PDF，让它提取核心三要点、风险、行动建议和下一步问题。</p>
    </div>
    ${img("27-feed-a-file.svg", "r-16x10 fit-contain", "feed a file")}
  </div>
  ${foot("行动二 · 喂文件")}
</section>`,
`<section class="slide dark">
  ${chrome("Act V · Review Loop", 28)}
  <div class="frame" style="display:grid; align-content:center; gap:5vh; min-height:78vh">
    <div class="kicker" data-anim>Review Loop</div>
    <h1 class="h-xl" data-anim>让 AI 先做，再让它按你的标准自检。</h1>
    <div class="grid-3">
      <div class="stat-card" data-anim><span class="stat-label">Draft</span><span class="stat-nb">草稿</span><span class="stat-note">先要结构化产出。</span></div>
      <div class="stat-card" data-anim><span class="stat-label">Check</span><span class="stat-nb">校验</span><span class="stat-note">对照规则找问题。</span></div>
      <div class="stat-card" data-anim><span class="stat-label">Revise</span><span class="stat-nb">修订</span><span class="stat-note">把反馈沉淀回 Skill。</span></div>
    </div>
  </div>
  ${foot("闭环 · 草稿、校验、修订")}
</section>`,
`<section class="slide light">
  ${chrome("Act V · Tonight", 29)}
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div>
      <h1 class="h-xl" data-anim>行动号召：今晚就能做的两件事。</h1>
      <p class="lead" data-anim>写下你的第一个 System Prompt；给 AI 喂一份复杂文件。先跑起来，再迭代。</p>
    </div>
    ${img("29-tonight-two-things.svg", "r-16x10 fit-contain", "tonight two things")}
  </div>
  ${foot("行动 · 今晚开始")}
</section>`,
`<section class="slide hero dark">
  ${chrome("Closing · Own the System", 30, "Final")}
  <div class="frame grid-2-6-6" style="align-items:center; min-height:80vh">
    <div>
      <div class="kicker" data-anim>Final</div>
      <h1 class="h-hero" style="font-size:7.6vw" data-anim>掌控数字未来</h1>
      <p class="lead" data-anim>告别陪聊，把 AI 变成你的专属数字员工。现在，去搭建属于你的执行系统。</p>
    </div>
    ${img("30-own-your-digital-future.svg", "r-16x10 fit-contain", "own your digital future")}
  </div>
  ${foot("收束 · 去掌控属于你的数字未来", "The End")}
</section>`,
].join("\n\n");

let html = fs.readFileSync(templatePath, "utf8");
html = html.replace("[必填] 替换为 PPT 标题 · Deck Title", "告别“陪聊”，拥有你的专属数字员工 · Agent Skill 启蒙课");
html = html.replace(`--ink:#0a0a0b;
    --ink-rgb:10,10,11;
    --paper:#f1efea;
    --paper-rgb:241,239,234;
    --paper-tint:#e8e5de;
    --ink-tint:#18181a;`, `--ink:#0a1f3d;
    --ink-rgb:10,31,61;
    --paper:#f1f3f5;
    --paper-rgb:241,243,245;
    --paper-tint:#e4e8ec;
    --ink-tint:#152a4a;`);
html = html.replace("<!-- SLIDES_HERE -->", slides);
html = html.replace("go(0);\n</script>", `const previewSlide=Number(new URLSearchParams(location.search).get('slide')||'1');\nconst startSlide=Number.isFinite(previewSlide)?Math.max(0,Math.min(total-1,previewSlide-1)):0;\ngo(startSlide);\n</script>`);
html = html.replace("</style>", `
  .slide .frame-img svg, .slide .frame-img img{filter:saturate(.92) contrast(1.02)}
  .slide.hero .frame-img{background:rgba(var(--paper-rgb),.08)}
  .slide.hero.light .frame-img{background:rgba(var(--ink-rgb),.04)}
  .slide.dark .stat-card .stat-note{color:rgba(var(--paper-rgb),.82)}
  .slide.light .stat-card .stat-note{color:rgba(var(--ink-rgb),.76)}
</style>`);

fs.writeFileSync(path.join(pptDir, "index.html"), html);
