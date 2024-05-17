var thienthien = {
    name: "ThienThien",
    age: 20,
    address: "Ha Noi",
    pin : "141200",
    price : 2000000
}

// var login = document.getElementById("login");
// console.log(login);
// login.addEventListener("click",loginSubmit);

var bran = document.getElementsByTagName("span")[0];

var sodu = document.getElementById("sodu");
sodu.innerText = thienthien.price ;
bran.addEventListener("click",bran1);
function bran1(e) {
    e.preventDefault();
    location.href = "view.html";

}

function loginSubmit(e) {

    e.preventDefault();
    var pin = document.getElementById("pin").value;
   if(pin == thienthien.pin) {
      location.href = "home.html";
   }else {
     alert("Dang nhap khong thanh cong");
   }
}