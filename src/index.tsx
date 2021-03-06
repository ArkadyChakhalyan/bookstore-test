import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './components/app/app';
import { store } from './store';
import ReactDOM from 'react-dom';
import ErrorBoundry from './components/error-indicator/error-boundry/error-boundry';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <ErrorBoundry>
          <App />
        </ErrorBoundry>
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);