(function (w) {
	w.logger = {
		logError : function (msg) {
			console.log('Error: ' + msg);
		},
		logSuccess : function (msg) {
			console.log('Success: ' + msg);
		}
	};
})(window);