const { request, response } = require("express");

const index = async (req = request, res = response) => {
    try {
        res.json({ msg: 'Hello world' });
    } catch (error) {
        res.json({ msg: 'Hello world' });
    }
}

const save = (req = request, res = response) => {
    try {
        res.json({ msg: 'Hello world' });
    } catch (error) {
        res.json({ msg: 'Hello world' });
    }
}

const findOne = (req = request, res = response) => {
    try {
        res.json({ msg: 'Hello world' });
    } catch (error) {
        res.json({ msg: 'Hello world' });
    }
}

module.exports = {
    index
}