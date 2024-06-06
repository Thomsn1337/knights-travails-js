import { knightMoves } from "./graph.js";

/**
 * @param {number[]} start
 * @param {number[]} end
 */
function printPath(start, end) {
    const path = knightMoves(start, end);
    console.log(`Possible in ${path.length} moves. Here's the path:`);
    path.forEach((point) => {
        console.log(point);
    });
}

printPath([0, 0], [3, 3]);
printPath([0, 0], [7, 7]);
