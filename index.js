require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

//app.use('/api/app', require('./routes/app'));
app.use('/api/users', require('./routes/users'))
app.use('/api/departments', require('./routes/departments'))
app.use('/api/municipalities', require('./routes/municipality'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/monitoreo', require('./routes/monitoreo'))
app.use('/api/ninos', require('./routes/ninos'))
app.use('/api/cuidador-primarios', require('./routes/cuidadorPrimarios'))
app.use('/api/detalle-nino', require('./routes/detalleNino'))
app.use('/api/embarazo-captado', require('./routes/embarazoCaptados'))
app.use('/api/inscrito-rnp', require('./routes/inscritoRnps'))
app.use('/api/familias-atendidas', require('./routes/numeroFamAtendidas'))
app.use('/api/partos', require('./routes/partos'))
app.use('/api/vacunacion', require('./routes/vacunacion'))


app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo en puerto ', process.env.PORT)
})