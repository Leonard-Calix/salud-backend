const { User, Monitoreo, Community } = require("../models/");

const existEmail = async (email = '') => {

    try {
        const existEmail = await User.findOne({ where: { email: email } });
        if (existEmail) {
            throw new Error('El email ya esta registrado');
        }
    } catch (error) {
        console.log(error)
    }
}

const existMonitoreoById = async (id = '') => {
    const bandera = await Monitoreo.findByPk(id);
    if (!bandera) {
        throw new Error('El id no esta registrado');
    }
}

const existCommunityById = async (id = '') => {
    const bandera = await Community.findByPk(id);
    if (!bandera) {
        throw new Error('El id no esta registrado');
    }
}

const existuseryById = async (id = '') => {
    const bandera = await User.findByPk(id);
    if (!bandera) {
        throw new Error('El id no esta registrado');
    }
}

module.exports = {
    existEmail,
    existCommunityById,
    existMonitoreoById,
    existuseryById
}