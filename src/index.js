var player = {
	hp: '100',
	max_hp: 100,
	smack:  [4,6,8],
	defence: 1
};

var target = {
	hp: '100',
	max_hp:100,
	defence:1,
	stare: [4,6,8]
}

document.getElementById("displayer").innerHTML = player.hp; 
document.getElementById("distarget").innerHTML = target.hp;

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
        setTimeout(updateValues, 00);
        setTimeout(updateValues1, 600);
    	document.getElementById("attack").disabled = true;
    setTimeout(function(){document.getElementById("attack").disabled = false;},800);
    setTimeout(function(){if(player.hp <= 0 || target.hp <= 0) {
    	document.getElementById("attack").disabled = true;
    	}
	}, 802)
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
        target.hp = target.max_hp + "";
        playerhealth.value = player.max_hp;
        player.hp = player.max_hp + "";
       	document.getElementById("endmessage").innerHTML="PREPARE TO FIGHT"
       	document.getElementById("attack").disabled = false;
       	document.getElementById("displayer").innerHTML = player.max_hp; 
		  document.getElementById("distarget").innerHTML = target.max_hp;
    });
});

var modal = document.getElementById("modal");

var open = document.getElementById("open");

var close = document.getElementById("closemodal");

function openmodal() {
  modal.classList.remove("modaloff");
  modal.classList.add("modalon");

 }

 open.onclick = openmodal;
