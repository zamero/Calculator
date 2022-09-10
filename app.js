numberOnscreen = document.querySelector(".calcnum")
let x = []
let y = []
let lastanswer = []
let choice = 0

let input = document.querySelectorAll(".num0, .num9, .num8, .num7, .num6, .num5, .num4, .num3, .num2, .num1")
for (let i = 0; i < input.length; i++) {
    input[i].onclick = function () {
        let num = i + 1
        if (num == 10) {
            num = 0
        }
        let sendit = num.toString()
        if (choice == 0) {
            x.push(sendit)
            numberOnscreen.innerText = x.join("")
        }
        else {
            y.push(sendit)
            numberOnscreen.innerText = y.join("")
        }

    }
}

let symbol = document.querySelectorAll(".add, .sub, .multi, .div")
for (let i = 0; i < symbol.length; i++) {
    symbol[i].onclick = function () {
        choice = i + 1
        console.log(choice)
        numberOnscreen.innerText = 0
    }
}

document.querySelector(".clear").onclick = function () {
    console.log("yo")
    x.splice(0, x.length)
    y.splice(0, y.length)
    lastanswer = []
    choice = 0
    numberOnscreen.innerText = 0
}

document.querySelector(".equals").onclick = function () {
    if (choice == 1) {
        let answer = parseInt(x.join("")) + parseInt(y.join(""))
        x.splice(0, x.length)
        y.splice(0, y.length)
        numberOnscreen.innerText = x.join("")
        choice = 0
        numberOnscreen.innerText = answer
        lastanswer.pop()
        lastanswer.push(answer)
    }
    else if (choice == 2) {
        let answer = parseInt(x.join("")) - parseInt(y.join(""))
        x.splice(0, x.length)
        y.splice(0, y.length)
        choice = 0
        numberOnscreen.innerText = answer
        lastanswer.pop()
        lastanswer.push(answer)
    }
    else if (choice == 3) {
        let answer = parseInt(x.join("")) * parseInt(y.join(""))
        x.splice(0, x.length)
        y.splice(0, y.length)
        choice = 0
        numberOnscreen.innerText = answer
        lastanswer.pop()
        lastanswer.push(answer)
    }
    else {
        choice = 0
        x.splice(0, x.length)
        y.splice(0, y.length)
        numberOnscreen.innerText = answer
        lastanswer.pop()
        lastanswer.push(answer)
    }

}