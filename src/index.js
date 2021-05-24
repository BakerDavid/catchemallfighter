fetch('/updateValues', {method: 'GET'})
.then(function(response) {
  response.json().then((value) => {
    document.getElementById("displayer").innerHTML = value.player.hp;
    document.getElementById("distarget").innerHTML = value.target.hp;
    document.getElementById("targethealth").value = value.target.hp;
    document.getElementById("playerhealth").value = value.player.hp;
  })
})

// function updateValues() { 
// 	target.hp = playerattack(player.smack); 
// 	targethealth.value = target.hp; 
// 	playerhealth.value = player.hp; 
// 	document.getElementById("displayer").innerHTML = player.hp; 
// 	document.getElementById("distarget").innerHTML = target.hp;
// 	    if(player.hp <= 0) {
//     	document.getElementById("endmessage").innerHTML="You have died!";
//     } 
//     	if(target.hp <= 0) {
//     	document.getElementById("endmessage").innerHTML="You won!";
//     }	
// }
// function updateValues1() {
// 	if(target.hp > 0){
// 		player.hp = targetattack(target.stare);  
// 		targethealth.value = target.hp; 
// 	}
// 	playerhealth.value = player.hp; 
// 	document.getElementById("displayer").innerHTML = player.hp; 
// 	document.getElementById("distarget").innerHTML = target.hp;
// 	    if(player.hp <= 0) {
//     	document.getElementById("endmessage").innerHTML="You have died!";
//     } 
//     	if(target.hp <= 0) {
//     	document.getElementById("endmessage").innerHTML="You won!";
//     }	
// }


const attack = document.getElementById('attack');

attack.addEventListener('click', function(e) {
  console.log('attack button was clicked');
  var playerHP = 0
  var targetHP = 0

  fetch('/attack', {method: 'POST'})
    .then(function(response) {
      console.log(response)
      if(response.ok) {
        console.log(' Attack Click was recorded');
          fetch('/updateValues', {method: 'GET'})
          .then(function(response) {
            response.json().then((value) => {
            playerHP = value.player.hp
            targetHP = value.target.hp
            })
          })
        return;
      }
      throw new Error('Request failed.');
    })
    .then(function(response){
      document.getElementById("attack").disabled = true;
      setTimeout(function(){document.getElementById("attack").disabled = false;},800);
      setTimeout(function(){if(playerHP <= 0 || targetHP <= 0) {
      document.getElementById("attack").disabled = true;
      }
      }, 802)
    })
    .then(function(response){
      fetch('/updateValues', {method: 'GET'})
      .then(function(response) {
        response.json().then((value) => {
        document.getElementById("displayer").innerHTML = value.player.hp;
        document.getElementById("distarget").innerHTML = value.target.hp;
        document.getElementById("targethealth").value = value.target.hp;
        document.getElementById("playerhealth").value = value.player.hp;
        })
      })
    })
});
// .then(function(response) {
//         setTimeout(updateValues, 00);
//         setTimeout(updateValues1, 600);
//       document.getElementById("attack").disabled = true;
//     setTimeout(function(){document.getElementById("attack").disabled = false;},800);
//     setTimeout(function(){if(player.hp <= 0 || target.hp <= 0) {
//       document.getElementById("attack").disabled = true;
//       }
//   }, 802)
//     });
// const reset = document.getElementById('reset');

// reset.addEventListener('click', function(e) {
//   console.log('reset button was clicked');

//   fetch('/reset', {method: 'POST'})
//     .then(function(response) {
//       if(response.ok) {
//         console.log('Reset Click was recorded');
//         return;
//       }
//       throw new Error('Request failed.');
//     })
//     .then(function(response) {
//         targethealth.value = target.max_hp;
//         target.hp = target.max_hp + "";
//         playerhealth.value = player.max_hp;
//         player.hp = player.max_hp + "";
//        	document.getElementById("endmessage").innerHTML="PREPARE TO FIGHT"
//        	document.getElementById("attack").disabled = false;
//        	document.getElementById("displayer").innerHTML = player.max_hp; 
// 		  document.getElementById("distarget").innerHTML = target.max_hp;
//     });
// });