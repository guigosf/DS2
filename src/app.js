const express = require ("express");

const codesService = require("./services/codes.service");
const baseService = require("./services/base.service");
const linksService = require("./services/links.service");
const linksController = require("./controllers/links.controller");
const createLinksRoutes = require("./routes/links.routes");

function startApp({counterRepository, linksRepository }, env) {
    const base = baseService(env.codeAlphabet);

    const codes = codesService(counterRepository, base, 1000);

    const links = linksService(linksRepository, codes, 10,256);

    const linksRouteController = linksController(links, env.baseUrl, 30)

    const app = express();
    app.use(express.json());
    app.use(createLinksRoutes(linksRouteController));

    return app;
}

module.exports = startApp;
