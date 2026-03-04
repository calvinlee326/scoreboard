let homeScore = 0
let guestScore = 0

function addScore(team, points) {
    if (team === 'home') {
        homeScore += points
        document.getElementById('home-score').textContent = homeScore
    } else {
        guestScore += points
        document.getElementById('guest-score').textContent = guestScore
    }
}

function editScore(team) {
    const scoreEl = document.getElementById(team + '-score')
    const inputEl = document.getElementById(team + '-input')

    inputEl.value = team === 'home' ? homeScore : guestScore
    scoreEl.classList.add('hidden')
    inputEl.classList.remove('hidden')
    inputEl.focus()
    inputEl.select()
}

function saveScore(team) {
    const scoreEl = document.getElementById(team + '-score')
    const inputEl = document.getElementById(team + '-input')
    const value = parseInt(inputEl.value)

    if (!isNaN(value) && value >= 0) {
        if (team === 'home') homeScore = value
        else guestScore = value
    }

    scoreEl.textContent = team === 'home' ? homeScore : guestScore
    inputEl.classList.add('hidden')
    scoreEl.classList.remove('hidden')
}

function resetScores() {
    homeScore = 0
    guestScore = 0
    document.getElementById('home-score').textContent = 0
    document.getElementById('guest-score').textContent = 0
}
