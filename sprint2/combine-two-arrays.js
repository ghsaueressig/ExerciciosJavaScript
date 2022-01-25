function nonMutatingConcat(original, attach) {
    // Only change code below this line
    const newarray = original.concat(attach);
    return newarray;
    // Only change code above this line
  }
  
const first = [1, 2, 3];
const second = [4, 5];

console.log(nonMutatingConcat(first, second));