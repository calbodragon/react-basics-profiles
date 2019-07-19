import React from 'react';
import ReactDOM from 'react-dom';

//Importar el componente Profile
//import Profile from './components/ProfileComponent';
import Profile from './components/ProfileComponentProps';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(<Profile />, document.getElementById('app'));
