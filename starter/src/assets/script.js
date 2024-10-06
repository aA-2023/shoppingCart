/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [
  {
    //! objects holding properties of each fruit inside array of all products:
    name: "Cherry", //! can maybe push objects into empty products array?????
    price: 0.59,
    quantity: 0,
    productId: 4045,
    image: "./images/cherry.jpg",
  },

  {
    name: "Orange",
    price: 1.97,
    quantity: 0,
    productId: 3107,
    image: "./images/orange.jpg",
  },

/* Changing image URLs to what Udacity reviewer is asking:
Current URL: "../src/images/<image-name>.jpg"

Change it to be: "../images/<image-name>.jpg"    images now load when viewing in local browser (as well as using live server as before
keep in mind checkign sites runnign from local folder as well as live server for errors) still passes npm test
 */

/* ../images/filename.jpg didn't work. used ./images.filename.jpg */
  {
    name: "Strawberry",
    price: 1.17,
    quantity: 0,
    productId: 3356,
    image: "./images/strawberry.jpg",
  },
];
/* Images provided in /images folder. All images from Unsplash.com
 - cherry.jpg by Mae Mu
 - orange.jpg by Mae Mu
 - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = []; //! empty cart array... i guess will push product objects into it / update quanty key-value pairs?

/* Create a function named addProductToCart that takes in the product productId as an argument
- addProductToCart should get the correct product based on the productId
- addProductToCart should then increase the product's quantity
- if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const product = products.find((item) => item.productId === productId); //search product array based on productId parameter
  if (product) {
    const itemCart = cart.find((item) => item.productId === productId); //does it exist in cart??
    if (itemCart) {
      itemCart.quantity++; //increment quanity if exists in cart already
    } else {
      product.quantity = 1; //push product value into cart array where it wasn't before. (set value quanity to 1)
      cart.push(product);
    }
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
- increaseQuantity should get the correct product based on the productId
- increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const itemCart = cart.find((item) => item.productId === productId); //match productId in cart
  if (itemCart) {
    itemCart.quantity++; //increase fruit quantity by 1 if found in cart

  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
- decreaseQuantity should get the correct product based on the productId
- decreaseQuantity should decrease the quantity of the product
- if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const itemCart = cart.find((item) => item.productId === productId); //search cart based on productId
  if (itemCart) {
    if (itemCart.quantity > 1) {
      //decrement quantity when it is greater than 1
      itemCart.quantity--;
    } else {
      removeProductFromCart(productId); //if it's less than 1 then remove it from cart completely
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const index = cart.findIndex((item) => item.productId === productId); //find index of item in cart iff it's found
  if (index !== -1) {
    const removedProduct = cart.splice(index, 1)[0]; //remove item using index
    const product = products.find(
      (item) => item.productId === removedProduct.productId
    ); //find product in products array using productId
    if (product) {
      product.quantity = 0; //if product is found, then sent quantity to 0
    }
  }
}

/* Create a function named cartTotal that has no parameters
- cartTotal should iterate through the cart to get the total cost of all products
- cartTotal should return the total cost of the products in the cart
Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  ); //add up cost of all items with reduce array prototype


  total = Math.round(total * 100); //round to cents and return total


  return ((total/100).toFixed(2));
/*   return total; */
}
/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = []; //clear cart
}
/* Create a function named pay that takes in an amount as an argument
- amount is the money paid by customer
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
Hint: cartTotal function gives us cost of all the products in the cart
*/

let totalPaid = 0; //total Paid amount variable

function pay(amount) {
  totalPaid += amount; //add payment amount to totalPaid
  let remainingBalance = totalPaid - cartTotal(); //calculate the balance after paying
  if (remainingBalance >= 0) {
    totalPaid = 0; //
    emptyCart(); //empty the cart once payment is complete
  }
/*   return parseFloat(remainingBalance.toFixed(2)); //the remaining balance returned here */

    return remainingBalance;
}

//finally passed all the tests!

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests.
 To fully complete this project, it is expected that all tests pass.
 Run the following command in terminal to run tests
 npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
