import React from 'react';
import { render } from 'react-dom';
import App from './App';

const RenderApp = () => {
  render(<App />, document.getElementById('app'));
};
RenderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    RenderApp();
  });
}
