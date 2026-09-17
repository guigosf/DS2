
function createRepositories(config) {
    if (config.driver === "memory") {
        const linksRepository = require("./memory/links.repsitory");
        const counterRepository = require("./memory/counter.repository");
        return {
            linksRepository,
            counterRepository
        }
    }

}

module.exports = createRepositories;