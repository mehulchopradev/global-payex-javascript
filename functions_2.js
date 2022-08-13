// REST operator
function nextGenAdd(...args) {
  // console.log(args);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
}

console.log(nextGenAdd()); // 0
console.log(nextGenAdd(4, 5)); // 9
console.log(nextGenAdd(5, 6, 3, 4, 6)); //
console.log(nextGenAdd(5, 6, 3, 7, 8, 9, 10, 4)); //


function perimeterRectangle(length, breadth) {
  return 2 * (length + breadth);
}

const stats = [6, 3];
// console.log(perimeterRectangle(stats[0], stats[1]));
console.log(perimeterRectangle(...stats)); // spread operation

const m1 = [4, 6, 7];
const m2 = [2, 3];

const m3 = [...m1, ...m2];
console.log(m3);
