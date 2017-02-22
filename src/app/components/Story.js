import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { answerStoryQuiz, retryStoryQuiz } from '../actions/actions';

const myPic = '../../../images/stockholm.png';

const storyData = [{
  question: 'Guess who was born in 1983?',
  who: 'Bruno',
  story: 'Bruno was born in 1983 in Burgundy.',
  picture: myPic,
  year: 1983,
}, {
  question: 'Guess who was born in 1986?',
  who: 'Despoina',
  story: 'Despoina was born in 1986 in Athens.',
  picture: myPic,
  year: 1986,
}, {
  question: 'Guess who met Irini in 1998 at school?',
  who: 'Despoina',
  story: 'Despoina met Irini at first year of secondary school and became best friends.',
  picture: myPic,
  year: 1986,
}, {
  question: 'Guess who met Dmitri in 2006?',
  who: 'Bruno',
  story: 'Bruno met Dmitri at a party thrown by Russians in Oxford.',
  picture: myPic,
  year: 2007,
}, {
  question: 'Guess who started studying logic in 2007?',
  who: 'Despoina',
  story: 'Despoina started studying Logic in Athens.',
  picture: myPic,
  year: 2007,
}, {
  question: 'Guess who moved to Oxford in 2007?',
  who: 'Bruno',
  story: 'Bruno moved to Oxford to study for a PhD in Computer Science.',
  picture: myPic,
  year: 2007,
}, {
  question: 'Guess who participated to the "Theory of Data and Knowledge Base" course of the Oxford Department of Computer Science in 2010??',
  who: 'Both',
  story: 'Bruno met Despoina while tutoring a theory of databases course.',
  picture: myPic,
  year: 2010,
}, {
  question: 'Guess who moved back to Oxford in 2011?',
  who: 'Bruno',
  story: 'Bruno moved back to Oxford after a post-doc in Paris.',
  picture: myPic,
  year: 2011,
}, {
  question: 'Guess who lived in Oxford\'s 3 Great Mead in 2012?',
  who: 'Both',
  story: 'Despoina and Bruno shared the same house in Oxford with lovely Evangelia and Elisa.',
  picture: myPic,
  year: 2013,
}, {
  question: 'Guess who had a viva on acyclicity conditions for tuple generating dependencies in 2013?',
  who: 'Despoina',
  story: 'Despoina defended her thesis on cutting the chase (among other things).',
  picture: myPic,
  year: 2013,
}, {
  question: 'Guess who moved to London in 2013?',
  who: 'Both',
  story: 'Despoina and Bruno moved together to London.',
  picture: myPic,
  year: 2013,
}, {
  question: 'Guess who popped the question by writing some python code that prints out a wedding ring?',
  who: 'Bruno',
  story: 'Bruno popped the question by hacking his startup company\'s app to show "Do you want to marry me" in Greek.',
  picture: myPic,
  year: 2016,
}, {
  question: 'Guess who programmed this website while being bitten by mosquitoes in French Guiana?',
  who: 'Both',
  story: 'Despoina and Bruno spent their Christmas holidays in tropical Cayenne with wonderful Olivier.',
  picture: myPic,
  year: 2016,
}, {
  question: 'Guess who was baptised by "playful" Nikos in 2017?',
  who: 'Bruno',
  story: 'Bruno was christened Greek orthodox assuming his (fourth) name Socrates.',
  picture: myPic,
  year: 2017,
}, {
  question: 'Guess who will be delighted to see you in Paros on the 10th of June?',
  who: 'Both',
  story: 'Despoina and Bruno are tying the knot and will be thrilled to be in your company.',
  picture: myPic,
  year: 2017,
}];

function avatar(step) {
  return (<img
    className={`avatar ${step.who}`}
    src={`../../../images/${step.who}Southpark.png`}
  />);
}

class Story extends Component {
  render() {
    const n = this.props.answers.length;
    const nextStep = storyData[n];
    const prevSteps = storyData.slice(0, n).map((step, i) => ({
      ...step, correct: this.props.answers[i] === step.who,
    }));
    const correctAnswers = prevSteps.reduce((x, y) => x + y.correct, 0);
    const moreToGo = storyData.length - n;
    return (<div>
      <h1 className="story-header"> Replay our story </h1>
      {prevSteps.map(step =>
        <div className="story-step">
          <div className="story-year"> {step.year} </div>
          <div className="story-avatar"> {avatar(step)} </div>
          <div className="story-content"> {step.story}
            {step.correct && ' ✔︎'}
          </div>
        </div>
      )}
      {moreToGo ? <div className="story-guess">
        <div>{nextStep.question}</div>
        <button onClick={() => this.answer('Despoina')}> Despo </button>
        <button onClick={() => this.answer('Bruno')}> Bruno </button>
        <button onClick={() => this.answer('Both')}> Both! </button>
        <div className="more-to-go">
          Score: {correctAnswers}<br />
          Questions left: {moreToGo}
        </div>
      </div> : <div className="story-guess">
          Final Score: {correctAnswers} / {storyData.length} <br />
        {(correctAnswers < storyData.length) ?
          <button onClick={() => this.props.retryStoryQuiz()}> Try Again! </button> :
          <div> You nailed it! Nice to see you know us well! </div>
          }
      </div>}
    </div>);
  }

  answer(val) {
    this.props.answerStoryQuiz(val);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ answerStoryQuiz, retryStoryQuiz }, dispatch);
}

function mapStateToProps(state) {
  return {
    answers: state.story.answers,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Story);
