export const loadUsers = async (limit) => {
  const inc = ['gender', 'name', 'dob', 'nat', 'id', 'location', 'fone', 'email', 'picture' ];
  const arr =  inc.join(',');

  
  
  const data = await fetch(`
  https://randomuser.me/api/?results=${limit}&inc=${arr}&pages=1`
  )
  .then(response => response.json())
  .then(data => data.results )
  .catch(error => console.log(error));

  return data
}


