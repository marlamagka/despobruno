import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRsvp } from '../actions/actions';

class Rsvp extends Component {
  constructor(props) {
      super(props);
      this.state = {
          message: '',
      };
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onYes = this.onYes.bind(this);
      this.onNo = this.onNo.bind(this);
  }

  onFormSubmit(event) {
      event.preventDefault();
      const email = this.refs.email.value;
      const displayName = this.refs.displayName.value;
      const joke = this.refs.joke.value;
      this.props.updateRsvp({
          email,
          displayName,
      }).then((data) => {
          if (data.payload.errorCode) {
              this.setState({ message: data.payload.errorMessage });
          } else {
              this.setState({ message: 'Updated successfuly!' });
          }
      })
  }

  onYes(e) {
    this.setState({
      yes: e.currentTarget.value
    });
  }

  onNo(e) {
    this.setState({
      no: e.currentTarget.value
    });
  }

  render() {
    return <div className="col-md-6">
        <form id="frmRsvp" role="form" onSubmit={this.onFormSubmit}>
            <h2>{this.props.copy.pleaseRsvp}</h2>
            <p>{this.state.message}</p>
            <br />
            <div className="form-group">
                <label htmlFor="displayName">Name: </label>
                <input
                  type="text"
                  className="form-control"
                  id="displayName"
                  ref="displayName"
                  placeholder="e.g. Elon Musk"
                  name="displayName"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  ref="email"
                  placeholder="e.g. elon.musk@spacex.com"
                  name="email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="displayName">Are you coming? </label>
                <tr>
                  <td><input
                    type="radio"
                    name="yes"
                    value="Yes"
                    checked={true}
                    onChange={this.onYes}/>Yes</td>
                  <td><input
                    type="radio"
                    name="no"
                    value="No"
                    checked={false}
                    onChange={this.onNo}/>No</td>
                </tr>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateRsvp}, dispatch);
}

function mapStateToProps(state) {
  return {
    rsvp: state.rsvp,
    copy: state.copy,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
