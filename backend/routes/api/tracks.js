const express = require('express');
const asyncHandler = require('express-async-handler');
const { Artist } = require('../../db/models');
const {getAuthToken} = require("./spotify.js")
const fetch = require("node-fetch");

const router = express.Router();

router.get("/:albumId", async(req, res) => {
    const album = req.params.albumId;

    let newAuthToken = await getAuthToken();

    const tracks = await fetch(`https://api.spotify.com/v1/albums/${album}/tracks?market=US`,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        }
    )

    const albumTracks = await tracks.json();
    return res.json(albumTracks);

})

router.get("/image/:albumId", async(req, res) => {
    const album = req.params.albumId;

    let newAuthToken = await getAuthToken();

    const albumImage = await fetch(`https://api.spotify.com/v1/albums/${album}`,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        }
    )

    const image = await albumImage.json();
    return res.json(image);

})


module.exports = router;
