const { Router } = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("../config/swagger");

const router = Router();

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

router.get('/openapi.json', (request, response) => {
    response.json(swaggerConfig);
});

module.exports = router;
