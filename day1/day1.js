// khai báo 3 từ khoá var , let , const


// block-scoped

// var a = "Ban muon an gi ?";

// // alert(a);
// // console.log(a);
// // confirm(a);
// var b = prompt(a);
// Dom
// document.write(`<h1>${b}</h1>`)

// switch (b) {  // === 
//     case "1":
//         document.write(`<h1>Pizza</h1>`);
//         break;
//     case "2":
//         document.write(`<h1>ga ran</h1>`);
//         break;
//     case "3":
//         document.write(`<h1>my xao</h1>`);
//         break;
//     case "4":
//         document.write(`<h1>lau</h1>`);
//         break; 
//         default:
//             document.write(`<h1>Khong co mon an nay</h1>`);
//             break;
// }

// while (c < 10) {
//     c++;
//      document.write(`<h1>${c}</h1>`); 
// }
// var c = 12;
// do {
//     c++;
//     document.write(`<h1>${c}</h1>`);
// } while(c < 10)


 var taikhoan = {
     username: "Thanh Ti",
     password: "141200",
     price : 1000000
 }
  
 var a = prompt("Vui long nhap ma pin");

 if (a == taikhoan.password) {
    var c = 0;
    while (c != 5) {
        var b = prompt("1.Rut tien 2.Nap Tien 3.Chuyen khoan 4.Xem so du 5.Thoat");
        switch (b) {
          case "1" : 
              var rut = prompt("vui long nhap so tien can rut :");
               if ( parseInt(rut) < taikhoan.price) {
                taikhoan.price -= parseInt(rut); 
               }else {
                alert("so du tai khoan khong du");
               }
               break;
               case "2" : 
               alert("nap tien");
               break;
               case "3" : 
               alert("chuyen khoan");
               break;
               case "4" : 
               alert("so du cua ban la :" + taikhoan.price);
               break;
               case "5": 
               alert("Bye");
               c = 5;
               break;
               default :
               alert("Khong co chuc nang nay");
        }
    }
  
 } else {
     alert("Dang nhap that bai");
 }