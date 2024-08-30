function solve(str1, str2) {
    // Step 1: Check if lengths are the same
    if (str1.length !== str2.length) {
      return "No"; // If lengths are different, they're not anagrams
    }
  
    let sum1 = 0;
    let sum2 = 0;
  
    // Step 2: Sum the ASCII values for both strings
    for (let i = 0; i < str1.length; i++) {
      sum1 += str1.charCodeAt(i);
      sum2 += str2.charCodeAt(i);
    }
  
    // Step 3: Compare the sums
    if (sum1 === sum2) {
      return "Yes";
    } else {
      return "No";
    }
  }
  
  // Example usage:
  let str1 = "abcdef";
  let str2 = "acbedf";
  
  console.log(solve(str1, str2)); // Output: Yes

// best aproach is frequency count method 

  function solve(string1, string2) {
    // Check if lengths are the same
    if (string1.length !== string2.length) {
      return "No"; // If lengths are different, they can't be anagrams
    }
  
    let obj1 = {};
    let obj2 = {};
  
    // Count the frequency of each character in both strings
    for (let i = 0; i < string1.length; i++) {
      let char1 = string1[i];
      let char2 = string2[i];
  
      // Count characters for str1
      if (obj1[char1] === undefined) {
        obj1[char1] = 1;
      } else {
        obj1[char1] += 1;
      }
  
      // Count characters for str2
      if (obj2[char2] === undefined) {
        obj2[char2] = 1;
      } else {
        obj2[char2] += 1;
      }
    }
  
    // Compare frequency counts
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return "No"; // The characters don't match in frequency
      }
    }
  
    return "Yes"; // If everything matches, the strings are anagrams
  }
  
  // Example usage:
  let string1 = "abcdef";
  let string2 = "acbedf";
  
  console.log(solve(string1, string2)); // Output: Yes
  


  function asciiValues(str){
    let ans = 0;
    for(let i = 0; i < str.length; i++){
      let curr = str.charAt(i);
      ans+=curr.charCodeAt(0)-96;
    }
    return ans;
  }
  

  let str = "abcd";
  console.log(asciiValues(str)); 