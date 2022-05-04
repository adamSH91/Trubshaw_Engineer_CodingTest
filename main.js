let question = 0;

const questions = new Map([
  [0, "What is your name?"],
  [1, "What is your email?"],
  [2, "What level of threat are you reporting? (Low/Medium/High)"]
]);

let questionsToAnswers = new Map([
  [0, "Random"],
  [1, "Random"],
  [2, "Random"]
]);

function display() {
  document.getElementById('question').innerHTML = questions.get(question);
}

function addResponse() {
  if (question == 1) {
    document.getElementById('nextButton').setAttribute('onclick', "location.href='preview.html'; addResponse();");
  }

  if (question < 3) {
    let response = document.getElementById('input').value;
    questionsToAnswers.set(question, response);
    localStorage.setItem(question, response);
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

  if (question == 1) {
    document.getElementById('nextButton').setAttribute('onclick', "addResponse()")
  }
}


const nameInput = document.getElementById('input');

if (nameInput) {
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
    } else if (question == 2) {
      const textValue = target.value.toLowerCase();

      if (textValue.includes("low") || textValue.includes("medium") || textValue.includes("high")) {
        document.getElementById('nextButton').disabled = false;
      } else {
        document.getElementById('nextButton').disabled = true;
      }
    }
  });
}

function displayQuestionsAndAnswers() {
  let pointer = 0;
  console.log(questionsToAnswers.get(pointer));

  document.getElementById('firstQuestion').innerHTML = questions.get(pointer);
  document.getElementById('firstAnswer').innerHTML = localStorage.getItem(pointer);
  console.log(localStorage.getItem(pointer));
  pointer++;

  document.getElementById('secondQuestion').innerHTML = questions.get(pointer);
  document.getElementById('secondAnswer').innerHTML = localStorage.getItem(pointer);
  console.log(localStorage.getItem(pointer));
  pointer++;

  document.getElementById('thirdQuestion').innerHTML = questions.get(pointer);
  document.getElementById('thirdAnswer').innerHTML = localStorage.getItem(pointer);
}
