const fullName = 'mehul chopra';

// built in `string` data type
// and javascript treats it as object

console.log(fullName.toUpperCase());
console.log(fullName);

console.log(fullName.startsWith('mehul'));
console.log(fullName.endsWith('morning'));
console.log(fullName.includes('pr'));

console.log(fullName.replace('mehul', 'sunny'));

console.log(fullName.length);

console.log(fullName.indexOf('m'));
console.log(fullName.indexOf('h'));
console.log(fullName.indexOf('morning'));
console.log(fullName.lastIndexOf('h'));

console.log(fullName.charAt(0));
console.log(fullName.charAt(-1));

const punishment = 'I will not talk in the class';
console.log(punishment.repeat(100));

console.log(fullName.slice(0, 5));
console.log(fullName.slice(6));

const student = '          mehul,m,10,90                      ';
console.log(student.trim());
console.log(student);

console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[-1]);