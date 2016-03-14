define(function (w) {
	
	var logger = {
		logError : _logError,
		logSuccess : _logSuccess
	};

	return logger;

	function _logError ( msg ) {
		console.log('%c' + msg,'background:#880000; color:#fff; padding:0 5px');
	}

	function _logSuccess ( msg ) {
		console.log('%c' + msg,'background:#008800; color:#fff; padding:0 5px');
	}

});