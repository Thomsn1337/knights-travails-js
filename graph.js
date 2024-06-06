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
/**
 * @param {number[]} start
 * @param {number[]} end
 *
 * @returns {number[][]}
 */
export function knightMoves(start, end) {
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

    if (!validMove(start[0], start[1]))
        throw new RangeError(
            "Start points out of range. Provide points between 0 and 7.",
        );

    if (!validMove(end[0], end[1]))
        throw new RangeError(
            "End points out of range. Provide points between 0 and 7.",
        );
}
