let roadMines = [true, false, false, false, false, false, false, false, false, true];
let health = 2;

for (let i = 0; i < roadMines.length; i++) {
if (roadMines[i] == true) {
health -= 1;
if (health > 0) {
console.log (`танк переместился на ${i + 1}, танк поврежден`)
} else if (health == 0) {
console.log (`танк переместился на ${i + 1}, танк уничтожен`)
break
} else {
console.log(`танк переместился на ${i + 1}`)
};
} else {
console.log(`танк переместился на ${i + 1}`)
};
};   

