// elements
const outputEl = document.getElementById("output");
const inputEl = document.getElementById("terminal-input");
const terminalEl = document.getElementById("terminal");
const adDOM = document.getElementById("ad");
const viDOM = document.getElementById("vi");
const editorDOM = document.getElementById("editor");
const editorBtn = document.getElementById("editor-btn");
const preRenderDOM = document.getElementById("prerender");
const promptDOM = document.getElementById("prompt");

// terminal
let prompt = `[guest@localhost ~]$ `;
if (window.innerWidth < 480) {
  prompt = `>$`;
}

// commands
const commands = {
  whoami: "Shows your username",
  id: "Another way of telling who you are",
  setuser: "Changes your displayed username",
  ascii: "Generates ASCII art from text",
  define: "Fetches word definitions",
  weather: "Shows weather for a city",
  about: "Voluntary personal information disclosure?!",
  social: "Display social networks",
  banner: "Displays the banner (needs admin privilege)",
  hacked: "???",
  projects: "View coding projects",
  date: "View date",
  echo: "Typical Linux echo command",
  killfetch: "Does killfetch",
  help: "Shows available commands",
  email: "Do not email me",
  clear: "Clear terminal",
  ls: "List available blogs",
  cat: "Read a blog (e.g., cat blog1.html)",
  vi: "Visual editor (stores file locally)",
  secret: "DON'T TRY TO VIEW MY SECRET",
  ad: "For monetization",
  uptime: "Displays system uptime",
  neofetch: "Displays system information",
  fortune: "Prints a random fortune message",
  cal: "Displays a calendar for the current month",
  uname: "Prints system information",
  linkedin: "Check out my LinkedIn",
  news: "Displays simulated news headlines",
  joke: "Prints a random joke",
  matrix: "Activates matrix mode",
  cowsay: "Prints a message with a talking cow",
  settheme: "Sets terminal theme (e.g., settheme dark)",
  logs: "Displays simulated system logs"
};

// blogs and pages
const blogs = [
  { name: "Butterfly Effect", file: "blog1.html" },
  { name: "PNPT Review 2023", file: "pnpt.html" },
  { name: "Wannacry Ransomware", file: "wannacry.html" },
  { name: "Tumbaad", file: "blog2.html" },
  { name: "Pivot", file: "pivot.html" },
  { name: "HTB CDSA Review 2024", file: "cdsa.html" }
];
const pages = blogs.map((item) => item.file);

const secretMusic = new Audio("./assets/audio/goofy-ahh-2.mp3");
