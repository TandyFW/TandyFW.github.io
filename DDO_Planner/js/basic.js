// Variaveis Globais
var totalpoints = 28;
var oldValue;

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
// Set Mod Atributte
function mod(indexmod, indextotal,indexvalue){
	document.getElementById(indexmod).value = Math.trunc(Number(document.getElementById(indextotal).value)/2)-5;
	calcSumSkillMod(indexmod, indexvalue);
	if (indexmod == "mod_str") {
		calcSumSkillBase('totaljump','jumpbase','modstr');
		calcSumSkillBase('totalswim','swimbase','modstr');
		calcSumSkillBase('totalbalance','balancebase','modstr');
	}
	if (indexmod == "mod_dex"){
		calcSumSkillBase('totalhide','hidebase','moddex');
		calcSumSkillBase('totalmovesilent','movesilentbase','moddex');
		calcSumSkillBase('totalopenlock','openlockbase','moddex');
		calcSumSkillBase('totaltumble','tumblebase','moddex');
	}
	if (indexmod == "mod_con"){
		calcSumSkillBase('totalconcentrat','concentratbase','modcon');
	}
	if (indexmod == "mod_int"){
		calcSumSkillBase('totalddivice','ddivicebase','modint');
		calcSumSkillBase('totalrepair','repairbase','modint');
		calcSumSkillBase('totalsearch','searchbase','modint');
		calcSumSkillBase('totalspellcraft','spellcraftbase','modint');
	}
	if (indexmod == "mod_wis"){
		calcSumSkillBase('totalheal','healbase','modwis');
		calcSumSkillBase('totallisten','listenbase','modwis');
		calcSumSkillBase('totalspot','spotbase','modwis');
	}
	if (indexmod == "mod_cha"){
		calcSumSkillBase('totalbluff','bluffbase','modcha');
		calcSumSkillBase('totaldiplomacy','diplomacybase','modcha');
		calcSumSkillBase('totalhaggle','hagglebase','modcha');
		calcSumSkillBase('totalintimi','intimibase','modcha');
		calcSumSkillBase('totalperform','performbase','modcha');
		calcSumSkillBase('totalumd','umdbase','modcha');
	}
}

function modall(){
	mod('mod_str','total_str','modstr');
	mod('mod_dex','total_dex','moddex');
	mod('mod_con','total_con','modcon');
	mod('mod_int','total_int','modint');
	mod('mod_wis','total_wis','modwis');
	mod('mod_cha','total_cha','modcha');
}
// Select the points available for races
function drowpoint(){
	if (document.getElementById("selectrace").value == "Drow") {
		document.getElementById('radio2').value = "30";
		document.getElementById('secondlife').value = "30pt";
		document.getElementById('radio3').value = "32";
		document.getElementById('thirdlife').value = "32pt";
		document.getElementById('radio4').style.display = "none";
		document.getElementById('champion').style.display = "none";
	}
	else{
		document.getElementById('radio2').value = "34";
		document.getElementById('secondlife').value = "34pt";
		document.getElementById('radio3').value = "36";
		document.getElementById('thirdlife').value = "36pt";
		document.getElementById('radio4').style.display = "inline";
		document.getElementById('champion').style.display = "inline";
	}
}
// Change the total points as the option selected says
function changepoints(index){
	totalpoints = Number(document.getElementById(index).value);
	document.getElementById('remainingpoints').value = totalpoints;
	document.getElementById(index).max = totalpoints;
	
}

