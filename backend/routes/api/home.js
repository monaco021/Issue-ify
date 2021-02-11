const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Issue } = require('../../db/models');
const {getAuthToken} = require("./spotify.js")
const fetch = require("node-fetch")

const router = express.Router();

router.get("/", async(req, res) => {
    const causes = await Issue.findAll();
    return res.json(causes);
});

router.get("/:socialIssue", async(req, res) => {
    const issue = req.params.socialIssue;
    let newAuthToken = await getAuthToken();

    if (issue === "Climate Change"){
        const artist = await fetch("https://api.spotify.com/v1/artists?ids=6qqNVTkY8uBg9cP3Jd7DAH,4STHEaNw4mPZ2tzheohgXB,73sIBHcqh3Z3NyqHKZ7FOL,0xOeVMOz2fVg5BJY3N6akT,00FQb4jTyendYWaN8pK0wa",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        })
        const singer = await artist.json();
        // console.log("hello:", singer);

        return res.json(singer);
    } else {
        return "Nothing here"
    }
});

module.exports = router;
