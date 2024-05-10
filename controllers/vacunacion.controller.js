const { request, response } = require("express");
const { Monitoreo, Vacunacion } = require("../models");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const vacunacion = await Vacunacion.findAll({
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, vacunacion));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByMonitoreo = async (req = request, res = response) => {
    try {

        const vacunacion = await Vacunacion.findAll({
            where: {
                monitoreoId: req.params.monitoreoId
            },
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, vacunacion));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const vacunacion = await Vacunacion.create({
            hepatitis: req.body.hepatitis,
            bcg: req.body.bcg,
            pentavalente: req.body.pentavalente,
            rotavirus: req.body.rotavirus,
            srp: req.body.srp,
            nuemococo: req.body.nuemococo,
            MonitoreoId: req.body.MonitoreoId,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.json(getResponse(200, vacunacion));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

module.exports = {
    findAll,
    save,
    findAllByMonitoreo
}