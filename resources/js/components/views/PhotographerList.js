import React, {Component} from 'react';
import ProfileLink from '../components/ProfileLink';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

class PhotographerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographers: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await fetch('/api/photographers');
    const photographers = await response.json();

    this.setState({
      photographers,
      loading: false
    });
  }

  render() {
    const {loading, photographers} = this.state;

    return loading
      ? <Loader msg="Loading photographers..." />
      : (
        <main>
          <Navbar photographer={null} album={null} />

          <header className="textual">
            <h1>Photographers</h1>
          </header>

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