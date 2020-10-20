var oldValue;

function saveSkillPoint(index){
	oldValue = document.getElementById(index).value;
}

function speddingSkillPoint(index, indexline){
	var newValue = document.getElementById(index).value;
	var skilllvlpoints = "skilllvl" + indexline;

	if (newValue > oldValue && document.getElementById(skilllvlpoints).value > 0) {
		document.getElementById(skilllvlpoints).value = Number(document.getElementById(skilllvlpoints).value) - 1;
		oldValue = newValue - document.getElementById(skilllvlpoints).step;
		saveSkillPoint(index);
	}
	else if (newValue <= oldValue && document.getElementById(skilllvlpoints).value >= 0) {
		document.getElementById(skilllvlpoints).value = Number(document.getElementById(skilllvlpoints).value) + 1;
		oldValue = Number(newValue) + oldValue;
		saveSkillPoint(index);
	}
}

function loadFunction(){
calcSumSkillMod('mod_str','modstr');
calcSumSkillMod('mod_dex','moddex');
calcSumSkillMod('mod_con','modcon');
calcSumSkillMod('mod_int','modint');
calcSumSkillMod('mod_wis','modwis');
calcSumSkillMod('mod_cha','modcha');
}
window.addEventListener("load",loadFunction)

// Add Total Value
function calcSumSkillBase(indextotal, indexvalue, indexmod){
	// Save the class indexvalue
	var ValueElements = document.getElementsByClassName(indexvalue);
	// for that calls calcSum as many times as the size of ValueElements, 'elements with indexvalue class'
	for (var i of ValueElements) {
		i.addEventListener('keyup', calcSumSkillBase)
	}
	// variable sum for forther uses
	var sum = 0;
	// for that increase sum by the value of each elements that has indexvalue class, if the elements doesn't have a value is increased by 0
	for(var i of ValueElements){
		sum += parseInt(i.value) || 0;
	}
	// Attribute sum to indextotal.value
	document.getElementById(indextotal).value = sum + Number(document.getElementsByClassName(indexmod)[0].value);
}

// Add mod value on skills
function calcSumSkillMod(indexmod, indexvalue){
	// Save the class indexvalue
	var mod = document.getElementById(indexmod).value;
	var elements = document.getElementsByClassName(indexvalue);
	// for that increase sum by the value of each elements that has indexvalue class
	for(var i=0; i < elements.length; i++){
		elements[i].value = mod;
	}
}