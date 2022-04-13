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
const brush = document.querySelector('.fa-solid')

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

const showHistory = () => {
	timeList.textContent = ''
	let num = 1

	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr: ${num} <span>${time}</span>`
		timeList.appendChild(newTime)
		num++
	})
}

const showModal = () => {
	modalShadow.style.display = 'block'
	modalShadow.classList.toggle('modal-animation')
}
const closeModal = () => {
	modalShadow.style.display = 'none'
}

const changeColor = () => {
	document.documentElement.style.setProperty('--first-color', colorPicker.value)
}

const changePicker = () => {
	brush.style.color = '#fa1406'
	brush.style.transition = 'all .5s'
}
const changePicker2 = () => {
	brush.style.transition = 'all .5s'
	brush.style.color = ''
}

colorPicker.addEventListener('mouseover', changePicker)
colorPicker.addEventListener('mouseout', changePicker2)
startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)

window.addEventListener('click', changeColor)
