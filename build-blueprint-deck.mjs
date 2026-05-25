import fs from "node:fs";
import path from "node:path";

const root = "/Users/huhuzu/Documents/codex项目/PDF合并-html演示";
const outDir = path.join(root, "ppt-blueprint");
fs.mkdirSync(outDir, { recursive: true });

const total = 18;
const pad = (n) => String(n).padStart(2, "0");
const line = (text, emph = false) => `<span class="line${emph ? " rust" : ""}">${text}</span>`;
const chrome = (n, label) => `
  <div class="kb-grid-bg"></div>
  <div class="kb-top"><span>Agent Skill Blueprint</span><span>${label}</span></div>
  <div class="kb-footer"><span>Beginner friendly · large type · visual first</span><span>${pad(n)} / ${total}</span></div>`;

const title = (...parts) => `<h1 class="kb-h1">${parts.map((p) => Array.isArray(p) ? line(p[0], p[1]) : line(p)).join("")}</h1>`;
const sub = (text) => `<p class="kb-sub">${text}</p>`;
const subLines = (lines) => `<p class="kb-sub">${lines.map((item) => `<span>${item}</span>`).join("")}</p>`;
const insight = (text, k = "KEY INSIGHT") => `<div class="kb-insight"><span>${k}</span>${text}</div>`;
const insightLines = (lines, k = "KEY INSIGHT") => insight(lines.map((item) => `<b>${item}</b>`).join(""), k);
const box = (x, y, w, h, label, desc = "", cls = "") => `
  <g class="${cls}">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14"></rect>
    <text class="box-title" x="${x + 22}" y="${y + 36}">${label}</text>
    ${desc ? `<text class="box-desc" x="${x + 22}" y="${y + 66}">${desc}</text>` : ""}
  </g>`;
const arrow = (x1, y1, x2, y2, rust = false) => `
  <path class="arrow ${rust ? "rust-stroke" : ""}" d="M${x1} ${y1} H${x2 - 22}"></path>
  <path class="arrow ${rust ? "rust-stroke" : ""}" d="M${x2 - 22} ${y2 - 13} L${x2} ${y2} L${x2 - 22} ${y2 + 13}"></path>`;
const diagram = (inner, cls = "") => `<svg class="kb-diagram ${cls}" viewBox="0 0 1120 560" role="img" aria-hidden="true">${inner}</svg>`;

