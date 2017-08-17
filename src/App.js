import React from 'react';
import { Provider } from 'react-redux';
import PeopleList from './components/PeopleList';

const App = props => {
  const { store } = props;

  return (
    <Provider store={store}>
      <PeopleList />
    </Provider>
  );
};

export default App;
