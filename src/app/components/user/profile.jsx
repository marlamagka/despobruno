import React, {Component} from 'react';
import firebase from '../../utils/firebase';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser, updateUser, updateRsvp}  from '../../actions/actions';
import Loading  from '../helpers/loading';
// import ChangePassword from './change_password';

class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.props.fetchUser();
    this.state = {
      message: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    var email = this.refs.email.value;
    var displayName = this.refs.displayName.value;
    var joke = this.refs.joke.value;
    this.props.updateUser({
      email: email,
      displayName: displayName,
    }).then(data => {
        if (data.payload.errorCode)
          this.setState({message: data.payload.errorMessage})
        else
          this.setState({message: "Updated successfuly!"})
      }
    )
    this.props.updateRsvp({
      uid: this.props.currentUser.uid,
      email: email,
      displayName: displayName,
      joke: joke,
    })
  }

  render() {
    if (!this.props.currentUser) {
      return <Loading/>
    }

    return (
      <div className="col-md-6">
        <form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
          <h2>User Profile Page</h2>
          <p>{this.state.message}</p>
          <br />
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="text" defaultValue={this.props.currentUser.email}
                   className="form-control" id="email" ref="email" placeholder="Email" name="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="displayName">Name: </label>
            <input type="text" defaultValue={this.props.currentUser.displayName}
                   className="form-control" ref="displayName" id="displayName" placeholder="Display name"
                   name="displayName"/>
          </div>
          {this.props.rsvp.loaded &&
            <div className="form-group">
              <label htmlFor="displayName">Are you coming? </label>
              <input type="text" defaultValue={this.props.rsvp.joke}
                     className="form-control" ref="joke" id="joke" placeholder="Joke"
                     name="displayName"/>
            </div>
          }
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
        {/* <ChangePassword/> */}
      </div>
    )
  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser, updateUser, updateRsvp}, dispatch);
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    rsvp: state.rsvp,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
