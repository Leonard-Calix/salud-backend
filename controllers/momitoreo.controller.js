const { request, response } = require("express");
const { Monitoreo, Community } = require("../models/");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const monitoreos = await Monitoreo.findAll({
            include: [
                {
                    model: Community
                }
            ]
        });

        res.json(getResponse(200, monitoreos));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByComnunity = async (req = request, res = response) => {
    try {

        const monitoreos = await Monitoreo.findAll({
            where: {
                CommunityId: req.params.communityId
            },
            include: [
                {
                    model: Community
                }
            ]
        });

        res.json(getResponse(200, monitoreos));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const newMonitoreo = await Monitoreo.create({
            famPriorizadas: req.body.famPriorizadas,
            CommunityId: req.body.CommunityId,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.json(getResponse(200, newMonitoreo));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    findAll,
    save,
    findAllByComnunity
}