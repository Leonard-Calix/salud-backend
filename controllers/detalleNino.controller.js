const { request, response } = require("express");
const { Monitoreo, DetalleNino } = require("../models");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const detalleNinos = await DetalleNino.findAll({
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, detalleNinos));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByMonitoreo = async (req = request, res = response) => {
    try {

        const detalleNinos = await DetalleNino.findAll({
            where: {
                MonitoreoId: req.params.monitoreoId
            },
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, detalleNinos));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const detalleNino = await DetalleNino.create({
            rango1: req.body.rango1,
            rango2: req.body.rango2,
            rango3: req.body.rango3,
            masculino: req.body.masculino,
            femenino: req.body.femenino,
            MonitoreoId: req.body.MonitoreoId,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        res.json(getResponse(200, detalleNino));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    findAll,
    save,
    findAllByMonitoreo
}