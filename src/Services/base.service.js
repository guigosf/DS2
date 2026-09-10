function baseService(alphabet) {
    async function toBase62(number) {
        if (number === 0) {
            return alphabet [0]
        }

        let code = '';

        while (number > 0) {
            code = alphabet[number % 62] + code;
            number = Math.floor(number / 62);
        }

        return code;
    }
}