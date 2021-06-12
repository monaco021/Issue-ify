const express = require('express');
const asyncHandler = require('express-async-handler');
const { Form } = require('../../db/models');
const {getAuthToken} = require("./spotify.js")
const fetch = require("node-fetch");
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');

//I want to work on error handling here

const router = express.Router();
const validateForm = [
    check('artistName')
      .exists({ checkFalsy: true })
      .isLength({ min: 2 })
      .withMessage('Please provide artist name.'),
    check('socialIssue')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a social Issue.'),
    check('reason')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Please provide reasons why.'),
    handleValidationErrors
];

router.get("/submittedForms", async(req, res) => {
    const submittedForms = await Form.findAll();

    return res.json(submittedForms);
});


router.post("/addArtist", validateForm, async(req,res) => {
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

    return res.json({newForm});
})


module.exports = router;
