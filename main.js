const validColours = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'gray',
  'black',
  'white',
  'cyan',
  'magenta',
  'lime',
  'teal',
  'navy',
  'olive',
  'maroon'
];

const ads = [
  [
    "ads/rat-pizza.gif",
    "ads/rat-spin.gif",
    "ads/rat.gif",
    "ads/stifffy-uh.gif"
  ]
];
let secretActive = false; 
let adTime;
let gifTime;

const fortunes = [
  "Luck favors the prepared.",
  "You will have a pleasant surprise.",
  "A fresh start will put you on your way.",
  "Now is the time to try something new.",
  "Your life will be happy and peaceful.",
  "Adventure can be real happiness.",
  "Your ability for accomplishment will follow with success.",
  "A golden egg of opportunity falls into your lap this month.",
  "Don’t just think. Act!",
  "You will soon be surrounded by good friends and laughter.",
  "The greatest risk is not taking one.",
  "Your kindness will lead you to success.",
  "A thrilling time is in your near future.",
  "Your talents will be recognized and suitably rewarded.",
  "An exciting opportunity lies ahead of you.",
  "You will soon be rewarded for your efforts.",
  "Happiness is often a rebound from hard work.",
  "All your hard work will soon pay off.",
  "Your energy returns and you get things done.",
  "Trust yourself and your instincts.",
  "You will travel to many places.",
  "The best way to predict your future is to create it.",
  "Your dream will come true soon.",
  "Great things are ahead of you.",
  "You will find fortune in unexpected places.",
  "Your creativity will lead you to great success.",
  "A great adventure is in store for you.",
  "You will soon meet someone who will be important in your life.",
  "A faithful friend is a strong defense.",
  "Your imagination will lead you to new ideas.",
  "Do not let what you cannot do interfere with what you can do.",
  "Your positive attitude will take you far.",
  "Good fortune will be yours.",
  "A cheerful heart makes the world a better place.",
  "Your perseverance will lead you to success.",
  "Keep your face to the sunshine and you cannot see a shadow.",
  "Be willing to listen to new ideas.",
  "Your efforts will be rewarded soon.",
  "Don’t be afraid to take that big step.",
  "Your heart is in the right place.",
  "Patience is a virtue, and good things come to those who wait.",
  "Life is what happens while you are making other plans.",
  "A small act of kindness will bring great joy.",
  "A journey of a thousand miles begins with a single step.",
  "Your hard work will bring you much happiness.",
  "Every day is a new beginning.",
  "You will soon gain something you have always wanted.",
  "A chance meeting opens new doors to success and friendship.",
  "You have a strong instinct for success.",
  "Your confidence will lead you to great heights.",
  "Happiness comes from within.",
  "Your leadership qualities will shine soon.",
  "Great achievements involve great risk.",
  "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
  "You will soon witness a miracle.",
  "New financial resources will soon become available to you.",
  "Success is just around the corner.",
  "Your smile lights up the world.",
  "You will have many great accomplishments in your lifetime.",
  "You will have a long and healthy life.",
  "A wise person learns more from their failures than a fool from their successes.",
  "Your love of life will carry you through many challenges.",
  "The secret to happiness is freedom, and the secret to freedom is courage.",
  "A new business venture is on the horizon.",
  "Stay true to yourself and everything will work out.",
  "Good news will come to you by mail.",
  "Do not dwell on past failures, focus on future successes.",
  "Your intuition will lead you to great discoveries.",
  "You will be successful in your career.",
  "Do not be afraid to take chances.",
  "The best is yet to come.",
  "Your positive attitude will lead to good things.",
  "New opportunities are coming your way.",
  "A new perspective will come with the new year.",
  "You will soon embark on a new adventure.",
  "Your generosity will be repaid handsomely.",
  "Your next move will bring you great rewards.",
  "Believe in yourself and others will too.",
  "Big results require big ambitions.",
  "Good things take time, be patient.",
  "Your kindness will lead you to happiness.",
  "Change is coming. Embrace it.",
  "Your dreams will come true in unexpected ways.",
  "A joyful heart is the best medicine.",
  "Opportunities are all around you. Take advantage of them.",
  "Life’s biggest adventures start with a single step.",
  "You will inspire others with your actions.",
  "The only limit to your success is your own imagination.",
  "A beautiful journey is ahead of you.",
  "Your best ideas will come when you least expect them.",
  "Someone is thinking of you fondly right now.",
  "Your energy and enthusiasm inspire others.",
  "Expect great things to happen soon.",
  "You will achieve greatness in your lifetime."
];

