import store from "./store";
import { getPlaylistCollection } from "./actions/user_playlist";
import { loadUserData } from "./localStorage";

export function getPlaylistOnEnter() {
  const userPlaylistCollection = store.getState().playlistState.playlists;

  if (loadUserData() && !userPlaylistCollection.length) {
    store.dispatch(getPlaylistCollection());
  }
}
