"use strict";
// Exportar todas las rutas (account, auth y notes)
const { accountRouter } = require("./account-router");
const { authRouter } = require("./auth-router");
const { todosRouter } = require("./todos-router");

module.exports = { accountRouter, authRouter, todosRouter };
