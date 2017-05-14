import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const oxfordSelfie = '../../../images/oxford.jpg';

class Venue extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const copy = this.props.copy;
    return (<div style={{ textAlign: 'center' }} className="not-too-wide">
    <h1 className="h1-header">{copy.venueTitle}</h1>
    {copy.ceremony} <br/>
      <iframe
       src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.31239817' +
           '72596!2d25.22317975056883!3d37.14527067978018!2m3!1f0!2f0!3f0!3m2!1' +
           'i1024!2i768!4f13.1!3m3!1m2!1s0x149875ad7721b1cf%3A0xb51de34ce8fb814!' +
           '2sSt+John!5e0!3m2!1sen!2suk!4v1488199337529'}
        width="400"
        height="300"
        frameBorder="0"
        style={{
          border: 0,
          marginTop: '20px',
          marginBottom: '20px',
        }}
        allowFullScreen
      />
    <br/>
    {copy.reception} <br/>
      <iframe
        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!' +
           '1d11228.260393073715!2d25.215845530469682!3d37.14610242591979!' +
           '2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149875ad895' +
           '06f7d%3A0xc44b70283fc3af70!2sMonastiri!5e0!3m2!1sen!2sus!' +
           '4v1483299658260'}
        width="400"
        height="300"
        frameborder="0"
        style={{
          border: 0,
          marginTop: '20px',
          marginBottom: '20px',
        }}
        allowfullscreen
       />
    <br/>
    {copy.clothes} {copy.weddingInstructions} <br/>
    <h1 className="h1-header">{copy.gifts}</h1>
    <br/>
    {copy.giftInstructions} <a href="https://www.paypal.me/despobruno">
     www.paypal.me/despobruno
     </a> <br/>
    <br/>
      <img src={oxfordSelfie} style={{
        width: '40vw',
        marginTop: '20px',
        marginBottom: '20px',
      }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Venue);
