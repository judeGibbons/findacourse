var clearingCourseListModule = clearingCourseListModule || {}; 

clearingCourseListModule.Objects = function () {
	this.sortData = function(data) {
	
		//variables
		var subjectAreasListArray = [],
			i, maxi, j, maxj, k, maxk;

		//set up the subjectArea object and create array
		function subjectAreaObject(subjectId,subjectName,courseArray) {
			this.subjectId = subjectId;
			this.subjectName = subjectName;
			this.courseArray = courseArray;
	
			subjectAreasListArray.push(this);
		};

		//list out subjectAreas and sort array of them
		var finance = new subjectAreaObject("finance", "accounting, finance, economics", []);
		var art = new subjectAreaObject("art", "art, design, illustration", []);
		var building = new subjectAreaObject("building", "building, architecture", []);
		var business = new subjectAreaObject("business", "business, management", []);
		var caring = new subjectAreaObject("caring", "caring professions", []);
		var engineering = new subjectAreaObject("engineering", "engineering", []);
		var english = new subjectAreaObject("english", "english, writing", []);
		var geog = new subjectAreaObject("geog", "geography, disaster management", []);
		var health = new subjectAreaObject("health", "health, nursing", []);
		var languages = new subjectAreaObject("languages", "languages", []);
		var marketing = new subjectAreaObject("marketing", "marketing, events", []);
		var maths = new subjectAreaObject("maths", "mathematics, computing", []);
		var media = new subjectAreaObject("media", "media, performing arts", []);
		var law = new subjectAreaObject("law", "politics, law, criminology", []);
		var science = new subjectAreaObject("science", "science", []);
		var social = new subjectAreaObject("social", "social sciences", []);

		for (i=0, maxi=data.length; i<maxi; i++) {
			for (j=0, maxj=data[i].subjectAreas.length; j<maxj; j++) {
				for (k=0, maxk=subjectAreasListArray.length; k<maxk; k++) {
					if (data[i].subjectAreas[j] == subjectAreasListArray[k].subjectId) {
						subjectAreasListArray[k].courseArray.push(data[i]);
						subjectAreasListArray[k].courseArray = subjectAreasListArray[k].courseArray.sort(sortOnCourseName);
						break;
					};
				};
			};
		};
		
		//sort on course name
		function sortOnCourseName(a,b) {
			if (a.courseName.toLowerCase() < b.courseName.toLowerCase()) {
				return -1;
			};
			if (a.courseName.toLowerCase() > b.courseName.toLowerCase()) {
				return 1;
			};
			return 0;
		};

	//pass all subject areas array to view
	courseView = new clearingCourseListModule.View();
  	courseView.viewData(subjectAreasListArray);
  	
  	};
};
