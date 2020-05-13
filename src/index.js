import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body {
  font-size: 8pt;
  background-color: #282c34;
  color: white;
}
.App {
  text-align: center;
  padding: 2rem;
  max-width: 1280px;
  margin: auto;
  font-size: 4rem;
  font-weight: 900;
}
@media (max-width: 768px) {
  .App {
    padding: 1rem;
  }
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
