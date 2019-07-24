import React from 'react';
import ReactDOM from 'react-dom';
//importar bootstrap, recuerda hacer npm install bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css';

import ProfileNew from './pages/ProfileNewComponent';

const container = document.getElementById('app');


ReactDOM.render(<ProfileNew/> , container);