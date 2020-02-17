const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">chinese</span>',
  about:
    "Hi 👋<br>I'm Junzhe. I’m a 2X yr old graduate student in computer science, currently living in Hoboken. ",
  skills:
    '<span class="code">Languages:</span> Python, JAVA, JavaScript, HTML, CSS<br><span class="code">Technologies:</span> Git, SQL<br><span class="code">Frameworks:</span> React.js, Vue.js, Django<span class="code">,<br>Machine Learning:</span>Natural Language Processing, Computer Vision<br>',
  education:
    "Stevens Institute of Technology — Master of Science in Computer Science<br>Nanjing University of Aeronautics and Astronautics - Bachelor of Engineering in Mechanical Engineering and Automation",
  resume: "<a href='resume.html' class='success link'>resume</a>",
  experience: "Jan. 2020 - Present: Teaching Assistant for Natural Language Processing Course in Stevens Institute of Technology<br>May 2019 - Present: Quantitative Analyst and Risk Management Intern in Moore Capital Management<br>Oct. 2018 - May 2019: Graduate Assistant for the Office of Graduate Admissions in Stevens Institute of Technology<br>Aug. 2015 - Aug. 2017:  Electromechanical Engineer in Shenyang Aviation Industry Corporation of China<br>",
  chinese: "哈喽! 我是王君哲，前机械工程师，铁三运动员。做一个早睡早起的程序员。有多少咖啡就能写多少代码。",
  contact:
    "You can contact me by LinkedIn:<br><a href='https://www.linkedin.com/in/junzhe-joey-wang-55902b170/' class='success link'>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Missed. Nice try. ");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);