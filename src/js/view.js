import knightIcon from '../images/knight.png'


const view = (() => {
    function createBoard(rows, cols) {
        const board = document.querySelector('#board')
        const headRow = document.createElement('tr')

        // add empty col cell
        const emptyColHead = document.createElement('th')
        emptyColHead.classList.add('textLarge')
        headRow.appendChild(emptyColHead)
        
        // add col index cells
        for (let i=0; i<cols; i++) {
            const colHead = document.createElement('th')
            colHead.classList.add('textLarge')
            colHead.innerText = `${i}`
            headRow.appendChild(colHead)
        }
    
        board.appendChild(headRow)
        let offset = 0
    
        for (let i=0; i<rows; i++) {
            offset = offset ? 0 : 1
            const row = document.createElement('tr')
    
            for (let j=0; j<cols+1; j++) {
                let cell = null
    
                if (j === 0) {
                    cell = document.createElement('th')
                    cell.classList.add('textLarge')
                    cell.innerText = `${i}`
                }
                else {
                    cell = document.createElement('td')
                    cell.classList.add('dropTarget')
                    
                    if ((j + offset) % 2) {
                        cell.classList.add('cellDark')
                    }
                    else {
                        cell.classList.add('cellLight')
                    }
                }
    
                row.appendChild(cell)
            }
    
            board.appendChild(row)
        }
    }

    function insertKnight(cell=null) {
        const knightImg = document.createElement('img')
        knightImg.id = 'knight'
        knightImg.src = knightIcon

        if (!cell) {
            cell = document.querySelector('#board td')
        }

        cell.appendChild(knightImg)
    }
    
    function showPath(moves) {
        const view = document.querySelector('#pathView')
    
        const p = document.createElement('p')
        p.textContent = `${moves.length-1} moves required:`

        const pathDiv = document.createElement('div')
        pathDiv.id = 'path'
    
        for (const move of moves) {
            const positionDiv = document.createElement('div')
            positionDiv.textContent = `[${move[0]}, ${move[1]}]`

            const arrowDiv = document.createElement('div')
            arrowDiv.textContent = '=>'

            for (const el of [positionDiv, arrowDiv]) {
                pathDiv.appendChild(el)
            }
        }

        pathDiv.removeChild(pathDiv.lastChild)
    
        for (const el of [p, pathDiv]) {
            view.appendChild(el)
        }
    }

    return { createBoard, insertKnight, showPath }

})()


export { view }
