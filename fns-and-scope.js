//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler(otherName) {
	if (otherName === name) {
		return true;
	}
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName(userName) {
	userName = prompt("Hi! What is your name?  My name is Nick.", "Some Person");
	return userName;
}

  //Code Here


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
	getName();
	alert("Welcome " + userName + "!");
}

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here

// An argument is the called value that is passed to a function's parameter. Example below.
// function(parameter) {}
// function(argument);

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
// Falsy values: NaN, "", false, null, undefined, 0
// Use Boolean operator below to determine if something is true or false.
// Boolean(value);

//Next Problem



//Create a function called myName that returns your name

  //Code Here

function myName() {
	return "Nick";
}


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
	return function() {
		return "Nick";
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.

innerFn;
