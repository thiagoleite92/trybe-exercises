function palindromeVerifier(string) {
  let arrayString = [string]
  palindrome = true;
   

  for (i = 0; i < string.length; i += 1){
    for (j = string.length -1; j > 0; j -= 1)
    if(string[i] === string[j]){
      return (palindrome)
    }else {
       return palindrome = false;
    }
  }
}

console.log(palindromeVerifier('thiago'))