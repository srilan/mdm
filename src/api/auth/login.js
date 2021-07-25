
import axios from 'axios';
import {API_KEY} from '@env';
import {SERVICE_URI} from '@env';

export const login = (email, password) => {
    let formData = {
        email: email.value,
        password: password.value
    };      
    const url = SERVICE_URI + "login?api_token=" + API_KEY
    return axios.post(url, formData);
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