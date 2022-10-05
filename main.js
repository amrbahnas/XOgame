let turn = "x"

let allSquares = document.querySelectorAll(".square")
let title = document.querySelector(".title")

allSquares.forEach(e => {
    e.onclick = function () {
        if (turn === "x") {
            if (e.innerHTML !== "O") {
                e.style.fontSize = "30px"
                e.innerHTML = "X"
                if (compare(turn)) {
                    turn = "o"
                    title.innerHTML = "o player"
                }
            }
        } else {
            if (e.innerHTML !== "X") {
                e.style.fontSize = "30px"
                e.innerHTML = "O"
                if (compare(turn)) {
                    turn = "x"
                    title.innerHTML = "X player"
                }
            }
        }
    }
})


const compare = (turn) => {
    let test = []
    allSquares.forEach(e => {
        test.push(e.innerHTML)
    })

    if (
        (test[0] === test[1] && test[0] === test[2]) ||
        (test[3] === test[4] && test[3] === test[5]) ||
        (test[6] === test[7] && test[6] === test[8]) ||
        (test[0] === test[3] && test[0] === test[6]) ||
        (test[2] === test[5] && test[2] === test[8]) ||
        (test[0] === test[4] && test[0] === test[8]) ||
        (test[2] === test[4] && test[2] === test[6])
    ) {
        title.innerHTML = `${turn} winner`
        weHaveWinner();
        return false
    } else if (!test.find(e => typeof +e === 'number')) {
        title.innerHTML = `Draw!`
        weHaveDraw();
        return false
    }

    else {
        console.log(test.find(e => typeof e === 'number'))
        return true
    }
}

const weHaveWinner = () => {
    document.querySelector(".layer").style.display = "block";
    dots = "."
    const animation = setInterval(() => {
        title.innerHTML = `${turn} winner${dots}`
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
const weHaveDraw = () => {
    document.querySelector(".layer").style.display = "block";
    dots = "."
    const animation = setInterval(() => {
        title.innerHTML = `Draw${dots}`
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