import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const church = '../../../images/church.jpg';
const naxos = '../../../images/naxos.jpg';
const antiparos = '../../../images/antiparos.jpg';

class Attractions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const copy = this.props.copy;
    return (<div style={{ textAlign: 'center' }}>
    <h1 className="h1-header">Paros</h1>
      {copy.parostop} <br/>
      <img src={church} style={{
        width: '40vw',
        marginTop: '20px',
      }} />
      <br/>
      {copy.parosbottom} 
    <br/>
    <h1 className="h1-header">Nearby islands</h1>
      {copy.naxos} <br/>
      <img src={naxos} style={{
        width: '40vw',
        marginTop: '20px',
      }} />
      <br/>
      {copy.antiparos} <br/>
      <img src={antiparos} style={{
        width: '40vw',
        marginTop: '20px',
      }} />
    <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Attractions);
