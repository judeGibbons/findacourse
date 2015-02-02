var clearingCourseListModule = clearingCourseListModule || {}; 

clearingCourseListModule.Ajax = function () {
	this.getData = function(method, url, callback) {
		var request;

		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest;
		} else {
			request = new ActiveXObject('Msxml2.XMLHTTP');
		};

		request.open(method, url, true);
		request.send(url);

		request.onreadystatechange = function() {
 	   		if (request.readyState == 4 && request.status == 200) {
  	    		var data = JSON.parse(request.responseText);
  	    		callback(data);
 	   		}
		};
	};
};