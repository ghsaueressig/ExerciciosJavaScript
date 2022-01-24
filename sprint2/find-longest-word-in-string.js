function findLongestWordLength(str) {
    return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLength("A raposa marrom gosta de pular corda com o cão azul"))