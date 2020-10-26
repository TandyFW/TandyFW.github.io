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