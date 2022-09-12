let obj = ["Backspace", "Enter", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "/", "c", ".", "(", ")", "+", "-"]

let display = document.querySelector("#display")
let buttons = Array.from(document.querySelectorAll(".button"))
buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = ""
                break
            case "←":
                display.innerText = display.innerText.slice(0, -1)
                break
            case "=":
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = "Försök igen! Error"
                }

                break
            default:
                display.innerText += e.target.innerText
        }
    })
})


window.addEventListener("keydown", logKey)
function logKey(e) {
    switch (e.key) {
        case "Enter":
            try {
                display.innerText = eval(display.innerText)
            } catch {
                display.innerText = "Försök igen! Error"
            }
            break
        case "Backspace":
            display.innerText = display.innerText.slice(0, -1)
            break
        case "c":
            display.innerText = ""
            break
        default:
            if (obj.includes(e.key)) {
                display.innerText = display.innerText.concat(e.key)
            } else {

            }
            break
    }
}