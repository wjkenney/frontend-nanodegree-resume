var bio={
    "name":"William Kenney",
    "role":"dictator",
    "contacts": {
        "mobile": "12121314",
        "email": "williamstompy@gmail.com",
        "github": "https://github.com/wjkenney",
        "location": "48 chance Milly 92110 Clichy La Garenne France"},
    "photo":"images/fry.jpg",
    "message":"Here is my bio page, I hope you like it!",
    "skills":["ruling with an iron fist", " sacking villages and towns ", "promoting my greatness"],
    display:function(){
        var formattedName=HTMLheaderName.replace("%data%", bio.name);
        var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedName);
	    $("#header").append(formattedRole);
	    $("#header").append(HTMLcontactWrapper);
	    var keys=Object.keys(bio.contacts);
	    var index=0;
	    if (bio.contacts!==false){
	    for ( var element in bio.contacts){
	    	if(bio.contacts.hasOwnProperty(element)){
	        	$(".contact").append(HTMLcontactStart);
				var formattedContact=HTMLcontactInside.replace("%contact%", keys[index]).replace("%data%", bio.contacts[element]);
				$(".first-line:last").append(formattedContact);
				index+=1;
			}
	    }
	}
	var formattedWelcome=HTMLwelcomeMsg.replace('%data%', bio.message);	
	var formattedbioPic= HTMLbioPic.replace('%data%', bio.photo);
	$("#header").append(HTMLpicWrapper);
	$("#picrow").append(formattedbioPic);
	$("#picrow").append(HTMLskillsStart);
	if (bio.skills!==false) {
	    bio.skills.forEach(function(val) {
	        formattedSkills=HTMLskills.replace("%data%", val);
		$(".skills").append(formattedSkills);
		});
	    }
		$("#header").append(formattedWelcome);
	}
};
// Did your code work? The line below will tell you!
var work={
  "jobs": [{
 		"title": "despotic ruler",
		"employer": "Anann: god of war and death",
 		"years":"1980-2010",
		"location":"Bordura",
		"description": "On 3 December, I departed Moscow for Aleksandrova Sloboda\
			where I was forced to announce my abdication due to\
			the allegations against me for embezzlement of aristocratic coffers and depraved and treasonous behaviour.\
			The boyar court was unable to rule in my absence and feared the wrath of the Muscovite citizenry.\
			A boyar envoy departed for Aleksandrova Sloboda to beg me to return to the throne.\
			I agreed to return on condition of being granted absolute power. I demanded that I\
			should be able to execute and confiscate the estates of traitors without interference\
			from the boyar council or church. Upon this, I decreed the creation of the oprichnina."
	},
		{"title": "rebel leader",
		"employer": " The pirate king",
		"years": "1960-1980",
		"location": "Syldavia",
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
		"degree": "doctorate",
		"years": "4",
		"location": "Hogsmeade",
		"majors": "darkarts",
		"dates" : "2000-2002",
		"url" : "http://www.hogwartsonlineschool.com/home.html"
	}, {
		"name": "battleschool",
		"degree": "commander-training",
		"years": "4",
		"location": "outerspace",
		"majors": "the art of war",
		"dates": "1990-1994",
		"url" : "https://www.cryptozoic.com/games/enders-game-battle-school"
	}],
	"onlinecourses": [{"name": "Trump University", 
		"title": "Real Estate 101: Building Wealth With Real Estate Investments", 
		"date": "in progress ", 
		"url": "https://www.trumpinitiative.com/login/index.cfm"}]
};

var projects={ "detail": [{
		"date": "Feb 2016",
		"name": "tracking ISI-sanitaire merchandice",
		"description": "I picked up the phone and dialled the number for ISI-sanitaire, I yelled at the man for\
		 an hour for the delayed shipment",
	},
	{
		"date": "Feb 2016",
		"name": "tracking collismo package",
		"description": "I checked to see where my package was.  When the rep didn't know i yelled in his face."
	}]
};
	

work.display=function(){
	if (work.jobs!==false){
		for (job=0; job<work.jobs.length; job++)
		{
			$("#workExperience").append(HTMLworkStart);
			formattedemployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedjob=HTMLworkTitle.replace("%data%", work.jobs[job].title);
			formatteddates=HTMLworkDates.replace("%data%", work.jobs[job].years);
			formattedlocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
			formatteddescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedemployer+formattedjob);	
			$(".work-entry:last").append(formatteddates + formattedlocation);
			$(".work-entry:last").append(formatteddescription);
		}
	}
};

