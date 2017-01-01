import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const langToForm = {
  FR: 'JXlpTi',
  EN: 'IYKQpZ',
  GR: 'JXaStL',
}

class Rsvp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const uid = 'typeformScript79123619287'
    const elem = document.getElementById(uid)
    if (elem) return
    var newElem = document.createElement('script');
    newElem.id = uid;
    newElem.src = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/widget.js';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(newElem, firstScript);
  }

  render() {
    const typeformId = langToForm[this.props.copy._lang]
    return <div className="col-md-6" style={{
      background: '#fafafa',
      padding: 0,
      margin: 0,
      height: '100%',
    }}>
     {Object.keys(langToForm).map(lang =>
       <div
         key={lang}
         className="typeform-widget"
         data-url={'https://marlamagka.typeform.com/to/' + langToForm[lang]}
         data-text="DespoBruno Wedding RSVP (FR)"
         style={{
           width: '100%', height: '80vh',
           display: this.props.copy._lang === lang ? true : 'none'
         }}
       />
     )}
      <div style={{position: "absolute", background: '#fafafa',
        right: '107px', bottom: 0, width: '200px', height: '56px'}}/>
    </div>;
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
    copy: state.copy,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
