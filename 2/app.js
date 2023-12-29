/**
 * Array of 10 names
 */
const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];

/**
 * Sets initial name to the first element of the array
 */
document.getElementById('output').innerText = names[0];

/**
 * Iterator for array traversal
 */
let index = 0;

/**
 * Trigger  :   Prevoius Button clicked
 * Action   :   previous() method invoked
 * Result   :   index is ->
 *                  1. Decremented if within bounds
 *                  2. Set to last element (index = 9) if index out of bounds
 *              Text replaced to name from current index 
 */
function previous() {
    index--;
    if (index < 0) {
        index = 9;
    }
    document.getElementById('output').innerText = names[index];

}

/**
 * Trigger  :   next Button clicked
 * Action   :   nextNm() method invoked
 * Result   :   index is ->
 *                  1. Incremented if within bounds
 *                  2. Set to first element (index = 0) if index out of bounds
 *              Text replaced to name from current index 
 */
function nextNm() {
    index++;
    if (index > 9) {
        index = 0;
    }
    document.getElementById('output').innerText = names[index];

}