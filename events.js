// var button = document.getElementById("add");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
// 	if (input.value.length >0) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value))
// 		ul.appendChild(li);
// 		input.value="";
// 	}

// })


// input.addEventListener("keypress", function(event) {
// 	if (input.value.length > 0 && event.which === 13) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value))
// 		ul.appendChild(li);
// 		input.value="";
// 	}

// })



var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "delete";
	li.appendChild(deleteButton);
	li.setAttribute("id", "something");
	ul.appendChild(li);
	input.value = "";

	deleteButton.addEventListener("click", function() {
		ul.removeChild(li);
	})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createList();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createList();
	}
}

function doneCheck(event) { 
	var x = event.target;

		if(x.className !== "done" && x.id !== "" ) {
			x.className = "done";
		} else {
			x.className = "something";
		}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", doneCheck);



