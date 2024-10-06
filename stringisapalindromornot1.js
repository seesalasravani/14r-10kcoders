let isPalindrome = function(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  console.log(isPalindrome('madam')); // Output: true
  console.log(isPalindrome('hello')); // Output: false
  