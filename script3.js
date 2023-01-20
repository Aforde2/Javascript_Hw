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


// if (tipAmount < 10%) {
//     Response = "Bad"
// } else if (tipAmount < 15%) {

// Response = "Fair"
// } 
// console.log (tipAmount < 25%)
// if (tipAmount) < 15% {
//     Response = "Fair"
// }

// if (tipAmount) < 20%
