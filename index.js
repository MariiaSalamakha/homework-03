function getMaxDigit(number) {

    const valueFromUser = Array.from(number.toString()).map(Number); 
    
    return Math.max(...valueFromUser); 
 }
 
 function convertToCapitalize(userName) {
 
   userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase(); 
 
   return userName;
 }
 
 function calculateTheTax(salaryValue) {
     const tax = 0.195;
     return  parseFloat(salaryValue) - parseFloat(salaryValue) * tax;
 }
 
 function getRandomNumber(min, max) {
 
     return Math.floor(Math.random() * (Math.ceil(parseFloat(max)) -  Math.ceil(parseFloat(min)) + 1)) +  Math.ceil(parseFloat(min)) ;
 }
 
 function countLetter(inputWord) {
     let countLetterA = inputWord.toLowerCase().split("a").length - 1;
     
     return countLetterA;
     
 }
 
 function convertCurrency(userAmount) {
     const dollarCurrency = 28.3;
     const dollar = userAmount.includes('$');
     const hryvnia = userAmount.includes('UAH');
 
     if (dollar) {
         const number = parseFloat(userAmount);
         const value = Math.round(number * dollarCurrency) + 'UAH';
         return value;
     } else if (hryvnia) {
         const number = parseFloat(userAmount);
         const value = Math.round(number / dollarCurrency) + '$';
         return value;
     } else {
         alert('Введіть суму зі знаком $ або UAH');
     }
     
 }
 
 document.writeln(`Функція №1: ${getMaxDigit(456)} <br>`);
 document.writeln(`Функція №2: ${convertToCapitalize('olEna')} <br>`);
 document.writeln(`Функція №3: ${calculateTheTax(15000)} <br>`);
 document.writeln(`Функція №4: ${getRandomNumber(10, 200)} <br>`);
 document.writeln(`Функція №5: ${countLetter('America')} <br>`);
 document.writeln(`Функція №6: ${convertCurrency('588$')} <br>`);