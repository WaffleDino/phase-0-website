const btn1 = document.getElementById("btn1")
const colorGame = document.getElementById("colorGame")
const color = ['red','orange','yellow','green','blue','indigo','violet']

btn1.addEventListener('click', changeA)

function changeA() {
    const colorIndex = parseInt(Math.random()*color.length)
    colorGame.style.backgroundColor = color[colorIndex]
}

const btn2 = document.getElementById("btn2")
const eightBall = document.getElementById("eightBall")
const answers = ['It is certain.','Signs point to yes.','Ask again later','Outlook not so good.','It is decidedly so.','Concentrate and ask again.','Reply hazy, try again','My sources say no.','Very doubtful.','Cannot predict now.'];

btn2.addEventListener('click', changeB)

function changeB() {
    const answerIndex = parseInt(Math.random()*answers.length)
    document.getElementById("btn2").value = answers[answerIndex]
}