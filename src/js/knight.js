import { search } from './search.js'


const knight = (() => {

    function knightMoves(startPos, endPos) {

        if (equalPositions(startPos, endPos)) {
            return [startPos]
        }

        const tree = search.Tree(startPos)
        let endPosLeaf = null

        while (!endPosLeaf) {
            tree.insertLeafChildren(leafValue => {
                return futurePositions(leafValue)
            })

            endPosLeaf = tree.findLeaf(endPos, equalPositions)
        }

        const moves = []
        let next = endPosLeaf

        while (next) {
            moves.unshift(next.value)
            next = next.parent
        }

        return moves
    }

    function equalPositions(pos1, pos2) {
        return pos1[0] === pos2[0] && pos1[1] === pos2[1]
    }

    // a position has format [row, col]
    function futurePositions(pos) {
        const [currRow, currCol] = pos
        const moves = [
            [1, -2], [1, 2], [-1, -2], [-1, 2],
            [-2, 1], [2, 1], [-2, -1], [2, -1]
        ]
        const positions = []

        for (const move of moves) {
            const newRow = currRow + move[0]
            const newCol = currCol + move[1]

            if (
                -1 < newRow && newRow < 8
                && -1 < newCol && newCol < 8
            ) {
                positions.push([newRow, newCol])
            }
        }

        return positions
    }

    return { knightMoves }

})()


export { knight }