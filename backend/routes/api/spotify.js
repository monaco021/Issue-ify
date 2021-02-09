const express = require('express');
const asyncHandler = require('express-async-handler');
const { Token } = require('../../db/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const fetch = require("node-fetch")

// const router = express.Router();

const getAuthToken = async() => {
    const currentTimestamp = new Date().getTime();

    let authToken = await Token.findOne({
        where:{
            time: {
                [Op.gt]: currentTimestamp + 60
            }
        }
    })

    if (authToken) {
        let dbToken = await authToken.json()
        const oldToken = dbToken.tokenKey
        return oldToken
    } else {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${process.env.apiEncodedKey}`,
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials"
        })
        const data = await response.json();

        await Token.create({
            tokenKey: data.access_token,
            time: currentTimestamp
            }
        )

        authToken = data.access_token
        return authToken

    }

}

module.exports = {getAuthToken};
