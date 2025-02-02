var minimist = require('minimist')
var xtend = require('xtend')

module.exports = parseArgs
function parseArgs (args, opt) {
  var argv = minimist(args, {
    boolean: [
      'stream',
      'debug',
      'errorHandler',
      'open',
      'portfind',
      'ndjson',
      'verbose',
      'cors',
      'ssl'
    ],
    string: [
      'host',
      'port',
      'dir',
      'onupdate',
      'serve',
      'title',
      'watchGlob',
      'cert',
      'key'
    ],
    default: module.exports.defaults,
    alias: {
      port: 'p',
      ssl: 'S',
      cert: 'C',
      key: 'K',
      verbose: 'v',
      help: 'h',
      host: 'H',
      dir: 'd',
      live: 'l',
      open: 'o',
      watchGlob: [ 'wg', 'watch-glob' ],
      errorHandler: 'error-handler',
      'live-port': ['L', 'livePort'],
      pushstate: 'P'
    },
    '--': true
  })
  return xtend(argv, opt)
}

module.exports.defaults = {
  title: 'budo',
  port: 9966,
  debug: true,
  stream: true,
  errorHandler: true,
  portfind: true
}
