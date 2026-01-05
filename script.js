// Local variable (IMPORTANT for DT task)
let step = 0;

// JSON object (Task 2 requirement)
const messages = [
  {
    title: "Hello!",
    content: "This content is coming from a JavaScript object."
  },
  {
    title: "Dynamic Update",
    content: "The page updates dynamically using a local variable."
  },
  {
    title: "Frontend Logic",
    content: "This demonstrates execution of logic using JavaScript."
  }
];

function changeContent() {
  step = (step + 1) % messages.length;

  document.getElementById("title").innerText = messages[step].title;
  document.getElementById("content").innerText = messages[step].content;
}
