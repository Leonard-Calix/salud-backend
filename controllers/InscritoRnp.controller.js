const { request, response } = require("express");
const { Monitoreo, InscritoRnp } = require("../models");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const inscritoRnps = await InscritoRnp.findAll({
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, inscritoRnps));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByMonitoreo = async (req = request, res = response) => {
    try {

        const inscritoRnps = await InscritoRnp.findAll({
            where: {
                MonitoreoId: req.params.monitoreoId
            },
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, inscritoRnps));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const inscritoRnps = await InscritoRnp.create({
            inscritos: req.body.inscritos,
            noInscritos: req.body.noInscritos,
            MonitoreoId: req.body.MonitoreoId,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        res.json(getResponse(200, inscritoRnps));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    findAll,
    save,
    findAllByMonitoreo
}