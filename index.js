function getMaxDigit() {
    const valueFromUser = prompt(`Введіть багатозначне число`);
    const arrayResult = [];
    for (i = 0; i < valueFromUser.length; i++) {
        arrayResult.push(parseInt(valueFromUser[i]));
    }
    return Math.max(...arrayResult);
}
getMaxDigit();



function convertToCapitalize() {
  let userName = prompt(`Введіть своє ім'я`);
  userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase(); 

  return userName;
}
convertToCapitalize();


function calculateTheTax() {
    const salaryValue = prompt(`Вкажіть суму заробітньої плати`);
    const tax = 0.195;
    return  parseFloat(salaryValue) - parseFloat(salaryValue) * tax;
}
calculateTheTax();



function getRandomNumber () {
    const min = prompt(`Введіть початкове число`);
    const max = prompt(`Введіть кінцеве число`);
    return Math.floor(Math.random() * (Math.ceil(parseFloat(max)) -  Math.ceil(parseFloat(min)) + 1)) +  Math.ceil(parseFloat(min)) ;
}
getRandomNumber();

function countLetter() {
    let inputWord = prompt(`Введіть будь-яке слово`);
    let countLetterA = inputWord.toLowerCase().split("a").length - 1;
    
    return countLetterA;
    
}

countLetter();

function convertCurrency() {
    const userAmount = prompt(`Введіть суму для конвертування (зі знаком $ або UAH)`);
    const dollarCurrency = 28.3;
    const dollar = userAmount.includes("$");
    const hryvnia = userAmount.includes("UAH");

    if (dollar) {
        const number = parseFloat(userAmount);
        const value = Math.random((number * dollarCurrency) + 'UAH');
        return value;
    } else if (hryvnia) {
        const number = parseFloat(userAmount);
        const value = Math.round((number / dollarCurrency) + '$');
        return value;
    } else {
        alert(`Введіть суму зі знаком $ або UAH`);
    }
    
}
convertCurrency();


document.writeln(`Функція №1: ${getMaxDigit()} <br>`);
document.writeln(`Функція №2: ${convertToCapitalize()} <br>`);
document.writeln(`Функція №3: ${calculateTheTax()} <br>`);
document.writeln(`Функція №4: ${getRandomNumber()} <br>`);
document.writeln(`Функція №5: ${countLetter()} <br>`);
document.writeln(`Функція №6: ${convertCurrency()} <br>`);

