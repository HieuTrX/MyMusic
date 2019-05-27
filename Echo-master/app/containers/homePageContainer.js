import React, { Component } from "react";
import { connect } from "react-redux";
import { HomePage } from "../components";
import { fetchTracks } from "../actions/home";

class HomePageContainer extends Component {
  render() {
    return <HomePage {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { isLoading, tracks } = state.trackState;
  const { authenticated } = state.auth;

  return {
    isFading: state.UIState.isFading,
    activeChoiceId: state.trackState.activeId,
    isLoading,
    tracks,
    authenticated
  };
}

export default connect(
  mapStateToProps,
  {
    fetchTracks
  }
)(HomePageContainer);
