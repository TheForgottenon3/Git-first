function clap(goal) {
    document.getElementById('screen').innerHTML += goal
    document.getElementById("screen").style.border = '2px solid rgb(138, 180, 248)'
}

function switc() {
    clickState = 0

    clickState++;
    if (clickState == 1) {
        document.getElementById('two').style.color = 'white'
        document.getElementById('zero').style.color = 'grey'

    }
    else if (clickState == 2) {
        document.getElementById('zero').style.color = 'white'
        document.getElementById('two').style.color = 'grey'
        alert("wow")


    }
    else if (clickState == 3) {
        alert("wow")

    }

}

function clear() {
    document.getElementById('screen').innerHTML = 'wow'

}

function chang() {

    document.getElementsByClassName('eigh').innerHTML = 'wow'

}

let screen = document.getElementById('screen')
function sol() {
    if (document.getElementById('screen').innerHTML != '') 
    { eval(screen.innerHTML)}
    else { alert('wrong') }
}