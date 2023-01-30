let userName = 'rusLan';
let userSurname = 'TurKovsKii';

let flN = userName.substring(0, 1)
let flName = flN.toUpperCase();

let etcN = userName.substring(1);
let etcName = etcN.toLowerCase();

let flS = userSurname.substring(0, 1)
let flSurname = flS.toUpperCase();

let etcS = userSurname.substring(1);
let etcSurname = etcS.toLowerCase();

let nameNorm = flName + etcName;
let surnameNorm = flSurname + etcSurname

console.log (nameNorm + ' ' + surnameNorm);

nameNorm !== userName && surnameNorm !== userSurname ? 
console.log ('Имя было преобразовано') : console.log ('Имя осталось без изменений');
