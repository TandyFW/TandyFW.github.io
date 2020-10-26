// Variaveis Globais
var totalpoints = 28;
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