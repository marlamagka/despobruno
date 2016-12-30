import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchRsvp, logoutUser, switchLang } from '../actions/actions';

class App extends Component {

  constructor(props) {
    super(props);

    this.props.fetchUser();
    this.props.fetchRsvp();
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.logoutUser().then(data=> {
      // reload props from reducer
      this.props.fetchUser();
      this.props.fetchRsvp();
    });
  }

  renderUserMenu(currentUser) {
    // if current user exists and user id exists than make user navigation
    if (currentUser && currentUser.uid)
      return (
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
             aria-haspopup="true" aria-expanded="false">
            {currentUser.email} <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><Link to="/profile">Profile</Link></li>
            <li role="separator" className="divider"></li>
            <li><Link to="/logout" onClick={this.logOut}>Logout</Link></li>
          </ul>
        </li>
      )
    else
      return [
        // <li key={1}><Link to="/login">Login</Link></li>,
        <li key={2}><Link to="/register">RSVP</Link></li>
      ]

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
              {/* <Link to="/" className="navbar-brand">Firebase & Redux boilerplate</Link> */}

            </div>
            <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
              <ul className="nav navbar-nav">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/rsvp"> RSVP </Link></li>
                <li><Link to="/info"> Info </Link></li>
                <li><Link to="/info"> Travel </Link></li>
                <li><Link to="/info"> Accomodation </Link></li>
                <li><Link to="/info"> Tourism </Link></li>
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
              <ul className="nav navbar-nav navbar-right">
                { this.renderUserMenu(this.props.currentUser) }
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
  return bindActionCreators({ fetchUser, fetchRsvp, logoutUser, switchLang }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    copy: state.copy,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
