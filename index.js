const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(4000, () => console.log('Server on port http://localhost:4000/'))