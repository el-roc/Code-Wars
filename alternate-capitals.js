// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


function capitalize(s){
    let even = [];
    let odd = [];
    bothArrays = [];
    for(let i in s){
      if( i % 2 === 0){
      even.push(s[i].toUpperCase())
      }else{
      even.push(s[i].toLowerCase());
      }
      alternateEven = even.join(``);
    }
    for(let i in s){
    if(i % 2 != 0){
      odd.push(s[i].toUpperCase())
    }else{
      odd.push(s[i].toLowerCase());
    }
    alternateOdd = odd.join(``);
    }
    bothArrays.push(alternateEven, alternateOdd);
    return bothArrays;   
  };