import React, {Component} from 'react';
import Header from '../components/Header/';
import PhotoCard from '../components/PhotoCard/';
import Gallery from '../components/Gallery/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographers: []
    };
  }

  async componentDidMount() {
    let photographers = [];

    const response = await fetch('/landscapes.json');
    const nickData = await response.json();

    photographers = [
      ...photographers,
      nickData
    ];

    console.log(nickData);

    this.setState({ photographers });
  }

  render() {
    const {photographers} = this.state;
    const nick = photographers[0] || {};

    return (
      <main>
        <Header photographer={nick} />

        <Gallery>
          {
            nick.album
            ? nick.album.map((photo, i) => (
                <PhotoCard
                  key={`photo${i}`}
                  url={photo.img}
                  name={photo.title}
                  date={photo.date}
                  description={photo.description}
                  featured={photo.featured}  
                />
              ))
            : null
          }
        </Gallery>

      </main>
    );
  }
}

export default Home;