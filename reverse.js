// Code for checking a string palindrome or not (without using reverse function) - Amol Vaze.

// function to check string is palindrome or not
function isPalindrome(word) {
 
     // Looping through given array
    for(var i = 0, j = word.length - 1 ; i < j; i++, j--) {
      
	  // comparing characters
      if(word.charAt(i) !== word.charAt(j)) {
          
          return false;
          
      }
      
    }
    return true;
  
}

// Considering sample array with static data.

var words = [["a", true], ["kayak", true], ["pullup", true], ["toyota", false], ["apple", false]];
for (i = 0; i < words.length; i++) {
    var wordResult = words[i];
    var word = wordResult[0];
    var expected = wordResult[1];
	// calling palindrome function
    var actual = isPalindrome(word);
    if (actual == expected) {
        console.log(word, " matches :-)");
    } else {
       console.log(word, " should be " + expected); 
    }
}

console.log("\n\n");


