// Code for rectifying incorrect given input folder path (without using RegEx or Split) - Amol Vaze

//In Windows, a UNC path can be of the form, \\drive\folder\folder\folder\file.txt. The first two characters must be a backslash, and for subsequent segments, only one backslash separates them.
// we need to write a function that will take a string with redundant backslashes, and corrects them.


// E.g., the following are all equivalent-->
   \\drive\\\a\\b\\\c\d.txt  =>  \\drive\a\b\c\d.txt
   \\drive\\a\\b\\\c\\d.txt  =>  \\drive\a\b\c\d.txt
   \\drive\a\b\c\\\d.txt     =>  \\drive\a\b\c\d.txt
   \\drive\a\b\c\d.txt       =>  \\drive\a\b\c\d.txt  
   
// If a path does not begin with \\ then we have to return an error.

// Function to fix the wrong path.

function fixPath(path) {
    
    
    if(path.startsWith('\\\\') === false) {
        
      console.log('Path does not starts with \\\\. Throw error');
      throw "Path does not starts with \\\\";
    
    } else {
       
     // storing path slash into variable	   
      var result = '\\\\';
      for(var i = 0; i < path.length; i++) {
          
          // Current character is back slash or not
          if(path.charAt(i) === '\\') {
              
              // Is result ends with back slash?
              if(result.endsWith('\\') === false) {
                    result += '\\';
              }
          } else {
              result += path.charAt(i);
          }
      }
      return result;
      
    }
    
}
// Static folder path with incorrect representation.

var expected = "\\\\drive\\a\\b\\c\\d.txt";
var paths = ["\\\\drive\\\\\\a\\\\b\\\\\\c\\d.txt", 
             "\\\\drive\\\\a\\b\\\\\\c\\\\d.txt", 
             "\\\\drive\\\\a\\b\\c\\\\\\d.txt", 
             "\\\\drive\\\\a\\b\\c\\d.txt"];

for (i = 0; i < paths.length; i++) {
    var result = fixPath(paths[i]);

    if (result == expected) {
        console.log(paths[i] + " was fixed");
    } else {
        console.log(paths[i] + " is incorrect");
    }
}
