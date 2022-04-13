const colorPicker = document.querySelector('#colorpicker')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopWatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime
let minutes = 0
let seconds = 0
let timesArr = []

const handleStart = () => {
	clearInterval(countTime)

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopWatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopWatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopWatch.textContent = `${minutes}:00`
		}
	}, 1000)
}

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`

	if (stopWatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		timesArr.push(stopWatch.textContent)
	}
	clearStuff()
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleReset = () => {
	time.style.visibility = 'hidden'
    timesArr = []
	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	stopWatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}



const changeColor = () => {
	document.documentElement.style.setProperty('--first-color', colorPicker.value)
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)

document.addEventListener('click', changeColor)
