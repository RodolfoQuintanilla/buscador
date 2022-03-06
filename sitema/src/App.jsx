import axios from "axios"
import { useState, useEffect } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [usuario, setUsuario] = useState([]);
  const [tablaUsuario, setTablaUsuario] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionget = async () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsuario(res.data);
        setTablaUsuario(res.data);
      }).catch(err => {
        console.error(err);
      })
  };
  useEffect(() => {
    peticionget()

  }, []);

  return (
    <>
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Busqueda por nombre"
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="table-reponsive">
        <div className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Nombre de Usuario</th>
              <th>Correo</th>
              <th>Sitio Web</th>
              <th>Ciudad</th>
              <th>Empresa</th>
            </tr>
          </thead>

          <tbody>
            {usuario &&
              usuario.map((usua) => (

                <tr key={usua.id} >
                  <td>{usua.id}</td>
                  <td>{usua.name}</td>
                  <td>{usua.phone}</td>
                  <td>{usua.username}</td>
                  <td>{usua.email}</td>
                  <td>{usua.website}</td>
                  <td>{usua.address.city}</td>
                  <td>{usua.company.name}</td>
                </tr>
              ))}
          </tbody>
        </div>
      </div>
    </ >
  )
}

export default App
