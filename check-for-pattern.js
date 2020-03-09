// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
//
// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

//Hint: Use \n in string to jump to next line
//Prep
//Parameters
//Return n(number of rows)-- Function pattern(n)

//Result
//

//Example
//pattern(5):
//1
// 22
// 333
// 4444
// 55555

//PseudoCode
//Create a function (pattern) - function pattern(n)
//where pattern returns up to n (number of rows)
//if n is less than 1 return "" => empty string

function pattern(n){
 var output="";
 if (n<1) {
   return ""
 }else if(n === 1){
   return "1"
 }else {
   for (var i = 1; i<=n; i++){
     for (var j = 1; j <=i; j++){
       output+=i
     }
    if (i === n){
      break
    } else {
       output+="\n"
    }
   }
 }
   // Happy Coding ^_^
 return output;
}
