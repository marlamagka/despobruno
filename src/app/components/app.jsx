import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchLang } from '../actions/actions';

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
                  style={this.props.copy._lang === 'EN' ? {color: 'lightblue'} : {}}
                  onClick={() => this.props.switchLang('EN')}> EN </Link></li>
                <li><Link
                  style={this.props.copy._lang === 'GR' ? {color: 'lightblue'} : {}}
                  onClick={() => this.props.switchLang('GR')}> GR </Link></li>
                <li><Link
                  style={this.props.copy._lang === 'FR' ? {color: 'lightblue'} : {}}
                  onClick={() => this.props.switchLang('FR')}> FR </Link></li>
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
