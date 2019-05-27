import axios from "axios";
import { browserHistory } from "react-router";
import * as types from "../constant/action_constant";
import { togglePushRoute } from "./queue";

export function fetchSong(name, id) {
  return dispatch => {
    dispatch({ type: types.START_FETCHING_SONG });

    axios
      .get(`/api/media/song?name=${name}&id=${id}`)
      .then(({ data }) => {
        data.cover = data.artist.cover;
        const ids = {
          songId: data.id,
          artistId: data.artist.id
        };

        delete data.artist;
        dispatch({ type: types.FETCH_SONG_SUCCESS, data });
        dispatch(togglePushRoute(false));
        dispatch({
          type: types.ADD_SONG_TO_QUEUE,
          song: {
            name: data.name,
            id,
            artists: data.artists,
            thumbnail: data.thumbnail
          }
        });
      })
      .catch(err => {
        console.log(err);

        dispatch({ type: types.FETCH_SONG_FAILURE });
        browserHistory.push("/notfound/song");
      });
  };
}
