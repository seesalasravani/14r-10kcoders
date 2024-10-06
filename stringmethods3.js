const removeVowels = (str) =>
    str.replace(/[aeiou]/gi, () => '');
  
  console.log(removeVowels("hello")); // Output: "hll"
  console.log(removeVowels("world")); // Output: "wrld"
  