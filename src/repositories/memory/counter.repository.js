function counterRepository() {
    let counter = 0;

    async function reserveBlock(size) {
        const start = counter;

        counter += size;

        return start;
    }

    return { reserveBlock };
}

module.exports = counterRepository;