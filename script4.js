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