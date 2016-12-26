import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const videoUrl = "https://www.youtube.com/embed/WwSYT-4KwpI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"


class Home extends Component {
  render() {
    return <div>
      <div className='our-names'> Despo & Bruno </div>
      <div className='wed-date'> June 10, 2016 </div>
      <div className='wed-place'> Paros, Greece </div>
      <div> {this.props.copy.welcome} </div>
      <div className="video-background">
        <div className="video-blur"/>
        <div className="video-foreground">
          <iframe src={videoUrl} frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
