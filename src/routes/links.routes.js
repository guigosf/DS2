const { Router } = require("express");
const { link } = require("../app");

function createLinksRoutes(linksController) {
    const router = Router();

    router.post("/api/links", linksController.shorten);
    router.get("/api/links/:code", linksController.redirect);

    return router
}

module.exports = createLinksRoutes;