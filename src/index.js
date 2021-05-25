function getMonsterData() {
  return fetch('/updateValues')
    .then(function (response) {
      return response.json().then(function(values) {
        // update DOM with new values from the server
        byId("displayer").innerHTML = values.player.hp;
        byId("distarget").innerHTML = values.target.hp;
        byId("targethealth").value = values.target.hp;
        byId("playerhealth").value = values.player.hp;
      })
    });
}


const attackBtn = byId('attack');

attackBtn.addEventListener('click', attack);

function attack() {
  return fetch('/attack', {method: 'POST'})
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Error when executing attack')
      }
      disableAttackButton()
      return getMonsterData()
    })
    .then(function() {
      enableAttackButton();
    });
}

function disableAttackButton() {
  attack.disabled = true;
}
function enableAttackButton() {
  attack.disabled = false;
}

const resetBtn = byId('reset');

resetBtn.addEventListener('click', reset);

function reset() {
  return fetch('/reset', {method: 'POST'})
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Error when executing attack')
      }
      return getMonsterData();
    });
}

function byId(id) {
  return document.getElementById(id);
}
getMonsterData();
