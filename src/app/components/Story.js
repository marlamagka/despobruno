import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { answerStoryQuiz, retryStoryQuiz } from '../actions/actions';

const myPic = '../../../images/paros_pic.jpg';

const storyData = [{
  question: 'Guess who was born in 1983?',
  who: 'Bruno',
  story: 'Bruno was born in 1983 in Burgundy.',
  picture: myPic,
  year: 1983,
}, {
  question: 'Guess who was born in 1986?',
  who: 'Despoina',
  story: 'Despoina was born in 1986 in the city of Athens.',
  picture: myPic,
  year: 1986,
}, {
  question: 'Guess who started studying Formal Logic in 2007?',
  who: 'Despoina',
  story: 'Despoina started studying Logic in Athens.',
  picture: myPic,
  year: 2007,
}, {
  question: 'Guess who moved to London in 2013?',
  who: 'Both',
  story: 'Despoina and Bruno moved together to London.',
  picture: myPic,
  year: 2013,
}];

function avatar(step) {
  return (<img
    className={`avatar ${step.who}`}
    src={`../../../images/${step.who}Avatar.png`}
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
