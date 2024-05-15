// var c = 0;
// while (c<9) {
//     c++;
//     document.write (`<h1>${c}</h1>`)    
// }
var taikhoan = {
    Username: "Thien Thien",
    Password: "123456",
    Price: 50000
}

var a = prompt ("Vui long nhap ma pin");
if (a==taikhoan.Password) {
var c = 0;
while (c !=5 ) {
var b = prompt ("1.rut tien 2.Nap tien 3.Chuyen khoan 4.Kiem tra so du 5.Thoat");
switch (b) {
    case "1" :
        var rut =prompt ("Vui long nhap so tien can rut:");
        if (parseInt(rut)< taikhoan.Price) {
         taikhoan.Price -= parseInt (rut);
        } else {
            alert("So du tai khoan khong du");
        }
                 
        break;
        case "2" :
        var nap  =prompt ("Vui long nhap so tien can nap:");
        if (parseInt(nap)>0) {
            taikhoan.Price += parseInt (nap);
           }
        break;
        case "3" :
        var chuyen = prompt ("Vui long nhap so tien can chuyen");
        if (parseInt (chuyen) < taikhoan.Price) {
            taikhoan.Price-= parseInt (chuyen);
        } else {
            alert ("So du tai khoan khong du");
        }
        break;
        case "4" :
        alert ("so du cua ban la:"+ taikhoan.Price);
        break;
        case "5" :
        alert ("Bye");
        c=5;
        break;
        default :
        alert ("Khong co noi dung nay")
}

}
} else {
    alert ("Dang nhap that bai");
}
