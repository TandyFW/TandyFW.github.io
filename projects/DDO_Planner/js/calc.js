// Add Total Value
function calcSum(indextotal, indexvalue){
	// Save the class indexvalue
	var ValueElements = document.getElementsByClassName(indexvalue);
	// for that calls calcSum as many times as the size of ValueElements, 'elements with indexvalue class'
	for (var i of ValueElements) {
		i.addEventListener('keyup', calcSum)
	}
	// variable sum for forther uses
	var sum = 0;
	// for that increase sum by the value of each elements that has indexvalue class, if the elements doesn't have a value is increased by 0
	for(var i of ValueElements){
		sum += parseInt(i.value) || 0;
	}
	// Attribute sum to indextotal.value
	document.getElementById(indextotal).value = sum;
}