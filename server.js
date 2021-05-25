const express = require('express');

const app = express();

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
	// targethealth.value = target.hp; 
	// playerhealth.value = player.hp; 
	// document.getElementById("displayer").innerHTML = player.hp; 
	// document.getElementById("distarget").innerHTML = target.hp;
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
		// targethealth.value = target.hp; 
	}
	// playerhealth.value = player.hp;
	// document.getElementById("displayer").innerHTML = player.hp; 
	// document.getElementById("distarget").innerHTML = target.hp;
	    if(player.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You have died!";
    } 
    	if(target.hp <= 0) {
    	document.getElementById("endmessage").innerHTML="You won!";
    }	
}



// serve files from the public directory
app.use(express.static('src'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/updateValues', (req,res) => {
  res.json({
  	player: player,
  	target:target
  })
});

app.post('/attack', (req, res) => {
  target.hp = playerattack(player.smack);
  player.hp = targetattack(target.stare);
  console.log('target:', target, 'player:', player);
  res.sendStatus(200)
});

app.post('/reset', (req, res) => {
  res.sendStatus(200)
});
