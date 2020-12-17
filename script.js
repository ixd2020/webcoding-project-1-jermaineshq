/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


$(document).ready(function(){
  $("button").click(function(){
    $(function(){
      alert("Your form has been successfully submitted!");
    });
  });
});
