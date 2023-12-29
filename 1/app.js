/**
 * Assignment 1:
 * Trigger  :   Click anywhere on the HTML Document
 * Action   :   changeBackgroundColor() function called
 * Result   :   Background color of body is set to whatever getRandomColor() reutrns
 */
function changeBackgroundColor() {
    document.getElementById('bdy').style.backgroundColor = getRandomColor();
}

/**
 * 
 * @returns color: hex code of a random color
 */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

