


var para = document.createElement("li");
      var node = document.createTextNode("The end.");
      para.appendChild(node);
      var element = document.getElementById("main");
      var child = document.getElementById("li");
      element.appendChild(para,child);


var li =document.getElementsByTagName("li")
console.log(li);
console.log(li[1]);
li[4].textContent ="hello"
li[4].style.fontWeight ="bold";
li[4].style.backgroundColor ="yellow";
