import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Rsvp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="col-md-6">
      Will embbed typeform here....
    </div>;
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
    copy: state.copy,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
