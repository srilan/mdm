
import axios from 'axios';
//import {apiPath} from '../base';

export const login = (email, password) => {
    console.log(email, password);  
    let formData = {
        email: email.value,
        password: password.value
    };      
    return axios.post("http://litetools-scatalinio233286.codeanyapp.com:8001/api/app/login?api_token=AA__TTTTT1111", formData)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error.message);
    });
};

const mockSuccess = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), 2000);
    });
};

const mockFailure = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 2000);
    });
};

const getAuthenticationToken = () => 'successful_fake_token';

export const getUsers = (shouldSucceed = true) => {
  const token = getAuthenticationToken();

  if (!shouldSucceed) {
    return mockFailure({ error: 401, message: 'Invalid Request' });
  }

  return mockSuccess({
    users: [
      {
        email: 'test@test.ca',
      },
      {
        email: 'test2@test.ca',
      },
    ],
  });
};