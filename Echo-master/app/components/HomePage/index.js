import React from "react";
import PropTypes from "prop-types";
import TrackList from "./TrackList";
import Choices from "./Choices";
import "./index.sass";

const HomePage = props => (
  <div className="homepage home-container">
    <div className="home-nav">
      <Choices
        fetchTracks={props.fetchTracks}
        activeChoiceId={props.activeChoiceId}
      />
    </div>
    <TrackList {...props} />
  </div>
);

HomePage.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  fetchTracks: PropTypes.func.isRequired,
  isFading: PropTypes.bool.isRequired,
  activeChoiceId: PropTypes.string
};

export default HomePage;
