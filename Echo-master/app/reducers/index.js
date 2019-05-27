import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import playerReducer from "./player_reducer";
import songReducer from "./song_reducer";
import trackReducer from "./track_reducer";
import UIReducer from "./ui_reducer";
import queueReducer from "./queue_reducer";
import authReducer from "./auth_reducer";
import playlistReducer from "./user_playlist_reducer";

export default combineReducers({
  playerState: playerReducer,
  songData: songReducer,
  routing: routerReducer,
  trackState: trackReducer,
  UIState: UIReducer,
  queueState: queueReducer,
  auth: authReducer,
  playlistState: playlistReducer
});
