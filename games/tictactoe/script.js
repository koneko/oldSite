// gl,gs,gd,sl,ss,sd,dl,ds,dd

var gl = document.getElementById("gl");
    var gs = document.getElementById("gs");
    var gd = document.getElementById("gd");
    var sl = document.getElementById("sl");
    var ss = document.getElementById("ss");
    var sd = document.getElementById("sd");
    var dl = document.getElementById("dl");
    var ds = document.getElementById("ds");
    var dd = document.getElementById("dd");
    var cells = [gl, gs, gd, sl, ss, sd, dl, ds, dd]
    var currentPlayer = "x";

    function startgame() {
        for (const cell of cells) {
            cell.innerHTML = ""
        }
        currentPlayer = "x";
    }

    function cellClick(cell) {
        if (cell.innerHTML == "") {
            cell.innerHTML = currentPlayer;
            if(isGameOver()) {
                gameWon();
                return;
            }
            if (currentPlayer == "x")
                currentPlayer = "o";
            else // currentPlayer == "o"
                currentPlayer = "x";
        }
    }

    function isGameOver() {
        // Check rows
        if (isRowFull(gl, gs, gd))
            return true;
        if (isRowFull(sl, ss, sd))
            return true;
        if (isRowFull(dl, ds, dd))
            return true;

        // Check columns
        if (isRowFull(gl, sl, dl))
            return true;
        if (isRowFull(gs, ss, ds))
            return true;
        if (isRowFull(gd, sd, dd))
            return true;

        // Check diagonals
        if (isRowFull(gl, ss, dd))
            return true;
        if (isRowFull(gd, ss, dl))
            return true;
        if (isRowFull(gl, gs, gd, sl, ss, sd, dl, ds, dd)) {
        alert(`Draw.`)
        startgame();
        }
    }

    function isRowFull(cell1, cell2, cell3) {
        return (cell1.innerHTML == currentPlayer) &&
            (cell2.innerHTML == currentPlayer) &&
            (cell3.innerHTML == currentPlayer)
    }

    function gameWon() {
        alert(`Congratulations player ${currentPlayer}, you have won!`)
    }
