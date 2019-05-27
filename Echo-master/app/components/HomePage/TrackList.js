import React from "react";
import PropTypes from "prop-types";
import Track from "./Track";
import { haveDropDown } from "../../HOC";

class TrackList extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { isFading } = this.props;

    return (
      <div className="hp-track-list-wrapper">
        <ul className={`hp-track-list ${isFading ? "isFading" : ""}`}>
          {this.props.tracks.map(track => (
            <Track key={track.id} {...track} {...this.props} />
          ))}
          {this.props.isLoading && <div className="loader" />}
        </ul>
      </div>
    );
  }
}

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  renderDropDown: PropTypes.func.isRequired
};

export default haveDropDown(TrackList);
