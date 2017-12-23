/**
 * Get point to position to value to the circle
 * @param value {Number} - value of the node
 * @param index {Number} - index of current node
 * @param nums {Number} - the total number of nodes to displayed
 * @returns {{x: number, y: number}}
 */
export function valueToPoint(value, index, nums) {
    let x = 0;
    let y = -value * 0.8;
    let angle = Math.PI * 2 / nums * index;
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    let tx = x * cos - y * sin + 100;
    let ty = x * sin + y * cos + 100;
    return {
        x: tx,
        y: ty
    }
}



