class GraphNode {
    /**
     * @constructor
     * @param {number[]} point
     * @param {number[][]} path
     */
    constructor(point, path) {
        this.point = point;
        this.path = path;
    }
}

/**
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
function validMove(x, y) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function knightMoves() {
    const moves = [
        [1, 2],
        [1, -2],
        [2, 1],
        [2, -1],
        [-1, 2],
        [-1, -2],
        [-2, 1],
        [-2, -1],
    ];
}
