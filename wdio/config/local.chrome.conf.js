const merge = require('deepmerge');
const wdioConf =  require('./wdio.conf.js');


exports.config = merge(wdioConf.config, {
    capabilities: [
        { browserName: 'chrome' },
    ],
}, { clone: false }) 