// Choosing the race will ajust the values of the stats as bellow
function racepointbonus(){
	var doc = document.getElementById("selectrace").value;
	document.getElementById('remainingpoints').value = totalpoints;

	switch (doc) {
		case 'None':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
		case 'Aasimar':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxplus('wis','total_wis','wisValue');
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
		case 'Dragonborn':
		changeminmaxplus('str','total_str','strValue');
		changeminmaxminus('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxplus('cha','total_cha','chaValue');
		break;
		case 'Dwarf':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxplus('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxminus('cha','total_cha','chaValue');
		break;
		case 'Drow':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxminus('con','total_con','conValue');
		changeminmaxplus('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxplus('cha','total_cha','chaValue');
		break;
		case 'Elf':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxplus('dex','total_dex','dexValue');
		changeminmaxminus('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
		case 'Gnome':
		changeminmaxminus('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxplus('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
		case 'Half Elf':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
		case 'Halfling':
		changeminmaxminus('str','total_str','strValue');
		changeminmaxplus('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
		case 'Half Orc':
		changeminmaxplus('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxminus('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxminus('cha','total_cha','chaValue');
		break;
		case 'Human':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
		case 'Tiefling':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxplus('cha','total_cha','chaValue');
		break;
		case 'Warforged':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxbasic('dex','total_dex','dexValue');
		changeminmaxplus('con','total_con','conValue');
		changeminmaxbasic('int','total_int','intValue');
		changeminmaxminus('wis','total_wis','wisValue');		
		changeminmaxminus('cha','total_cha','chaValue');
		break;
		case 'Wood Elf':
		changeminmaxbasic('str','total_str','strValue');
		changeminmaxplus('dex','total_dex','dexValue');
		changeminmaxbasic('con','total_con','conValue');
		changeminmaxminus('int','total_int','intValue');
		changeminmaxbasic('wis','total_wis','wisValue');		
		changeminmaxbasic('cha','total_cha','chaValue');
		break;
	}
}
// Change the attribute to 10 and his max and min
function changeminmaxplus(index, indextotal, indexvalue){
	document.getElementById(index).value = 10;
	document.getElementById(index).min = "10";
	document.getElementById(index).max = "20";
	calcSum(indextotal,indexvalue);
	document.getElementById(index).style.backgroundColor = "green";
}
// Change the attribute to 6 and his max and min
function changeminmaxminus(index, indextotal, indexvalue){
	document.getElementById(index).value = 6;
	document.getElementById(index).min = "6";
	document.getElementById(index).max = "16";
	calcSum(indextotal,indexvalue);
	document.getElementById(index).style.backgroundColor = "red";
}
// Change the attribute to 8 and his max and min
function changeminmaxbasic(index, indextotal, indexvalue){
	document.getElementById(index).value = 8;
	document.getElementById(index).min = "8";
	document.getElementById(index).max = "18";
	calcSum(indextotal,indexvalue);
	document.getElementById(index).style.backgroundColor = "white";
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

function selectclass(indexopt, indexclass){
	var ValueElements = document.getElementsByClassName(indexopt);
	var x = 0;
	// for that calls calcSum as many times as the size of ValueElements, 'elements with indexvalue class'
	for (var i of ValueElements) {
		i.addEventListener('keyup', selectclass)
	}
	// for that increase sum by the value of each elements that has indexvalue class, if the elements doesn't have a value is increased by 0
	for(var i of ValueElements){
		document.getElementsByClassName(indexopt)[x].value = document.getElementById(indexclass).value;
		document.getElementsByClassName(indexopt)[x].innerHTML = document.getElementById(indexclass).value.substring(0,4);
		x ++;
	}
}

function classskill(indexclasschoice, col){

	var skills = ["jump","swim","balance","hide","movesilent","openlock","tumble","concentrat","ddivice","repair","search","spellcraft","heal",
	"listen","spot","bluff","diplomacy","haggle","intimi","perform","umd"];
	var classess = document.getElementById(indexclasschoice).value;
	switch (classess){
		case 'Articer':
		for(var i=0;i<21;i++){
				var skill = (skills[i] + col);
				if (skills[i] == "concentrat" || skills[i] == "ddivice" || skills[i] == "haggle" || skills[i] == "openlock" || skills[i] == "repair" || 
					skills[i] == "search" || skills[i] == "spellcraft" || skills[i] == "spot" || skills[i] == "umd"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Barbarian':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "jump" || skills[i] == "swim" || skills[i] == "listen" || skills[i] == "intimi"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Bard':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "balance" || skills[i] == "hide" || skills[i] == "spellcraft" || skills[i] == "bluff" || skills[i] == "jump" || 
					skills[i] == "swim" || skills[i] == "concentrat" || skills[i] == "listen" || skills[i] == "tumble" || skills[i] == "diplomacy" ||
					skills[i] == "movesilent" || skills[i] == "umd" || skills[i] == "haggle" || skills[i] == "perform"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Cleric':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "concentrat" || skills[i] == "heal" || skills[i] == "diplomacy" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Druid':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "concentrat" || skills[i] == "intimi" || skills[i] == "spot" || skills[i] == "diplomacy" || skills[i] == "listen" || 
					skills[i] == "swim" || skills[i] == "heal" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'FavoredSoul':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "concentrat" || skills[i] == "heal" || skills[i] == "spellcraft" || skills[i] == "diplomacy" || skills[i] == "jump"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Fighter':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "intimi" || skills[i] == "repair" || skills[i] == "jump" || skills[i] == "swim"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Monk':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "balance" || skills[i] == "jump" || skills[i] == "swim" || skills[i] == "concentrat" || skills[i] == "listen" || 
					skills[i] == "tumble" || skills[i] == "diplomacy" || skills[i] == "movesilent" || skills[i] == "hide" || skills[i] == "spot"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Paladin':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "concentrat" || skills[i] == "heal" || skills[i] == "diplomacy" || skills[i] == "intimi"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Ranger':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "concentrat" || skills[i] == "jump" || skills[i] == "search" || skills[i] == "heal" || skills[i] == "listen" || 
					skills[i] == "spot" || skills[i] == "hide" || skills[i] == "movesilent" || skills[i] == "swim"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Rogue':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "balance" || skills[i] == "intimi" || skills[i] == "search" || skills[i] == "bluff" || skills[i] == "jump" || 
					skills[i] == "spot" || skills[i] == "diplomacy" || skills[i] == "listen" || skills[i] == "swim" || skills[i] == "ddivice" ||
					skills[i] == "movesilent" || skills[i] == "tumble" || skills[i] == "haggle" || skills[i] == "openlock" || skills[i] == "umd" || 
					skills[i] == "hide" || skills[i] == "repair"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Sorcerer':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "concentrat" || skills[i] == "bluff" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Warlock':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "bluff" || skills[i] == "intimi" || skills[i] == "spellcraft" || skills[i] == "concentrat" || skills[i] == "jump" || 
					skills[i] == "umd"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
		case 'Wizard':
		for(var i=0;i<21;i++){
			var skill = skills[i] + col;
				if (skills[i] == "concentrat" || skills[i] == "repair" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (col+3);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
		}
		break;
	}
}

function classskillall(indexclasschoice){

	var skills = ["jump","swim","balance","hide","movesilent","openlock","tumble","concentrat","ddivice","repair","search","spellcraft","heal",
	"listen","spot","bluff","diplomacy","haggle","intimi","perform","umd"];
	var classes = document.getElementById(indexclasschoice).value;
	switch (classes){
		case 'Artificer':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 4) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 4;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "ddivice" || skills[i] == "haggle" || skills[i] == "openlock" || skills[i] == "repair" || 
					skills[i] == "search" || skills[i] == "spellcraft" || skills[i] == "spot" || skills[i] == "umd"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Barbarian':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 4) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 4;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "jump" || skills[i] == "swim" || skills[i] == "listen" || skills[i] == "intimi"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Bard':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 6) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 6;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "balance" || skills[i] == "hide" || skills[i] == "spellcraft" || skills[i] == "bluff" || skills[i] == "jump" || 
					skills[i] == "swim" || skills[i] == "concentrat" || skills[i] == "listen" || skills[i] == "tumble" || skills[i] == "diplomacy" ||
					skills[i] == "movesilent" || skills[i] == "umd" || skills[i] == "haggle" || skills[i] == "perform"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Cleric':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 2) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 2;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "heal" || skills[i] == "diplomacy" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Druid':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 4) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 4;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "intimi" || skills[i] == "spot" || skills[i] == "diplomacy" || skills[i] == "listen" || 
					skills[i] == "swim" || skills[i] == "heal" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'FavoredSoul':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 4) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 4;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "heal" || skills[i] == "spellcraft" || skills[i] == "diplomacy" || skills[i] == "jump"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Fighter':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 2) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 2;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "intimi" || skills[i] == "repair" || skills[i] == "jump" || skills[i] == "swim"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Monk':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 4) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 4;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "balance" || skills[i] == "jump" || skills[i] == "swim" || skills[i] == "concentrat" || skills[i] == "listen" || 
					skills[i] == "tumble" || skills[i] == "diplomacy" || skills[i] == "movesilent" || skills[i] == "hide" || skills[i] == "spot"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Paladin':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 2) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 2;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "heal" || skills[i] == "diplomacy" || skills[i] == "intimi"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Ranger':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 6) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 6;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "jump" || skills[i] == "search" || skills[i] == "heal" || skills[i] == "listen" || 
					skills[i] == "spot" || skills[i] == "hide" || skills[i] == "movesilent" || skills[i] == "swim"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Rogue':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 8) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 8;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "balance" || skills[i] == "intimi" || skills[i] == "search" || skills[i] == "bluff" || skills[i] == "jump" || 
					skills[i] == "spot" || skills[i] == "diplomacy" || skills[i] == "listen" || skills[i] == "swim" || skills[i] == "ddivice" ||
					skills[i] == "movesilent" || skills[i] == "tumble" || skills[i] == "haggle" || skills[i] == "openlock" || skills[i] == "umd" || 
					skills[i] == "hide" || skills[i] == "repair"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Sorcerer':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 2) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 2;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "bluff" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Warlock':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 2) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 2;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "bluff" || skills[i] == "intimi" || skills[i] == "spellcraft" || skills[i] == "concentrat" || skills[i] == "jump" || 
					skills[i] == "umd"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
		case 'Wizard':
		for(var x=0;x<21;x++){
			if (x == 0) {
				document.getElementsByClassName('skilllvl')[x].value = (Number(document.getElementById('mod_int').value) + 2) * 4;
			}else document.getElementsByClassName('skilllvl')[x].value = Number(document.getElementById('mod_int').value) + 2;
			for (var i=0;i<21;i++){
				var skill = skills[i] + (x+1);
				if (skills[i] == "concentrat" || skills[i] == "repair" || skills[i] == "spellcraft"){
					document.getElementById(skill).max = (x+4);
					document.getElementById(skill).style.borderColor = "blue";
					document.getElementById(skill).step = "1";
				} 
				else{
					document.getElementById(skill).max = (x+2);
					document.getElementById(skill).style.borderColor = "red";
					document.getElementById(skill).step = "0.5";
				}
			}
		}
		break;
	}
}

function saveSkillPoint(index){
	oldValue = document.getElementById(index).value;
}

function speddingSkillPoint(index, indexline){
	var newValue = document.getElementById(index).value;
	var skilllvlpoints = "skilllvl" + indexline;

	switch(){



	}

	if (newValue > oldValue && document.getElementById(skilllvlpoints).value > 0) {
		document.getElementById(skilllvlpoints).value = Number(document.getElementById(skilllvlpoints).value) - 1;
		oldValue = newValue - document.getElementById(skilllvlpoints).step;
		alert("++++");
	}
	if (newValue <= oldValue && document.getElementById(skilllvlpoints).value >= 0) {
		document.getElementById(skilllvlpoints).value = Number(document.getElementById(skilllvlpoints).value) + 1;
		oldValue = Number(newValue) + oldValue;
		alert("----")
	}
}