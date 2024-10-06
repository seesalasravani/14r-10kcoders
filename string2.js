function mostFrequent(arr) {
    const freq = {};
    for (let i = 0; i < arr.length; i++) {
      freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    let max = 0, result;
    for (let key in freq) {
      if (freq[key] > max) {
        max = freq[key];
        result = key;
      }
    }
    return parseInt(result);
  }
  
  const inputArray = [1, 2, 3, 2, 2, 4];
  console.log(mostFrequent(inputArray));