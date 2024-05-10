const { request, response } = require("express");
const { Monitoreo, Partos } = require("../models");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const partos = await Partos.findAll({
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, partos));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByMonitoreo = async (req = request, res = response) => {
    try {

        const partos = await Partos.findAll({
            where: {
                monitoreoId: req.params.monitoreoId
            },
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, partos));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const partos = await Partos.create({
            hospital: req.body.hospital,
            comunidad: req.body.comunidad,
            consulta: req.body.consulta,
            MonitoreoId: req.body.MonitoreoId,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.json(getResponse(200, partos));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

module.exports = {
    findAll,
    save,
    findAllByMonitoreo
}