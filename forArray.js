
// PROBLEM   153


// let n = [3,7,10,5,3,2];
// let arr = [];
// let count = 0;


// for(let i = n.length; i >= 0; i--){
//   if (n[i] % 2 ==0){
//     arr[arr.length] = i; 
//     count++;
//   }
// }
// console.log(arr,`c:${count}`);


// PROBLEM 154 


// let arr = [1,2,3]
// let k = 3;
// let newarr = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j % k == 0; j++) {
//     newarr[newarr.length] = arr[i];
//   }
// }
// console.log(newarr);

// PROBLEM 155


// let arr = [7,10,5,3,2];
// let even = [];

// for (let i = 0; i < arr.length; i++){
//   for (let j = i; j % 2 == 0; j++){
//     even[even.length] = arr[i];    
//   }
// }
// console.log(even);



// PROBLEM 156


// let arr = [7,10,5,3,2];
// let odd = [];

// for (let i = arr.length-1; i > 0; i--){
//   for (let j = i; j % 2 !=0; j++){
//     odd[odd.length] = arr[j];
//   }
// }
// console.log(odd);


// PROBLEM 157


// let arr = [7,10,5,3,2];
// let even = [];
// let odd = [];


// for (let i = 0; i < arr.length; i++){
//   if (i % 2 == 0){
//    even[even.length] = arr[i];
//   }
//   else{
//     odd[odd.length] = arr[i];
//   }
// }
// console.log(even.concat(odd));


// PROBLEM 158

// let arr = [1,2,3,10,-4,true];

// let res = '';

// for (let i = 0; i < arr.length / 2; i++){
//   res += arr[i] + ' ' + arr[arr.length - 1 - i] + ' ';
// }

// console.log(res);


// PROBLEM 159


// let arr = [7,10,3,5];

// let last = arr.pop();
// let count = 0;

// for (let i = arr.length; i >= 0; i--){
//   if (arr[i] < last){
//      count=arr[i];
//   }
// }
// console.log(count);


// PROBLEM 160


