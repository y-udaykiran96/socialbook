import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './assets/css/style.css'
import './assets/css/animate.css'
// import './assets/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/line-awesome.css'
import './assets/css/line-awesome-font-awesome.min.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/jquery.mCustomScrollbar.min.css'
// import './assets/lib/slick/slick.css'
import "slick-carousel/slick/slick.css";
// import './assets/lib/slick/slick-theme.css'
import "slick-carousel/slick/slick-theme.css";
import './assets/css/responsive.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
