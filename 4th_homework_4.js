let date = []
let dayWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let firstDayOfMonth = dayWeek.indexOf('среда')

for (let i = 1; i < 32; ++i) {
date.push (i)
};
for (let i of date) {
let d = (firstDayOfMonth + i - 1) % 7;
console.log ( `${i} января, ${dayWeek[d]} `);
};