const themes = {
  dark: {
    "--primary": "#3d43b4",
    "--background": "#000000",
    "--secondary": "#ffffff"
  },
  retro: {
    "--primary": "#00FF00",
    "--background": "#000000",
    "--secondary": "#00FF00"
  },
  neon: {
    "--primary": "#FF00FF",
    "--background": "#000000",
    "--secondary": "#FFFF00"
  },
  light: {
    "--primary": "#333333",
    "--background": "#ffffff",
    "--secondary": "#666666"
  },
  ocean: {
    "--primary": "#005f73",
    "--background": "#e0fbfc",
    "--secondary": "#94d2bd"
  },
  pastel: {
    "--primary": "#ffadad",
    "--background": "#ffd6a5",
    "--secondary": "#fdffb6"
  },
  cyberpunk: {
    "--primary": "#ff4d6d",
    "--background": "#2b2d42",
    "--secondary": "#8d99ae"
  },
  forest: {
    "--primary": "#2f3e46",
    "--background": "#84a98c",
    "--secondary": "#cad2c5"
  }
};
if (window.innerWidth < 480) {
  prompt = `>$`;
}

let commandHistory = [];
let historyIndex = 0;

function executeCommand(userInput) {
  const [cmd, ...rest] = userInput.split(" ");
  const args = rest.join(" ");

  switch (cmd) {
    case "":
      return;

      case "help":
        let commandList = Object.entries(commands);
        let table = "<table id='help-table'>";
        commandList.forEach(([key, value]) => {
          table += "<tr><td class='help-options'>" + key + "</td><td class='help-description'>" + value + "</td></tr>";
        });
        table += "</table>";
        return table;

    case "social":
      let social = "Will update when I need a job!!!!!!!!!";
      return `<p class="message">${social}</p>`;

      case "id":
        let id = `uid=1002(${username}) gid=1002(${username}) groups=1002(${username})`;
        return `<p class="message">${id}</p>`;
    case "echo":
      return `<p class="message">${userInput.substring(5)}</p>`;

    case "about":
      let about = "I'm Paavai Aram.(Will update info when I need a job probably)";
      return `<p class="message">${about}</p>`;

    case "banner":
      let bannerText = "You are not the admin!!";
      return `<p class='error'>"${bannerText}"</p>`;

    case "projects":
      let projects = [
        "I will update the list of projects I'm working on soon....",
      ];
      return `<p id='projects'>"${projects[0]}"</p>`;

    case "email":
      let mail = "Contact Me via gmail";
      return `<a class="message" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfghgTtLnhcHJQhMrsSWsjlVQqBzLmWlvDFkrfqrgPrXmmsFKWDlCGvpkwmXJbmdfnPg">${mail}</a>`;

    case "whoami":
      return `<p class="message">${username}</p>`;

      case "setuser":
        if (!args) return `<p class="error">Usage: setuser &lt;name&gt;</p>`;
        setUsername(args);
        return `<p class="success">Username changed to <strong>${args}</strong>.</p>`;

      case "ascii":
        if (!args) return `<p class="error">Usage: ascii &lt;text&gt;</p>`;
        return fetchASCIIArt(args);

    case "define":
      if (!args) return `<p class="error">Usage: define &lt;word&gt;</p>`;
      return fetchDefinition(args);

    case "sudo":
      window.open("https://www.youtube.com/watch?v=IVRlYIjKy0A");
      return `<p class="message">lol, don't try to hack me and I banned sudo ;)</p>`;

    case "ls":
      const list = pages.map((item) => `<span>${item}</span>`).join(" ");
      return `<div class="message">${list}</div>`;

    case "clear":
      outputEl.innerHTML = '<a id="before"></a>';
      before = document.getElementById("before");
      return before;

    case "date":
      const currentDate = new Date();
      const formattedDate = currentDate.toString();
      return `<p id='date'>${formattedDate}</p>`;

    case "linkedin":
      window.open("https://www.linkedin.com/in/paavai-aram/");
      return `<p class="message">Redirecting to LinkedIn...</p>`;

    case "uptime":
      let currentTime = Date.now();
      let diff = currentTime - startTime;
      let seconds = Math.floor(diff / 1000) % 60;
      let minutes = Math.floor(diff / (1000 * 60)) % 60;
      let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      return `<p class='message'>Browser Tab Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds</p>`;

    case "neofetch":
      let info = `<pre class="neofetch">`;
      info += `OS: ${getOS()}\n`;
      info += `Browser: ${navigator.userAgent}\n`;
      info += `Screen: ${window.screen.width}x${window.screen.height}\n`;
      info += `Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}\n`;
      info += `</pre>`;
      return info;

    case "fortune":
      return `<p class='message'>"${fortunes[Math.floor(Math.random() * fortunes.length)]}"</p>`;

    case "cal":
      return generateCalendar();

    case "who":
      return `<p class='message'>Logged-in users: user1, user2</p>`;

    case "uname":
      return `<p class='message'>Linux Kernel 5.15.0</p>`;

    case "cat":
      if (!pages.includes(args))
        return `<p class='error'>Blog does not exist, type "ls" to view all the blogs</p>`;
      window.open(args);
      return `<p>Loading................</p>`;

    case "killfetch":
      return killfetch();

    case "hacked":
      getIpApi("out");
      return;

    case "ad":
      const adMusic = new Audio("./assets/audio/pico.mp3");
      adMusic.play();
      adDOM.classList.remove("hidden");
      let stopAds = false;
      clearTimeout(adTime);
      clearTimeout(gifTime);
      adTime = setTimeout(() => {
        adDOM.classList.add("hidden");
        stopAds = true;
        adMusic.pause();
      }, 15000);
      let count = 0;
      function playAds() {
        if (stopAds) return;
        const adIndex = (count % 4) + 1;
        adDOM.innerHTML = `<img src="./ads/rat${adIndex}.gif" alt="ad" />`;
        gifTime = setTimeout(() => {
          count++;
          playAds();
        }, 3000);
      }
      playAds();
      return;

    case "theme":
      if (!pages.includes(args)) {
        const colour = userInput.substring(6); 
        if (validColours.includes(colour)) {
          const styleElement = document.createElement('style');
          styleElement.innerHTML = `:root { --primary: ${colour}; }`;
          document.head.appendChild(styleElement);
          return `<p class="success">Colour changed</p>`;
        } else {
          return `<p class="success">No colour entered. Sample input --> theme red</p>`;
        }
      }


      case "secret":
        if (!secretActive) {
          document.body.style.backgroundImage = "url(assets/lizard-dance.gif)";
          inputEl.value = "TOLD YA NOT TO OPEN, REFRESH THE PAGE OR DELETE THIS MESSAGE AND TYPE SECRET AGAIN TO STOP IT!!!!!!!!!!!";
          secretMusic.play();
          secretActive = true;
          return `<p class="message">Secret mode activated. Type "secret" again to stop it.</p>`;
        } else {
          document.body.style.backgroundImage = "";
          inputEl.value = "";
          secretMusic.pause();
          secretActive = false;
          return `<p class="message">Secret mode deactivated.</p>`;
        }
      

    case "vi":
      viDOM.classList.remove("hidden");
      editorDOM.innerHTML = localStorage.getItem("vi-content");
      editorDOM.focus();
      return;

      case "news":
        const headlines = [
          "Breaking: New tech innovation announced!",
          "Market Update: Stocks on the rise!",
          "Sports: Local team wins championship!",
          "Weather: Expect sunny skies all week.",
          "Politics: New policy reforms unveiled!",
          "Entertainment: Celebrity scandal rocks Hollywood!",
          "Health: New breakthrough in medical research!"
        ];
      
        const summaries = [
          "A revolutionary gadget is set to transform everyday life.",
          "Investors are optimistic following strong economic data.",
          "The championship title was clinched in a thrilling game.",
          "Meteorologists forecast a week of pleasant weather.",
          "Government announces sweeping reforms that could change the industry.",
          "The celebrity news is stirring up conversations online.",
          "Scientists have discovered a promising new treatment."
        ];
      
        const categories = ["Tech", "Finance", "Sports", "Weather", "Politics", "Entertainment", "Health"];
      
        let newsHTML = "<div class='news-container'>";
        const numberOfItems = Math.floor(Math.random() * 3) + 3;
        for (let i = 0; i < numberOfItems; i++) {
          const headline = headlines[Math.floor(Math.random() * headlines.length)];
          const summary = summaries[Math.floor(Math.random() * summaries.length)];
          const category = categories[Math.floor(Math.random() * categories.length)];
          const minutesAgo = Math.floor(Math.random() * 60) + 1;
          newsHTML += `
            <div class='news-item'>
              <h3>${headline}</h3>
              <p>${summary}</p>
              <span class='news-meta'>${category} • ${minutesAgo} minutes ago</span>
            </div>
          `;
        }
        newsHTML += "</div>";
        return newsHTML;
      

    case "joke":
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.'",
        "Why did the programmer quit his job? Because he didn't get arrays (a raise)."
      ];
      const jokeIndex = Math.floor(Math.random() * jokes.length);
      return `<p class='message'>${jokes[jokeIndex]}</p>`;

    case "matrix":
      startMatrix();
      return `<p class='message'>Matrix mode activated...</p>`;

    case "cowsay":
      const cowMessage = args || "Moo!";
      const cowArt = `
 \\   ^__^
  \\  (oo)\\_______
     (__)\\       )\\/\\
         ||----w |
         ||     ||`;
      return `<pre class='message'>${cowMessage}\n${cowArt}</pre>`;

      case "settheme":
        const themeName = args.trim();
        if (!themeName) {
            return `<p class='message'>Available themes: ${Object.keys(themes).join(", ")}</p>`;
        }
        if (!themes[themeName]) {
            return `<p class='message'>Theme not found. Available themes: ${Object.keys(themes).join(", ")}</p>`;
        }
    
        if (themeName === "light") {
            waitingForConfirmation = true;
            return `<p class='error'>Warning: Enabling light mode is a war crime! Type <strong>confirmLightMode</strong> to proceed.</p>`;
        }
    
        applyTheme(themeName);
        return `<p class='message'>Theme set to ${themeName}</p>`;
    
    case "confirmLightMode":
        if (waitingForConfirmation) {
            waitingForConfirmation = false;
            applyTheme("light");
            return `<p class='message'>Light mode enabled. You monster.</p>`;
        } else {
            return `<p class='error'>No pending light mode confirmation.</p>`;
        }
    
    function applyTheme(themeName) {
        Object.keys(themes[themeName]).forEach(varName => {
            document.documentElement.style.setProperty(varName, themes[themeName][varName]);
        });
    }
    
    case "logs":
      const logs = [
        "[INFO] System initialized.",
        "[WARN] Low memory warning.",
        "[INFO] User logged in.",
        "[ERROR] Disk read error.",
        "[INFO] Scheduled backup completed."
      ];
      return `<pre class='message'>${logs.join("\n")}</pre>`;

    default:
      return `<p class='message'>Command not found: ${cmd}</p>`;
  }

  if (userInput == "cat blog1.html") {
    window.open("blog1.html");
    return `<p>Loading................</p>`;
  } else if (userInput == "cat pnpt.html") {
    window.open("pnpt.html");
    return `<p>Loading................</p>`;
  } else if (userInput == "cat wannacry.html") {
    window.open("wannacry.html");
    return `<p>Loading................</p>`;
  }
  return `<p class='message'>Command not found: ${cmd}</p>`;
}