const diagrams = {
  systemOverview: diagram(`
    ${box(70, 88, 230, 112, "聊天框", "临时问答 / 上下文散", "thin")}
    ${arrow(318, 144, 445, 144)}
    ${box(462, 54, 230, 78, "目标", "做什么", "thin")}
    ${box(462, 154, 230, 78, "资料", "看什么", "thin")}
    ${box(462, 254, 230, 78, "工具", "用什么", "thin")}
    ${box(462, 354, 230, 78, "标准", "好不好", "thin")}
    ${arrow(705, 242, 805, 242, true)}
    ${box(820, 132, 240, 220, "专属数字员工", "可执行 / 可复用 / 可验收", "hero")}
    <path class="loop rust-stroke" d="M930 366 C1030 430 1010 500 876 486 C740 472 740 402 820 372"></path>
    <text class="small-label" x="792" y="512">反馈回路：越用越稳</text>
  `),
  missingConditions: diagram(`
    ${box(70, 170, 260, 190, "一句话提问", "“帮我写一下”", "thin")}
    <circle class="island" cx="200" cy="265" r="118"></circle>
    <text class="small-label" x="124" y="408">孤岛：只有聊天，没有现场</text>
    ${arrow(360, 265, 475, 265)}
    ${box(520, 70, 190, 90, "目标", "要达成什么", "thin")}
    ${box(760, 70, 190, 90, "资料", "事实在哪里", "thin")}
    ${box(520, 300, 190, 90, "工具", "能不能执行", "thin")}
    ${box(760, 300, 190, 90, "标准", "怎么验收", "thin")}
    <path class="dash" d="M615 160 V300 M855 160 V300 M710 115 H760 M710 345 H760"></path>
    ${box(612, 202, 246, 78, "缺失条件", "不是模型笨，是配置少", "hero")}
  `),
  beforeAfter: diagram(`
    ${box(84, 82, 390, 350, "旧模式：陪聊", "一句话 → 追问 → 复制粘贴 → 人工兜底", "thin")}
    <text class="diagram-note" x="122" y="210">输出质量：靠运气</text>
    <text class="diagram-note" x="122" y="260">上下文：散在聊天里</text>
    <text class="diagram-note" x="122" y="310">复用方式：重新来过</text>
    ${arrow(500, 258, 620, 258, true)}
    ${box(650, 82, 390, 350, "新模式：工作流", "目标 + 资料 + 工具 + 验收", "hero")}
    <text class="diagram-note light" x="688" y="210">输出质量：可预期</text>
    <text class="diagram-note light" x="688" y="260">上下文：沉淀成资产</text>
    <text class="diagram-note light" x="688" y="310">复用方式：调用 Skill</text>
  `),
  jobSpec: diagram(`
    <rect class="paper" x="220" y="38" width="680" height="470" rx="18"></rect>
    <text class="form-title" x="270" y="104">数字员工岗位说明书</text>
    ${box(270, 145, 260, 92, "角色", "它是谁 / 负责什么", "thin")}
    ${box(590, 145, 260, 92, "工作范围", "做什么 / 不做什么", "thin")}
    ${box(270, 270, 260, 92, "输入材料", "看哪些资料", "thin")}
    ${box(590, 270, 260, 92, "输出格式", "交付成什么", "thin")}
    ${box(270, 395, 580, 80, "验收标准", "判断结果是否能直接使用", "hero")}
  `),
  stack: diagram(`
    ${box(230, 56, 660, 72, "目标层", "本次要达成什么", "thin")}
    ${box(200, 148, 720, 72, "资料层", "PDF / 旧稿 / 案例 / 手册", "thin")}
    ${box(170, 240, 780, 72, "流程层", "先读 → 再拆 → 执行 → 自检", "hero")}
    ${box(200, 332, 720, 72, "工具层", "脚本 / 网页 / 文件 / 本地软件", "thin")}
    ${box(230, 424, 660, 72, "验收层", "格式 / 质量 / 禁区 / 失败处理", "thin")}
  `),
  promptBlueprint: diagram(`
    <rect class="paper" x="160" y="60" width="800" height="420" rx="18"></rect>
    <path class="dash" d="M560 90 V450 M190 270 H930"></path>
    ${box(205, 110, 300, 112, "你是谁", "角色与专业视角", "thin")}
    ${box(615, 110, 300, 112, "做什么", "任务边界", "thin")}
    ${box(205, 320, 300, 112, "怎么做", "步骤与顺序", "thin")}
    ${box(615, 320, 300, 112, "什么算好", "输出与验收", "hero")}
  `),
  references: diagram(`
    ${box(460, 210, 220, 100, "References", "证据中心", "hero")}
    ${box(86, 72, 190, 82, "PDF", "长文档", "thin")}
    ${box(842, 72, 190, 82, "旧稿", "历史写法", "thin")}
    ${box(86, 386, 190, 82, "案例", "真实样本", "thin")}
    ${box(842, 386, 190, 82, "手册", "内部规则", "thin")}
    ${box(462, 420, 216, 72, "客户材料", "当下语境", "thin")}
    <path class="dash" d="M276 113 L460 235 M842 113 L680 235 M276 426 L460 284 M842 426 L680 284 M570 420 V310"></path>
  `),
  tools: diagram(`
    ${box(86, 86, 210, 108, "读文件", "PDF / DOCX", "thin")}
    ${box(330, 86, 210, 108, "跑脚本", "Python / Shell", "thin")}
    ${box(574, 86, 210, 108, "查网页", "搜索 / 比较", "thin")}
    ${box(818, 86, 210, 108, "生成文档", "报告 / 表格", "thin")}
    ${box(208, 314, 280, 110, "操作本地软件", "让 AI 进入真实工作区", "thin")}
    ${box(632, 314, 280, 110, "交付成品", "不是建议，而是文件", "hero")}
    ${arrow(488, 370, 625, 370, true)}
  `),
  mcpSkill: diagram(`
    ${box(170, 310, 780, 115, "MCP：手 / 工具接口", "读写文件、联网搜索、调用接口、操作软件", "thin")}
    ${box(170, 120, 780, 115, "Agent Skill：脑 / 判断策略", "知道遇到什么任务、用什么工具、按什么标准交付", "hero")}
    <path class="arrow rust-stroke" d="M560 298 V260"></path>
    <path class="arrow rust-stroke" d="M546 274 L560 248 L574 274"></path>
    <text class="small-label" x="362" y="486">刀具让 AI 能触达世界；菜谱让 AI 知道怎么做。</text>
  `),
  pipeline: diagram(`
    ${box(50, 210, 176, 120, "输入目标", "明确交付物", "thin")}
    ${arrow(236, 270, 292, 270)}
    ${box(300, 210, 176, 120, "读取资料", "先看上下文", "thin")}
    ${arrow(486, 270, 542, 270)}
    ${box(550, 184, 190, 172, "调用工具", "执行动作", "hero")}
    ${arrow(750, 270, 806, 270, true)}
    ${box(814, 210, 176, 120, "生成结果", "按模板输出", "thin")}
    ${arrow(1000, 270, 1060, 270)}
    <text class="small-label" x="828" y="414">最后一步：自检交付</text>
  `),
  feedback: diagram(`
    <circle class="ring" cx="560" cy="270" r="180"></circle>
    ${box(470, 58, 180, 76, "草稿", "先产出", "thin")}
    ${box(750, 230, 180, 76, "人类反馈", "指出偏差", "thin")}
    ${box(470, 405, 180, 76, "更新 Skill", "沉淀规则", "hero")}
    ${box(190, 230, 180, 76, "下次复用", "更稳定", "thin")}
    <path class="arrow rust-stroke" d="M630 128 C760 150 834 182 840 230"></path>
    <path class="arrow rust-stroke" d="M840 306 C820 390 720 438 650 438"></path>
    <path class="arrow rust-stroke" d="M470 438 C340 420 266 360 278 306"></path>
    <path class="arrow rust-stroke" d="M278 230 C300 150 392 118 470 96"></path>
  `),
  weekly: diagram(`
    ${box(78, 128, 260, 112, "输入", "本周事项 / 数据 / 目标", "thin")}
    ${arrow(356, 184, 470, 184)}
    ${box(486, 100, 250, 170, "周报 Skill", "按 STAR 结构组织", "hero")}
    ${arrow(752, 184, 872, 184, true)}
    ${box(888, 128, 170, 112, "输出", "可提交周报", "thin")}
    ${box(200, 360, 720, 92, "验收", "是否有结果、有数据、有风险、有下周动作", "thin")}
  `),
  pdf: diagram(`
    ${box(70, 166, 220, 170, "长篇 PDF", "几十页材料", "thin")}
    ${arrow(310, 252, 435, 252)}
    ${box(455, 126, 240, 250, "解析管线", "先拆结构，再给结论", "hero")}
    ${arrow(718, 252, 838, 252, true)}
    ${box(850, 78, 200, 82, "三要点", "记住重点", "thin")}
    ${box(850, 190, 200, 82, "风险", "提前避坑", "thin")}
    ${box(850, 302, 200, 82, "下一步", "变成行动", "thin")}
  `),
  data: diagram(`
    ${box(60, 215, 180, 100, "CSV", "原始数据", "thin")}
    ${arrow(254, 266, 354, 266)}
    ${box(370, 180, 220, 170, "分析 Skill", "清洗 / 统计 / 对比", "hero")}
    ${arrow(604, 266, 704, 266, true)}
    <rect class="chart" x="732" y="150" width="300" height="230" rx="14"></rect>
    <rect class="bar" x="780" y="300" width="42" height="54"></rect>
    <rect class="bar rust-fill" x="852" y="236" width="42" height="118"></rect>
    <rect class="bar" x="924" y="190" width="42" height="164"></rect>
    <text class="box-title" x="770" y="116">图表 + 结论</text>
  `),
  workspace: diagram(`
    <rect class="paper" x="160" y="64" width="800" height="420" rx="18"></rect>
    <path class="dash" d="M560 84 V464 M180 274 H940"></path>
    ${box(210, 120, 300, 112, "任务池", "重复工作先放进来", "thin")}
    ${box(610, 120, 300, 112, "资料库", "旧稿 / 案例 / 文件", "thin")}
    ${box(210, 318, 300, 112, "Skill 库", "可复用流程", "hero")}
    ${box(610, 318, 300, 112, "验收清单", "让结果不漂移", "thin")}
  `),
  mvp: diagram(`
    ${box(80, 100, 220, 120, "1 个 Prompt", "岗位说明书", "hero")}
    ${box(335, 100, 220, 120, "3 份资料", "参考样本", "thin")}
    ${box(590, 100, 220, 120, "1 个模板", "输出格式", "thin")}
    ${box(845, 100, 220, 120, "5 条检查项", "验收标准", "thin")}
    <path class="dash" d="M190 220 V410 H955 V220"></path>
    <text class="form-title" x="260" y="470">先做最小系统，不要一开始追求自动化全家桶。</text>
  `),
  tonight: diagram(`
    ${box(120, 130, 360, 260, "01", "写下第一个 System Prompt", "hero")}
    <text class="diagram-note light" x="165" y="280">角色 / 步骤 / 标准</text>
    ${box(640, 130, 360, 260, "02", "喂一份复杂文件", "thin")}
    <text class="diagram-note" x="685" y="280">三要点 / 风险 / 下一步</text>
    ${arrow(500, 260, 625, 260, true)}
  `),
  closing: diagram(`
    <path class="door" d="M360 105 H560 V470 H360 Z"></path>
    <path class="door rust-fill" d="M560 105 L735 170 V420 L560 470 Z"></path>
    ${arrow(740, 292, 970, 292, true)}
    ${box(120, 430, 220, 76, "陪聊", "随机回答", "thin")}
    ${box(440, 430, 220, 76, "系统", "稳定执行", "hero")}
    ${box(760, 430, 220, 76, "掌控", "数字未来", "thin")}
  `),
};

