import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AlbumLink from '../components/AlbumLink';

// The AlbumList view, designed to list all albums of a given photographer
class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize photographer and albums to null
      photographer: null,
      albums: null,
      // Initialize loading to true, so the spinner shows on initial load
      loading: true
    };
  }

  // Async componentDidMount, so we can use synchronous fetching (await)
  async componentDidMount() {
    // Extract the photographerID from the path
    const {photographerID} = this.props.match.params;

    // Create two promises calling the photographer and albums endpoints
    const photographerPromise = fetch(`/api/photographers/${photographerID}`);
    const albumsPromise = fetch(`/api/photographers/${photographerID}/albums`);

    // Await the responses
    const responses = await Promise.all([
      photographerPromise,
      albumsPromise
    ]);

    // Convert the responses to JSON
    const json = await Promise.all([
      responses[0].json(),
      responses[1].json()
    ]);

    // Map the respective JSON to two state variables
    const [photographer, albums] = json;

    // Update the state, setting loading to false
    this.setState({
      photographer,
      albums,
      loading: false
    });
  }

  render() {
    // Extract the required state variables
    const {loading, photographer, albums} = this.state;

    // Show the loader when loading is true
    return loading
      ? <Loader msg="Loading albums..." />
      : (
          <main>
            <Navbar photographer={photographer} album={null} />

            <Header photographer={photographer} />
            
            <header className="textual">
              <h2>Albums</h2>
            </header>

            {/* If the photographer has albums, map them to AlbumLink elements */}
            <div className="album-grid">
              {
                albums.length === 0
                  ? <p>Nothing to see here!</p>
                  : albums.map((album, i) => (
                      <AlbumLink to={`/${photographer.id}/${album.id}`} key={`alink${i}`}>
                        Album #{album.id}
                      </AlbumLink>
                    ))
              }
            </div>
          </main>
        );
  }
}

// Export with the 'withRouter' higher-order component, for access to path variables
export default withRouter(AlbumList);