function foo(a, b) {
  if (a === b) {
    return true; 
  }
  return false; 
}

console.log(foo(NaN, NaN)); //false
console.log(NaN === NaN); //false