function uppercaseFirstLetter(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
  
  console.log(uppercaseFirstLetter("hello")); // Output: "Hello"
  console.log(uppercaseFirstLetter("world")); // Output: "World"