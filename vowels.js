var c = 'a';

// switch case
/*
  switch(variable) {
    case v1: 
    //
    //
    break;
    case v2:
      //
      //
    break;
    case v3:
      //
      //
    break;
    default:
      //
      //
  }
*/

function isVowel(ch) {
  switch(ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

console.log(isVowel(c));