import axios from 'axios';

const URL = 'https://mlp-demo.herokuapp.com/api/public';

export function login(email, password) {
  axios.post(`${URL}/auth/login`,
    JSON.stringify({ email, password }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('okay', response)
    })
    .catch((error) => {
      console.log('catch', error)
    })
}
