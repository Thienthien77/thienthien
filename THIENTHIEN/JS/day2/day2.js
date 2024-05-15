// // var products = ["nam", "hung", "dung", "son"]
// // for ( var i=0 ; i < products.length ; i++ ) {
// //     console.log (products[i]);
// // }


// // var b = "Thien Thien";
// // console.log (b.length);
// // for (var i=0; i < b.length ; i++ ) {
// //     console.log (b.charAt(i));
// // }
// var products = [
//     {
//         id :1,
//         name : "bag",
//         des : "Hermes bag",
//         img : "https://i.pinimg.com/564x/90/8f/99/908f99664cea4ec11ed3d4cfb6c154ab.jpg",
//         price : 1000
//     },
//     {
//         id :2,
//         name : "bag",
//         des : "Hermes bag",
//         img : "https://i.pinimg.com/564x/90/8f/99/908f99664cea4ec11ed3d4cfb6c154ab.jpg",
//         price : 2000
//     },
//     {
//         id :3,
//         name : "bag",
//         des : "Hermes bag",
//         img : "https://i.pinimg.com/564x/90/8f/99/908f99664cea4ec11ed3d4cfb6c154ab.jpg",
//         price : 3000
//     },
//     {
//         id :4,
//         name : "bag",
//         des : "Hermes bag",
//         img : "https://i.pinimg.com/564x/90/8f/99/908f99664cea4ec11ed3d4cfb6c154ab.jpg",
//         price : 4000
//     },
// ]
// products.map(element => 
    
//    document.write(
//     `  <div class="col-12 col-md-6 col-xl-3">
//     <div class="card">
//         <img src=${element.img} class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${element.name}</h5>
//           <p class="card-text">Hermes bag.</p>
//           <a href="#" class="btn btn-primary">${element.price}</a>
//         </div>
//       </div>
// </div>
//    )
// )

// var date = new Date();
// console.log (date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());

var c = document.querySelectorAll (".container2 .box2 img");
c.forEach(element => element.src = "https://i.pinimg.com/564x/f2/a9/31/f2a9310be7d13bb02ffbb0bf3445a8b4.jpg");
    
