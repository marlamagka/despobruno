import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchLang } from '../actions/actions';

const flags = {
  EN: '../../../images/EN_flag.png',
  FR: '../../../images/FR_flag.png',
  GR: '../../../images/GR_flag.png',
}

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="navbar navbar-static-top navbar-inverse" id="top" role="banner">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse"
                      data-target=".bs-navbar-collapse"><span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
              <ul className="nav navbar-nav">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/rsvp"> RSVP </Link></li>
                <li><Link to="/travel"> Travel </Link></li>
                <li><Link to="/venue"> Venue </Link></li>
                <li><Link to="/story"> Story </Link></li>

                <li><Link
                  onClick={() => this.props.switchLang('EN')}>
                   <img
                     style={this.props.copy._lang === 'EN' ? {
                       boxShadow: '0px 0px 14px white',
                       borderRadius: '50%',
                     } : {}}
                    src={flags['EN']} width="30px"/>
                  </Link></li>
                <li><Link
                  onClick={() => this.props.switchLang('GR')}>
                    <img
                      style={this.props.copy._lang === 'GR' ? {
                        boxShadow: '0px 0px 14px white',
                        borderRadius: '50%',
                      } : {}}
                      src={flags['GR']} width="30px"/>
                   </Link></li>
                <li><Link
                  onClick={() => this.props.switchLang('FR')}>
                    <img
                      style={this.props.copy._lang === 'FR' ? {
                        boxShadow: '0px 0px 14px white',
                        borderRadius: '50%',
                      } : {}}
                      src={flags['FR']} width="30px"/>
                  </Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ switchLang }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    copy: state.copy,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
