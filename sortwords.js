// JavaScript function to sort words of a given sentence - Amol Vaze

function orderSentence(sentence) {
   return sentence.split(" ").sort().join(" ");
   
}
 //Given sentence 
 var mysentence = "the dog slept in the house";
 alert(orderSentence(mysentence));