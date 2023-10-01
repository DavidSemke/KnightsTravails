import knightIcon from "../images/knight.png";
import xIcon from "../images/x.png";

const view = (() => {
  let knightCell = null;
  let xCell = null;

  function initialSetup() {
    createBoard(8, 8);
    knightCell = insertKnight();
    xCell = insertX();
  }

  function createBoard(rows, cols) {
    const board = document.querySelector("#board");
    const headRow = document.createElement("tr");

    // add empty col cell
    const emptyColHead = document.createElement("th");
    emptyColHead.classList.add("textLarge");
    headRow.appendChild(emptyColHead);

    // add col index cells
    for (let i = 0; i < cols; i++) {
      const colHead = document.createElement("th");
      colHead.classList.add("textLarge");
      colHead.innerText = `${i}`;
      headRow.appendChild(colHead);
    }

    board.appendChild(headRow);
    let offset = 0;

    for (let i = 0; i < rows; i++) {
      offset = offset ? 0 : 1;
      const row = document.createElement("tr");

      for (let j = 0; j < cols + 1; j++) {
        let cell = null;

        if (j === 0) {
          cell = document.createElement("th");
          cell.classList.add("textLarge");
          cell.innerText = `${i}`;
        } else {
          cell = document.createElement("td");
          cell.id = `${i}:${j - 1}`;
          cell.classList.add("dropTarget");

          if ((j + offset) % 2) {
            cell.classList.add("cellDark");
          } else {
            cell.classList.add("cellLight");
          }
        }

        row.appendChild(cell);
      }

      board.appendChild(row);
    }
  }

  function insertKnight() {
    const knightImg = document.createElement("img");
    knightImg.id = "knight";
    knightImg.src = knightIcon;
    knightImg.draggable = true;

    const cell = document.querySelector("#board td");
    cell.appendChild(knightImg);

    return cell;
  }

  function insertX() {
    const xImg = document.createElement("img");
    xImg.id = "x";
    xImg.src = xIcon;
    xImg.draggable = true;

    const cell = document.querySelector("#board td:last-child");
    cell.appendChild(xImg);

    return cell;
  }

  function showPath(movesFunc) {
    const startPos = knightCell.id.split(":").map((str) => parseInt(str));
    const endPos = xCell.id.split(":").map((str) => parseInt(str));
    const moves = movesFunc(startPos, endPos);

    showPathText(moves);
    showPathLines(moves);
  }

  function showPathText(moves) {
    const p = document.getElementById("pathLen");
    p.textContent = `${moves.length - 1} moves required:`;

    const pathDiv = document.getElementById("pathText");
    pathDiv.innerHTML = "";

    for (const move of moves) {
      const positionDiv = document.createElement("div");
      positionDiv.textContent = `[${move[0]}, ${move[1]}]`;

      const arrowDiv = document.createElement("div");
      arrowDiv.textContent = "=>";

      for (const el of [positionDiv, arrowDiv]) {
        pathDiv.appendChild(el);
      }
    }

    pathDiv.removeChild(pathDiv.lastChild);
  }

  function showPathLines(moves) {
    let svg = document.querySelector("svg");

    // remove old lines
    if (svg) {
      document.body.removeChild(svg);
    }

    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    for (let i = 0; i < moves.length - 1; i++) {
      const curr = moves[i];
      const currCell = document.getElementById(`${curr[0]}:${curr[1]}`);
      const currRect = currCell.getBoundingClientRect();

      const next = moves[i + 1];
      const nextCell = document.getElementById(`${next[0]}:${next[1]}`);
      const nextRect = nextCell.getBoundingClientRect();

      const x1 = currRect.left + currRect.width / 2 + window.scrollX;
      const y1 = currRect.top + currRect.height / 2 + window.scrollY;
      const x2 = nextRect.left + nextRect.width / 2 + window.scrollX;
      const y2 = nextRect.top + nextRect.height / 2 + window.scrollY;

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      line.setAttribute("stroke", "red");
      line.setAttribute("stroke-width", 2);

      svg.appendChild(line);
    }

    document.body.appendChild(svg);
  }

  function setKnightCell(cell) {
    knightCell = cell;
  }

  function setXCell(cell) {
    xCell = cell;
  }

  return { initialSetup, showPath, setKnightCell, setXCell };
})();

export { view };
