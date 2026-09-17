const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


const env = {
    port: Number(process.env.PORT || 3000),
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    driver: process.env.DRIVER === "firestore" ? "firestore" : "memory",
    codeAlphabet: process.env.CODE_ALPHABET || ALPHABET,
    retentionYears: 10,
    counterBlockSize: 1000,
    cacheSeconds: 300,
    maxUrlLenght: 2048,
}

module.exports = env;