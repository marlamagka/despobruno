import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchLang } from '../actions/actions';

const flags = {
  EN: '../../../images/EN_flag_square.png',
  FR: '../../../images/FR_flag_square.png',
  GR: '../../../images/GR_flag_square.png',
};

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const copy = this.props.copy
    return (
      <div>
        <header className="navbar navbar-static-top navbar-inverse" id="top" role="banner">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse"
                data-target=".bs-navbar-collapse"
              ><span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
              <ul className="nav navbar-nav">
                <li><Link to="/"> {copy.home} </Link></li>
                <li><Link to="/rsvp"> {copy.rsvp} </Link></li>
                <li><Link to="/travel"> {copy.travel} </Link></li>
                <li><Link to="/hotels"> {copy.hotels} </Link></li>
                <li><Link to="/venue"> {copy.venue} </Link></li>
                <li><Link to="/attractions"> {copy.attractions} </Link></li>
                <li><Link to="/story"> {copy.story} </Link></li>
                <li className="lang1"><Link
                  onClick={() => this.props.switchLang('EN')}
                >
                  <img
                    className="shadow-on-hover"
                    style={this.props.copy._lang === 'EN' ? {
                      // boxShadow: '0px 0px 14px white',
                      // borderRadius: '50%',
                    } : { opacity: 0.6, filter: 'grayscale(100%)' }}
                    src={flags.EN} width="25px"
                  />
                </Link></li>
                <li className="lang2"><Link
                  onClick={() => this.props.switchLang('GR')}
                >
                  <img
                    className="shadow-on-hover"
                    style={this.props.copy._lang === 'GR' ? {
                      // boxShadow: '0px 0px 14px white',
                      // borderRadius: '50%',
                    } : { opacity: 0.6, filter: 'grayscale(100%)' }}
                    src={flags.GR} width="25px"
                  />
                </Link></li>
                <li className="lang3"><Link
                  onClick={() => this.props.switchLang('FR')}
                >
                  <img
                    className="shadow-on-hover"
                    style={this.props.copy._lang === 'FR' ? {
                      // boxShadow: '0px 0px 14px white',
                      // borderRadius: '50%',
                    } : { opacity: 0.6, filter: 'grayscale(100%)' }}
                    src={flags.FR} width="25px"
                  />
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
