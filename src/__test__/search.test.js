import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import SearchBar from '../components/search/search';

describe('SearchBar Component test', () => {
  it('Renders search Row', () => {
    const search = '';
    const handleOnChange = () => {};
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SearchBar handleOnChange={handleOnChange} value={search} />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
