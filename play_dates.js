const d1 = new Date();
console.log(d1);

const d2 = new Date(1986, 10, 25, 0, 0, 0);
console.log(d2);

console.log(d1 > d2);

console.log(d2.getFullYear()); // 1986
console.log(d2.getMonth()); // 10
console.log(d2.getDate()); // 25
console.log(d2.toDateString());
console.log(d2.toUTCString());
console.log(d2.toLocaleDateString());