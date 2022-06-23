import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import Info from '../components/country/country';

describe('info Component test', () => {
  it('Renders Info link', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Info />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