projects.display=function(){
	if (projects.detail!==false){
		for (var project in projects.detail){
			if(projects.detail.hasOwnProperty(project)){
				$("#projects").append(HTMLprojectStart);
				var formattedtitle=HTMLprojectTitle.replace("%data%", projects.detail[project].name);
				var formatteddate=HTMLprojectDates.replace("%data%", projects.detail[project].date);
				var formatteddescription=HTMLprojectDescription.replace("%data%", projects.detail[project].description);
				$(".project-entry:last").append(formattedtitle);
				$(".project-entry:last").append(formatteddate);
				$(".project-entry:last").append(formatteddescription);
			}
		}
		$('<div class="row"><div class="col-xs-12"><hr></div></div><div class="row pics"></div>').insertAfter("#projects");
		var pictureArray={"images/4-Avian-Flu-medium.jpg": {"programs in c":["https://github.com/wjkenney/dictionary", "https://github.com/wjkenney/server",]}, 
				"images/lights-medium.jpg": {"web based programs": ["https://github.com/wjkenney/cs50-finance", "https://github.com/wjkenney/maps-mashup"]}, 
				"images/lead_large-medium.jpg": {"python":["https://github.com/wjkenney/shortest-path", "https://github.com/wjkenney/virus-modelVirus"]}};
		var titles= ['dictionary', 'server', 'shortest-path','model-virus', 'cs50-finance', 'maps-mashup'];
		captions=Object.keys(pictureArray);
		var i=0;
		for (var element in pictureArray){
			if (pictureArray.hasOwnProperty(element)){
				pics=Object.keys(pictureArray[element]);
				formattedPicture=HTMLprojectImage.replace("%data%", captions[i]).replace("%caption%", pics);
				$(".pics").append(formattedPicture);
				i++;
				for (var dropdown in pictureArray[element]){
					if (pictureArray[element].hasOwnProperty(dropdown)){
						for (var j=0; j<pictureArray[element][dropdown].length; j++){
							var a = titles.shift();
							formattedDropdown=HTMLdropdown.replace("%data%", pictureArray[element][dropdown][j]).replace("%title%", a);
							$(".dropdown-menu:last").append(formattedDropdown);
						}
					}
				}				
			}
		}
	}
};

education.display=function(){
	$("#education").append(HTMLschoolStart);
	for (var school in education.schools){
		if (education.schools.hasOwnProperty(school)){
			formattedSchool=HTMLschoolName.replace('%data%', education.schools[school].name);
			formattedDegree=HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			schooldegree=formattedSchool+formattedDegree;
			$(".education-entry").append(schooldegree);
			formattedDate=HTMLschoolDates.replace('%data%', education.schools[school].dates);
			$(".education-entry").append(formattedDate);
			formattedLocation=HTMLschoolLocation.replace('%data%', education.schools[school].location);
			$('.education-entry').append(formattedLocation);
			formattedMajor=HTMLschoolMajor.replace('%data%', education.schools[school].majors);
			$('.education-entry').append(formattedMajor);
			link= $('.education-entry').find('a:last');
			link.attr('href', education.schools[school].url);
		}
	}
	$('.education-entry').append(HTMLonlineClasses);
	for (online in education.onlinecourses){
		if(education.onlinecourses.hasOwnProperty(online)){
			var formattedtitle=HTMLonlineTitle.replace('%data%', education.onlinecourses[online].title);
			var formattedonline=HTMLonlineSchool.replace('%data%', education.onlinecourses[online].name);
			$('.education-entry').append(formattedtitle);
			$('.education-entry').append(formattedonline);
			var formatteddate=HTMLonlineDates.replace("%data%", education.onlinecourses[online].date);
			$('.education-entry').append(formatteddate);
			link= $('.education-entry').find('a:last');
			link.attr('href', education.onlinecourses[online].url);
		}
	}	
};

function inName(){
	stringobj=bio.name;
	var stringarray=stringobj.trim().split(" ");
	lastname = stringarray.pop().toUpperCase();
	stringarray.forEach(function(element){
		element=element.slice(0,1).toUpperCase()+element.slice(1).toLowerCase();
	});
	newlast=stringarray.join(" ");
	newlast=newlast+" "+lastname;
	$('#intbutton').html("Americanize");
	return newlast;
}

function amName(){
	stringobj=bio.name;
	var stringarray=stringobj.trim().split(" ");
	stringarray.forEach(function(element) {
		element=element.slice(0,1).toUpperCase()+element.slice(1).toLowerCase();
	});
	newLast=stringarray.join(" ");
	$('#intbutton').html("Internationalize");
	return newLast;
}

$(document).click(function(loc){
	console.log(loc.pageX, loc.pageY);
});

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


$(main).append(internationalizeButton);

