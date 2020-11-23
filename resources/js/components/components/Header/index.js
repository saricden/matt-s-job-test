import React, {Component} from 'react';

// Sub-components
import ProfilePicture from './ProfilePicture';
import Bio from './Bio';
import ContactInfo from './ContactInfo';

// Reusable profile header component, displays the profile picture, bio, and contact info
class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {photographer} = this.props;

    return (
      <header className="primary">
        <ProfilePicture src={photographer.profile_picture} />

        <Bio
          name={photographer.name}
          bio={photographer.bio}
        />

        <ContactInfo
          phone={photographer.phone}
          email={photographer.email}
        />
      </header>
    );
  }
}

export default Header;