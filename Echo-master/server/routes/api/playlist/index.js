const express = require("express");
// controllers
const getPlaylistCollection = require("./get_playlist_collection");
const getPlaylist = require("./get_playlist");
const createPlaylist = require("./create_playlist");
const deletePlaylist = require("./delete_playlist");
const addSongToPlaylist = require("./add_song_to_playlist");
const deleteSongFromPlaylist = require("./delete_song");

const router = express.Router();

const isValidUser = (req, res, next) => {
  if (req.currentUser.username !== req.params.username) {
    return res.status(401).send("You are not allowed to access this route");
  }
  return next();
};

router.get("/:username", isValidUser, getPlaylistCollection);

router.get("/:username/:title", isValidUser, getPlaylist);

router.post("/:username", isValidUser, createPlaylist);

router.delete("/:username/:playlistTitle", isValidUser, deletePlaylist);

router.put("/:username/:playlistTitle", isValidUser, addSongToPlaylist);

router.delete(
  "/:username/:playlistTitle/:songId",
  isValidUser,
  deleteSongFromPlaylist
);

module.exports = router;
