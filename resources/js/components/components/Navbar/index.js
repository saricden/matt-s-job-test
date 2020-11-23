import React, {Component} from 'react';
import Breadcrumb from './Breadcrumb';
import Switch from 'react-switch';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons';

// Navbar component, rendering the breadcrumb, and dark mode toggler
class Navbar extends Component {
  constructor(props) {
    super(props);

    // Initially set the colorTheme from local storage, if it hasn't been set already
    if (!localStorage.getItem('colorTheme')) {
      localStorage.setItem('colorTheme', 'light');
    }

    this.state = {
      // Set the lightTheme boolean
      lightTheme: (localStorage.getItem('colorTheme') === 'light')
    };

    // Bind the the handleThemeChange to the appropriate context
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  // When the component mounts, update the body class according to the theme
  componentDidMount() {
    this.updateBodyTheme();
  }

  // Updates the body's theme class, based on the colorTheme saved in local storage
  updateBodyTheme() {
    // Fetch the theme string
    const themeStr = localStorage.getItem('colorTheme');
    // Remove any existing theme class
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    // Add the current theme class
    document.body.classList.add(themeStr);
  }

  // Update the theme string based on the toggle input
  handleThemeChange(lightTheme) {
    // Set the state representation
    this.setState({ lightTheme });
    
    // Update the local storage representation accordingly
    if (lightTheme) {
      localStorage.setItem('colorTheme', 'light');
    }
    else {
      localStorage.setItem('colorTheme', 'dark');
    }

    // Update the class
    this.updateBodyTheme();
  }

  render() {
    // Extract the photographer and albumID from the props
    const {photographer, albumID} = this.props;
    // And the lightTheme bool from the state
    const {lightTheme} = this.state;

    return (
      <nav>
        {/* Pass along the props to the breadcrumb element */}
        <Breadcrumb photographer={photographer} albumID={albumID} />

        <label>
          <span>
            {/* Show text for light/dark theme */}
            {
              lightTheme
              ? "Light Theme"
              : "Dark Theme"
            }
          </span>
          {/* Render the dark/light theme toggle */}
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