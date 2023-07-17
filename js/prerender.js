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

function killfetch(data = {}) {
  return `
   <div id="killfetch">
          <img id= "main-img" src="assets/rats.gif" alt="main image" />
          <div class="data">
            <div>
              <span>Browser:</span>
              <span>Chrome</span>
            </div>
            <div>
              <span>Browser:</span>
              <span>${getOS()}</span>
            </div>
            <div>
              <span>IP:</span>
              <span>${data.ip || "?????"}</span>
            </div>
            <div>
              <span>Longitude:</span>
              <span>${data.longitude || "?????"}</span>
            </div>
            <div>
              <span>Latitude:</span>
              <span>${data.latitude || "?????"}</span>
            </div>
            <div>
              <span>Origin:</span>
              <span>${data.region || "?????"}</span>
            </div>
            <div>
              <span>Country:</span>
              <span>${data.country_name || "?????"}</span>
            </div>
            <div>
              <span>Time:</span>
              <span>${new Date().toLocaleTimeString()}</span>
            </div>
            <div>
              <span>Date:</span>
              <span>${new Date().toLocaleDateString()}</span>
            </div>
            <div>
              <span>Resolution:</span>
              <span>${window.screen.width}</span>
              <span>x</span>
              <span>${window.screen.height}</span>
            </div>
          </div>
        </div> `;
}

async function getIpApi(place = "pre") {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    if (place === "pre") preRenderDOM.innerHTML += killfetch(data);
    if (place === "out")
      document.getElementById("output").innerHTML += killfetch(data);
  } catch (err) {
    if (place === "pre") preRenderDOM.innerHTML += killfetch();
    if (place === "out")
      document.getElementById("output").innerHTML += killfetch();
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
      preRenderDOM.innerHTML += killfetch();
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
