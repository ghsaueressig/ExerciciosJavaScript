function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
  
    /*usando um parametro radix (ou base) em parseInt, podemos converter um numero
        binario em decimal enquanto simultaneamente convertemos em char*/
  
    for (var i = 0; i < biString.length; i++) {
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
  
    // então simplesmente juntamos as strings
    return uniString.join("");
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");