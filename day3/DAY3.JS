console.log(document);
// tìm kiếm 
//  var a = document.getElementById("a"); // element
//  var a = document.getElementsByClassName("box");
//   var a = document.getElementsByTagName("p");
//   var a = document.querySelector("a")
// var a = document.querySelectorAll("a")
// var c = document.querySelectorAll (".container2 .box2 img");
// c.forEach(element => element.src = "https://i.pinimg.com/564x/f2/a9/31/f2a9310be7d13bb02ffbb0bf3445a8b4.jpg");

var d = document.querySelector(".container2");
var a = [1,2,3,4];

a.forEach( element => d.innerHTML += 
`
<div class="box2">
                <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="">
                <p>text3</p>
            </div>
`
);