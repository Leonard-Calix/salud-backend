const getResponse = (code = 200, data = null, msgPersolizado = "") => {

    let msg = '';
    let ban = true;

    if (code >= 200 || code < 300) {
        msg = "Consulta exitosa"
    }

    if (code == 500) {
        msg = "Internal Server Error"
        ban = false
    }

    return { ok: ban, msg, data }
}

module.exports = {
    getResponse
}