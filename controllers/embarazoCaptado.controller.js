const { request, response } = require("express");
const { Monitoreo, EmbarazoCaptado } = require("../models");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const embarazoCaptados = await EmbarazoCaptado.findAll({
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, embarazoCaptados));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByMonitoreo = async (req = request, res = response) => {
    try {

        const embarazoCaptados = await EmbarazoCaptado.findAll({
            where: {
                monitoreoId: req.params.monitoreoId
            },
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, embarazoCaptados));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const embarazoCaptado = await EmbarazoCaptado.create({
            antes: req.body.antes,
            despues: req.body.despues,
            semanas: req.body.semanas,
            MonitoreoId: req.body.MonitoreoId,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.json(getResponse(200, embarazoCaptado));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    findAll,
    save,
    findAllByMonitoreo
}