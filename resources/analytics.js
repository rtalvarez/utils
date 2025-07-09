(function(){
	window.analytics = window.analytics || {};
	window.analytics.track = () => {
		console.log("Tracking event");
	}
	window.analytics.load = () => {
		console.log("Analytics loaded");
	}
	window.analytics.load();
});