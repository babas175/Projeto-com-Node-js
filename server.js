const http =require('http');
const app = require('./app');
const db = require('./database/db');
const User = require("./models/cadastro");
const User1 = require("./models/agendamento");
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
const User3 = require("./models/cadastro_adm");