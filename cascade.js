// Using recursion, print out a cascading tree of a positive integer n. 

/**
  cascade(486)
  486
  48
  4
  48
  486
  
  cascade(48)
  48
  4
  48
  
  cascade(4)
  4
*/

// Javascript solution
function cascade(n){
  // base case
  if(n < 10){
    console.log(n);
  }
  else{
    console.log(n);
    cascade(Math.floor(n / 10));
    console.log(n);
  }
}

cascade(48);
