import React, {Component} from 'react';
import {connect} from 'react-redux';
import {detail} from './actions';

const ContactPhoto = props => (
  <figure className="image is-4by3" style={{maxWidth: 640, maxHeight: 480}}>
    <img src={props.contact_photo} />
    <span className="is-overlay" style={{display: 'flex'}}>
      <h1 className='title has-text-centered is-medium' style={title_style}> 
        {props.name}
      </h1>
    </span>
  </figure>
);

const ContactInfo = props => (
  <div className='card-content'>
    <div>
      <span>
        {props.phone}
      </span>
      <span className='icon'>
        <i className="fas fa-phone" />
      </span>
    </div>
    <div>
      <p>{props.address.line1}</p>
      <p>{props.address.line2}</p>
      <p><strong>city:</strong>{props.address.city}</p>
      <p><strong>state:</strong>{props.address.state}</p>
      <p><strong>zip:</strong>{props.address.zip}</p>
    </div>
  </div>
);

class ContactDetail extends Component {
  render() {
    const props = this.props;
    const hide = props.contact_detail? '': 'is-hidden-mobile';
    return (
      <div className={`card ${hide}`}>
        <a className="is-hidden-desktop delete is-overlay" onClick={() => this.props.detail(null)} />
        <ContactPhoto name={props.name} 
                      contact_photo={props.contact_photo} />
        <ContactInfo address={props}
                     phone={props.phone} />
      </div>
    );
  }
}

ContactDetail.defaultProps = {
  name: "",
  phone: "",
  line1: "",
  line2: "",
  state: "",
  city: "",
  zip: "",
  contact_photo: "https://bulma.io/images/placeholders/1280x960.png"
};

const title_style = {
  alignSelf: 'flex-end',
  width: '100%',
  padding: 10,
  margin: 10
};

const mapStateToProps = state => ({
  ...state.detail,
  contact_detail: state.detail
});

export default connect(mapStateToProps, {detail})(ContactDetail);
