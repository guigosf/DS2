const express = require ("express");

const codesService = require("./services/codes.service");
const baseService = require("./services/base.service");
const linksService = require("./services/links.service");
const counterRepository = require("./repositories/memory/counter.repository");
const linksRepository = require("./repositories/memory/links.repsitory");
const linksController = require("./controllers/links.controller");

const app = express();

function startApp() {
    const codes = codesService(counterRepository, baseService, 1000);

    const links = linksService(linksRepository, codesService, 10,256);

    const linksRouteController = linksController(linksService, "/", 30)
}

module.exports = app;
