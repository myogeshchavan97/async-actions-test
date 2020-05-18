import { initiateAddUsers } from '../../actions/users';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

const mockStore = configureStore([thunk]);
const usersTestData = [
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Molly',
      last: 'Lewis'
    },
    location: {
      city: 'New York'
    }
  }
];

axios.get.mockImplementationOnce(() =>
  Promise.resolve({
    data: {
      results: usersTestData
    }
  })
);

test('should test for initiateAddUsers action generator', () => {
  const store = mockStore([]); // pass initial store state to mockStore function
  store.dispatch(initiateAddUsers()).then(() => {
    const action = store.getActions()[0];

    expect(action.type).toBe('ADD_USERS');
    expect(action.users).toEqual(usersTestData);
  });
});