function handleInput(event) {
  if (event.keyCode === 13) {
    const userInput = inputEl.value.trim();
    if (userInput) {
      commandHistory.push(userInput);
      historyIndex = commandHistory.length;
    }
    inputEl.value = "";
    outputEl.innerHTML += `<div class="prompt-wrapper"><span>${prompt}</span><span>${userInput}</span></div>`;
    let result = executeCommand(userInput);
    if (result) outputEl.innerHTML += result;
    setTimeout(() => {
      inputEl.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 50);
    return;
  }

  // Handle Tab for autocompletion
  if (event.key === "Tab") {
    event.preventDefault();
    const currentInput = inputEl.value;

    // Autocomplete for "cat" command (files)
    if (currentInput.startsWith("cat ")) {
      const parts = currentInput.split(" ");
      const filePart = parts.slice(1).join(" ");
      const matchingFiles = pages.filter(file => file.startsWith(filePart));
      if (matchingFiles.length === 1) {
        inputEl.value = "cat " + matchingFiles[0];
      } else if (matchingFiles.length > 1) {
        outputEl.innerHTML += `<p class='message'>${matchingFiles.join(" ")}</p>`;
      }
    }
    // Autocomplete for "settheme" command (themes)
    else if (currentInput.startsWith("settheme ")) {
      const parts = currentInput.split(" ");
      const themePart = parts.slice(1).join(" ");
      const matchingThemes = Object.keys(themes).filter(theme => theme.startsWith(themePart));
      if (matchingThemes.length === 1) {
        inputEl.value = "settheme " + matchingThemes[0];
      } else if (matchingThemes.length > 1) {
        outputEl.innerHTML += `<p class='message'>${matchingThemes.join(" ")}</p>`;
      }
    }
    // Fallback: autocomplete commands from the commands list
    else {
      const possibleCommands = Object.keys(commands).filter(cmd => cmd.startsWith(currentInput));
      if (possibleCommands.length === 1) {
        inputEl.value = possibleCommands[0] + " ";
      } else if (possibleCommands.length > 1) {
        outputEl.innerHTML += `<p class='message'>${possibleCommands.join(" ")}</p>`;
      }
    }
    return;
  }
  // history up arrow
  if (event.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      inputEl.value = commandHistory[historyIndex];
    }
    event.preventDefault();
  }
  // history down arrow
  if (event.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      inputEl.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      inputEl.value = "";
    }
    event.preventDefault();
  }
}

