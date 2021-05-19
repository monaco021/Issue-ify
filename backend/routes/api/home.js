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
//need to rethink and see if I can use a switch case 

router.get("/:socialIssue", async(req, res) => {
    const issue = req.params.socialIssue;
    let newAuthToken = await getAuthToken();

    if (issue === "Climate Change"){
        const artist = await fetch("https://api.spotify.com/v1/artists?ids=6qqNVTkY8uBg9cP3Jd7DAH,4STHEaNw4mPZ2tzheohgXB,73sIBHcqh3Z3NyqHKZ7FOL,0xOeVMOz2fVg5BJY3N6akT,00FQb4jTyendYWaN8pK0wa,2TI7qyDE0QfyOlnbtfDo7L,4dpARuHxo51G3z768sgnrY,7oPftvlwr6VrsViSDV7fJY,78xUyw6FkVZrRAtziFdtdu",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        })
        const singer = await artist.json();

        return res.json(singer);

    } else if (issue === "lgbtqa+ rights"){
        const artists2 = await fetch("https://api.spotify.com/v1/artists?ids=6vWDO969PvNqNYHIOW5v0m,6ueGR6SWhUJfvEhqkvMsVs,1HY2Jd0NmPuamShAr6KMms,66CXWjxzNUsdJxJ2JdwvnR,6tbjWDEIzxoDsBA1FuhfPW,7uMh23xWiuR7zsNkuNcm2G,4QFHHdZkeqmneDQqKIjAN8,46auOkH1pk28rWrSoUNhLo,6tzRZ39aZlNqlUzQlkuhDV",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        })
        const singers2 = await artists2.json();

        return res.json(singers2);

    } else if (issue === "Women's rights"){
        const artists3 = await fetch("https://api.spotify.com/v1/artists?ids=3DiDSECUqqY1AuBP8qtaIa,1KCSPY1glIKqW2TotWuXOR,5y2Xq6xcjJb2jVM54GHK3t,163tK9Wjr9P9DmM0AVK7lm,1HY2Jd0NmPuamShAr6KMms,6vWDO969PvNqNYHIOW5v0m,053q0ukIDRgzwTr4vNSwab,0AiTwNtYX8m4uhfU7rJ8RD,726Dh6A5VyDfAAQxilT6A0",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        })
        const singers3 = await artists3.json();

        return res.json(singers3);

    } else if (issue === "BLM"){
        const artists4 = await fetch("https://api.spotify.com/v1/artists?ids=56oDRnqbIiwx4mymNEv7dS,26VFTg2z8YR0cCuwLzESi2,0eGh2jSWPBX5GuqIHoZJZG,6vWDO969PvNqNYHIOW5v0m,6qqNVTkY8uBg9cP3Jd7DAH,6l3HvQ5sa6mXTsMTB19rO5,2auiVi8sUZo17dLy1HwrTU,4V8LLVI7PbaPR0K2TGSxFF,0cGUm45nv7Z6M6qdXYQGTX",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newAuthToken}`
            }
        })
        const singers4 = await artists4.json();

        return res.json(singers4);
    }
});

module.exports = router;
