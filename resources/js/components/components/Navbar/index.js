import React, {Component} from 'react';
import Breadcrumb from './Breadcrumb';
import Switch from 'react-switch';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons';

class Navbar extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem('colorTheme')) {
      localStorage.setItem('colorTheme', 'light');
    }

    this.state = {
      lightTheme: (localStorage.getItem('colorTheme') === 'light')
    };

    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  componentDidMount() {
    this.updateBodyTheme();
  }

  updateBodyTheme() {
    const themeStr = localStorage.getItem('colorTheme');
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(themeStr);
  }

  handleThemeChange(lightTheme) {
    this.setState({ lightTheme });
    
    if (lightTheme) {
      localStorage.setItem('colorTheme', 'light');
    }
    else {
      localStorage.setItem('colorTheme', 'dark');
    }

    this.updateBodyTheme();
  }

  render() {
    const {photographer, albumID} = this.props;
    const {lightTheme} = this.state;

    return (
      <nav>
        <Breadcrumb photographer={photographer} albumID={albumID} />

        <label>
          <span>
            {
              lightTheme
              ? "Light Theme"
              : "Dark Theme"
            }
          </span>
          <Switch
            onChange={this.handleThemeChange}
            checked={lightTheme}
            checkedIcon={<FontAwesomeIcon icon={faSun} />}
            uncheckedIcon={<FontAwesomeIcon icon={faMoon} />}
            onColor="#cece47"
            offColor="#3d123d"
          />
        </label>
      </nav>
    );
  }
}

export default Navbar;