inputEl.addEventListener("keydown", handleInput);

let scrollTimeout;
const observer = new MutationObserver(() => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    terminalEl.scrollTop = terminalEl.scrollHeight;
  }, 50); 
});
observer.observe(outputEl, { childList: true });


// editor button
editorBtn.addEventListener("click", () => {
  //console.log("vi successfully saved");
  let content = editorDOM.innerHTML;
  localStorage.setItem("vi-content", content);
  viDOM.classList.add("hidden");
});

// uptime
const startTime = Date.now();
document.addEventListener("click", () => {
  inputEl.focus();
});
let username = localStorage.getItem("username") || "guest";
function setUsername(newName) {
  username = newName;
  localStorage.setItem("username", newName);
  prompt = `[${username}@localhost ~]$ `; 
  updatePromptUI();
}
async function fetchASCIIArt(text) {
  const apiUrl = `https://artii.herokuapp.com/make?text=${encodeURIComponent(text)}`;
  try {
    let response = await fetch(apiUrl);
    let asciiArt = await response.text();
    return `<pre class='ascii-art'>${asciiArt}</pre>`;
  } catch (error) {
    return `<p class='error'>Failed to generate ASCII art.</p>`;
  }
}
async function fetchDefinition(word) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    if (data.title) {
      return `<p class='error'>Word not found.</p>`;
    }
    let definition = data[0].meanings[0].definitions[0].definition;
    return `<p class='message'><strong>${word}:</strong> ${definition}</p>`;
  } catch (error) {
    return `<p class='error'>Failed to fetch definition.</p>`;
  }
}
function updatePromptUI() {
  if (promptDOM) {
    promptDOM.innerText = prompt;
  }
}
// calendar
function generateCalendar() {
  const today = new Date();
  const currentDay = today.getDate();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let table = `<table class="calendar"><thead><tr>`;
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  weekdays.forEach(day => {
    table += `<th>${day}</th>`;
  });
  table += `</tr></thead><tbody><tr>`;

  for (let i = 0; i < firstDay; i++) {
    table += `<td></td>`;
  }

  // fill in days of the month and highlight the current day
  for (let day = 1; day <= daysInMonth; day++) {
    if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
      table += `</tr><tr>`;
    }
    if (day === currentDay) {
      table += `<td class="current-date">${day}</td>`;
    } else {
      table += `<td>${day}</td>`;
    }
  }
  table += `</tr></tbody></table>`;
  return table;
}

