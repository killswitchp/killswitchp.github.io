function executeCommand(userInput) {
  const [cmd, ...rest] = userInput.split(" ");
  const args = rest.join(" ");

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
      return `<p class="message">${social}</p>`;

    case "id":
      let id = "uid=1002(guest) gid=1002(guest) groups=1002(guest)";
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
        "I will update the list of projects i'm working on soon....",
      ];
      return `<p id=projects>"${projects[0]}"</p>`;

    case "email":
      let mail = "Contact Me via gmail";
      return `<a class="message" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfghgTtLnhcHJQhMrsSWsjlVQqBzLmWlvDFkrfqrgPrXmmsFKWDlCGvpkwmXJbmdfnPg">${mail}</a>`;

    case "whoami":
      return `<p class="message">guest</p>`;

    case "sudo":
      window.open("https://www.youtube.com/watch?v=IVRlYIjKy0A");
      return "<p class=message> lol,dont try to hack me and i banned sudo;)</p>";

    case "ls":
      const list = pages.map((item) => `<span>${item}</span>`).join(" ");
      return `<div class=message>${list}</div>`;

    case "clear":
      outputEl.innerHTML = '<a id="before"></a>';
      before = document.getElementById("before");
      return before;

    case "date":
      const currentDate = new Date();
      const formattedDate = currentDate.toString();
      return `<p id='date'>${formattedDate}</p>`;

    case "cat":
      if (!pages.includes(args))
        return `<p class=error>Blog does not exist, "ls" -- lists all blogs </p>`;
      window.open(args);
      return "<p>Loading................</p>";


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
      
          return `<p class="success">Colour changed</p>`;

        }
else 
{
  return `<p class="success">No colour enterred.Sample input --> theme red</p>`
}
        }

        
        
    case "secret":
      document.body.style.backgroundImage = "url(assets/lizard-dance.gif)";
      inputEl.value = "TOLD YA NOT TO OPEN,REFRESH THE PAGE TO STOP IT!!!!!!!!!!!";
      secretMusic.play();
      return;

    case "vi":
      viDOM.classList.remove("hidden");
      editorDOM.innerHTML = localStorage.getItem("vi-content");
      editorDOM.focus();
      return;
  }

  if (userInput == "cat blog1.html") {
    window.open("blog1.html");
    return "<p>Loading................</p>";
  }

  else if
  (userInput == "cat pnpt.html") {
    window.open("blog1.html");
    return "<p>Loading................</p>";
  }

  else{

  return `<p class=message>Command not found: ${cmd}`;
}
}



function handleInput(event) {
  if (event.keyCode === 13) {
    // Enter key
    const userInput = inputEl.value.trim();
    inputEl.value = "";
    outputEl.innerHTML += `<div class=prompt-wrapper><span>${prompt}</span><span>${userInput}</span></div>`;
    let result = executeCommand(userInput);
    if (result) outputEl.innerHTML += result;
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
  let content = editorDOM.innerHTML;
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
