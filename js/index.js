// Your code goes here

//1 mouseover

const bottomBtn = document.getElementsByClassName('btn');

bottomBtn[0].addEventListener('mouseover', function () {
    bottomBtn[0].style.backgroundColor= "grey";
    bottomBtn[0].style.color = "white";
})

//2 mouseout

bottomBtn[0].addEventListener('mouseout', function () {
    bottomBtn[0].style.backgroundColor = "rgb(26, 145, 169)";
})

//3 keydown

document.addEventListener('keydown', () => {
    alert('There are no input areas available on this document.')
})

//4 wheel

window.addEventListener('wheel', (event) => {
    // console.log(event.clientY);
})

//5 load

window.addEventListener('load', () => {
    // alert(`This page has loaded sucessfully`)
})

//6 double Click

const para = document.querySelectorAll('p');

para.forEach((p) => {
    p.addEventListener('dblclick', () => {
        p.style.backgroundColor = "yellow";
    })
})

//7 resize

window.addEventListener('resize', () => {
 
    console.log(`The window is ${window.innerHeight} high, and ${window.innerWidth} wide.`)
})


//8 scroll

window.addEventListener('scroll', () => {
    var pixels = Math.round(window.scrollY);
    // console.log(`You are ${pixels} pixels from the top of the page.`)
})

//9 mousemove

window.addEventListener('mousemove', (event) => {
    console.log(`You mouse is at the following co-ordinates: ${event.clientX}:${event.clientY}`)
})

//10 contextmenu

const busImg = document.getElementById('bus')

busImg.addEventListener('contextmenu', el => {
    el.preventDefault();
    console.log(`No menu available on this picture.`)
  });



//Nest two similar events somewhere in the site and prevent the event propagation properly
//Stop the navigation from items from refreshing the page by using preventDefault()