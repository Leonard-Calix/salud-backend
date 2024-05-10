const { request, response } = require("express");
const { Monitoreo, NumeroFamAtendidas } = require("../models");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const numeroFamAtendidas = await NumeroFamAtendidas.findAll({
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, numeroFamAtendidas));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByMonitoreo = async (req = request, res = response) => {
    try {

        const numeroFamAtendidas = await NumeroFamAtendidas.findAll({
            where: {
                monitoreoId: req.params.monitoreoId
            },
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, numeroFamAtendidas));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const numeroFamAtendidas = await NumeroFamAtendidas.create({
            ejecutadas: req.body.ejecutadas,
            programadas: req.body.programadas,
            MonitoreoId: req.body.MonitoreoId,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.json(getResponse(200, numeroFamAtendidas));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    findAll,
    save,
    findAllByMonitoreo
}