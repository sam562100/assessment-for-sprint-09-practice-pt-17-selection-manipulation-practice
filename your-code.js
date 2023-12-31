/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

const squareOne = document.getElementById("problem-one")

squareOne.innerText = ""

const button = document.createElement('button')

button.innerText = "1"

squareOne.appendChild(button)






// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

let squareTwo = document.querySelector('.two')
squareTwo.style = 'border: 5px dashed black; color: white; background-color: orange'


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

let plus = document.querySelectorAll(".square.plus")
plus.forEach(styler => {
    styler.style.width = '100px'
    styler.style['font-size'] = '60px'
})

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

let squareFour = document.querySelector('.four')
squareFour.classList.remove('square')
squareFour.classList.add('round')
squareFour.id = 'problem-four'

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

//1
let boxes = document.querySelectorAll(".square")
console.log(boxes)
boxes[3].remove()
boxes[4].remove()
boxes[5].remove()


