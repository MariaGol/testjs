//cделать инпут и кнопку. кнопка должна быть справа от инпута. введите свое имя (плейсхолдер). 
//когда вводит и нажимает на кнопку - появляется окошко алерт привет, введенное имя

let button = document.querySelector('button');
button.onclick = function() {
    var name = document.getElementById("username").value;
    alert("Привет, " + name);
  };

