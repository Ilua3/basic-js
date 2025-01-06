const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
   const rows = matrix.length;
   const cols = matrix[0].length;
   function countMinesAround(i, j) {
     let mineCount = 0;
     for (let x = -1; x <= 1; x++) {
       for (let y = -1; y <= 1; y++) {
         const ni = i + x;
         const nj = j + y; 
         if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && !(x === 0 && y === 0)) {
           if (matrix[ni][nj] === true) {
             mineCount++; 
           }
         }
       }
     }
     return mineCount;
   }
   const result = [];
 
   for (let i = 0; i < rows; i++) {
     const row = [];
     for (let j = 0; j < cols; j++) {
       if (matrix[i][j] === true) {
         row.push(1); 
       } else {
         row.push(countMinesAround(i, j)); 
       }
     }
     result.push(row);
   }
 
   return result;
 }

module.exports = {
  minesweeper
};
