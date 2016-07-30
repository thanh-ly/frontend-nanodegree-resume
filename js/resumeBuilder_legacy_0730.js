/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
    "jobs": [{
        "employer": "Gensler",
        "title": "Technical Designer",
        "location": "Austin",
        "dates": "2014-future",
        "description": "architectural designer for large scale commercial projects"

    }, {
        "employer": "Franklin Alan",
        "title": "Project Manager",
        "location": "Austin",
        "dates": "2015",
        "description": "construction projecst manager for small scale commercial projects"
    }, {
        "employer": "Raum Industries",
        "title": "Designer",
        "location": "Austin",
        "dates": "2015-future",
        "description": "designer and coordinator for experiential marketing installations"
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio Website",
        "dates": "July 2016",
        "description": "Responsive portfolio website with two breakpoints and srcset responsive images",
        "images": [
            "images/project1image1.jpg",
            "images/project1image2.jpg",
        ]

    }, {
        "title": "Flyrite",
        "dates": "July 2015",
        "description": "Local restaurant serving organic chicken sandwiches and beer",
        "images": [
            "images/project2image1.jpg",
            "images/project2image2.jpg",
        ]

    },]
};

var bio = {
    "name": "Thanh Ly",
    "role": "front end developer",
    "welcomemessage": "Hello World!",
    "skills": ["science", "math", "HTML", "CSS", "Javascript"],
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "thanh@thanh.com",
        "github": "@thanh",
        "location": "Austin, TX"
    }
};

var education = {
    "schools": [{
        "name": "UT Austin",
        "location": "Austin, TX",
        "degree dates": "2010-2015",
        "url": "www.utexas.edu",
        "Majors": ["architecture"],
        "Online Courses": [{
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "www.udacity.com"
        }]
    }]
};

var formattedName=HTMLheaderName.replace("%data%","Thanh Ly")
var formattedRole=HTMLheaderRole.replace("%data%","Front End Developer")
$("#header").prepend(formattedName, formattedRole);

if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill); formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill); formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill); formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill); formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
		$("#skills").append(formattedSkill);
};

function displayWork() {
	for (job in work.jobs) {
		//creates a new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concatenates employer and title defined in work.jobs
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		//add dates from work.jobs
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		//add description from work.jobs
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// this function logs the location into an array and returns the location subobject in work object
function locationizer(work_obj) {
    var locationArray = []; 
    
    for (job in work_obj.jobs) {
        var newLocation = work.jobs[job].location; 
        locationArray.push(newLocation);
    }
    return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

//html template string button, appending button to the DOM
$("#main").append(internationalizeButton);


projects.display = function() {

	for (project in projects.projects) {
		//console.log(project.length);
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

//adds a google map with place markers for locations
$("#mapDiv").append(googleMap);