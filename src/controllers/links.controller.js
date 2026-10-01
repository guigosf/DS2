function linksController(linksService, baseUrl, cacheSeconds) {
    /**
     * @openapi
     * components:
     *   schemas:
     *     Link:
     *       type: object
     *       required: [code, url, originalUrl, createdAt, expiresAt]
     *       properties:
     *         code: { type: string, example: "G8z3"}
     *         url: { type: string, format: uri, example: "https://localhost:3000/G8z3" }
     *         originalUrl: { type: string, format: uri, example: "https://www.etec.sp.gov.br" }
     *         createdAt: { type: string, format: date-time }
     *         expiresAt: { type: string, format: date-time }
     */
    function formatResponse(link) {
        return {
            code: link.code,
            url: `${baseUrl}/${link.code}`,
            originalUrl: link.originalUrl,
            createdAt: link.createdAt.toISOString(),
            expiresAt: link.expiresAt.toISOString(),
        }
    }

    return {
        async shorten (request, response, next) {
            try {
                const fullUrl = request.body.url;
                const shortenUrl = await linksService.shorten(fullUrl);
                const responseBody = formatResponse(shortenUrl);

                response.status(201).json(responseBody);
            } catch (error) {
                next(error);
            }
        },

        async redirect(request, response, next){
            try {
                const code = request.params.code;
                const link = await linksService.resolve(code);

                response.set("Cache-Control", "public, max-age=" + cacheSeconds);
                response.redirect(302, link.originalUrl);
            } catch (error) {
                next(error);
            }
        }
    };
}

module.exports = linksController;