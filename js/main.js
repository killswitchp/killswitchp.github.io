function executeCommand(userInput) {
  const [cmd, ...rest] = userInput.split(" ");
  const args = rest.join(" ");
  const paragraph = (text, className = null) => {
    const p = document.createElement("p");
    p.textContent = text;
    if(className) p.className = className;
    return p;
  };
  const span = text => {
    const s = document.createElement("span");
    s.textContent = text;
    return s;
  };

  switch (cmd) {
    case "":
      return;

    case "help":
      let commandList = Object.entries(commands);
      let table = "<table id=help-table>";
      commandList.forEach(([key, value]) => {
        table +=
          "<tr><td class=help-options>" +
          key +
          "</td><td class=help-description>" +
          value +
          "</td></tr>";
      });
      table += "</table>";
      return table;

    case "social":
      let social = "Will update when i need a job!!!!!!!!!";
      return paragraph(social, "message");

    case "id":
      let id = "uid=1002(guest) gid=1002(guest) groups=1002(guest)";
      return paragraph(id, "message");

    case "echo":
      return paragraph(userInput.substring(5), "message");

    case "about":
      let about = "I'm Paavai Aram.(Will update info when I need a job probably)";
      return paragraph(about, "message");

    case "banner":
      let bannerText = "You are not the admin!!";
      return paragraph(bannerText, "error");

    case "projects":
      let projects = [
        "I will update the list of projects i'm working on soon....",
      ];
      return `<p id=projects>"${projects[0]}"</p>`;

    case "email":
      let mail = "Contact Me via gmail";
      return `<a class="message" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfghgTtLnhcHJQhMrsSWsjlVQqBzLmWlvDFkrfqrgPrXmmsFKWDlCGvpkwmXJbmdfnPg">${mail}</a>`;

    case "whoami":
      return paragraph("guest", "message");

    case "sudo":
      window.open("https://www.youtube.com/watch?v=IVRlYIjKy0A");
      return paragraph("lol,dont try to hack me and i banned sudo;)", "message");

    case "ls":
      const list = pages.map(item => span(item + " "));
      const div = document.createElement(div);
      div.className = "message";
      div.append(...list);
      return div;

    case "clear":
      outputEl.innerHTML = '<a id="before"></a>';
      before = document.getElementById("before");
      return before;

    case "date":
      const currentDate = new Date();
      const formattedDate = currentDate.toString();
      return paragraph(formattedDate, "date");

    case "cat":
      if (!pages.includes(args))
        return paragraph(`Blog does not exist, "ls" -- lists all blogs`, "error");
      window.open(args);
      return paragraph("Loading................");


    case "killfetch":
      return killfetch();

    case "hacked":
      getIpApi("out");
      return;

      case "theme":
        if (!pages.includes(args)) {
          const colour = userInput.substring(6); // Extract the color value from the user input
          if(colour){
          const styleElement = document.createElement('style');
          styleElement.innerHTML = `:root { --primary: ${colour}; }`;
          document.head.appendChild(styleElement);
      
          return paragraph("Colour changed", "success");

        }
        else 
        {
          return paragraph("No colour enterred.Sample input --> theme red", "success");
        }
        }

        
        
    case "secret":
      document.body.style.backgroundImage = "url(assets/lizard-dance.gif)";
      inputEl.value = "TOLD YA NOT TO OPEN,REFRESH THE PAGE TO STOP IT!!!!!!!!!!!";
      secretMusic.play();
      return;

    case "vi":
      viDOM.classList.remove("hidden");
      editorDOM.textContent = localStorage.getItem("vi-content");
      editorDOM.focus();
      return;
  }

  if (userInput == "cat blog1.html") {
    window.open("blog1.html");
    return paragraph("Loading................");
  }

  else if
  (userInput == "cat pnpt.html") {
    window.open("blog1.html");
    return paragraph("Loading................");
  }

  else{

  return paragraph(`Command not found: ${cmd}`, "message");
}
}



function handleInput(event) {
  if (event.keyCode === 13) {
    // Enter key
    const userInput = inputEl.value.trim();
    inputEl.value = "";
    const promptWrapper = document.createElement("div");
    promptWrapper.className = "prompt-wrapper";
    const promptSpan = document.createElement("span");
    const inputSpan = document.createElement("span");
    promptSpan.textContent = prompt;
    inputSpan.textContent = userInput;
    promptWrapper.append(promptSpan, inputSpan);
    outputEl.append(promptWrapper);
    let result = executeCommand(userInput);
    if (result) outputEl.append(result);
  }
}

inputEl.addEventListener("keydown", handleInput);

// Autoscroll function
const target = document.querySelector("#output");

const observer = new MutationObserver(() => {
  terminalEl.scrollBy({
    top: terminalEl.scrollHeight,
    behavior: "smooth",
  });
});

observer.observe(target, {
  childList: true,
});

editorBtn.addEventListener("click", () => {
  console.log("hi");
  let content = editorDOM.textContent;
  localStorage.setItem("vi-content", content);
  viDOM.classList.add("hidden");
});

// var video = document.getElementById("my-video");
// var isPlaying = false;

// document.addEventListener("click", function () {
//   if (!isPlaying) {
//     video.play();
//     isPlaying = true;
//   }
// });

// window.addEventListener("beforeunload", function () {
//   video.pause();
// });
