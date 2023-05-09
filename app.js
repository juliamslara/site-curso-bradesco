"use strict";
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  var className = document.body.className;
  var linha1 = document.getElementById("linha1");
  var linha2 = document.getElementById("linha2");
  var linha3 = document.getElementById("linha3");
  var linha4 = document.getElementById("linha4");

  if(className == "light-theme") {
    linha1.style.backgroundColor = "black";
    linha2.style.backgroundColor = "black";
    linha3.style.backgroundColor = "black";
    linha4.style.backgroundColor = "black";
    switcher.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    switcher.innerHTML = '<i class="fas fa-moon"></i>';
    linha1.style.backgroundColor = "white";
    linha2.style.backgroundColor = "white";
    linha3.style.backgroundColor = "white";
    linha4.style.backgroundColor = "white";
  }
  console.log('current class name: ' + className);
});
