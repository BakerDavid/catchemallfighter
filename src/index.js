const button = document.getElementById('Attack');
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .then(function(response) {
      document.getElementById('hp').innerHTML = document.getElementById('hp').innerHTML - 10
    })
    .catch(function(error) {
      console.log(error);
    });
});
var hp = 100
document.getElementById("hp").innerHTML = hp;

function attack() {

}