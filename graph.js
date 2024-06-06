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

    const queue = [new GraphNode(start, [start])];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
        const current = queue.shift();
        if (!current) {
            throw new Error("No element in queue");
        }

        const [x, y] = current.point;

        if (end[0] === x && end[1] === y) return current.path;

        moves.forEach((move) => {
            const [dx, dy] = move;

            const newX = x + dx;
            const newY = y + dy;

            const newPoint = [newX, newY];

            if (validMove(newX, newY) && !visited.has(newPoint)) {
                visited.add(newPoint);
                queue.push(
                    new GraphNode(newPoint, current.path.concat([newPoint])),
                );
            }
        });
    }

    return [];
}
