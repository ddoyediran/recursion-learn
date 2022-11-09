// Using recursion, print out a cascading tree of a positive integer n. 

// example of output from calling cascade on integers.
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


// improved solution
function cascadeTwo(n){
  console.log(n);
  
  if(n >= 10){
    cascadeTwo(Math.floor(n / 10));
    console.log(n);
  }
}

cascadeTwo(45);


// Python solution
def cascade(n):
    if n < 10:
        print(n)
    else:
        print(n)
        cascade(n // 10)
        print(n)

cascade(486)
