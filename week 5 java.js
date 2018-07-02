$(document).ready(function(){

	mondayForLoops();

}); 




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

	//console.log (blakesJSON);
	//console.log (blakesJSON.first_name);
	//console.log (blakesJSON.address.street);
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






};





