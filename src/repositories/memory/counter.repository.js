function counterRepository() {
    let counter = 0;

    async function reserveBlock(size) {
        return counter += size;
    }

    return { reserveBlock };
}

module.exports = counterRepository;