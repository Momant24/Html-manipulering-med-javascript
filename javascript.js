


function add() {
    var farge = document.getElementById('input').value
    if (farge === "Martin") {
        farger = ['red', 'blue', 'green']
        farge = farger[Math.floor(Math.random() * farger.length)]
    }
    document.getElementById('body').style.backgroundColor = farge
}
function tekst() {
    var tekst = document.getElementById('tekstinn').value
    document.getElementById('fintekst').innerText
    = tekst
}
function overskrift() {
    var overskrift = document.getElementById('overskriftinn').value
    document.getElementById('overskrift').innerText
    = overskrift
}
function tekstfarge() {
    var tekstfarge = document.getElementById('tekstfarge').value
    document.getElementById('fintekst').style.color = tekstfarge
}
function liste() {
    var listeting = document.getElementById('listeinn').value
    document.getElementById('minliste').innerHTML += ('<li>'+ listeting + '</li>')
    }   