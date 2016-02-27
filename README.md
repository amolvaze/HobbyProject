# HobbyProject

Reverse String & Path Fix Project - By Amol Vaze

Technologies Used:- Javascript

The project is intended to perform 2 major tasks like to reverse a given string without using inbuit reverse function & to fix a path without 
using any split function. 

Project has 2 JavaScript files for solving these 2 problems.

Reverse.js - It has a function named isPalindrome which basically takes input array loop through array and it compares characters of each word
like first and last, second and second last and so on.. Since we cannot directly implement this using in-built reverse function, char at is used
to compare the characters. Being boolean, function returns true or false depending upon the comparisons done.

Path.js - It has a function named fixPath which takes a parameter path which is in the form of an array as an input. This problem cannot be allowed 
to use Split or regular expressions, so startsWith & endsWith functions of JavaScript are used to solve the problem. Again, we are looping through 
array & with the help of char at we are doing comparisons. Function finally returns the fixed or rectified path.

New file of sorting function has been added to repo. This is file which has a function to sort words of a given sentence.

Conclusion:- Enjoyed working on project!
