import React from 'react';
import Users from './components/userComponent/Users';
import UserPosts from './components/userComponent/userPosts';
import { Provider } from 'react-redux';
import store from './store';
import UsersFunction from './components/userComponent/UserFunction';
function App() {
  return (
    <Provider store={store}>
      <div>
        <UserPosts />
        <Users />
        <UsersFunction />
      </div>
    </Provider>
  );
}
export default App;