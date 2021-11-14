const colors = require('colors/safe')
let firstN = process.argv[2];
let secN = process.argv[3];
let arr = []


if(firstN > 0 && secN > 0 && firstN < secN) {
    findPrimeNum(firstN, secN)
    printColors(arr)
} else {
    console.log(colors.red("Введенные данные не являются корректными."), colors.red("Проверьте чтобы все введенные данные были числовыми."))
}

function findPrimeNum(firstN, secN) {
    nextPrime:
  for (let i = firstN; i <= secN; i++) { 
    for (let j = 2; j < i; j++) { 
      if (i % j == 0) continue nextPrime;
    }
   arr.push(i)
  }
} 

function printColors(arr) {
    let e = 0
    while(e < arr.length) {
      console.log(colors.green.bold(arr[e++]));
      if(arr[e]) console.log(colors.yellow(arr[e++]));
      if(arr[e]) console.log(colors.red(arr[e++]));
    }
}

  
  