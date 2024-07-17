const { request, response } = require("express");
const { NumeroFamAtendidas, Monitoreo } = require("../models");
const { sequelize, QueryTypes } = require("sequelize");
const { getResponse } = require("../helpers/getResponde");
const models = require('../models');

const porcentajeFamilasAtendidas = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;

        const monitoreo = await Monitoreo.findByPk(req.body.monitoreoId);

        const query = `SELECT CAST(((ejecutadas/programadas) * 100) AS DECIMAL(10,2)) as PEjecutadas, (100-CAST(((ejecutadas/programadas) * 100) AS DECIMAL(10,2))) as PNoEjecutadas, * from NumeroFamAtendidas ` +
            `WHERE monitoreoId = ${monitoreo.CommunityId} ` +
            `and CAST(createdAt as date) > CAST('${req.body.fechaInicial}' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.fechaFinal}' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const numeroFamAtendidas = await sequelize.query(query, {
            type: QueryTypes.SELECT,
        });

        res.json(getResponse(200, numeroFamAtendidas));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}

const porcentajeNiñosDesnutricion = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;

        const monitoreo = await Monitoreo.findByPk(req.body.monitoreoId);

        const query = `SELECT noDesnutridos, desnutridos, (noDesnutridos + desnutridos) as total, (noDesnutridos/(noDesnutridos + desnutridos)) as pnoDesnutridos, (Desnutridos/(noDesnutridos + desnutridos)) pdesnutridos, createdAt from ninoDesnutricions  ` +
            `WHERE monitoreoId = ${monitoreo.CommunityId}  ` +
            `and CAST(createdAt as date) > CAST('${req.body.fechaInicial}' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.fechaFinal}' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const numeroFamAtendidas = await sequelize.query(query, {
            type: QueryTypes.SELECT,
        });

        res.json(getResponse(200, numeroFamAtendidas));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}


module.exports = {
    porcentajeFamilasAtendidas,
    porcentajeNiñosDesnutricion
}