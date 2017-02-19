import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// const videoUrl = "https://www.youtube.com/embed/WwSYT-4KwpI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"

class Home extends Component {

  componentDidMount() {
    /* global window */
    setTimeout(() => {
      const YT = window.YT;
      new YT.Player('muteYouTubeVideoPlayer', {
        videoId: 'WwSYT-4KwpI',   // YouTube Video ID
        width: 560,               // Player width (in px)
        height: 316,              // Player height (in px)
        playerVars: {
          autoplay: 1,            // Auto-play the video on load
          controls: 0,            // Show pause/play buttons in player
          showinfo: 0,            // Hide the video title
          modestbranding: 1,      // Hide the Youtube Logo
          loop: 1,                // Run the video in a loop
          fs: 0,                  // Hide the full screen button
          cc_load_policy: 0,      // Hide closed captions
          iv_load_policy: 3,      // Hide the Video Annotations
          autohide: 0,            // Hide video controls when playing
        },
        events: {
          onReady(e) {
            e.target.mute();
          },
        },
      });
    }, 200);
  }

  render() {
    return (<div>
      <div className="our-names"> Despo & Bruno </div>
      <div className="wed-date"> June 10, 2016 </div>
      <div className="wed-place"> Paros, Greece </div>
      {/* <div> {this.props.copy.welcome} </div> */}
      <div className="video-background">
        <div className="video-blur" />
        <div className="video-foreground">
          {/* <iframe src={videoUrl} id="videoElem" frameborder="0" allowfullscreen></iframe> */}
          <div id="muteYouTubeVideoPlayer" />
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