// let arr = [5,10,3,7];
// let firstIndex = arr.shift();
// let last = arr.pop();
// let count = 0;

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > firstIndex && arr[i] < last){
//     count = i+1;
//   }
//   else{
//     count = false;
//   }
// }
// console.log(count);



// PROBLEM 161

// let arr = [10,12,5,11,13,15];
// let k = 2;
// let l = 2;
// let count = 0;

// for (let i = k+1; i < l; i++){
//   count += arr[i];
// }
// console.log(count);


// PROBLEM 162


// let arr = [5,10,3,7,10,12,4];

// let k = 0;
// let l = 4;
// let count = 0;

// for (let i = k+1; i < l; i++){
//   count+=arr[i];
// }
// console.log(count/3);


// PROBLEM 163


// let arr = [5,10,3,7,10,12,4];

// let k = 0;
// let l = 4;
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (i < k+1 || i > l-1){
//     count+=arr[i];
//   }
// }
// console.log(count); 



// PROBLEM 164


// let arr = [1,5,123,4];

// let minus = arr[1] - arr[0];
// let count = 0;
// let check = true;
// for (let i = 1; i < arr.length-1; i++){
//   if (arr[i] - minus == arr[i-1]){
//     count+=0;
//   }
//   else{
//     count++;
//     break;
//   }
// }
// if (count == 0){
//   console.log(minus);
// }
// else{
//   console.log('false');
// }


// PROBLEM 165


// let arr = [-2,4,-8,16,-32];
// let result = 0;

// result = arr[1] / arr[0];
// let n = arr[1];

// for (let i = 2; i < arr.length; i++) {
//   if (n * result == arr[i]) {
//     n = arr[i];
//   } else {
//     result = false
//   }
// }

// console.log(result);


// PROBLEM 166

// let arr = [5, -3, -2, 5, -10, 12, -4, 3, -5]
// let result = 0

// if (arr[0] < 0){
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0 && arr[i] > 0) {
//       result = i
//       break
//     } else if (i % 2 != 0 && arr[i] < 0) {
//       result = i
//       break
//     }
//   }
// } else{
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0 && arr[i] < 0) {
//       result = i
//       break
//     } else if (i % 2 != 0 && arr[i] > 0) {
//       result = i
//       break
//     }
//   }
// }

// console.log(result);


// PROBLEM 167

// let arr = [-2,5,-10,12,3,-4,-5];
// let count = 0;

// for (let i = 0; i < arr.length; i++){
//   if (i % 2 == 0){
//     count+=arr[i];
//   }
// }
// console.log(count);


// PROBLEM 168


// let arr = [1,-3,12,-1,3,-4];
// let newarr = [];
// let count = 0;
// let result = 0;

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > arr[i+1]){
//     result = i;
//     newarr.push(i);
//     count++;
//   }
// }
// console.log(newarr, `c: ${count}`);


// PROBLEM 169


// let arr = [-2,5,-10,12,3,-4,-5];
// let first = arr[0];
// let second = arr[1];
// let newarr = [];
// let count = 0;
// let result = 0;

// for (let i = arr.length; i > 0; i--){
//   if (arr[i] > arr[i+1]){
//     result = i;
//     newarr.push(arr[i]);
//     count++;
//   }
// }
// console.log(newarr, `c: ${count}`);



// PROBLEM 170

// let arr = [2,8,4500,-10,3];
// let r = 4400;
// let a = arr[0];
// let res = Infinity;

// for (let i = 0; i < arr.length; i++){
//   let t = Math.abs(arr[i] - r);
//   if (res > t){
//     res = t;
//     a = arr[i];
//   }
// }

// console.log(a);


// PROBLEM 172 


// let arr = [1,2];
// let secondArr = [3,4];
// let empty = [];

// for (let i = 0; i < arr.length; i++){
//   empty[i] = arr[i];
//   arr[i] = secondArr[i];
//   secondArr[i] = empty[i];
// }
// console.log(arr, secondArr);


// PROBLEM 173


// let arr = [1,-3,2,-3,5];
// let empty = [];

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] < 5){
//     empty[i] = 2*arr[i];
//   }
//   else{
//     empty[i] = arr[i]/2;
//   }
// }
// console.log(empty);



// PROBLEM 174


// let arr = [10,-8];
// let secondArr = [5,1];
// let empty = [];

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > secondArr[i]){
//     empty[i] = arr[i];
//   }
//   else{
//     empty[i] = secondArr[i];
//   }
// }
// console.log(empty);



// PROBLEM 175

// let a = [9,14,3,2,1];
// let even = [];

// for (let i = 0; i < a.length; i++){
//   if (a[i] % 2 == 0){
//     even[even.length] = a[i];
//   }
// }
// console.log(even);



// PROBLEM 176

// let arr = [1,2,3,4,5];
// let newarr = [];
// let count = 0;


// for (let i = 0; i < arr.length; i++){
//   count += arr[i];
//   newarr[i] = count;
// }
// console.log(newarr);



// PROBLEM 177


// let arr = [1,2,3,4,5];
// let newarr = [];
// let count = 0;


// for (let i = arr.length-1; i >= 0; i--){
//   count += arr[i];
//   newarr[i] = count;
// }
// console.log(newarr);



// PROBLEM 179


// let newarr = [1,1];
// let n = 6;
// let x = 1;
// let y = 1;
// let result = 0;

// for (let i = 0; i < n-2; i++){
//   result = x + y;
//   x = y;
//   y = result;
//   newarr[newarr.length] = result;
// }

// console.log(newarr);



// PROBLEM 180

// let arr = [1,2,10,5,6,7];
// let bigger;
// let smaller;
// let index = [0];

// for (let i = 0; i < arr.length; i++){
//    if (arr[i] > index){
//      bigger = index = arr[i];
//     }
// }
// for (let j = 0; j < arr.length; j++){
//   if (arr[j] < index){
//     smaller = index = arr[j];
//    }
// }
// console.log(`min: ${smaller}, max: ${bigger}`);



// PROBLEM 182


// let arr = [7,5,2,3];
// let n = 5;
// let count = 0;

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] == n){
//     count = i;
//     break;
//   } 
// }
// if (count != 0){
//   console.log(count);
// }
// else{
//   console.log(-1);
// }







//  ----------ARRAYS---------


  // ARRAY 51

// let a = [1,2,3,4,5];
// let b = [3,52,1,4,5];
// let box = a;
// a = b;
// b = box;

// console.log(a,b);


  // ARRAY 52


// let arr = [1,-3,2,-3,5];
// let empty = [];

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] < 5){
//     empty[i] = 2*arr[i];
//   }
//   else{
//     empty[i] = arr[i]/2;
//   }
// }
// console.log(empty);



// ARRAY 53


// let a = [151,2,33,4];
// let b = [22,111,-3,4];
// let c = a[0];
// let secondCheck = b[0];
// let newarr = [];
// let count = 0;
// let secondCount = 0;

// for (let i = 0; i < a.length; i++){
//   if (a[i] > c){
//     c = a[i];
//   }
// }
// for (let j = 0; j < b.length; j++){
//   if (b[j] > secondCheck){
//     secondCheck = b[j];
//   }
// }
// newarr.push(c)
// newarr.push(secondCheck)
// console.log(newarr);



// ARRAY 54


// let a = [12,4,5,6,6];
// let b = [];

// for (let i = 0; i < a.length; i++){
//   if (a[i] % 2 == 0){
//     b.push(a[i]);
//   }
// }
// console.log(b, `Elemen soni: ${b.length} ta`);



// ARRAY 55


// let a = [12,4,5,6,6,5,3,4,5];
// let b = [];

// for (let i = 0; i < a.length; i++){
//   for (let j = i; j % 2 != 0; j++){
//     b.push(a[i]);
//   }
// }
// console.log(b, `Element soni: ${b.length} ta`);



// ARRAY 57


// let arr = [12,43,5,6,7];
// let b = [];
// let count = 0;
// let even = [];
// let odd = [];

// for (let i = 0; i < arr.length; i++){
//   if (i % 2 == 0){
//     even[even.length] = arr[i];
//   }
//   else{
//     odd[odd.length] = arr[i];
//   }
// }
// console.log(even.concat(odd));



// ARRAY 58


// let a = [1,2,3,4,5];
// let count = 0;
// let b = [];
// for(let i = 0; i < a.length; i++){
//   count += a[i];
//   b[b.length] = count;
// }
// console.log(b);



// ARRAY 59


// let a = [1,2,3,4,5];
// let count = 0;
// let b = [];
// for(let i = 0; i < a.length; i++){
//   count += a[i]/2;
//   b[b.length] = count;
// }
// console.log(b);


// ARRAY 60


// let a = [1, 33, -1, 6];
// let b = [];
// for(let i = 0; i < a.length; i++){
//   let count = 0
//   for(let j = i; j < a.length; j++){
//     count += a[j];
//   }
//   b[i] = count;
// }
// console.log(b);