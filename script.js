/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");



document.getElementById("demo").innerHTML = "Hello World!";

function mOver(obj) {
  obj.innerHTML = "You've moused over :D"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

