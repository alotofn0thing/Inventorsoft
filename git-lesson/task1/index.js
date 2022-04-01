const calculate = (string) => {

  let [first, operator, second] = string.split(' ');

 first = first.length;
  
 second = second.length;
  
  switch(operator){
      case '+':
          return '.'.repeat(first + second);
      case '-':
          return '.'.repeat(first - second);
      case '*':
          return '.'.repeat(first * second);              
      case '//':
          return '.'.repeat(first / second);
      default: 
          return '';
  } 
  
}