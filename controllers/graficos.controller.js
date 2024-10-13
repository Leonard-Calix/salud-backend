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

        const query = `SELECT * from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId} ) ` +
            `and CAST(createdAt as date) > CAST('${req.body.fechaInicial}' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.fechaFinal}' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const numeroFamAtendidas = await sequelize.query(query, {
            type: QueryTypes.SELECT,

        });

        console.log("query " + query)
        //console.log(req.body)

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

        const query = `SELECT SUM(noDesnutridos) as noDesnutridos, SUM(desnutridos) as desnutridos,  (SUM(noDesnutridos) + SUM(desnutridos)) as total from ninoDesnutricions ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId} ) ` +
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

const porcentajeNiños = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;

        let response = {
            pMasculino: 0,
            pFemenino: 0
        }

        const query = `SELECT SUM(femenino)  as femenino, SUM(masculino) masculino , (SUM(femenino) + SUM(masculino)) as total from DetalleNinos ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId} )  ` +
            `and CAST(createdAt as date) > CAST('${req.body.fechaInicial}' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.fechaFinal}' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const ninoDesnutricions = await sequelize.query(query, {
            type: QueryTypes.SELECT,
        });

        if (ninoDesnutricions.length == 0 || !ninoDesnutricions[0].total) {

            response.pFemenino = 0;
            response.pMasculino = 0;

            return res.json({ ok: false, msg: "No hay registros para esas fechas", data: response })
        }

        if (ninoDesnutricions[0].total == 0) {
            response.desnutridos = 0;
            response.noDesnutridos = 0;

            return res.json({ ok: false, msg: "No hay registros para esas fechas", data: response })
        }

        response.pFemenino = Math.round((ninoDesnutricions[0].femenino / ninoDesnutricions[0].total) * 100);
        response.pMasculino = Math.round((ninoDesnutricions[0].masculino / ninoDesnutricions[0].total) * 100);

        res.json(getResponse(200, response));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}

const porcentajeFamilasAtendidasGeneral = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;

        const query = `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId} ) ` +
            `and CAST(createdAt as date) > CAST('${req.body.anio}-01-01' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.anio}-04-01' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio}  ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('${req.body.anio}-04-01' as date) ` +
            `and CAST(createdAt as date) < CAST('${req.body.anio}-07-01' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('${req.body.anio}-07-01' as date)  ` +
            `and CAST(createdAt as date) < CAST('${req.body.anio}-10-01' as date)  ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('${req.body.anio}-10-01' as date) ` +
            `and CAST(createdAt as date) <= CAST('${req.body.anio}-12-31' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const responseQuery = await sequelize.query(query, {
            type: QueryTypes.SELECT,

        });


        res.json(getResponse(200, responseQuery));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}

const porcentajeFamilasAtendidasGeneralDesnutricion = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;

        const query = `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId} ) ` +
            `and CAST(createdAt as date) > CAST('2024-01-01' as date) ` +
            `and CAST(createdAt as date) < CAST('2024-04-01' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio}  ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('2024-04-01' as date) ` +
            `and CAST(createdAt as date) < CAST('2024-07-01' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('2024-07-01' as date)  ` +
            `and CAST(createdAt as date) < CAST('2024-10-01' as date)  ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('2024-10-01' as date) ` +
            `and CAST(createdAt as date) <= CAST('2024-12-31' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const responseQuery = await sequelize.query(query, {
            type: QueryTypes.SELECT,

        });


        res.json(getResponse(200, responseQuery));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}

const porcentajeFamilasAtendidasGeneralAtendidos = async (req = request, res = response) => {
    try {

        let sequelize = await models.sequelize;

        const query = `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId} ) ` +
            `and CAST(createdAt as date) > CAST('2024-01-01' as date) ` +
            `and CAST(createdAt as date) < CAST('2024-04-01' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio}  ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('2024-04-01' as date) ` +
            `and CAST(createdAt as date) < CAST('2024-07-01' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('2024-07-01' as date)  ` +
            `and CAST(createdAt as date) < CAST('2024-10-01' as date)  ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} ` +
            `UNION ALL ` +
            `SELECT SUM(ejecutadas) as ejecutadas, SUM(programadas) as programadas from NumeroFamAtendidas ` +
            `WHERE monitoreoId IN ( SELECT id from monitoreos WHERE CommunityId = ${req.body.communityId})  ` +
            `and CAST(createdAt as date) >= CAST('2024-10-01' as date) ` +
            `and CAST(createdAt as date) <= CAST('2024-12-31' as date) ` +
            `and YEAR(CAST(createdAt as date) ) = ${req.body.anio} `;

        const responseQuery = await sequelize.query(query, {
            type: QueryTypes.SELECT,

        });

        res.json(getResponse(200, responseQuery));

    } catch (error) {
        console.log(error)
        res.status(500).json(getResponse(500, error));
    }
}



module.exports = {
    porcentajeFamilasAtendidas,
    porcentajeNiñosDesnutricion,
    porcentajeNiños,
    porcentajeFamilasAtendidasGeneral,
    porcentajeFamilasAtendidasGeneralDesnutricion,
    porcentajeFamilasAtendidasGeneralAtendidos
}