// the matrix
function startMatrix() {
  let canvas = document.createElement("canvas");
  canvas.id = "matrixCanvas";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "1000";
  document.body.appendChild(canvas);

  let ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  let drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.floor(Math.random() * canvas.height);
  }

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      let text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  let matrixInterval = setInterval(drawMatrix, 50);
  setTimeout(() => {
    clearInterval(matrixInterval);
    document.body.removeChild(canvas);
  }, 5000);
}
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "c") {
    exitActiveModes();
  }
});

function exitActiveModes() {
  if (typeof viDOM !== "undefined" && !viDOM.classList.contains("hidden")) {
    viDOM.classList.add("hidden");
  }

  const matrixCanvas = document.getElementById("matrixCanvas");
  if (matrixCanvas) {
    if (window.matrixInterval) {
      clearInterval(window.matrixInterval);
      window.matrixInterval = null;
    }
    if (window.matrixTimeout) {
      clearTimeout(window.matrixTimeout);
      window.matrixTimeout = null;
    }
    document.body.removeChild(matrixCanvas);
  }

  if (typeof adDOM !== "undefined" && !adDOM.classList.contains("hidden")) {
    adDOM.classList.add("hidden");
    if (window.adMusic) {
      window.adMusic.pause();
      window.adMusic = null;
    }
    clearTimeout(adTime);
    clearTimeout(gifTime);
  }

  if (secretActive) {
    document.body.style.backgroundImage = "";
    inputEl.value = "";
    if (window.secretMusic) {
      window.secretMusic.pause();
    }
    secretActive = false;
  }
}
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "c") {
    exitActiveModes();
  }
});

function exitActiveModes() {
  if (typeof viDOM !== "undefined" && !viDOM.classList.contains("hidden")) {
    viDOM.classList.add("hidden");
  }

  const matrixCanvas = document.getElementById("matrixCanvas");
  if (matrixCanvas) {
    if (window.matrixInterval) {
      clearInterval(window.matrixInterval);
      window.matrixInterval = null;
    }
    if (window.matrixTimeout) {
      clearTimeout(window.matrixTimeout);
      window.matrixTimeout = null;
    }
    document.body.removeChild(matrixCanvas);
  }

  if (typeof adDOM !== "undefined" && !adDOM.classList.contains("hidden")) {
    adDOM.classList.add("hidden");
    if (window.adMusic) {
      window.adMusic.pause();
      window.adMusic = null;
    }
    clearTimeout(adTime);
    clearTimeout(gifTime);
  }

  if (secretActive) {
    document.body.style.backgroundImage = "";
    inputEl.value = "";
    if (window.secretMusic) {
      window.secretMusic.pause();
    }
    secretActive = false;
  }
}
updatePromptUI();

//console.log("Modified by https://github.com/ch4rlesexe")