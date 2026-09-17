function codesService(counterRepository, baseService, blockSize = 1000) {
    var next = 0;
    var limit = 0;

    async function nextCode() {
        if (next >= limit){
            next = await counterRepository.reserveBlock(blockSize);
            limit = next + blockSize;
        }

        return baseService.toBase62(next++);
    }

    return { nextCode };
}

module.exports = codesService;
