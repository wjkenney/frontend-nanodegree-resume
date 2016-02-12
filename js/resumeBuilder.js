var bio={
    "name":"William Kenney",
    "role":"ruler",
    "contact":"12121314",
    "email": "williamstompy@gmail.com",
    "photo":"images/fry.jpg",
    "message":"here is my bio page, I hope you like it!",
    "skills":["ruling with an iron fist", " sacking villages and towns ", "promoting my greatness"] 
};

// Did your code work? The line below will tell you!
var work={
  "jobs": [{
 		"job": "despotic ruler",
		"employer": "Anann: god of war and death",
 		"years":"1980-2010",
		"country":"Bordura",
		"description": "On 3 December, I departed Moscow for Aleksandrova Sloboda\
		where I was forced to announce my abdication due to\
		the allegations against me for embezzlement of aristocratic coffers and depraved and treasonous behaviour. The boyar court was\
		 unable to rule in my absence and feared the wrath of the Muscovite citizenry.\
		  A boyar envoy departed for Aleksandrova Sloboda to beg me to return to the throne.\
		   I agreed to return on condition of being granted absolute power. I demanded that I\
		    should be able to execute and confiscate the estates of traitors without interference\
		     from the boyar council or church. Upon this, I decreed the creation of the oprichnina."
	},
		{"job": "rebel leader",
		"employer": " The pirate king",
		"years": "1960-1980",
		"country": "Syldavia",
		"description":  "In one notable raid, my crew and I attacked thirteen New England fishing vessels\
						sheltering at anchor in Port Roseway, Shelburne, Nova Scotia. Although outnumbered,\
						we hoisted the Jolly Roger flag and declared that no mercy would be given to the fishermen\
						if any resisted. The fleet submitted and we robbed every vessel.\
						I chose the largest, an 80-ton schooner which I renamed 'Fancy' and armed with 10 guns,\
						to become my flagship."
	}]
};

var education={
	"schools": [{
		"name": "Hogwarts",
		"years": "4",
		"city": "Hogsmeade",
		"major": "darkarts"
	}, {
		"name": "battleschool",
		"years": "4",
		"city": "outerspace",
		"major": "the art of war"
	}]
}

var projects={ "detail": [{
		"date": "9 Feb 2016",
		"name": "calling ISI-sanitaire",
		"description": "I picked up the phone and dialled the number for ISI-sanitaire, I explained the situation, and asked where the merchandice was",
	},
	{
		"date": "9 Feb 2016",
		"name": "tracking collismo package",
		"description": "I checked to see where my package was"
	}]
}
	

function inName(stringobj){
	var stringarray=stringobj.trim().split(" ");
	lastname = stringarray.pop().toUpperCase();
	for (element in stringarray){
		stringarray[element]=stringarray[element].slice(0,1).toUpperCase()+stringarray[element].slice(1).toLowerCase();
	}
	newlast=stringarray.join(" ");
	newlast=newlast+" "+lastname;
	return newlast
}

function displayWork(){
	for (job in work["jobs"])
	{
		$("#workExperience").append(HTMLworkStart)
		formattedemployer=HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]);
		formattedjob=HTMLworkTitle.replace("%data%", work["jobs"][job]["job"]);
		formatteddates=HTMLworkDates.replace("%data%", work["jobs"][job]["years"]);
		formattedlocation=HTMLworkLocation.replace("%data%", work["jobs"][job]["country"]);
		formatteddescription=HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]);

		$(".work-entry:last").append(formattedemployer+formattedjob);	
		$(".work-entry:last").append(formatteddates + formattedlocation);
		$(".work-entry:last").append(formatteddescription);

	}
}
projects.display=function(){
	
	for (project in projects.detail){
		$("#projects").append(HTMLprojectStart);
		formattedtitle=HTMLprojectTitle.replace("%data%", projects.detail[project]["name"]);
		formatteddate=HTMLprojectDates.replace("%data%", projects.detail[project]["date"]);
		formatteddescription=HTMLprojectDescription.replace("%data%", projects.detail[project]["description"]);
		$(".project-entry:last").append(formattedtitle);
		$(".project-entry:last").append(formatteddate);
		$(".project-entry:last").append(formatteddescription);
	}
}
		
var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formattedContact=HTMLcontactGeneric.replace("%contact%", bio.contact).replace("%data%", bio.email);
var formattedBioPic=HTMLbioPic.replace("%data%", bio.photo);
var formattedWelcome=HTMLwelcomeMsg.replace("%data%", bio.message);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedContact);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);
$("#header").append(HTMLskillsStart);
if (bio.skills!==false) {
	for (element in bio.skills) {
		formattedSkills=HTMLskills.replace("%data%", bio.skills[element]);
		$("#header").append(formattedSkills);
	}
}

$(document).click(function(loc){
	console.log(loc.pageX, loc.pageY);
});

displayWork();
projects.display();

$("#mapDiv").append(googleMap);

inName("WILL JaMes Kenney");

$(main).append(internationalizeButton)


