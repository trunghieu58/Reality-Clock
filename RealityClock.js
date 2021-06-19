


function getTime() {
    let d = new Date()
    let year = document.getElementById('year')
    let month = document.getElementById('month')
    let day = document.getElementById('day')
    let hour = document.getElementById('hours')
    let minute = document.getElementById('minute')
    let second = document.getElementById('second')

    year.innerHTML = d.getFullYear()
    day.innerHTML = d.getDate()
    month.innerHTML = d.getMonth()
    hour.innerHTML = d.getHours()
    minute.innerHTML = d.getMinutes()
    second.innerHTML = d.getSeconds()
}

setInterval(getTime, 1000)


