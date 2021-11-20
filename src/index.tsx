import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { App } from './components/app/app';
import store from './store';
import ReactDOM from 'react-dom';
import ErrorBoundry from './components/error-indicator/error-boundry/error-boundry';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
          <HashRouter>
            <App />
          </HashRouter>
      </ErrorBoundry>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);