const path = require('node:path');
const { version } = require("../../package-lock.json");

const swaggerJsdoc = require("swagger-jsdoc")

const swaggerSpec = {
    failOnErrors: true,
    apis: [path.join(__dirname, '../**/*.js')],
    definition: {
        openapi:'3.0.3',
        info: {
            title: 'Encurtador de URLs - DS2',
            version: version
        },
        servers: [
            { url: '/' }
        ],
        security: []
    },
};

const swaggerConfig = swaggerJsdoc(swaggerSpec);

module.exports = swaggerConfig;