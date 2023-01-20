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