import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Form.css'
class Form extends React.Component {
  render() {
    return (
      <div class='border rounded login container'>
        <form>
          <h1>{this.props.formName}</h1>
          <div className="row col-lg-12">
            <div className="form-group col-lg-6">
              <label for="inputNombre">{this.props.input1}</label>
              <div className="input-group pb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>
                <input className="form-control" id="inputNombre" placeholder="Nombre"></input>
              </div>
            </div>
            <div className="form-group col-lg-6">
              <label for="inputApellido">{this.props.input2}</label>
              <div className="input-group pb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>
                <input className="form-control" id="inputApellido" placeholder="Apellido"></input>
              </div>
            </div>
          </div>
          <div className="row col-lg-12">
            <div className="form-group col-lg-6">
              <label for="inputCorreo">{this.props.input3}</label>
              <div className="input-group pb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                </div>
                <input className="form-control" id="inputCorreo" placeholder="Correo"></input>
              </div>
            </div>
            <div className="form-group col-lg-6">
              <label for="inputContraseña">{this.props.input4}</label>
              <div className="input-group pb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-key icon"></i></span>
                </div>
                <input className="form-control" id="inputContraseña" placeholder="Contraseña"></input>
              </div>
            </div>
          </div>
          <div className="row col-lg-12">
            <div className="form-group col-lg-12">
              <label for="inputDireccion">{this.props.input5}</label>
              <div className="input-group pb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-home icon"></i></span>
                </div>
                <input className="form-control" id="inputDireccion" placeholder="Direccion"></input>
              </div>
            </div>
          </div>
          <div className="row col-lg-12">
            <div className="form-group col-lg-6">
              <label for="inputCiudad">{this.props.input6}</label>
              <input type="email" className="form-control" id="inputCiudad"></input>
            </div>
            <div className="form-group col-lg-2">
              <label for="inputPostal">{this.props.input7}</label>
              <input type="email" className="form-control" id="inputPostal"></input>
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="check"></input>
            <label className="form-check-label"  for="check">{this.props.check}</label>
          </div>
          <button type="submit" className="btn btn-primary">{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default Form;
