// thay tất cả  FEATURE thành "Thien Thien" ;
// Thêm 4 cái Bradley Hunter 
var c = document.querySelectorAll("footer h3");
// console.log(c);
c.forEach(element => element.style.color = "red");

var a = document.getElementById("share");
console.log(a);
Object.assign(a.style,{ // css inline
  backgroundColor: 'yellow',
  color : 'red',
  border: '1px solid black'
});
a.classList.add("share");
a.classList.remove("share");
 console.log(a.classList.contains("share"));

 var b = document.querySelector(".fa-circle-play");

 b.addEventListener("click",hello);


 function hello() {
   location.href = "https://www.youtube.com/watch?v=LWS67FaEMKA";
 }