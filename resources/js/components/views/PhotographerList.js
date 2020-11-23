import React, {Component} from 'react';
import ProfileLink from '../components/ProfileLink';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

// The home view of the app, lists the photographers in the DB
class PhotographerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize the photographers to an empty array
      photographers: [],
      // And set to loading
      loading: true
    }
  }

  // Async componentDidMount, so we can make synchronous API calls (await)
  async componentDidMount() {
    // Fetch the response from the photographers endpoint
    const response = await fetch('/api/photographers');
    // And await the JSON
    const photographers = await response.json();

    // Update the state
    this.setState({
      photographers,
      loading: false
    });
  }

  render() {
    // Extract loading bool and photographers array from the state
    const {loading, photographers} = this.state;

    // Show the loader when loading, or the view when loaded
    return loading
      ? <Loader msg="Loading photographers..." />
      : (
        <main>
          <Navbar photographer={null} album={null} />

          <header className="textual">
            <h1>Photographers</h1>
          </header>

          {/* If there are photographers in the DB, map them to ProfileLink elements */}
          <div>
            {
              photographers.length === 0
                ? <p>Nothing to see here!</p>
                : photographers.map((photographer, i) => (
                    <ProfileLink
                      name={photographer.name}
                      bio={photographer.bio}
                      id={photographer.id}
                      profilePicture={photographer.profile_picture}
                      key={`profile${i}`}
                    />
                  ))
            }
          </div>
        </main>
      );
  }
}

export default PhotographerList;