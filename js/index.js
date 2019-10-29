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
    console.log(event.clientY);
})

//drag / drop

document.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('Text', event.target.id)
})

document.addEventListener('dragover', (event) => {
    event.preventDefault();
})

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "dropzone" ) {
      document.getElementById("demo").style.color = "";
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });


//load

window.addEventListener('load', () => {
    alert(`This page has loaded sucessfully`)
})

// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//focus
//resize
//scroll
//select
//dblclick
//Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//Nest two similar events somewhere in the site and prevent the event propagation properly
//Stop the navigation from items from refreshing the page by using preventDefault()