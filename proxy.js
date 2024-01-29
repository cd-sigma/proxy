const express = require('express');
const request = require("request");
const app = express();

const PORT = 3001;

(async () => {
    try {
        app.get("/", (req, res) => {
            return res.json({
                msg: "This is a proxy server belonging to ciphernova"
            })
        })

        app.use((req, res) => {
            req.pipe(request({url: req.url})).pipe(res)
        })

        app.listen(PORT, () => {
            console.log(`Proxy server running on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();