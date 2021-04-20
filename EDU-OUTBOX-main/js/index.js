// fizzbuzz challenge
function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0 ){
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0){
    console.log("Buzz");
  } else {
    console.log(num);
  }

  if (num < 20){
  var newNumber = num + 1;
  fizzBuzz(newNumber);
  }
};

fizzBuzz(1);

// function fizzBuzz(num){
//     if (num % 3 === 0 && num % 5 === 0 ){
//     // console.log("FizzBuzz");
//       document.write('FizzBuzz');
//       document.write('<br/>');
//   } else if (num % 3 === 0) {
//     // console.log("Fizz");
//         document.write('Fizz');
//         document.write('<br/>');
//   } else if (num % 5 === 0){
//     // console.log("Buzz");
//        document.write(' Buzz');
//         document.write('<br/>');
//   } else {
//     // console.log(num);
//         document.write(num);
//         document.write('<br/>');
//   }

//   if (num < 10){
//   var newNumber = num + 1;
//   fizzBuzz(newNumber);
//   }
// };

// fizzBuzz(1);
// birth year log
var birth = prompt("Please input your Birth year")
    var now = new Date()
    var age = now.getYear() - birth + 1900

  if(age<18){
    // console.log('minor')
    document.write('Minor 👦');
    document.write('<br/>');
  }
        
    else if(age>=18 && age<36){
      // console.log('youth')
      document.write('Youth 🚶‍♂️');
      document.write('<br/>');
    }
  
else{
  //  console.log('elder👴🏿')
      document.write('Elder👴🏿');
      document.write('<br/>');
}
