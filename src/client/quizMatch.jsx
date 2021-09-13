import React from "react";
import logOut from "url:./img/logout.png";
import happy from "url:./img/happygreen.png";
import sad from "url:./img/sadred.png";
import report from "url:./img/report - White.png";
import exam from "url:./img/exam - blue.png";
import { getRandomQuizzes } from "./quizzes";
import { Link } from "react-router-dom";


//in this page we start the exam. We take questions and answsers from a array i the quizzes.js file and displayes it on the page.
//we also have functionality to deal with wrong and right answers.
export class Match extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      match: null,
    };
  }

  componentDidMount() {
    this.startNewMatch();
  }

  startNewMatch = () => {
    const quizzes = getRandomQuizzes(3);

    this.setState({
      match: {
        victory: false,
        defeat: false,
        quizzes: quizzes,
        currentIndex: 0,
        numberOfQuizzes: quizzes.length,
      },
    });
  };

  handleClick = (correct) => {
    if (correct) {
      if (
        this.state.match.currentIndex ===
        this.state.match.numberOfQuizzes - 1
      ) {
        //last quiz
        this.setState({ match: { victory: true } });
      } else {
        //go on to next quiz
        this.setState((prev) => ({
          match: {
            currentIndex: prev.match.currentIndex + 1,
            quizzes: prev.match.quizzes,
            numberOfQuizzes: prev.match.numberOfQuizzes,
          },
        }));
      }
    } else {
      this.setState({ match: { defeat: true } });
    }
  };

  renderAnswerTag(prefix, answer, correct) {
    return (
      <div
        className="answer"
        onClick={() => this.handleClick(correct)}
        tabindex="0"
      >
        <img id={"answer-img"} src={answer} />{" "}
      </div>
    );
  }
  render() {
    if (!this.state.match) {
      return <h2>Loading...</h2>;
    }

    if (this.state.match.victory) {
      return (
        <div className="test-result pyro">
          <header>
            <h1 id="logo"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/frontPage"}>beBR!GHT</Link></h1>

            <Link id="log-out" to={"/"}>
              <img src={logOut} />
              Log Out
            </Link>
          </header>

          <div className={"after"}></div>
          <h2>Test complete!</h2>
          <div className="action">
            <p>You answers everything correctly</p>
            <img alt={"sad-face"} style={{width: '250px', height: 'auto'}} className={"result-img"} src={happy}/>

            <div style={{width: '200px', marginLeft: '45%', marginTop: '3%'}}>
            <Link style={{ textDecoration: 'none'}} to="/reportPage">
              <div className={"frontPageButton"} id={"report-nav"}>
                <img className="nav-img" src={report}/>
                <h2>Report</h2>
              </div>
            </Link>
            </div>
          </div>
          <footer>
            <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
              Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
          </footer>
        </div>
      );
    }

    if (this.state.match.defeat) {
      return (
        <div className="test-result">
          <header>
            <h1 id="logo"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/frontPage"}>beBR!GHT</Link></h1>

            <Link id="log-out" to={"/"}>
              <img src={logOut} />
              Log Out
            </Link>
          </header>

          <h2>Wrong Answer! You have to retake the test!</h2>
          <div className="action">
            <img alt={"sad-face"} style={{width: '250px', height: 'auto'}} className={"result-img"} src={sad}/><br />

            <div style={{width: '200px', marginLeft: '45%', marginTop: '3%'}}>
            <Link style={{ textDecoration: 'none' }} to="/educationPage2">
              <div className={"frontPageButton"} id={"test-nav"}>
                <img className="nav-img" src={exam}/>
                <h2>Exam</h2>
              </div>
            </Link>
            </div>
          </div>
          <footer>
            <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
              Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
          </footer>
        </div>
      );
    }

    const match = this.state.match;
    const count = "" + (match.currentIndex + 1) + "/" + match.numberOfQuizzes;
    const test = match.quizzes[match.currentIndex];

    return (
      <div id={"test_" + test.id} className="test pryo before">
        <header>
          <h1 id="logo"><Link style={{ textDecoration: "none", color: "inherit" }} to={"/frontPage"}>beBR!GHT</Link></h1>

          <Link id="log-out" to={"/"}>
            <img src={logOut} />
            Log Out
          </Link>
        </header>
        <div id={"test-question"}>
          <img id={"question-img"} src={test.questionImg}/>
          <div className="question">
          <h2>{test.question}</h2>
          <h4>
            Question {count}: {" "}
          </h4>
          </div>
        </div>
        {this.renderAnswerTag(
          "A: ",
          test.answers[0],
          test.indexOfRightAnswer === 0
        )}
        {this.renderAnswerTag(
          "B: ",
          test.answers[1],
          test.indexOfRightAnswer === 1
        )}
        {this.renderAnswerTag(
          "C: ",
          test.answers[2],
          test.indexOfRightAnswer === 2
        )}

        <footer>
          <p style={{color: "white"}}><strong>BRIGHT Products AS:</strong> Holbergs gate 19, 0166 Oslo. Norway | info@bright-products.com | +47 902 14 423<br/>
            Copyright2021. All rights reserved. | <strong>Disclaimer:</strong> Product information and images may vary from the current product in stock.</p>
        </footer>
      </div>
    );
  }
}
