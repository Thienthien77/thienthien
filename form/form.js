
var dangky = document.getElementById("dangky");


dangky.addEventListener("submit",dangKySubmit);


function dangKySubmit(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    console.log(username);
}