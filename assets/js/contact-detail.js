import React, {Component} from 'react';


class ContactDetail extends Component {
  render() {
    const props = this.props;
    return (
      <div class='card'>
        <figure class="image is-4by3" style={{maxWidth: 640, maxHeight: 480}}>
          <img src={props.contact_photo} />
          <h1 class='title is-overlay has-text-centered is-medium' style={{down: 0}}> 
            {props.name}
          </h1>
        </figure>
        <div class='card-content'>
          <div>
            <span class='icon'>
              <i class="fas fa-phone" />
            </span>
            <span>
              {props.phone}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ContactDetail.defaultProps = {
  name: "Chris Aldama",
  phone: "(52) 4913 85 57",
  line1: "Molino 12 Nextitla",
  line2: "Cuauthemoc CDMX",
  state: "CDMX",
  zip: "11420",
  contact_photo: "https://bulma.io/images/placeholders/1280x960.png"
};

export default ContactDetail;
