import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const swedenSelfie = '../../../images/santorini_pic.jpg';


class Hotels extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div style={{ textAlign: 'center' }} className="not-too-wide">
      <h1 className="h1-header">{this.props.copy.hotelTitle}</h1>
      <div
        dangerouslySetInnerHTML={{__html: this.props.copy.hotelInstructions}}
        style={{
          width: '80%',
          textAlign: 'left',
          margin: 'auto',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      />
      <img src={swedenSelfie} style={{ width: '50vw' }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
