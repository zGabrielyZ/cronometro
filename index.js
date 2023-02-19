const contentTimer = document.getElementById('valueTimer')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resetBtn')

let startTime, timer = 0, interval


const startTimer = () => {

  startTime = Date.now() - timer

  interval = setInterval(() => {

    timer = Date.now() - startTime

    contentTimer.textContent = formatTime(timer)
  },1)
  startBtn.disabled = true
}

const resetTime = () => {

  clearInterval(interval)
  timer = 0
  contentTimer.textContent = formatTime(timer)
  startBtn.disabled = false
}

const stopTime = () => {
  
  clearInterval(interval)
  startBtn.disabled = false
}

const formatTime = (time) => {

  const miliSeconds = Math.floor(time % 1000)    
  const seconds = Math.floor((time / 1000)% 60)  
  const minutes = Math.floor((time / 60000)% 60)
  const hours = Math.floor((time / 3600000)% 24)  

  const formattedMiliSeconds = onlyDobuleNumbers(miliSeconds, 3).substring(0, 2)


  return `${onlyDobuleNumbers(hours)}:${onlyDobuleNumbers(minutes)}:${onlyDobuleNumbers(seconds)}:${formattedMiliSeconds}`
}

const onlyDobuleNumbers = (time,length = 2) => {
  const timeString = time.toString()

  return timeString.padStart(length,'0')
}

startBtn.addEventListener('click', startTimer )
stopBtn.addEventListener('click', stopTime) 
resetBtn.addEventListener('click', resetTime)




