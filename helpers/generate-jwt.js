const jwt = require('jsonwebtoken');


const generateJWT = (uid = '') => {

  return new Promise((resolve, reject) => {

    const payload = { uid };

    jwt.sign(payload, 'secrectkey2020'/*process.env.SECRETORPRIVATEKEY*/, {
      expiresIn: '4h'
    }, (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })

  })
}

module.exports = {
  generateJWT
}