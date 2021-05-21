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

const attack = document.getElementById('attack');

attack.addEventListener('click', function(e) {
  console.log('attack button was clicked');

  fetch('/attack', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log(' Attack Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .then(function(response) {
        target.hp = playerattack(player.smack);   
        targethealth.value = target.hp
        setTimeout(function() {player.hp = targetattack(target.stare), playerhealth.value = player.hp; }, 800);
    
        if(player.hp <= 0) {
       	  document.getElementById("endmessage").innerHTML="You have died!";
        } 
        if(target.hp <= 0) {
    	  document.getElementById("endmessage").innerHTML="You won!";
        }
    });
});

const reset = document.getElementById('reset');

reset.addEventListener('click', function(e) {
  console.log('reset button was clicked');

  fetch('/reset', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Reset Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .then(function(response) {
        targethealth.value = target.max_hp;
        target.hp = target.max_hp;
        playerhealth.value = player.max_hp;
        player.hp = player.max_hp;
       	document.getElementById("endmessage").innerHTML="PREPARE TO FIGHT"
    });
});