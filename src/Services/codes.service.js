function codesService(counterRepository, toBase62, blockSize) {
    var nest = 0;
    var limit = 0;

    async function nextCode() {
        if (next >= limit){
            next = await counterRepository.reserveBlock(blockSize);
            limit = next + blockSize;
        }

        const code = toBase62(next++);

        return toBase62(next++);
    }
}