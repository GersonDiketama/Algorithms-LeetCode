/**
 * @param {number} 
 * @return {boolean}
 */

let x = "123"

 var isPalindrome = function(x) {
    let number;
    let convToNumber;
    let strin = x.toString()
    console.log( typeof strin)
    console.log(strin.length)
    
    for(let i = strin.length; i >= 0; i--)
        { 
            number += strin[i]
           convToNumber += parseInt(number)
         console.log(convToNumber)
        }
    
    console.log(convToNumber)
    
    if(convToNumber == x)
        {
            return true
        }
    
    else {return false}
};

