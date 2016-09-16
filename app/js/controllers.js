app.controller('meanTeacontroller', function($scope, teaFactory) {

  $scope.view = {};
  $scope.quantities = [1,2,3,4,5,6,7,8,9,10];

$scope.addItem = function (tea, qty) {
  var cart = teaFactory.currentItems;
  tea.qty = qty;
//   //**************************************************
  if(cart.length == 0){
    cart.push(tea);
  } else {
  for (var j = 0; j < cart.length; j++) {
    console.log("cart[j]");
    console.log(cart[j]);
    console.log("hey");
    if (cart.indexOf(tea) === -1) {
        cart.push(tea);
        break;
    } else {
      cart.tea.qty += qty
      // break;
      }
    }
  }
  tea.qty = qty
  // teaFactory.currentItems.push(tea);
  teaQuantity = tea.qty
}
//************************************above is pushing twice
//
// console.log("cart");
// console.log(teaFactory.currentItems);
// //**************************************************
//   for (var j = 0; j < cart.length; j++) {
//     for (var i = 0; i < tea.length; i++) {
//     if (tea[i].name == cart[j].name) {
//       cart[j].tea.qty += Number(qty)
//     } else {
//       cart[j].tea.qty = Number(qty);
//       }
//     }
// }
//
// check to see if there’s an index of
// and if there isn’t push into array
// else update qty

$scope.numItemsInCart = function(){
  for (var i = 0; i < teaQuantity.length; i++) {
    console.log(teaQuantity[i]);
  // if(teaQuantity[i] >1){
    $scope.numItemsInCart += teaQuantity[i]
    // } else{
    //   $scope.numItemsInCart = teaQuantity
    // }
    // $scope.numItemsInCart = teaFactory.currentItems[0].qty
  }
  $scope.numItemsInCart = teaFactory.currentItems[0].qty
}


$scope.view.availableItems = [ //need this information here
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
})

//****************************************************************************

app.controller('shoppingCart', function($scope, teaFactory){
  $scope.view = {}
  $scope.view.teaInCart = teaFactory.cartShopping()
  console.log('tea: ',teaFactory.currentItems);

//update qty function
  function updateQty (){
    var cart = teaFactory.currentItems
    for (var i = 0; i < cart.length; i++) {
    var qty = cart[i].qty
    $scope.qty = cart[i].qty
    }
  }


  function getTotal (){
    var cart = teaFactory.currentItems;
    $scope.sum = 0;
    for (var i = 0; i < cart.length; i++) {
      $scope.sum += (Number(cart[i].price) * Number(cart[i].qty));
      console.log($scope.sum);
    }
  }
  getTotal()

  function updatePrice () {
    $scope.sum = getTotal();
    for(var i = 0; i < teaFactory.currentItems.length; i++) {
      $scope.sum = (teaFactory.currentItems[i].price);
    }
  }

  $scope.removeItem = function($index){
    $scope.view.teaInCart.splice($index,1);
    updatePrice($index)
  }

  $scope.edit = function($index, data) {
    var teas = $scope.view.tea
    $scope.teaInCart[$index] = data;
    updatePrice ()
    updateQty ()
  };
})
