var bot = require('../')
  , repl = require('repl')
  ;

process.on('uncaughtException', function(err) {
	console.log('Uncaught Exception: ' + err);
});

b = new bot('irc.furnet.org', 'nodeboy1184', {
	port: 6667,
	userName: 'nodeboy',
	realName: 'nodeboy',
	pluginsPath: '../plugins/',
	debug: true,
	secure: false,
	channels: ['#turtleshell']
});

b.loadPlugin('admin', {nick: ['draggor', 'turtle']});
//b.loadPlugin('dice');

var r = repl.start();
r.context.b = b;