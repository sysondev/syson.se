import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css';
import './index.css';
import ScrollToTop from './ScrollToTop'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

console.log('%c👻', 'font-size: 100px')
console.log('%cTja! Fan vad kul att se dig här. Ser det OK ut tycker du eller är det bara massa fulhack? Messa till 073-047 34 41 och säg vad du tycker! 👍', 'color: pink; font-size: 12px;')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
