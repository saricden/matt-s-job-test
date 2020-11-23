import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AlbumLink from '../components/AlbumLink';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographer: null,
      albums: null,
      loading: true
    };
  }

  async componentDidMount() {
    const {photographerID} = this.props.match.params;

    const photographerPromise = fetch(`/api/photographers/${photographerID}`);
    const albumsPromise = fetch(`/api/photographers/${photographerID}/albums`);

    const responses = await Promise.all([
      photographerPromise,
      albumsPromise
    ]);

    const json = await Promise.all([
      responses[0].json(),
      responses[1].json()
    ]);

    const [photographer, albums] = json;

    this.setState({
      photographer,
      albums,
      loading: false
    });
  }

  render() {
    const {loading, photographer, albums} = this.state;

    return loading
      ? <Loader msg="Loading albums..." />
      : (
          <main>
            <Navbar photographer={photographer} album={null} />

            <Header photographer={photographer} />
            
            <header className="textual">
              <h2>Albums</h2>
            </header>

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

export default withRouter(AlbumList);