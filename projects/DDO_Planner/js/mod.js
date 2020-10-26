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