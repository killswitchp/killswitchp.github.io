promptDOM.innerHTML = prompt;

// ["welcome", "figlet", "stickman", "killfetch | hackerman"];
const opts = ["killfetch", "figlet"];

let welcome = `<p id="welcome" >
Welcome to my web terminal!! Type
<span class="glow-text">help</span>
to view the list of commands
</p>`;

preRenderDOM.innerHTML += welcome;

let figlet = `
<pre class="figlet">
888b.    db       db    Yb    dP    db    888      db    888b.    db    8b   d8 
8  .8   dPYb     dPYb    Yb  dP    dPYb    8      dPYb   8  .8   dPYb   8YbmdP8 
8wwP'  dPwwYb   dPwwYb    YbdP    dPwwYb   8     dPwwYb  8wwK'  dPwwYb  8  "  8 
8     dP    Yb dP    Yb    YP    dP    Yb 888   dP    Yb 8  Yb dP    Yb 8     8 
</pre
      >
      `;

if (window.innerWidth < 480) {
  figlet = `
<pre class="figlet">
/$$$$$$$   /$$$$$$ 
| $$__  $$ /$$__  $$
| $$  \\ $$| $$  \\ $$
| $$$$$$$/| $$$$$$$$
| $$____/ | $$__  $$
| $$      | $$  | $$
| $$      | $$  | $$
|__/      |__/  |__/
</pre
      >
      `;
}

let stickman = `
<div class="stickman ">
  <div class="head">
    <div class="lefteye"></div>
    <div class="righteye"></div>
    <div class="mouth"></div>
  </div>
  <div class="body">
    <div class="rightarm"></div>
    <div class="leftarm"></div>
    <div class="leftleg"></div>
    <div class="rightleg"></div>
  </div>
</div>`;

function getOS() {
  let Name = "unknown";
  if (navigator.userAgent.indexOf("Win") != -1) Name = "Windows OS";
  if (navigator.userAgent.indexOf("Mac") != -1) Name = "MacOS";
  if (navigator.userAgent.indexOf("X11") != -1) Name = "UNIX OS";
  if (navigator.userAgent.indexOf("Linux") != -1) Name = "Linux OS";
  return Name;
}

function killfetch(data = {}, element = true) {
  const container = document.createElement("div");
  container.setAttribute("id", "killfetch");
  const image = document.createElement("img");
  image.setAttribute("id", "main-img");
  image.src = "assets/rats.gif";
  image.alt = "main image";
  const spanify = data => {
    const outer = document.createElement("div");
    outer.append(...data.map(n => {
      const s = document.createElement("span");
      s.textContent = n;
      return s;
    }));
    return outer;
  }
  const dataContainer = document.createElement("div");
  dataContainer.className = "data";
  dataContainer.append(...[
        ["Browser:", "Chrome"],
        ["OS:", getOS()],
        ["IP:", data.ip || "?????"],
        ["Longitude:", data.longitude || "?????"],
        ["Latitude:", data.latitude || "?????"],
        ["Origin:", data.region || "?????"],
        ["Country:", data.country_name || "?????"],
        ["Time:", new Date().toLocaleTimeString()],
        ["Date:", new Date().toLocaleDateString()],
        ["Resolution:", window.screen.width, "x", window.screen.height],
  ].map(spanify));

  container.append(image, dataContainer);
  return element ? container : container.outerHTML;
}

async function getIpApi(place = "pre") {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    if (place === "pre") preRenderDOM.innerHTML += killfetch(data, false);
    if (place === "out")
      document.getElementById("output").append(killfetch(data));
  } catch (err) {
    if (place === "pre") preRenderDOM.innerHTML += killfetch({}, false);
    if (place === "out")
      document.getElementById("output").append(killfetch());
  }
}

function preRender(opt) {
  switch (opt) {
    case "welcome":
      preRenderDOM.innerHTML += welcome;
      break;
    case "figlet":
      preRenderDOM.innerHTML += figlet;
      break;
    case "stickman":
      preRenderDOM.innerHTML += stickman;
      break;
    case "killfetch":
      preRenderDOM.innerHTML += killfetch({}, false);
      break;
    case "hackerman":
      getIpApi();
      break;
  }
}

opts.forEach((item) => {
  preRenderDOM.innerHTML += `<div class=prompt-wrapper><span>${prompt}</span><span>${item}</span></div>`;
  preRender(item);
});
