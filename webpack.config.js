const webpack = require("webpack");

const browserConfig = {
    "entry": "./src/browser/index.js",
    "output": {
        "path": __dirname,
        "filename": "./public/bundle.js"
    },
    "watch": true,
    "node": {
        "fs": "empty",
        "net": "empty"
    },
    "module": {
        "loaders": [
            {
                "test": /js$/,
                "exclude": /(node_modules)/,
                "loader": "babel-loader",
                "query": {
                    "presets": [
                        "es2015",
                        "react-app"
                    ]
                }
            },
            {
                "test": /\.json$/,
                "loader": "json-loader"
            }
        ]
    }
};

const serverConfig = {
    "entry": "./src/server/index.js",
    "target": "node",
    "output": {
        "path": __dirname,
        "filename": "./public/bundle.js",
        "libraryTarget": "commonjs2"
    },
    "watch": true,
    "node": {
        "fs": "empty",
        "net": "empty"
    },
    "module": {
        "loaders": [
            {
                "test": /js$/,
                "exclude": /(node_modules)/,
                "loader": "babel-loader",
                "query": {
                    "presets": [
                        "es2015",
                        "react-app"
                    ]
                }
            },
            {
                "test": /\.json$/,
                "loader": "json-loader"
            }
        ]
    }

};

module.exports = [
    browserConfig,
    serverConfig
];