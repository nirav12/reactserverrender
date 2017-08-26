import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from "../shared/app";

const app = express();

// Server static files
app.use(express.static("public"));

app.get("*", (req, res) => {

    res.send(`
        <!DOCTYPE html>
            <head>
                <title>Universal React</title>
                <script src="/bundle.js" defer></script>
            </head>
            <body>
                <div id="Root">${renderToString(<App />)}</div>
            </body>
        </html>
    `);


});
// This is fired every time the server side receives a request

app.listen(3000);