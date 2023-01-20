function hello(name) {
    return `Hello, ${name}`;
  }
  hello('Mustache');

  let result = hello('Mustache')
  console.log(result)


  madlib('Alexander', 'art')

function madlib(name, subject) {
    
    return `${name} favorite subject in school is  ${subject}`;
}
console.log(madlib('Alex',  'Lunch'));


function tipAmount (bill, service) {
    if (service=="Good"){
let tip = bill * 0.2 
return tip 

    }
    else if ( service=="fair"){
        let tip = bill * 0.15
        return tip 
    }
    else if ( service=="poor"){
        let tip = bill * 0.10
        return tip 
    }
}

let result = tipAmount(100,"poor")
console.log(result)


function tipAmount (bill, service) {

    if (service=="Good"){
let tip = bill * 0.2 
let finaltip= bill + tip 
return finaltip 

    }
    else if ( service=="fair"){
        let tip = bill * 0.15
        
        let finaltip= bill + tip 
        return finaltip 
    }
    else if ( service=="poor"){
        let tip = bill * 0.10
        let finaltip= bill + tip 
        return finaltip 
    }
}

let result = tipAmount(100,"poor")
console.log(result)

function tipAmount (bill, service, people) {

    if (service=="Good"){
let tip = bill * 0.2 
let finaltip= bill + tip 
let total = finaltip/people 
return total 

    }
    else if ( service=="fair"){
        let tip = bill * 0.15
        let finaltip= bill + tip 
        let total = finaltip/people         
        return total
    }
    else if ( service=="poor"){
        let tip = bill * 0.10
        let finaltip= bill + tip
        let total = finaltip/people 
        return total
    } 
}

let result = tipAmount(100, "Good", 5) 
console.log(result)
