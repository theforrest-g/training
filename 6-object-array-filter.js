 let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' }
];

function filterObjValues(objects, key, value) {
let result = [];
for (let i in objects) {
let obj = objects[i];
if (obj[key] === value) result.push(obj);
};
return result;
};
      
const filteredArray = filterObjValues(objects, 'name', 'Пётр'); 
console.log(filteredArray);

export default {filterObjValues};
