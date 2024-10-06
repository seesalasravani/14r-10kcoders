function removeVowels(str) {
    return str.replace(/[aeiou]/g, '');
  }
  
  console.log(removeVowels("hello")); // Output: "hll"
  console.log(removeVowels("world")); // Output: "wrld"
  