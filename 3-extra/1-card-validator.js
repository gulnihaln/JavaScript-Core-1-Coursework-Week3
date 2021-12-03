function isCardNumberValid (cardNumber){
    const numArr = cardNumber.split("")
    return Number.isInteger(+cardNumber) 
        && numArr.length === 16
        && isAtLeastTwoDiffDigits() 
        && sumCardNumbers()
        && isEven()

    function isAtLeastTwoDiffDigits () {
      const cardNumSet = new Set(numArr)
        return ([...cardNumSet].length >= 2)
    }

    function sumCardNumbers () {
        return  numArr.reduce((acc, cur) => acc + cur) > 16
    }

    function isEven () {
       return numArr[numArr.length - 1] % 2 === 0
    }
}

console.log(isCardNumberValid("6666666666666662"))