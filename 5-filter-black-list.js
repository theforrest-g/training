function filter (allEmail, blackListEmail) {
let filteredEmail = []

for (let filterEmail of allEmail) {
if (!blackListEmail.includes (filterEmail)) {
filteredEmail.push (filterEmail)};
;
};
return (filteredEmail);
};

console.log (filter (['a', 'b', 'c', 'd', 'e', 'f', 'g'], ['b', 'e', 'a']));
export default {filter};
