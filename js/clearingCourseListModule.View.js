var clearingCourseListModule = clearingCourseListModule || {}; 

clearingCourseListModule.View = function () {
	this.viewData = function(subjectAreasListArray) {
		
		//variables
		var activeArray = [],
			subjectList = "",
			subjectListContents = "",
			subjectForm,
			selectMenu,
			selectedSubjectArea,
			courseList = "",
			noCoursesText,
			k, maxk, l, maxl;

		//build the menu from the subject list
		buildMenu = function () {
			subjectForm = document.getElementById("subjectform");
			subjectForm.innerHTML = "";
			for (j=0, maxj=subjectAreasListArray.length; j<maxj; j++) {
				subjectListContents+="<option value='" 
				+ subjectAreasListArray[j].subjectId 
				+ "'>" + subjectAreasListArray[j].subjectName 
				+ "<\/option>"
			};
			subjectList = "<select id='subjectdropdown' name='subjectdropdown'><option value=''>Subject areas...<\/option>"+subjectListContents+"<\/select>";
			subjectForm.innerHTML=subjectList;
		};

		//add eventlistener to menu
		function addListenerToSubjectAreaSelector() {
			if (document.getElementById("subjectdropdown").addEventListener) {
				document.getElementById("subjectdropdown").addEventListener('change', subjectAreaFilter, false);
			} else {
				if (document.getElementById("subjectdropdown").attachEvent) {
					document.getElementById("subjectdropdown").attachEvent('onchange', subjectAreaFilter);
				};
			};
		};	

		//on event, choose the subjectArea object that matches the menu selection
		function subjectAreaFilter() {
			selectMenu = document.getElementById("subjectdropdown");
			selectedSubjectArea = selectMenu.options[selectMenu.selectedIndex].value;
			createList(selectedSubjectArea);
			displayText();
		};

		//make activeArray from one of the subjectArrays and push into list rows
		//if there is no data, nocourses text message is displayed
		function createList(selectedSubjectArea) {
			for (k=0, maxk=subjectAreasListArray.length; k<maxk; k++) {
				if (selectedSubjectArea == subjectAreasListArray[k].subjectId) {
					activeArray = subjectAreasListArray[k].courseArray;
					noCoursesText = subjectAreasListArray[k].subjectName; //delete last comma and change to " or"
				};
			};

			coursecontainer = document.getElementById("coursecontainer");
			coursecontainer.innerHTML = "";
			courseList = "";
			for (l=0, maxl=activeArray.length; l<maxl; l++) {
				courseList+="<li><a href='http:\/\/www.coventry.ac.uk\/course-structure\/2015\/" 
				+ activeArray[l].facultyUrl 
				+ activeArray[l].courseId + "/' target='_blank'>" 
				+ activeArray[l].courseName +"<\/a><\/li>"
				if (courseList === "") {
					coursecontainer.innerHTML="<p class='nocourses'>There are currently no " + noCoursesText + " courses available.<\/p>";
				} else {
					coursecontainer.innerHTML="<p class='clickonlink'>Click on the course name to see more information.</p><ul>" + courseList + "<\/ul>";
				};
			};
		};
		
		
		//add and remove classes on click to display correct messages
		
		function displayText() {
			var findyourcourse = document.getElementById('findyourcourse');
			var somecourses = document.getElementById('somecoursespara');
			var nocourses = document.getElementById('nocoursespara');
			if (findyourcourse) {
				findyourcourse.className = 'postclick'; //on all of these need to add class to existing
			};
			if (courseList !== "") {
				somecourses.className = 'postclick';
			} else {
		 		nocourses.className = 'postclick';
		 	};
		};
	
	buildMenu();
	addListenerToSubjectAreaSelector();
	};	
};