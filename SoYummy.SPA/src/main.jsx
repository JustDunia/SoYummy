import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './components/App';
import PrivateRoute from './service/routes/PrivateRoute';
import RestrictedRoute from './service/routes/RestrictedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename={'SoYummy'}>
        <Routes>
          <Route path="/" element={<App />} />
          <PrivateRoute path="/private" component={PrivateRoute} redirectTo="/login" />
          <RestrictedRoute path="/restricted" component={RestrictedRoute} redirectTo="/forbidden" />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);