const slides = [
  ["cover", "封面", title("从陪聊到", ["专属数字员工", true]), subLines(["给初学者的一张", "个人 AI 工作系统蓝图。", "少一点术语，", "多一点可执行的结构。"]), diagrams.systemOverview, insightLines(["先别追求万能提示词，", "先搭一个能工作的系统。"])],
  ["problem", "为什么 AI 看起来很笨", title("不是模型笨，", ["是条件没给够", true]), subLines(["AI 要完成工作，", "至少需要目标、资料、", "工具和验收标准。", "只有聊天框，它只能猜。"]), diagrams.missingConditions, insightLines(["把 AI 当新人看：", "没有岗位、资料和工具，", "新人也会乱做。"])],
  ["shift", "旧模式 vs 新模式", title("从一句话提问，", ["到一套工作流", true]), sub("新手最关键的转变：不是学习更玄的问法，而是把工作条件组织起来。"), diagrams.beforeAfter, insight("Prompt 只是入口，工作流才是交付系统。")],
  ["employee", "什么是专属数字员工", title("数字员工，", ["先有岗位说明书", true]), sub("它不是一个更会聊天的 AI，而是一个被安排了角色、范围、材料、格式和标准的执行者。"), diagrams.jobSpec, insight("说明书越清楚，交付越稳定。")],
  ["stack", "Agent Skill 总架构", title("Agent Skill", ["是一套五层系统", true]), sub("把经验封装成可复用资产：从目标开始，到验收结束。"), diagrams.stack, insight("这张图是全篇主地图，后面每页都在展开其中一层。")],
  ["prompt", "System Prompt", title("System Prompt", ["不是话术，是说明书", true]), sub("对新手来说，只要先写清四件事：你是谁、做什么、怎么做、什么算好。"), diagrams.promptBlueprint, insight("把脑内经验写成制度，AI 才能反复调用。")],
  ["references", "References", title("给 AI 资料，", ["它才少幻觉", true]), sub("References 是证据中心。它让 AI 先查事实，再开始判断。"), diagrams.references, insight("少幻觉不是靠提醒“别编”，而是把证据放到它手边。")],
  ["tools", "Scripts / Tools", title("给 AI 工具，", ["它才能执行", true]), subLines(["读文件、跑脚本、", "查网页、生成文档、", "操作软件。", "这些能力把 AI 推出聊天框。"]), diagrams.tools, insightLines(["从建议到交付，", "中间差的是工具连接。"])],
  ["mcp", "MCP 与 Agent Skill", title("MCP 是手，", ["Skill 是脑", true]), sub("MCP 提供工具接口；Agent Skill 负责判断策略。一个让 AI 能做，一个让 AI 知道怎么做。"), diagrams.mcpSkill, insight("刀具 + 菜谱，才像一个真正能做饭的助手。")],
  ["pipeline", "执行流程", title("AI 工作，", ["不是聊天，是流程", true]), subLines(["把交付拆成五步：", "输入目标、读取资料、", "调用工具、生成结果，", "最后自检交付。"]), diagrams.pipeline, insightLines(["流程清楚，", "新手才知道下一步", "该怎么让 AI 做。"])],
  ["feedback", "反馈闭环", title("Skill 不是写完，", ["而是越用越稳", true]), sub("每次人工反馈，都应该回到 Skill 里，变成下一次自动遵守的标准。"), diagrams.feedback, insightLines(["好用的 Skill 来自迭代，", "不来自一次性灵感。"])],
  ["weekly", "案例：写周报", title("案例一：", ["写周报 Skill", true]), subLines(["把熟悉的工作先系统化：", "输入本周事项、数据和目标，", "输出 STAR 结构周报。"]), diagrams.weekly, insight("先从你最常重复的工作开始。")],
  ["pdf", "案例：读长篇 PDF", title("案例二：", ["读长篇 PDF", true]), sub("不要让 AI 泛泛总结。让它先拆结构，再给三要点、风险和下一步问题。"), diagrams.pdf, insight("喂文件的目的，是把阅读变成行动。")],
  ["data", "案例：数据分析", title("案例三：", ["从数据到结论", true]), sub("不需要讲复杂代码，只要让新手理解：CSV 可以进入脚本，脚本可以产生图表和结论。"), diagrams.data, insight("工具调用让 AI 从“建议者”变成“执行者”。")],
  ["workspace", "个人 Agent 工作台", title("最后，", ["搭一个工作台", true]), sub("把任务池、资料库、Skill 库和验收清单放在同一个工作系统里。"), diagrams.workspace, insight("这不是收藏工具，而是搭建自己的工作操作台。")],
  ["mvp", "新手最小版本", title("新手先做", ["最小可行版本", true]), sub("别一开始追求全自动。先做 1 个 Prompt、3 份资料、1 个模板、5 条检查项。"), diagrams.mvp, insight("小系统先跑起来，再慢慢加工具。")],
  ["tonight", "今晚两件事", title("今晚就做", ["两件事", true]), sub("写下第一个 System Prompt；再喂一份明天要看的复杂文件。"), diagrams.tonight, insight("行动越小，越容易真正开始。")],
  ["closing", "结尾", title("告别陪聊，", ["掌控数字未来", true]), sub("不是等更聪明的模型，而是把你的经验、资料、工具和标准组织起来。"), diagrams.closing, insight("从今天开始，拥有你的专属数字员工。")],
];

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>从陪聊到专属数字员工 · Blueprint</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap');
:root{--paper:#F0EAE0;--ink:#1a1a1a;--ink2:#555;--muted:#8b857c;--rust:#B5392A;--rust-soft:rgba(181,57,42,.08);--line:#cec8be;--white:#fffaf2}
*{box-sizing:border-box}html,body{margin:0;height:100%;overflow:hidden;background:var(--paper);color:var(--ink);font-family:Inter,'Noto Sans SC',system-ui,sans-serif}.deck{position:fixed;inset:0;display:flex;width:1800vw;height:100vh;transition:transform .65s cubic-bezier(.77,0,.175,1)}.slide{position:relative;flex:0 0 100vw;width:100vw;height:100vh;padding:64px 80px;overflow:hidden;background:var(--paper)}.kb-grid-bg{position:absolute;inset:0;pointer-events:none;opacity:.5;background-image:linear-gradient(rgba(26,26,26,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(26,26,26,.055) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse at center,black 42%,transparent 88%)}.slide>*{position:relative;z-index:2}.kb-top{position:absolute;top:24px;left:80px;right:80px;display:flex;justify-content:space-between;font:700 12px/1 JetBrains Mono,monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}.kb-footer{position:absolute;left:80px;right:80px;bottom:32px;display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:14px;font:700 11px/1 JetBrains Mono,monospace;letter-spacing:.15em;text-transform:uppercase;color:var(--muted)}.kb-layout{height:100%;display:grid;grid-template-columns:46fr 54fr;gap:40px;align-items:center;padding:26px 0 44px}.kb-text{display:flex;flex-direction:column;gap:22px}.kb-kicker{font:900 13px/1 JetBrains Mono,monospace;letter-spacing:.25em;text-transform:uppercase;color:var(--rust)}.kb-h1{font-size:clamp(56px,5.6vw,88px);font-weight:900;line-height:1.02;letter-spacing:-.035em;margin:0}.line{display:block;text-wrap:balance}.rust{color:var(--rust)}.kb-sub{font-size:clamp(22px,1.65vw,28px);line-height:1.42;color:var(--ink2);margin:0;max-width:28ch}.kb-sub span{display:block}.kb-insight{display:block;background:var(--rust);color:white;border-radius:10px;padding:18px 22px;font-size:20px;font-weight:800;line-height:1.45;max-width:430px}.kb-insight span{display:block;font:900 11px/1 JetBrains Mono,monospace;letter-spacing:.18em;text-transform:uppercase;opacity:.72;margin-bottom:9px}.kb-insight b{display:block;font:inherit}.kb-diagram{width:100%;max-height:72vh}.kb-diagram rect,.kb-diagram .paper{fill:#fffaf2;stroke:var(--ink);stroke-width:4}.kb-diagram .thin rect{fill:#fffaf2}.kb-diagram .hero rect{fill:var(--rust);stroke:var(--rust)}.kb-diagram .box-title{font-size:28px;font-weight:900;fill:var(--ink)}.kb-diagram .box-desc{font-size:20px;font-weight:800;fill:var(--ink2)}.kb-diagram .hero .box-title,.kb-diagram .hero .box-desc{fill:#fff}.arrow{fill:none;stroke:var(--ink);stroke-width:5;stroke-linecap:round;stroke-linejoin:round}.rust-stroke{stroke:var(--rust)!important}.dash{fill:none;stroke:var(--line);stroke-width:4;stroke-dasharray:8 8}.loop,.ring{fill:none;stroke:var(--rust);stroke-width:5}.island{fill:rgba(181,57,42,.06);stroke:var(--rust);stroke-width:4;stroke-dasharray:10 8}.small-label{font-size:22px;font-weight:900;fill:var(--ink2)}.diagram-note{font-size:26px;font-weight:900;fill:var(--ink)}.diagram-note.light{fill:#fff}.form-title{font-size:34px;font-weight:900;fill:var(--ink)}.chart{fill:#fffaf2;stroke:var(--ink);stroke-width:4}.bar{fill:#d9d1c5;stroke:var(--ink);stroke-width:3}.rust-fill{fill:var(--rust)!important}.door{fill:#fffaf2;stroke:var(--ink);stroke-width:5}.nav{position:fixed;left:50%;bottom:12px;transform:translateX(-50%);z-index:10;display:flex;gap:8px}.nav button{width:8px;height:8px;border-radius:50%;border:0;background:#b8b0a5;padding:0}.nav button.active{width:24px;border-radius:999px;background:var(--rust)}.hint{position:fixed;right:28px;bottom:11px;z-index:10;font:700 10px/1 JetBrains Mono,monospace;color:var(--muted);letter-spacing:.16em;text-transform:uppercase}@media(max-width:900px){.slide{padding:52px 44px}.kb-layout{grid-template-columns:1fr;gap:14px}.kb-sub{max-width:100%}.kb-diagram{max-height:48vh}.kb-footer,.kb-top{left:44px;right:44px}.kb-h1{font-size:52px}}
</style>
</head>
<body>
<main id="deck" class="deck">
${slides.map(([id, label, h, p, svg, note], i) => `<section class="slide" data-id="${id}">
  ${chrome(i + 1, label)}
  <div class="kb-layout">
    <div class="kb-text">
      <div class="kb-kicker">${label}</div>
      ${h}
      ${p}
      ${note}
    </div>
    <div>${svg}</div>
  </div>
</section>`).join("\n")}
</main>
<div id="nav" class="nav"></div><div class="hint">← → 翻页</div>
<script>
const deck=document.getElementById('deck');
const slides=[...document.querySelectorAll('.slide')];
const nav=document.getElementById('nav');
let idx=0;
slides.forEach((_,i)=>{const b=document.createElement('button');b.onclick=()=>go(i);nav.appendChild(b)});
function go(n){idx=Math.max(0,Math.min(slides.length-1,n));deck.style.transform='translateX('+(-idx*100)+'vw)';[...nav.children].forEach((b,i)=>b.classList.toggle('active',i===idx))}
addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key))go(idx+1);if(['ArrowLeft','PageUp'].includes(e.key))go(idx-1);if(e.key==='Home')go(0);if(e.key==='End')go(slides.length-1)});
go(Number(new URLSearchParams(location.search).get('slide')||1)-1);
</script>
</body></html>`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), html);
