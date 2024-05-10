const { request, response } = require("express");
const { Monitoreo, CuidadorPrimario } = require("../models");
const { getResponse } = require("../helpers/getResponde");

const findAll = async (req = request, res = response) => {
    try {

        const cuidadorPrimarios = await CuidadorPrimario.findAll({
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, cuidadorPrimarios));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const findAllByMonitoreo = async (req = request, res = response) => {
    try {

        const cuidadorPrimarios = await CuidadorPrimario.findAll({
            where: {
                monitoreoId: req.params.monitoreoId
            },
            include: [
                {
                    model: Monitoreo
                }
            ]
        });

        res.json(getResponse(200, cuidadorPrimarios));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}

const save = async (req = request, res = response) => {
    try {

        const cuidadorPrimario = await CuidadorPrimario.create({
            madre: req.body.madre,
            padre: req.body.padre,
            abuela: req.body.abuela,
            total: req.body.total,
            MonitoreoId: req.body.MonitoreoId,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        res.json(getResponse(200, cuidadorPrimario));

    } catch (error) {
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    findAll,
    save,
    findAllByMonitoreo
}