let arr = [1,4,213,5,3,2,5,6354,10,5];
let max = arr[0];
for (const value of arr) {
    if(value > max) {
        max = value;
    }
}
console.log(`gia tri lon nhat trong mang la : ${max}`);