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
  }

  validateInput(input) {
    if (input.displayName.length < 3) {
      return {
        ok: false,
        message: 'Need name!'
      }
    }
    return {
      ok: true,
      message: ''
    }
  }

  onFormSubmit(event) {
      event.preventDefault();
      const email = this.refs.email.value;
      const displayName = this.refs.displayName.value;
      const coming = this.refs.coming1.checked ? true :
                    this.refs.coming2.checked  ? false :
                    null;
      const adults = this.refs.adults1.checked ? 1 :
                    this.refs.adults2.checked ? 2 :
                    null;
      const children = this.refs.children.value;
      const input = {
          email,
          displayName,
          coming,
          adults,
          children
      }
      const {ok, message} = this.validateInput(input)
      if (!ok) {
        this.setState({message})
        return
      }
      this.props.updateRsvp({
        ...input,
        dateSubmitted: new Date().toString(),
      }).then((data) => {
        this.setState({message: data.payload.message})
      })
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
                <label htmlFor="coming">Are you coming? </label> <br/>
                <input
                    type="radio"
                    name="coming"
                    ref="coming1"/> Yes<br/>
                <input
                    type="radio"
                    name="coming"
                    ref="coming2"/> No<br/>
            </div>
            <div className="form-group">
                <label htmlFor="adults">Number of adults </label> <br/>
                <input
                    type="radio"
                    name="adults"
                    ref="adults1"
                    value={1}/> Just me<br/>
                <input
                    type="radio"
                    name="adults"
                    ref="adults2"
                    value={2}/> Bringing a +1<br/>
            </div>
            <div className="form-group">
                <label htmlFor="children">Number of children </label> <br/>
                <select name="children" ref="children">
                    <option value={0}> 0</option>
                    <option value={1}> 1</option>
                    <option value={2}> 2</option>
                    <option value={3}> 3</option>
                </select>
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
