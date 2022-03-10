let arr = [7, 10, 5, 3, 2]
let k = 2

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j % k == 0; j++) {
    console.log(arr[j]);
  }
}