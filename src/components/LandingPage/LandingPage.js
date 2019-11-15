import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
  render() {
    return(
      <div className="landing-page">
        <h1>Welcome to Petful!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Nibh praesent tristique magna sit amet purus gravida. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Nibh tortor id aliquet lectus. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. In fermentum posuere urna nec tincidunt praesent semper. Eget egestas purus viverra accumsan in nisl. Sollicitudin tempor id eu nisl nunc. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Netus et malesuada fames ac turpis egestas sed tempus. Convallis aenean et tortor at risus viverra adipiscing at. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Eu tincidunt tortor aliquam nulla facilisi. Convallis tellus id interdum velit laoreet id donec. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Mi sit amet mauris commodo quis imperdiet.
        </p>
        <Link to="/adopt" className="adopt-btn">
          <button>Adopt a Pet</button>
        </Link>
    </div>
    )
  }
}