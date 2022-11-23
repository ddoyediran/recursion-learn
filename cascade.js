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
def cascade_py(n):
    if n < 10:
        print(n)
    else:
        print(n)
        cascade_py(n // 10)
        print(n)

cascade_py(486)

def cascade_py_2(n):
    print(n)
    if(n >= 10):
        cascade_py_2(n // 10)
        print(n)

cascade_py_2(486)

// compute fibonacci of an integer
function fib(n){
  if(n === 0){
    return 0;
  }
  
  if(n === 1 || n === 2 ){
    return 1;
  }
  
  return fib(n - 2) + fib(n - 1)
}

console.log(fib(6)) // 8
console.log(fib(4)) // 3
console.log(fib(3)) // 2
