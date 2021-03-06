const express = require('express');
const asyncHandler = require('express-async-handler');
// const { Artist } = require('../../db/models');
const {getAuthToken} = require("./spotify.js")
const fetch = require("node-fetch");

const router = express.Router();

router.get("/:spotifyId", async(req, res) => {
    const artist = req.params.spotifyId;

    let newAuthToken = await getAuthToken();

    const albums = await fetch(`https://api.spotify.com/v1/artists/${artist}/albums?include_groups=album,single&market=US`,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        }
    )
    const artistAlbums = await albums.json();
    return res.json(artistAlbums);
})


module.exports = router;
