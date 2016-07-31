//bio object
var bio = {
    "name": "Thanh Ly",
    "role": "front end developer",
    "welcomemessage": "Hello World!",
    "skills": ["science", "math", "HTML", "CSS", "Javascript"],
    "biopic": "images/thanh.jpg",
    "contacts": {
        "mobile": "123-456-7890",
        "email": "thanh@thanh.com",
        "github": "@thanh",
        "location": "Austin, TX"
    }
};

//work object
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
        "location": "San Francisco, CA",
        "dates": "2015-future",
        "description": "designer and coordinator for experiential marketing installations"
    }]
};

//project object
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

    }, ]
};

//education object
var education = {
    "schools": [{
        "name": "UT Austin",
        "location": "Austin, TX",
        "degree": "Bachelor of Architecture",
        "majors": ["architecture"],
        "dates": "2010-2015",
        "url": "http://www.utexas.edu",
    }],
    "onlinecourses": [{
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }],
};

//bio.display encapsulated function
bio.display = function() {
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
    $("#header").prepend(formattedPic, formattedName, formattedRole, formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();

//work.display encapsulated function
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        //concatenates employer and title defined in work.jobs
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

//projects.display encapsulated function
projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
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

//education.display encapsulated function
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);

        school.majors.forEach(function(majors) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlinecourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlinecourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.title).replace("#", course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
};
education.display();

//tracks and logs clicks on the DOM
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

//adds a google map with place markers for locations
$("#mapDiv").append(googleMap);