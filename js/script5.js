let creditCard = prompt("введите номер кредитной карты");
let creditNumber = "*".repeat(creditCard.length - 4);
let result =
  creditNumber + creditCard.slice(creditCard.length - 4, creditCard.length);
alert("Номер вашей кредитной карты:${result}");

document.write(`<h1>Номер вашей кредитной карты: ${result}</h1>`);
