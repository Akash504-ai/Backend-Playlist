//Fundamental of JavaScript:
//array and objects
//function return
//async js coding

//foreach map filter find indexof--->

// var arr = [1,2,3,4,5]

// arr.forEach( (val) => {
//   console.log(val + " Hello");
// })

// var newarr = arr.map( (val) => {
//   return val * 2;
// })
// console.log(newarr);

// var ans = arr.filter( (val) => {
//   return val > 3 ? true : false;
// })
// console.log(ans);

// var ans = arr.find( (val) => {
//   if(val === 2) return val;
// })
// console.log(ans);



// var obj = {
//   name : "Akash",
//   age : 20
// }
// Object.freeze(obj)
// // obj['name']



async function abcd() {
  var blob = await fetch(`https://randomuser.me/api/`);
  var ans = await blob.json()
  console.log(ans);
}
abcd();