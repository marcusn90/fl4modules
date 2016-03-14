(function (ns) {
	ns.loadScript = function (url) {
		// Create a new script element
		var script      = document.createElement('script');

		// Find an existing script element on the page (usually the one this code is in)
		var firstScript = document.getElementsByTagName('script')[0];

		// Set the location of the script
		script.src      = url;

		// script.async    = false;

		// Inject with insertBefore to avoid appendChild errors
		firstScript.parentNode.insertBefore( script, firstScript );
	}
})(window.epamjs = window.epamjs || {});
