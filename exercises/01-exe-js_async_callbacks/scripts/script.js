//Exercise 1: What is the expected output? And why?

function print() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  
  print(); 

  // Console logs 2 after a second. 
  // Console.logs 3 at the moment you open the page, without waiting.
  // Console.logs 4 after all the above are done.
  // WRONG!!!!!!!! Console logs 1 & 4 first bc they don't have a timeout set,
  // then it console logs 3 bc timeout is set to 0 and after 1 sec it logs 2
  
  // ------------------------------------------------------------------------
  
  
  //Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second 
  // - For every number divisible by 3 it prints BOOM!!
  // - For every number divisible by 5 it prints a BANG!!
  // - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 
  
  function blast() {
    let counter = 1;

    setInterval(
      ()=>{
        for(let i=1; i<=15; i++){
          if ((i%3===0) && (i%5===0)) counter = "BOOM BANG!!";
          else if (i%3===0) counter = "BOOM!!";
          else if (i%5===0) counter = "BANG!!";
          else counter = i;
          console.log(counter);
        }
      }
      , 1*1000
    )
  }

  blast();
