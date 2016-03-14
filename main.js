require.config({
	baseUrl : 'js',
	// shim : {
	// 	'logger' : {
	// 		exports : 'logger'
	// 	}
	// },
	// paths: {
 //      'logger': 'customlogger'
 //    }
});

require(['stats'], function (stats) {
	console.log(stats.getStatus());
});

// require(['logger'], function (l) {
// 	l.logSuccess('=)');
// });


// require(['app'], function (app) {
// 	app.printStatus();
// });

// require(['customlogger'], function (logger) {
// 	logger.logSuccess('logger loaded =)');
// });

