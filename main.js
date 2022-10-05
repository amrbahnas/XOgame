let turn = "x"
let xScore = 0;
let oScore = 0;

let allSquares = document.querySelectorAll(".square")
let title = document.querySelector(".title")
let result = document.querySelector(".result")

allSquares.forEach(e => {
    e.onclick = function () {
        if (turn === "x") {
            if (e.innerHTML !== "O") {
                e.style.fontSize = "40px"
                e.innerHTML = "X"
                if (compare(turn)) {
                    turn = "o"
                    title.innerHTML = "o player"
                }
            }
        } else {
            if (e.innerHTML !== "X") {
                e.style.fontSize = "40px"
                e.innerHTML = "O"
                if (compare(turn)) {
                    turn = "x"
                    title.innerHTML = "X player"
                }
            }
        }
    }
})

/*********************** main function compare  */
const compare = (turn) => {
    let status = []
    allSquares.forEach(e => {
        status.push(e.innerHTML)
    })
    if (
        (status[0] === status[1] && status[0] === status[2]) ||
        (status[3] === status[4] && status[3] === status[5]) ||
        (status[6] === status[7] && status[6] === status[8]) ||
        (status[0] === status[3] && status[0] === status[6]) ||
        (status[1] === status[4] && status[1] === status[7]) ||
        (status[2] === status[5] && status[2] === status[8]) ||
        (status[0] === status[4] && status[0] === status[8]) ||
        (status[2] === status[4] && status[2] === status[6])
    ) {
        title.innerHTML = `${turn} winner`
        weHaveWinner();
        return false
    } else if ((status.find(e => Number.isInteger(+e))) === undefined) {
        title.innerHTML = `Draw!`
        weHaveDraw();
        return false
    }

    else {
        return true
    }
}

/*********************** win case and check round status */
const weHaveWinner = () => {
    let roudStatus = true;
    if (turn === "x") {
        xScore++;
        if (xScore === 5) {
            roudStatus = roundFinshed(turn)
            result.innerHTML = `X: ${xScore} || O: ${oScore}`
        } else {
            result.innerHTML = `X: ${xScore} || O: ${oScore}`
        }
    } else {
        oScore++;
        if (oScore == 5) {
            roudStatus = roundFinshed(turn)
            result.innerHTML = `X: ${xScore} || O: ${oScore}`
        } else {
            result.innerHTML = `X: ${xScore} || O: ${oScore}`

        }
    }
    if (roudStatus) {
        document.querySelector(".layer").style.display = "block";
        dots = "."
        const animation = setInterval(() => {
            title.innerHTML = `${turn} winner${dots} `
            dots = dots + "."
        }, 800)
        setTimeout(() => {
            clearInterval(animation);
            title.innerHTML = `New Game`
            let i = 0;
            allSquares.forEach(e => {
                e.innerHTML = i++;
                e.style.fontSize = "0px"
            })
            document.querySelector(".layer").style.display = "none";
        }, 3000)
    }
    /*********************** Draw case */
    const weHaveDraw = () => {
        document.querySelector(".layer").style.display = "block";
        dots = "."
        const animation = setInterval(() => {
            title.innerHTML = `Draw${dots} `
            dots = dots + "."
        }, 800)
        setTimeout(() => {
            clearInterval(animation);
            title.innerHTML = `New Game`
            let i = 0;
            allSquares.forEach(e => {
                e.innerHTML = i++;
                e.style.fontSize = "0px"
            })
            document.querySelector(".layer").style.display = "none";
        }, 3000)
    }
}


/******************* round finished */
let layer = document.querySelector(".layer")

const roundFinshed = (turn) => {
    layer.innerHTML = "start new Round"
    layer.style.display = "flex"
    layer.classList.add("endRound")
    title.innerHTML = `round finished ${turn} Win`
    return false
}

window.addEventListener('click', function (e) {
    if (e.target.classList.contains("endRound")) {
        xScore = 0;
        oScore = 0;
        result.innerHTML = `X: 0 || O: 0`
        title.innerHTML = `New Game`
        let i = 0;
        allSquares.forEach(e => {
            e.innerHTML = i++;
            e.style.fontSize = "0px"
        })
        document.querySelector(".layer").style.display = "none";
        layer.classList.remove("endRound")
    }
})