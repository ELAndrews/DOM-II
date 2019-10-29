// Your code goes here

//mouseover

const bottomBtn = document.getElementsByClassName('btn');

bottomBtn[0].addEventListener('mouseover', function () {
    bottomBtn[0].style.backgroundColor= "grey";
    bottomBtn[0].style.color = "white";
})

//mouseout

bottomBtn[0].addEventListener('mouseout', function () {
    bottomBtn[0].style.backgroundColor = "rgb(26, 145, 169)";
})

//keydown

document.addEventListener('keydown', () => {
    alert('There are no input areas available on this document.')
})

//wheel

window.addEventListener('wheel', (event) => {
    // console.log(event.clientY);
})

//load

window.addEventListener('load', () => {
    // alert(`This page has loaded sucessfully`)
})

//double Click

const para = document.querySelectorAll('p');

para.forEach((p) => {
    p.addEventListener('dblclick', () => {
        p.style.backgroundColor = "yellow";
    })
})

//resize

window.addEventListener('resize', () => {
 
    console.log(`The window is ${window.innerHeight} high, and ${window.innerWidth} wide.`)
})


//scroll

// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//select

//Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//Nest two similar events somewhere in the site and prevent the event propagation properly
//Stop the navigation from items from refreshing the page by using preventDefault()