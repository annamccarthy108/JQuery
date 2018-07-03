$(document).ready(function(){

	mondayForLoops();
	tuesdayForLoops();
	//console.log(add(4,5));
	console.log(calculator.add(2,3,4));



}); 



function tuesdayForLoops(){

	

	
	var annaJson = { 
		first_name: "anna", 
		band: "no_doubt",
		beer: "PBR"
	};

	var classArray = [
	{ 
		first_name: "anna", 
		band: "no_doubt",
		beer: "PBR"
	},
	{
		first_name: "wade",
		band: "tool",
		beer: "mahr"
	},
	{
		first_name: "christian",
		band: "the_internet",
		beer: "blue_moon"
	},
	{
		first_name: "logan",
		band: "daft_punk",
		beer: "keystone"
	},
	{
		first_name: "ed",
		band: "in_flames",
		beer: "PBR"
	},
	{
		first_name: "ken",
		band: "system",
		beer: "blueberry"
	},
	{
		first_name: "andrew",
		band: "slowdive",
		beer: "abita"
	},

	{
		first_name: "will",
		band: "killers",
		beer: "high_life"
	}


	]

		console.log (classArray);


	for (var i = 0; i < classArray.length; i++) {
	 		 if (classArray[i].first_name=="anna") {
	 			console.log(" my name is "+classArray[i].first_name  + " my favorite band is "+classArray[i].band)
	 		 }
	 		else{
	 			console.log(" this is my classmate: "+ classArray[i].first_name  + " their favorite band is "+ classArray[i].band)
	 		 }
	 };



	 








// (calculator.add(2,3,4))
// console.log(calculator);

};


// function add(number1,number2){
// 	return number1 + number2;
// };

var calculator = {
	add: function (a,b,c) {
		return a + b;
	},

}




function mondayForLoops(){

	//var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
	//console.log (days);

	// var blakesJSON = {
	// first_name: "anna",
	// last_name: "mccarthy",
	// age: "22",
	// hair: "brown",
	// gender: "female",
	// 	address : { 
	// 	street: "lowerline",
	// 	city: "nola",
	// 	zip: "70118"
	// 	};




	var	anna_object = {
		header: "anna mccarthy",
		title: "front end developer & graphic designer",
		location: "new orleans"
	}


	console.log (anna_object.header);

$("#anna_mccarthy").html(anna_object.header); 
$("#title").html(anna_object.title);
$("#location").html(anna_object.location);

 $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        dataType: 'json',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers':'*'
        },
        success: function(data) { console.log(data) },
        error: function(xhr, status, error) { console.log("ERROR: ", error) }
    })





$.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        dataType: 'json',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers':'*'
        },
        success: function(data) { console.log(data) 


			$("#post_1").html(data[0].title);
			$("#post_2").html(data[1].title);
			$("#post_3").html(data[2].title);


        },
        error: function(xhr, status, error) { console.log("ERROR: ", error) }
    })









};

