// Import path for resolving file paths
var path = require('path');
module.exports = {
    // Specify the entry point for our app
    entry: [
        path.join(__dirname, 'node.js')
    ],
    // Specify the output file containing our bundled code
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    // Let webpack know to generate a Node.js bundle
    target: "node",
    module: {
        /**
         * Tell webpack how to load JSON files.
         * When webpack encounters a 'require()' statement
         * where a JSON file is being imported, it will use
         * the json-loader
         */
        loaders: [{
            test: /\.json$/,
            loaders: ['json']
        }]
    }
}