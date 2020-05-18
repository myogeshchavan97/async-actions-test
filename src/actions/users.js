import axios from 'axios';

export const initiateAddUsers = () => {
  return (dispatch) => {
    return axios.get('/users').then((response) => {
      return dispatch(addUsers(response.data.results));
    });
  };
};

export const addUsers = (users) => {
  return {
    type: 'ADD_USERS',
    users
  };
};
