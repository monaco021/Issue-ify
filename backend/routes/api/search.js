const express = require('express');
const asyncHandler = require('express-async-handler');
// const { Artist } = require('../../db/models');
const {getAuthToken} = require("./spotify.js")
const fetch = require("node-fetch");

const router = express.Router();

router.get("/:artistName", async(req, res) => {
    const artist = req.params.artistName;
    // artist.split

    let newAuthToken = await getAuthToken();

    const search = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US`,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        }
    )
    const results = await search.json();
    return res.json(results);
})


module.exports = router;
