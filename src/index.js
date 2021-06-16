import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {DataLayer} from './DataLayer';
import reducer,{initialState} from './reducer'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
