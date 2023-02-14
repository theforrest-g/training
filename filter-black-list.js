<<<<<<< HEAD
function filter(allEmail, blackListEmail) {
  let filteredEmail = [];

  for (let filterEmail of allEmail) {
    if (!blackListEmail.includes(filterEmail)) {
      filteredEmail.push(filterEmail);
    }
  }
  return filteredEmail;
}

console.log(filter(['1', '2', '3', '4', '5'], ['3', '4']));
export default filter;
=======
function filter(allEmail, blackListEmail) {
  let filteredEmail = [];

  for (let filterEmail of allEmail) {
    if (!blackListEmail.includes(filterEmail)) {
      filteredEmail.push(filterEmail);
    }
  }
  return filteredEmail;
}

console.log(filter(['1', '2', '3', '4', '5'], ['3', '4']));
export default filter;
>>>>>>> 38473b5613b30655716e963ab8d314e626e37ed9
