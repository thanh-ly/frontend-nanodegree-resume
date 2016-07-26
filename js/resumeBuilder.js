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
}

$("main").append(bio);

console.log(awesomeThoughts);
console.log(funThoughts);
console.log(formattedRole, formattedName)
