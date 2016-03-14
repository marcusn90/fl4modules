define(['logger', 'stats'], function (logger, stats) {
	return {
		printStatus : _printStatus
	};

	function _printStatus () {
		var s = stats.getStatus();
		logger[s > 0 ? 'logSuccess' : 'logError']('Balance : ' + s);
	}
});