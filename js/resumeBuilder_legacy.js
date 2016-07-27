/*
This is empty on purpose! Your code to build the resume will go here.
 */

$("#main").append("thanh ly");

var awesomeThoughts= "I am thanh ly and i am awesome!"
var funThoughts= awesomeThoughts.replace("awesome", "fun");
$("#main").append(funThoughts);

var formattedName= HTMLheaderName.replace("%data%","Thanh Ly")
var formattedRole= HTMLheaderRole.replace("%data%","Front End Developer")
$("#header").prepend(formattedName, formattedRole);

var skills=["maths","foods","talking","sciencing"]
$("#main").append(skills);

var bio= {
	"name": "Thanh Ly",
	"age": 24,
	"skills": skills,
	"role": formattedRole,
	"welcome": awesomeThoughts,
	"pictureURL": "images/fry.jpg"
};

$("#main").append(bio);

var work = {};
	work.position = "technical designer";
	work.employer = "architect";
	work.years = 2;
	work.city = "Austin"

var education = {};
	education["lastschool"] = "UT Austin";
	education["attendance"] = "2010-2015";
	education["schoolcity"] = "Austin";

$("#main").append(education["lastschool"]);
$("#main").append(work.position);

console.log(awesomeThoughts);
console.log(funThoughts);
console.log(formattedRole, formattedName);
console.log(work, education);
