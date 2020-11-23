import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header';
import PhotoCard from '../components/PhotoCard';
import Gallery from '../components/Gallery';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Lightbox from 'react-image-lightbox';

// Album view, designed to display all pictures in a given photographer's album
class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize our photographer and pictures to null
      photographer: null,
      pictures: null,
      // Initialize loading as true, so it shows the loading spinner initially
      loading: true,
      // The modal is set to closed at first, and the picture being displayed is the first
      modalOpen: false,
      pictureIndex: 0
    }

    // Bind the openModal function to the correct context
    this.openModal = this.openModal.bind(this);
  }

  // Async componentDidMount, so we can use synchronous requests via await
  async componentDidMount() {
    // Extract the photographerID and albumID from the path
    const {photographerID, albumID} = this.props.match.params;

    // Create two promises, one for fetching the photographer, one for fetching the pictures
    const photographerPromise = fetch(`/api/photographers/${photographerID}`);
    const picturesPromise = fetch(`/api/albums/${albumID}`);

    // Get the responses of both
    const responses = await Promise.all([
      photographerPromise,
      picturesPromise
    ]);

    // Get the JSON from both responses
    const json = await Promise.all([
      responses[0].json(),
      responses[1].json()
    ]);

    // Map the JSON of each response to our state variables
    const [photographer, pictures] = json;

    // And update the state (including setting loading to false)
    this.setState({
      photographer,
      pictures,
      loading: false
    })
  }

  // Open the picture modal, on a given index
  openModal(pictureIndex) {
    this.setState({
      modalOpen: true,
      pictureIndex
    });
  }

  render() {
    // Extract our required state variables
    const {loading, photographer, pictures, modalOpen, pictureIndex} = this.state;
    // And get the albumID from the path
    const {albumID} = this.props.match.params;

    // If loading === true, show the <Loader /> component, otherwise render the view
    return loading
      ? <Loader msg="Loading pictures..." />
      : (
          <main>
            <Navbar photographer={photographer} albumID={albumID} />

            <Header photographer={photographer} />

            <header className="textual">
              <h2>Album #{albumID}</h2>
            </header>

            <Gallery>
              {/* If there are pictures in the album, map them to <PhotoCard /> elements */}
              {
                pictures
                  ? pictures.map((photo, i) => (
                      <PhotoCard
                        key={`photo${i}`}
                        url={photo.img}
                        name={photo.title}
                        date={photo.op_date}
                        description={photo.description}
                        featured={photo.featured}
                        onClick={() => this.openModal(i)}
                      />
                    ))
                  : <p>Nothing to see here!</p>
              }
            </Gallery>

            {/* If the modal is open, and there are pictures to display, show the <Lightbox /> element */}
            {modalOpen && pictures && (
              <Lightbox
                mainSrc={`/${pictures[pictureIndex].img}`}
                onCloseRequest={() => {
                  this.setState({ modalOpen: false });
                  document.body.classList.remove('noscroll');
                }}
                onAfterOpen={() => {
                  document.body.classList.add('noscroll');
                }}
              />
            )}
          </main>
        );
  }
}

// Export Album, wrapped with the 'withRouter' higher-order component, so we can access variables in the path
export default withRouter(Album);