const { request, response } = require("express");
const { Monitoreo, NumeroFamAtendidas, CuidadorPrimario,
    EmbarazoCaptado, Partos, Ninos, DetalleNino, InscritoRnp,
    Vacunacion, GrupoEtnico, NinoEvaluados, NinoDesnutricion,
    Capacitacion, NumeroIntervenciones, Seguimiento, GuiasDesarrollada, Guias
} = require("../models/");
const models = require('../models');


const save = async (req = request, res = response) => {

    let transaction;

    transaction = await models.sequelize.transaction();

    const {
        monitoreo,
        form2,
        form3,
        form4,
        form5,
        form6,
        form7,
        form8,
        form9,
        form10,
        form11,
        form12,
        form13,
        form14,
        form15,
        form16,
        form17
    } = req.body;

    const newMonitoreo = await Monitoreo.create({
        famPriorizadas: monitoreo.famPriorizadas,
        CommunityId: monitoreo.communityId,
        UserId: 1, // req.user.id
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });

    //INSERTE DEL TAP2 NumeroFamAtendidas
    const form2Promise = NumeroFamAtendidas.create({
        ejecutadas: form2.ejecutadas,
        programadas: form2.programadas,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });


    //INSERTE DEL TAP3 CuidadorPrimario
    const form3Promise = CuidadorPrimario.create({
        madre: form3.madre,
        padre: form3.padre,
        abuela: form3.abuela,
        total: form3.total,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });

    //INSERTE DEL TAP4 EmbarazoCaptado
    const form4Promise = EmbarazoCaptado.create({
        antes: form4.antes,
        despues: form4.despues,
        semanas: form4.semanas,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });


    //INSERTE DEL TAP5 Partos
    const form5Promise = Partos.create({
        hospital: form5.hospital,
        comunidad: form5.comunidad,
        consulta: form5.consulta,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });

    //INSERTE DEL TAP6 Ninos
    const form6Promise = Ninos.create({
        conLactancia: form6.conLactancia,
        sinLactancia: form6.sinLactancia,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });

    //INSERTE DEL TAP7 Ninos
    const form7Promise = DetalleNino.create({
        rango1: form7.rango1,
        rango2: form7.rango2,
        rango3: form7.rango3,
        masculino: form7.masculino,
        femenino: form7.femenino,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });

    //INSERTE DEL TAP8 InscritoRnp
    const form8Promise = InscritoRnp.create({
        inscritos: form8.inscritos,
        Noinscritos: form8.noInscritos,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });

    //INSERTE DEL TAP9 Vacunacion
    const form9Promise = Vacunacion.create({
        hepatitis: form9.hepatitis,
        bcg: form9.bcg,
        pentavalente: form9.pentavalente,
        rotavirus: form9.rotavirus,
        srp: form9.srp,
        nuemococo: form9.nuemococo,
        MonitoreoId: newMonitoreo.id,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { transaction });

    //INSERTE DEL TAP10 GrupoEtnico
    const form10Promise = GrupoEtnico.create({
        lencas: form10.lencas,
        tolupan: form10.tolupan,
        chortis: form10.chortis,
        mestizo: form10.mestizo,
        tawaka: form10.tawaka,
        garifuna: form10.garifuna,
        otros: form10.otros,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });

    //INSERTE DEL TAP11 NinoEvaluados
    const form11Promise = NinoEvaluados.create({
        normal: form11.normal,
        moderada: form11.moderada,
        severo: form11.severo,
        otro: form11.otro,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });

    //INSERTE DEL TAP12 NinoDesnutricion
    const form12Promise = NinoDesnutricion.create({
        noDesnutridos: form12.noDesnutridos,
        desnutridos: form12.desnutridos,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });

    //INSERTE DEL TAP13 NinoDesnutricion
    const form13Promise = Capacitacion.create({
        usoGuia: form13.usoGuia,
        nousoGuia: form13.nousoGuia,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });

    //INSERTE DEL TAP14 NumeroIntervenciones
    const form14Promise = NumeroIntervenciones.create({
        intervino: form14.intervino,
        noIntervino: form14.noIntervino,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });


    //INSERTE DEL TAP15 Seguimiento
    const form15Promise = Seguimiento.create({
        conSeguimiento: form15.conSeguimiento,
        sinSeguimiento: form15.sinSeguimiento,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });


    //INSERTE DEL TAP16 GuiasDesarrollada
    const form16Promise = GuiasDesarrollada.create({
        desarrolladas: form16.desarrolladas,
        noDesarrolladas: form16.noDesarrolladas,
        supervisor: form16.supervisor,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });

    //INSERTE DEL TAP17 Guias
    const form17Promise = Guias.create({
        guia1PEmbarazo: form17.guia1PEmbarazo,
        guia2PNacimiento: form17.guia2PNacimiento,
        guia3PPrimerMes: form17.guia3PPrimerMes,
        guia4P1A3Meses: form17.guia4P1A3Meses,
        guia5P4A6Meses: form17.guia5P4A6Meses,
        guia6P6A8Meses: form17.guia6P6A8Meses,
        guia7P9A12Meses: form17.guia7P9A12Meses,
        guia8P12A17Meses: form17.guia8P12A17Meses,
        guia9P18A23Meses: form17.guia9P18A23Meses,
        guia10P2A3Anios: form17.guia10P2A3Anios,
        guia11P3Anios: form17.guia11P3Anios,
        guia12P4Anios: form17.guia12P4Anios,
        guia13P5Anios: form17.guia13P5Anios,
        guia14P4Anios: form17.guia14P4Anios,
        createdAt: new Date(),
        updatedAt: new Date(),
        MonitoreoId: newMonitoreo.id,
    }, { transaction });

    Promise.all([
        form2Promise,
        form3Promise,
        form4Promise,
        form5Promise,
        form6Promise,
        form7Promise,
        form8Promise,
        form9Promise,
        form10Promise,
        form11Promise,
        form12Promise,
        form13Promise,
        form14Promise,
        form15Promise,
        form16Promise,
        form17Promise

    ]).then(async resp => {
        await transaction.commit();
        return res.json({ ok: true, msg: 'Consulta exitosa', data: null });

    }).catch(async (err) => {
        await transaction.rollback();
        return res.json({ ok: false, msg: 'Consulte al administrador', data: err });
    });


}

module.exports = {
    save
}