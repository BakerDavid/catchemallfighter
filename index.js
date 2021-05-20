
var player = {
	hp: "100",
	max_hp: 100,
	smack:  [4,6,8],
	defence: 1
};

var target = {
	hp: "100",
	max_hp:100,
	defence:1,
	stare: [4,6,8]
};

var targethealth = document.getElementById("targethealth");

var playerhealth = document.getElementById("playerhealth");

function playerattack(input) {
	var randam = input[Math.floor(Math.random() * input.length)];
	return target.hp - (randam - target.defence);
};
function targetattack(input) {
	var randam = input[Math.floor(Math.random() * input.length)];
	return player.hp - (randam - player.defence);
};

document.getElementById("attack").onclick = function(){   
        setTimeout(updateValues, 00);
        setTimeout(updateValues1, 600);
    	document.getElementById("attack").disabled = true;
    setTimeout(function(){document.getElementById("attack").disabled = false;},800);
    setTimeout(function(){if(player.hp, target.hp <=0) {
    	document.getElementById("attack").disabled = true;
    	}
	}, 802)
};

function updateValues() { 
	target.hp = playerattack(player.smack); 
	targethealth.value = target.hp; 
	playerhealth.value = player.hp; 
	document.getElementById("displayer").innerHTML = player.hp; 
	document.getElementById("distarget").innerHTML = target.hp;
	    if(player.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You have died!";
    } 
    	if(target.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You won!";
    }	
}
function updateValues1() {
	if(target.hp > 0){
		player.hp = targetattack(target.stare);  
		targethealth.value = target.hp; 
	}
	playerhealth.value = player.hp; 
	document.getElementById("displayer").innerHTML = player.hp; 
	document.getElementById("distarget").innerHTML = target.hp;
	    if(player.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You have died!";
    } 
    	if(target.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You won!";
    }	
}