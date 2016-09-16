app.factory('teaFactory', function(){

return {
  currentItems: [],

//   updatePrice: function () {
//     var sum = 0;
//     for(var i = 0; i < teaFactory.currentItems.length; i++) {
//       sum += (teaFactory.currentItems[i].price);
//     }
getTotal: function (){
  var cart = teaFactory.currentItems;
  var sum = 0;
  var qty = 0;
  // teaCart = teaFactory.currentItems;
  for (var i = 0; i < cart.length; i++) {
    sum += (cart[i].price);
    qty += cart[i].qty
console.log("here is the cart quantities");
console.log(qty += cart[i].qty);
}
// $scope.getTotal = Math.floor($scope.getTotal
var total = (sum * qty)
console.log(total);
return total
$scope.totalCost = total;
$scope.totalCost = ($scope.totalCost/100);
  },
//     // console.log($scope.totalCost* tea.qty);
//   },
cartShopping: function(){
  return this.currentItems
},
// addItem: function (tea, qty) {
//   var cart = currentItems;
//   // iterate over currentItems and see if tea exists
//   // if it does, cart[i].qty += qty ;
//   // else
//   for (var j = 0; j < cart.length; j++) {
//     if (tea.name == cart.name) {
//       cart[j].tea.qty += qty
//     } else {
//       cart[j].tea.qty = 1;
//       }
// }
// tea.qty = qty
// currentItems.push(tea);
// teaQuantity = tea.qty
// },
//
// numItemsInCart: function(){
//   numItemsInCart = 0;
//     for (var i = 0; i < tea.length; i++) {
//       console.log(teaQuantity[i]);
//     if(teaQuantity[i] >1){
//       numItemsInCart += teaQuantity[i]
//     } else{
//     numItemsInCart = 1
//     }
//     return numItemsInCart
//     console.log("WHAT IS teaQuantity");
//     console.log(teaQuantity);
//   }
// //    //this is how it was to track the num in cart
// //   teaFactory.updatePrice()
// },
   all_teas: [
    {
      "_id": "55c8ee82152165d244b98300",
      "name": "Bayard stew",
      "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
      "caffeineScale": 244,
      "price": 1540,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
      "__v": 0,
      "categories": [ "dark", "cold"]
    },

    {
      "_id": "55c8ee82152165d244b98301",
      "name": "Incompactness syrup",
      "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
      "caffeineScale": 49,
      "price": 7348,
      "inStock": true,
      "rating": 2,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
      "__v": 0,
      "categories": ["awesome"]
    },
    {
      "_id": "55c8ee82152165d244b98302",
      "name": "Flexner white tea",
      "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
      "caffeineScale": 38,
      "price": 4991,
      "inStock": true,
      "rating": 4,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
      "__v": 0,
      "categories": ["cold"]
    },
    {
      "_id": "55c8ee82152165d244b98303",
      "name": "Pressor leaf",
      "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
      "caffeineScale": 153,
      "price": 5496,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
      "__v": 0,
      "categories": ["dry", "hot", "awesome"]
    },
    {
      "_id": "55c8ee82152165d244b98304",
      "name": "Flexner veggie tea",
      "ingredients": "cream of tartar, eggplant, cake, deer antler",
      "caffeineScale": 181,
      "price": 2445,
      "inStock": true,
      "rating": 1,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
      "__v": 0,
      "categories": ["summer"]
    },
    {
      "_id": "55c8ee82152165d244b98305",
      "name": "Topflighter malt",
      "ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
      "caffeineScale": 241,
      "price": 4486,
      "inStock": true,
      "rating": 3,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
      "__v": 0,
      "categories": ["dry","lucid","warm"]
    },
    {
      "_id": "55c8ee82152165d244b98306",
      "name": "Cooking mix",
      "ingredients": "flavorings, roasted mushrooms, toast, tumeric",
      "caffeineScale": 230,
      "price": 6973,
      "inStock": true,
      "rating": 3,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
      "__v": 0,
      "categories": ["summer"]
    },
    {
      "_id": "55c8ee82152165d244b98307",
      "name": "Cooking stew",
      "ingredients": "eggplant",
      "caffeineScale": 122,
      "price": 6003,
      "inStock": true,
      "rating": 2,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
      "__v": 0,
      "categories": ["dry","winter","lucid"]
    },
    {
      "_id": "55c8ee82152165d244b98308",
      "name": "Prevenient herb tea",
      "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
      "caffeineScale": 196,
      "price": 1374,
      "inStock": true,
      "rating": 3,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
      "__v": 0,
      "categories": ["lucid","hot"]
    },
    {
      "_id": "55c8ee82152165d244b98309",
      "name": "Angular mix",
      "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
      "caffeineScale": 196,
      "price": 4158,
      "inStock": true,
      "rating": 2,
      "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
      "__v": 0,
      "categories": ["spring", "warm","winter"]
    }
  ]
  };
})
// })
