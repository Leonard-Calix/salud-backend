const { request, response } = require("express");
const { Monitoreo } = require("../models");
const { sequelize, QueryTypes } = require("sequelize");
const { getResponse } = require("../helpers/getResponde");
const models = require('../models');

const porcentajeFamilasAtendidas = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;
        let CPEjecutadas = 0;
        let CPProgramadas = 0;

        let response = {
            PEjecutadas: 0,
            PNoEjecutadas: 0
        }

        const monitoreo = await Monitoreo.findByPk(req.body.monitoreoId);

        const query = `SELECT * from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${monitoreo.CommunityId} ) ` +
            `and CAST(createdAt as date) > CAST('${req.body.fechaInicial}' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.fechaFinal}' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const numeroFamAtendidas = await sequelize.query(query, {
            type: QueryTypes.SELECT,

        });

        numeroFamAtendidas.forEach(element => {
            CPEjecutadas += element.ejecutadas;
            CPProgramadas += element.programadas;
        });

        if (numeroFamAtendidas.length == 0) {

            response.PEjecutadas = 0;
            response.PNoEjecutadas = 0;

            return res.json({ ok: false, msg: "No hay registros para esas fechas", data: response })
        }

        response.PEjecutadas = Math.round((CPEjecutadas / CPProgramadas) * 100);
        response.PNoEjecutadas = Math.round(100 - ((CPEjecutadas / CPProgramadas) * 100));

        res.json(getResponse(200, response));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}

const porcentajeNiñosDesnutricion = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;

        let response = {
            noDesnutridos: 0,
            desnutridos: 0
        }

        const monitoreo = await Monitoreo.findByPk(req.body.monitoreoId);

        const query = `SELECT SUM(noDesnutridos) as noDesnutridos, SUM(desnutridos) as desnutridos,  (SUM(noDesnutridos) + SUM(desnutridos)) as total from ninoDesnutricions ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${monitoreo.CommunityId} ) ` +
            `and CAST(createdAt as date) > CAST('${req.body.fechaInicial}' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.fechaFinal}' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const ninoDesnutricions = await sequelize.query(query, {
            type: QueryTypes.SELECT,
        });

        if (ninoDesnutricions.length == 0 || !ninoDesnutricions[0].total) {

            response.desnutridos = 0;
            response.noDesnutridos = 0;

            return res.json({ ok: false, msg: "No hay registros para esas fechas", data: response })
        }

        if (ninoDesnutricions[0].total == 0) {
            response.desnutridos = 0;
            response.noDesnutridos = 0;

            return res.json({ ok: false, msg: "No hay registros para esas fechas", data: response })
        }

        response.desnutridos = Math.round((ninoDesnutricions[0].desnutridos / ninoDesnutricions[0].total) * 100);
        response.noDesnutridos = Math.round((ninoDesnutricions[0].noDesnutridos / ninoDesnutricions[0].total) * 100);

        res.json(getResponse(200, response));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    porcentajeFamilasAtendidas,
    porcentajeNiñosDesnutricion
}