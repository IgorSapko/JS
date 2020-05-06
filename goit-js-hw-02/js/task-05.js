const checkForSpam = function (message){
    message = message.toLowerCase();
    
    let checkWordSpam = message.includes("spam");
    let checkWordSale = message.includes("sale");  
    if (checkWordSpam||checkWordSale ===true){message = true} 

    else{message = false}

    return message;}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true