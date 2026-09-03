const { json, redirect } = require("express/lib/response");

function linksController() {
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
             
                response.set("Cache-Control", "public, max-age=300")
                response.redirect(302, link.originalUrl);
            } catch (error) {
                next(error);
            }
        }
    };
}