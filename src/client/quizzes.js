import testPicture1 from "url:./img/testbilde1.png";
import testPicture2 from "url:./img/testbilde2.png";
import testPicture3 from "url:./img/testbilde3.png";
import nolightquestion from "url:./img/nolight.png";
import nochargequestion from "url:./img/nocharge.png";
import noProtectionQuestion from "url:./img/noProtection.png";


//this is the exam question and answers used in the quizMatch file. We here define the right answer with indexofright. So indexOfRightAnswer: 1 will set the right answer to the second image on the
//horizontal listing of pictures.
export let quizzes = [
  {
    question: "No light?",
    questionImg: nolightquestion,
    answers: [testPicture1, testPicture2, testPicture3],
    indexOfRightAnswer: 1,
  },
  {
    question:
      "No charge?",
    questionImg: nochargequestion,
    answers: [testPicture1, testPicture2, testPicture3],
    indexOfRightAnswer: 2,
  },
  {
    question:
      "Protection broken?",
    questionImg: noProtectionQuestion,
    answers: [testPicture1, testPicture2, testPicture3],
    indexOfRightAnswer: 0,
  },
];

export function getRandomQuizzes(numberOfQuizzes) {
  if (numberOfQuizzes < 1) {
    throw "Invalid number of requested quizzes: " + n;
  }

  if (numberOfQuizzes > quizzes.length) {
    throw "Too many quizzes";
  }

  const selection = Array(numberOfQuizzes);

  let i = 0;
  while (i < numberOfQuizzes) {
    const k = Math.floor(quizzes.length * Math.random());
    if (selection.includes(k)) {
      continue;
    }

    selection[i] = k;
    i++;
  }

  return Array.from(selection).map((e) => quizzes[e]);
}
