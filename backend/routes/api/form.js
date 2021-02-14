const express = require('express');
const asyncHandler = require('express-async-handler');
const { Form } = require('../../db/models');
const {getAuthToken} = require("./spotify.js")
const fetch = require("node-fetch");

const router = express.Router();

router.get("/", async(req, res) => {
    const submittedForms = await Form.findAll();

    return res.json(submittedForms);
});

router.post("/addArtist", async(req,res) => {
    const {
        artistName,
        socialIssue,
        reason
    } = req.body;

    const newForm = await Form.create({
        artistName,
        socialIssue,
        reason
    });

    res.redirect("/");
    return res.json({newForm});
})


module.exports = router;
