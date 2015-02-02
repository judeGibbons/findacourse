window.addEventListener('DOMContentLoaded', init, false);

function init() {
	var ajaxcall = new clearingCourseListModule.Ajax();
	var url = "./courselist.json";
	//var url = "http://www.cutours.co.uk/courselist/courselist.json"
	ajaxcall.getData("GET", url, callback);
};

callback = function(data) { //removed this from Ajax to make it more modular
	var courseObjects = new clearingCourseListModule.Objects();
	courseObjects.sortData(data);
};