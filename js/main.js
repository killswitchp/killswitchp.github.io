// Video function

var video = document.getElementById('my-video');
var isPlaying = false;

document.addEventListener('click', function() {
  if (!isPlaying) {
    video.play();
    isPlaying = true;
  }
});

// Optional: pause the video when the user leaves the page
window.addEventListener('beforeunload', function() {
  video.pause();
});




//Linux Terminal Command-line code
const outputEl = document.getElementById('output');
const inputEl = document.getElementById('input');

function appendOutput(msg) {
  outputEl.innerHTML += `${msg}<br>`
}

function executeCommand(cmd) {


  const commands = {
    'whoami': 'Shows your username',
    'id':'Another way telling who you are',
    'about': 'Voluntary personal information disclosure?!',
    'social': 'Display social networks',
    'banner': 'Displays the banner(needs admin privilege)',
    'projects': 'View coding projects',
    'date': 'View date',
    'ls': 'To view my blogs',
    'echo':'Typical Linux echo command',
    'help': 'You obviously already know what this does',
    'email': 'Do not email me',
    'clear': 'Clear terminal',
    'cat pnpt.html' : 'To read my blog on PNPT certification experience',
    'cat blog1.html' : 'Read by blog on Butterfly effect movie',

   
   
  }


 

  if (cmd === "help") {
    let commandList = Object.entries(commands)
    let table = "<table id=helptable>"
    commandList.forEach(([key, value]) => {
      table += "<tr><td class=displaytable>" + key + "</td><td>"  + "  "+"</td><td id=help-table>" + value + "</td></tr>"
    });
    table += "</table>";
  
    return table
  }

  else if(cmd.startsWith("social")){
    let social = [
      "<p id=social>Will update when i need a job!!!!!!!!!</p>"
    ]
return social
  }


  else if(cmd.startsWith("id")){
    let id = [
      "<p id=whoami>uid=1002(guest) gid=1002(guest) groups=1002(guest)"
    ]
return id
  }


  else if(cmd.startsWith("echo ")){
    let echo = [
      `<p id="echo">${cmd.substring(5)}</p>`
    ]
return echo
  }

  else if(cmd == "about"){
    let about = [
      "<p id=about>",
      "My name is Paavai Aram ,thats the information I can provide for now!",
      "</p>"
    ];

    return about.join("")
  }

  else if(cmd == "banner"){
    let about = [
      "<p id=banner>",
      "You are not the admin!",
      "</p>"
    ];

    return about.join("")
  }

  else if(cmd == "projects"){
    let projects = [
      "<p id=projects>",
      "I will update the list of projects i'm working on soon....",
      "</p>"
    ];

    return projects.join("")
  }
    
  
    
  else if(cmd == "email"){
    let about = [
      "<a id=email href=https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfghgTtLnhcHJQhMrsSWsjlVQqBzLmWlvDFkrfqrgPrXmmsFKWDlCGvpkwmXJbmdfnPg>",
      "Contact Me via gmail",
      "</a>"
    ];

    return about.join("")
  }

  else if(cmd == "clear"){

    outputEl.innerHTML = '<a id="before"></a>'
        before = document.getElementById("before")
    return before
    
  }
    
  
  else if(cmd == "whoami"){
    let whoami = [
      "<p id=whoami>",
      "guest",
      "</p>"
    ];
    
    return whoami.join("")
  }
  else if(cmd == "sudo"){
    window.open("https://www.youtube.com/watch?v=IVRlYIjKy0A")
    return '<p id=sudo> lol,dont try to hack me and i banned sudo;)</p>'
  }

  else if(cmd == "ls"){
    return "<p id=ls>blog1.html pnpt.html</p>"


  }
  else if (cmd === "date") {
    const currentDate = new Date();
    const formattedDate = currentDate.toString(); 
    return `<p id='date'>${formattedDate}</p>`;
  } 
  
  else if (cmd=="cat blog1.html")
  {
    window.open("blog1.html")
    return "<p id=rat>Loading................</p>"
  }
  else if (cmd=="cat pnpt.html")
  {
    window.open("pnpt.html")
    return "<p id=rat>Loading................</p>"
  }
  
  else {
    return `<p id=sudo>Command not found: ${cmd}`;
  }
}

function handleInput(event) {
  if (event.keyCode === 13) { // Enter key
    const cmd = inputEl.value.trim();
    appendOutput(`<p >[guest@localhost ~]$${cmd}</p>`);
    appendOutput(`<p>${executeCommand(cmd)}</p>`);
    inputEl.value = '';
  }
}

inputEl.addEventListener('keydown', handleInput);
inputEl.focus();



// Autoscroll function
const target = document.querySelector('#output');


const observer = new MutationObserver(() => {

  window.scrollBy({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});


observer.observe(target, {
  childList: true
});