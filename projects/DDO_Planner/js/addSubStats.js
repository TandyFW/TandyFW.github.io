// Increase Atributte (+)
function addAttribute(index, indextotal, indexvalue){
	// Save the actual value of index.max
	var max1 = document.getElementById(index).max
	// Checks if the index.value is lower then max1. Checks if remainingpoints.value is higher or equal to the indexmod.value and if is higher then zero
	if (document.getElementById(index).value < Number(max1) && 
		document.getElementById('remainingpoints').value >= (Math.trunc(Number(document.getElementById(index).value)/2)-5) && 
		document.getElementById('remainingpoints').value > 0) {
		// Checks if the index.value is higher then 13 cuz if it's lower is decrease by only 1
		if(document.getElementById(index).value > 13){
			// Decrease remaingpoints.value by the 'mod_index.value' calculated only by the index.value
			document.getElementById('remainingpoints').value = 
			Number(document.getElementById('remainingpoints').value) - (Math.trunc(Number(document.getElementById(index).value)/2)-5);
		}
		// Decrease remainingpoints.value by 1 and increase index.value by 1 and calls calcSum
		else document.getElementById('remainingpoints').value = document.getElementById('remainingpoints').value - 1;
		document.getElementById(index).value = Number(document.getElementById(index).value) + 1;
		calcSum(indextotal, indexvalue);
	}
}
// Decrease Atributte (-)
function subAttribute(index, indextotal, indexvalue){
	// Save the actual value of index.min
	var min1 = document.getElementById(index).min
	// Checks if the index.value is higher then min1
	if (document.getElementById(index).value > Number(min1)){
		// Decrease index.value by 1 and calls calcSum()
		document.getElementById(index).value = Number(document.getElementById(index).value) - 1;
		calcSum(indextotal, indexvalue);
		// Checks if the index.value is higher then 13 cuz if it's lower is increase by only 1
		if(document.getElementById(index).value > 13){
			// Increase remaingpoints.value by the 'mod_index.value' calculated only by the index.value
			document.getElementById('remainingpoints').value = 
			Number(document.getElementById('remainingpoints').value) + (Math.trunc(Number(document.getElementById(index).value)/2)-5);
		}
		// Increase remainingpoints by 1
		else document.getElementById('remainingpoints').value = Number(document.getElementById('remainingpoints').value) + 1;
	}
}