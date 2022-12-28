function oneThroughTwenty() {
    
  let resultado = []

  for (let i = 1; i <= 20; i++ ){

    resultado.push(i)

  }

    return resultado

}

console.log(oneThroughTwenty())

//=================================================================================================================

function evensToTwenty() {

  let resultado = []
    
  for (let i = 2; i <= 20; i += 2 ){ 

    resultado.push(i)

  }

  return resultado

}

console.log(evensToTwenty())

//=================================================================================================================

function oddsToTwenty() {
    
  let resultado = []

  for (let i = 1; i <= 20; i += 2 ){ 

    resultado.push(i)

  }
   
    return resultado

}

console.log(oddsToTwenty())

//=================================================================================================================

function multiplesOfFive() {

  let resultado = []
    
  for (let i = 5; i <= 100; i += 5 ){ 

    resultado.push(i)

  }

  return resultado

}

console.log(multiplesOfFive())

//=================================================================================================================

function squareNumbers() {

  let resultado = []
    
  for (let i = 1; i <= 10; i ){ 

    resultado.push(Math.pow(i, 2))

  }

  return resultado

}

console.log(squareNumbers())

//=================================================================================================================

function countingBackwards() {

  let resultado = []
    
  for (let i = 20; i >= 1; i--){ 

    resultado.push(i)

  }

  return resultado

}

console.log(countingBackwards())

//=================================================================================================================

function evenNumbersBackwards() {

  let resultado = []
    
  for (let i = 20; i >= 1; i = i - 2){ 

    resultado.push(i)

  }

  return resultado

}

console.log(evenNumbersBackwards())

//=================================================================================================================

function oddNumbersBackwards() {

  let resultado = []
    
  for (let i = 19; i >= 1; i = i - 2){ 

    resultado.push(i)

  }

  return resultado

}

console.log(oddNumbersBackwards())

//=================================================================================================================

function multiplesOfFiveBackwards() {

  let resultado = []
    
  for (let i = 100; i >= 5; i = i - 5){ 

    resultado.push(i)

  }

  return resultado

}

console.log(multiplesOfFiveBackwards())

//=================================================================================================================

function squareNumbersBackwards() {

  let resultado = []
    
  for (let i = 10; i >= 1; i-- ){ 

    resultado.push(Math.pow(i, 2))

  }

  return resultado

}

console.log(squareNumbersBackwards())


