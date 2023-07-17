const outputEl = document.getElementById("output");
const inputEl = document.getElementById("terminal-input");
const terminalEl = document.getElementById("terminal");
const adDOM = document.getElementById("ad");
const viDOM = document.getElementById("vi");
const editorDOM = document.getElementById("editor");
const editorBtn = document.getElementById("editor-btn");
const preRenderDOM = document.getElementById("prerender");
const promptDOM = document.getElementById("prompt");

let prompt = `[guest@localhost ~]$ `;

if (window.innerWidth < 480) {
  prompt = `>$`;
}
const commands = {
  whoami: "Shows your username",
  id: "Another way telling who you are",
  about: "Voluntary personal information disclosure?!",
  social: "Display social networks",
  banner: "Displays the banner(needs admin privilege)",
  theme: "Changes the font colour.eg: theme red",
  hacked: "???",
  projects: "View coding projects",
  date: "View date",
  echo: "Typical Linux echo command",
  killfetch: "Does killfetch",
  help: "You obviously already know what this does",
  email: "Do not email me",
  clear: "Clear terminal",
  ls: "To the list of blogs",
  cat: "To read my blogs.eg: cat blog1.html",
  vi: "visual editor, stores file locally",
  secret: "DON'T TRY TO VIEW MY SECRET"
};

const blogs = [
  { name: "Butterfly Effect", file: "blog1.html" },
  { name: "Butterfly Effect", file: "pnpt.html" },
];

const pages = blogs.map((item) => item.file);

const ads = [
  [
    "zoa/capy.gif",
    "zoa/drink.gif",
    "zoa/transform.gif",
    "zoa/flying.gif",
    "zoa/zoa.jpg",
  ],
  [
    "prime/prime.gif",
    "prime/logan-jump.gif",
    "prime/logan-drink.gif",
    "prime/ksi.gif",
    "prime/ksi-yes.gif",
  ],
  [
    "cupcake/cupcake.gif",
    "cupcake/run.gif",
    "cupcake/happycupcake.gif",
    "cupcake/happy.gif",
    "cupcake/cry.gif",
  ],
];

let adTime;
let gifTime;

const secretMusic = new Audio("./assets/audio/goofy-ahh-2.mp3");
