import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    let obj = {};

    const data = [
      "nombre",
      "apellido",
      "tipoId",
      "id",
      "correo",
      "telefono",
      "contrasena",
      "confirmacionContrasena",
    ];

    data.forEach((item) => {
      obj[item] = event.target[item].value;
    });
    console.log(obj);
    // props.history.push("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-2">
      <div className="card m-4 p-4">
        <div className="card-body p-0">
          <form className="m-3" onSubmit={handleSubmit}>
            <h2 className="pb-5">Registro</h2>
            <div className="form-row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="inputNombre">Ingresa tu nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="inputNombre"
                  name="nombre"
                />
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="inputApellido">Ingresa tu apellido</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  id="inputApellido"
                  name="apellido"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="tipo_id">Tipo de Identificación</label>
                <select
                  className="form-control mr-2"
                  id="tipo_id"
                  name="tipoId"
                >
                  <option value="CC">Cedula de Ciudadanía</option>
                  <option value="CE">Cédula de extranjería</option>
                  <option value="PA">Pasaporte</option>
                </select>
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="inputIdentificacion">
                  Ingresa tu identificación
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Identificación"
                  id="inputIdentificacion"
                  name="id"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12 col-md-12">
                <label htmlFor="inputTelefono">Ingresa tu teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Teléfono"
                  id="inputTelefono"
                  name="telefono"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-12 col-md-12">
                <label htmlFor="emailInput">Ingresa tu correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa tu correo"
                  name="correo"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12 col-md-6">
                <label htmlFor="passwordInput">Ingresa tu contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Ingresa tu contraseña"
                  name="contrasena"
                />
              </div>
              <div className="form-group col-12 col-md-6">
                <label htmlFor="passwordConfirmationInput">
                  Confirma tu contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirmationInput"
                  placeholder="Confirma tu contraseña"
                  name="confirmacionContrasena"
                />
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-4">
              <button
                type="submit"
                className="btn btn-primary px-5 register_submit_btn"
              >
                Enviar
              </button>
              <Link to="/login">
                <p className="register_to_login">¿Ya tienes una cuenta?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
