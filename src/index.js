import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Form
                  formName='Registro Personal'
                  input1='Primer Nombre'
                  input2='Apellido'
                  input3='Correo Electrónico'
                  input4='Contraseña'
                  input5='Dirección'
                  input6='Ciudad'
                  input7='Código Postal'
                  check='Estoy de acuerdo con el registro de mis datos personales.'
                  buttonName='Guardar'
                />, document.getElementById('root'));
serviceWorker.unregister();
