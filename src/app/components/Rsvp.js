import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const langToForm = {
  FR: 'JXlpTi',
  EN: 'IYKQpZ',
  GR: 'JXaStL',
};

const skyeSelfie = '../../../images/skye_pic.jpg';


class Rsvp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const formId = langToForm[this.props.copy._lang];
    const copy = this.props.copy;
    return (<div style={{ textAlign: 'center' }} className="container not-too-wide">
      <h1 className="rsvp-header"> {copy.rsvpHeader} </h1>
      {copy.pleaseRsvp} <br />
      <a href={`https://marlamagka.typeform.com/to/${formId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rsvp-button"
      > RSVP </a> <br />
      {copy.belowRsvp} <br/>
      <a href="mailto:despo-and-bruno@googlegroups.com">
         despo-and-bruno@googlegroups.com
      </a>
      <br />
      <img src={skyeSelfie} style={{
        width: '40vw',
        marginTop: '20px',
      }}
      />

    </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
    copy: state.copy,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
