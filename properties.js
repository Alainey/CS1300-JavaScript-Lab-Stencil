//CS130(0) Javascript Lab

//properties.js contains the script used by properties.html in order to create a reactive webpage.
//This document contains a variety of TODOs that must be filled in by you (the student!) in order for the program to function.

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//TODO: add a player variable named "player" and populate them with the information necessary for display



//TODO: add three property variables named "property1" "property2" and "property3" and populate them with the information necessary for display



//TODO: add the information to the webpage using getElementById().innerHTML
document.getElementById("player").innerHTML = player.name + ", using the " + player.piece + " game piece, currently has $" + player.money + "." ;
document.getElementById("property1").innerHTML = 
	player.name + " owns " + property1.name + ", a(n) " + property1.color + " property that cost " + property1.price + " and has a base rent of " + property1.rent + ".";
document.getElementById("property2").innerHTML = 
	player.name + " owns " + property2.name + ", a(n) " + property2.color + " property that cost " + property2.price + " and has a base rent of " + property2.rent + ".";
document.getElementById("property3").innerHTML = 
	player.name + " owns " + property3.name + ", a(n) " + property3.color + " property that cost " + property3.price + " and has a base rent of " + property3.rent + ".";
