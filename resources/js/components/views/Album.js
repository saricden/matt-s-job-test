import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header/';
import PhotoCard from '../components/PhotoCard/';
import Gallery from '../components/Gallery/';
import Loader from '../components/Loader/';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographer: null,
      pictures: null,
      loading: true
    }
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

  render() {
    const {loading, photographer, pictures} = this.state;

    return loading
      ? <Loader msg="Loading pictures..." />
      : (
          <main>
            <Header photographer={photographer} />

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
                      />
                    ))
                  : <p>Nothing to see here!</p>
              }
            </Gallery>
          </main>
        );
  }
}

export default withRouter(Album);