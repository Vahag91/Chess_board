const mainDiv = document.getElementById("board")

const chessBoard = document.createElement("div")
const leftSide = document.createElement("div")
const rightSide = document.createElement("div")
const upSide = document.createElement("div")
const downSide = document.createElement("div")

const mainMiddle = document.createElement("div")


mainDiv.appendChild(upSide)
mainMiddle.appendChild(leftSide)
mainMiddle.appendChild(chessBoard)
mainMiddle.appendChild(rightSide)
mainDiv.appendChild(mainMiddle)
mainDiv.appendChild(downSide)


mainMiddle.classList.add("mainMiddle")
upSide.classList.add("side1")
downSide.classList.add("side1")
leftSide.classList.add("side2")
rightSide.classList.add("side2")
chessBoard.classList.add("chessBoard")


const obj = {
    1: ["a", "b", "c", "d", "e", "f", "g", "h"],
    2: ["a", "b", "c", "d", "e", "f", "g", "h"],
    3: ["a", "b", "c", "d", "e", "f", "g", "h"],
    4: ["a", "b", "c", "d", "e", "f", "g", "h"],
    5: ["a", "b", "c", "d", "e", "f", "g", "h"],
    6: ["a", "b", "c", "d", "e", "f", "g", "h"],
    7: ["a", "b", "c", "d", "e", "f", "g", "h"],
    8: ["a", "b", "c", "d", "e", "f", "g", "h"],
}

for (let [key, value] of Object.entries(obj)) {
    for (let i = 0; i < value.length; i++) {
        obj[key][i] = document.createElement("div")
        chessBoard.appendChild(obj[key][i])
        if ((Number(key) + i) % 2 == 0) {
            obj[key][i].classList.add("odd")
        } else {
            obj[key][i].classList.add("even")
        }
    }
}





for (let i = 8; i >0; i--) {
    const el1 = document.createElement("div")
    leftSide.appendChild(el1)
    el1.classList.add("number")
    el1.innerHTML = `<h4> ${i} </h4>`


    const el2 = document.createElement("div")
    rightSide.appendChild(el2)
    el2.classList.add("number")
    el2.innerHTML = `<h4> ${i} </h4>`

}

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"]

for(let key of arr){

    const el1 = document.createElement("div")
    upSide.appendChild(el1)
    el1.classList.add("letter")
    el1.innerHTML = `<h3> ${key} </h3>`


    const el2 = document.createElement("div")
    downSide.appendChild(el2)
    el2.classList.add("letter")
    el2.innerHTML = `<h3> ${key} </h3>`
}





