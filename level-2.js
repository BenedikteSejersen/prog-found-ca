// question 1
for (var count=15; count<=25; count++) {
    if (count % 2 === 0) {
        console.log(count);
    }
  }
  // 16 18 20 22 24

  
  // question 
  function logTheFunction() {
    console.log("I am a function");
  }
  
  var innerFunction = logTheFunction();
  
  function outerFunction(x) {
    x;
  }
  
  outerFunction(innerFunction);
  // I am a function