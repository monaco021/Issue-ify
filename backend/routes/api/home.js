const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Issue } = require('../../db/models');

const router = express.Router();

router.get("/", async(req, res) => {
    const causes = await Issue.findAll();
    return res.json(causes);
});

// router.get("/:issue", async(req, res) => {
//     // const issue = await
// });

module.exports = router;
