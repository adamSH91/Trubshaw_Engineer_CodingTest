let question = 0;

let questions = new Map([
  [0, "What is your name?"],
  [1, "What is your email?"],
  [2, "What level of threat are you reporting? (Low/Medium/High)"]
]);

let questionsToAnswers = new Map([
  [0, ""],
  [1, ""],
  [2, ""]
]);

function display() {
  document.getElementById('question').innerHTML = questions.get(question);
}

display();

function addResponse() {
  if (question < 3) {
    let response = document.getElementById('input').value;
    questionsToAnswers.set(question, response);
    question++;
    document.getElementById('input').value = "";
    document.getElementById('nextButton').disabled = true;
    display();
    checkIfQuestion3();
  }
}

function checkIfQuestion3() {
  if (question == 2) {
    document.getElementById('previousButton').disabled = false;
  }
}

function goBack() {
  question--;
  document.getElementById('input').value = "";
  document.getElementById('nextButton').disabled = true;
  display();
  document.getElementById('previousButton').disabled = true;
}

const nameInput = document.getElementById('input');

nameInput.addEventListener('input', function(e) {
  const target = e.target;
  if (question == 0) {
    const characterCount = target.value.length;

    if (characterCount >= 2 && characterCount <= 25) {
      document.getElementById('nextButton').disabled = false;
    } else {
      document.getElementById('nextButton').disabled = true;
    }
  } else if (question == 1) {
    const textValue = target.value;

    if (textValue.includes('@') && textValue.includes('.')) {
      document.getElementById('nextButton').disabled = false;
    } else {
      document.getElementById('nextButton').disabled = true;
    }
  }
});
