/*
Question 1:
  The following three questions are based on the two paragraphs under the section which says, "For Question 1".
    1.1. Select the element with an id of "sample1" using jQuery.
*/
let sampleElement = $("#sample1");

//1.2. Print the element itself on the console upon page refresh.
console.log(sampleElement);

//  1.3. Print the content of the element on the console upon page refresh. Use jQuery to select the content of the element.
console.log(sampleElement.text());

/*
Question 2:
  The following questions are based on the HTML code found under the section labeled "For question 2".
    2.1. Select the element with an ID of "techCompanies" and display it on your console.
*/
let techCompaniesElement = $("#techCompanies");
console.log(techCompaniesElement);

//2.2. Howmanytech companies are listed under the ul element with an id of "techCompanies"?
let numberOfTechCompanies = techCompaniesElement.children().length;
console.log(numberOfTechCompanies);

// 2.3. Select all elements with a class of "red" and display them on the console.
let redElements = $(".red");
console.log(redElements);

//2.4. Create a new li HTML element with a content of "Facebook" and display it on console
let newElement = $("<li>Facebook</li>");
console.log(newElement.html());

//2.5. Give the newly created element a class of "blue" using jQuery
newElement.addClass("blue");
console.log(newElement);

//2.6. Append the newly created element next to the the "Sony" <li> element.
let SonyElement = techCompaniesElement.find("li").eq(9);
SonyElement.after(newElement);

//2.7. How manyof the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div.
let blueCompanies = $("#blueCompanies");
let blueCompaniesList = techCompaniesElement.find(".blue");
console.log(blueCompaniesList.length);
blueCompanies.text(blueCompaniesList.length);

/*
Question 3:
  A form with two text fields is provided under the section which says "For question 3". Write a jQuery code which takes the values of the two fields, checks if they are number values and calculate the sum and average of the two numbers.
    3.1. Display the result on the console
    3.2. Display the result underneath the form 3.3. If any of the numbers provided is not a number, display a message that says "Please enter numerical values only" underneath the form.
*/
$(document).ready(function () {
	$("#submitButton").click(function (event) {
		event.preventDefault();

		// Get values from input fields
		let firstValue = parseFloat($("input[name='first-value']").val());
		let secondValue = parseFloat($("input[name='second-value']").val());

		if (!isNaN(firstValue) && !isNaN(secondValue)) {
			let sum = firstValue + secondValue;
			let average = sum / 2;

			console.log("Sum: " + sum);
			console.log("Average: " + average);

			$("#sum").html("Sum: " + sum + "<br>Average: " + average);
		} else {
			$("#sum").html("Please enter numerical values only");
		}
	});
});

/* 
Question 4:
  Create an HTML form which asks users to provide their First name, Last name and Email address. All the fields should be labeled as required. Once the user submits, write a JavaScript function that checks if all the fields are provided. If not, it should show an error message above the form. 
  If the user provides all the values, hide the form input fields, and display all the values provided by the user on the browser
*/

function validateForms() {
	let isEmpty = false;

	$(
		"input[name='first-name'], input[name='last-name'], input[name='email']"
	).each(function () {
		let $input = $(this);
		if (!$input.val()) {
			isEmpty = true;
			$input.css({
				"background-color": "pink",
				border: "2px solid red",
			});
		} else {
			$input.css({
				"background-color": "",
				border: "",
			});
		}
	});

	if (isEmpty) {
		return false;
	} else {
		return true;
	}
}

$("#userForm").submit(validateForms);
