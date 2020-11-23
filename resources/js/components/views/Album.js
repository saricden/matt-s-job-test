import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header';
import PhotoCard from '../components/PhotoCard';
import Gallery from '../components/Gallery';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Lightbox from 'react-image-lightbox';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographer: null,
      pictures: null,
      loading: true,
      modalOpen: false,
      pictureIndex: 0
    }

    this.openModal = this.openModal.bind(this);
  }

  async componentDidMount() {
    const {photographerID, albumID} = this.props.match.params;

    const photographerPromise = fetch(`/api/photographers/${photographerID}`);
    const picturesPromise = fetch(`/api/albums/${albumID}`);

    const responses = await Promise.all([
      photographerPromise,
      picturesPromise
    ]);

    const json = await Promise.all([
      responses[0].json(),
      responses[1].json()
    ]);

    const [photographer, pictures] = json;

    this.setState({
      photographer,
      pictures,
      loading: false
    })
  }

  openModal(pictureIndex) {
    this.setState({
      modalOpen: true,
      pictureIndex
    });
  }

  render() {
    const {loading, photographer, pictures, modalOpen, pictureIndex} = this.state;
    const {albumID} = this.props.match.params;

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

export default withRouter(Album);