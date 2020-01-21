import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
class App extends React.Component {
  render() {
    return (
      <div class='border rounded login m-5 container'>
        <form>
          <h1>Formulario en React</h1>
          <div className="row form-group col-lg-12">
            <div className="form-group col-lg-6">
              <label for="inputCiudad">Primer Nombre</label>
              <label className="sr-only" for="formInputGroup"></label>
              <div className="input-group col-lg">
                <div className="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" className="form-control" id="formInputGroup" placeholder="Primer Nombre"></input>
              </div>
            </div>
          </div>

          <div className="row">
            <label className="sr-only" for="formInputGroup"></label>
            <div className="input-group col-lg-6">
              <div className="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" className="form-control" id="formInputGroup" placeholder="Primer Nombre"></input>
            </div>
            <label className="sr-only" for="formInputGroup"></label>
            <div className="input-group col-lg-6">
              <div className="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" className="form-control" id="formInputGroup" placeholder="Primer Nombre"></input>
            </div>
          </div>

          <div className="row col-lg-12">
            <div className="form-group col-lg-6">
              <label for="inputCiudad">Ciudad</label>
              <input type="email" className="form-control" id="inputCiudad"></input>
            </div>
            <div className="form-group col-lg-2">
              <label for="inputPostal">Código Postal</label>
              <input type="email" className="form-control" id="inputPostal"></input>
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="check"></input>
            <label className="form-check-label"  for="check">Estoy de acuerdo con el registro de mis datos personales.</label>
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    )
  }
}



export default App;
