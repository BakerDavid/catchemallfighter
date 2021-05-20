
var player = {
	hp: 100,
	max_hp: 100,
	smack:  [4,6,8],
	defence: 1
};

var target = {
	hp: 100,
	max_hp:100,
	defence:1,
	stare: [4,6,8]
}

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
    target.hp = playerattack(player.smack);   
    targethealth.value = target.hp
    setTimeout(function() {player.hp = targetattack(target.stare), playerhealth.value = player.hp; }, 800);
    

    if(player.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You have died!";
    } 
    if(target.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You won!";
    }
};