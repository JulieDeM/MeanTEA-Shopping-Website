+$scope.addItem = function (tea, qty) {
 +  // iterate over teaFactory.currentItems
 +  for (var j = 0; j < teaFactory.currentItems.length; j++) {
 +    // teaFactory.currentItems[j]
 +    // IF the tea is ALREADY in the array  is being updated
 +    if (tea.qty >= 1) {
 +      // THEN make the qty property on THAT tea equal to the qty passed to our function
 +      tea.qty += qty
 +      // ELSE tea.qty = qty; and push into teaFactory.currentItems
 +    } else {
 +      tea.qty = qty;
 +      // teaFactory.currentItems.push(tea);
 +    }
 +  }
 +
 +  teaFactory.currentItems.push(tea);
 +  teaQuantity = tea.qty
 +  console.log(teaQuantity);
 +  $scope.numItemsInCart = function(){
 +
 +    if(this.tea.FactoryteaFactory.currentItems.tea >1){
 +      $scope.numItemsInCart += this.tea.FactoryteaFactory.currentItems
 +    } else{
 +      $scope.numItemsInCart = 1
 +    }
 +  }






 ***?
 app.controller('meanTeacontroller', function($scope, teaFactory) {

   $scope.view = {};
   $scope.quantities = [1,2,3,4,5,6,7,8,9,10];
   console.log("scope.quantities");
   console.log($scope.quantities);
   $scope.totalcart = [];
   $scope.totalCost = 0; //doesn't need to be in this scope as the total is not gathered here
 $scope.addItem = function (tea, qty) {
   var cart = teaFactory.currentItems;
   if(cart.length > 0){
   //run loop this.inventory.length
   // } else{
   //
   // iterate over currentItems and see if tea exists
   // if it does, cart[i].qty += qty ;
   // else
   for (var j = 0; j < cart.length; j++) {
     // for (var i = 0; i < tea.length; i++) {
     //   console.log(tea[i])
     // console.log("TEA.NAME");
     // console.log(tea[i].name);
     // console.log("CART.NAME");
     // console.log(cart[j].name);
     // console.log("*********cart");
     // console.log(cart[j].tea[i].qty);
     if (tea.name == cart[j].name) {
       console.log(tea[i].name);
       cart[j].tea.qty += Number(qty)
       break
     }
     else {
       cart[j].tea.qty =  Number(qty);
       break
     }
   }
   teaFactory.currentItems.push(tea);

     //  else {
     //   cart[j].tea.qty =  Number(qty);
     //   teaFactory.currentItems.push(tea);
     // //   console.log("cart[j].tea[i].qty");
     // //   console.log(cart[j].tea[i].qty);
     // }
 // }
 }
 // }

 tea.qty = qty
 teaQuantity = tea.qty
 // teaFactory.currentItems.push(tea);

   $scope.numItemsInCart = function(){
     for (var i = 0; i < teaQuantity.length; i++) {
       console.log(teaQuantity[i]);
     if(teaQuantity[i] >1){
       return $scope.numItemsInCart += teaFactory.currentItems[0].qty
       // return $scope.numItemsInCart += teaQuantity[i]
     } else{
       return $scope.numItemsInCart = 1
     }
     console.log("WHAT IS teaQuantity");
     console.log(teaQuantity);
   }
   return $scope.numItemsInCart = teaQuantity
 }
 //    //this is how it was to track the num in cart
 //   teaFactory.updatePrice()
 console.log("******teaFactory.currentItems*******");
 console.log(teaFactory.currentItems[0].qty);
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



 app.controller('shoppingCart', function($scope, teaFactory){
   $scope.view = {}
   console.log("TEAFACTORY CURRENTITEMS");
   console.log(teaFactory.currentItems);
   $scope.view.teaInCart = teaFactory.cartShopping()
   console.log('tea: ',teaFactory.currentItems);
   // for (var i = 0; i < teaFactory.currentItems.length; i++) {
   //   teaFactory.currentItems[i]
   //   name = teaFactory.currentItems[i].name,
   //   caffeineScale = teaFactory.currentItems[i].caffeineScale
   //   console.log(teaFactory.currentItems[i].name);
   //   console.log(teaFactory.currentItems[i].caffeineScale);
   // }
   // inject teaFacotry
   // console.log teaFactory.currentItems to see if you have them

   // function updatePrice() {
   //   var total = 0;
   //   for(var i = 0; i < this.currentItems.length; i++) {
   //     total += this.currentItems[i].price;
   //   }

 function updatePrice() {
   var sum = 0;
   for(var i = 0; i < teaFactory.currentItems.length; i++) {
   sum += (teaFactory.currentItems[i].price);
   }

     $scope.getTotal = total
       $scope.getTotal = Math.floor($scope.getTotal);
       console.log($scope.getTotal);
   }


   $scope.removeItem = function($index){
   $scope.view.teaInCart.splice($index,1);
   updatePrice()
 }

 $scope.edit = function(index, data) {
   var teas = $scope.view.teaInCart
     $scope.teaInCart[index] = data;
 };
 })