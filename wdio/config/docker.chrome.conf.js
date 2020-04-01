const merge = require('deepmerge');
const wdioConf =  require('./wdio.conf.js');


exports.config = merge(wdioConf.config, {
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
              '--disable-dev-shm-usage',
              '--no-sandbox',
              '--window-size=1400,1200',
            ],
          },
        }, 
    ],
}, { clone: false }) 