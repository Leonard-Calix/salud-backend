const { request, response } = require("express");
const { Monitoreo, Community, User } = require("../models/");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const monitoreos = await Monitoreo.findAll({
            include: [
                {
                    model: Community
                },
                {
                    model: User,
                    attributes: {
                        exclude: ['id', 'password']
                    }
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
                },
                {
                    model: User
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
            UserId: 1, // req.user.id
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