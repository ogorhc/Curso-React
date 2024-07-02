const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT ?? 4000, () => {
  console.log(`Server corriendo en puerto ${process.env.PORT}`);
});
