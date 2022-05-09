
var nome;
var cognome;
var eta;
var email;
var indirizzo;

window.alert(nome=prompt('scrivi qui il tuo nome'))
document.getElementById('nome').innerText += ' '+nome;
window.alert(cognome=prompt('scrivi qui il tuo cognome'))
document.getElementById('cognome').innerText += ' '+cognome;
window.alert(eta=prompt('scrivi qui la tua eta'))
document.getElementById('eta').innerText += ' '+eta;
window.alert(email=prompt('scrivi qui la tua email'))
document.getElementById('email').innerText += ' '+email;
window.alert(indirizzo=prompt('scrivi qui il tuo indirizzo'))
document.getElementById('indirizzo').innerText += ' '+indirizzo;

window.alert(nome + ' ' + cognome + ' ' + eta + ' ' + email + ' ' + '(' + indirizzo + ')')
console.log(nome + ' ' + cognome + ' ' + eta + ' ' + email + ' ' + '(' + indirizzo + ')')
