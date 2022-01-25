function myReplace(str, before, after) {
    // Encontrar o índice de onde está na string
    var index = str.indexOf(before);
    // Verificar se é letra maiúscula ou não
    if (str[index] === str[index].toUpperCase()) {
      // Deixar letra maiúscula.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Deixar letra minúscula.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Substituir a string pela nova string.
    str = str.replace(before, after);
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");