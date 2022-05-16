import { useState, useEffect } from "react";
import * as LoginServer from "./LoginServer";
import { useHistory, useParams } from "react-router";

// ========= inicio del componente CompanyForm=========
const userForm = () => {
  // uso de importaciones como variables para usar en el componente
  const history = useHistory();
  const params = useParams();
  // termino de uso de importaciones como variables para usar en el componente

  // ========= Hook para controlar el estado de los inputs =========

  const initialState = { id: 0, email: "", name: "", password: "" };
  const [user, setUser] = useState(initialState);

  // ========= termino de Hooks para controlar el estado de los inputs =========

  // esto es para que se ejecute cuando se cargue la pagina y se cargue el formulario, haciendo que se escriba lo que esta en el state inicial
  const handleInputChange = (r) => {
    // esto se ejecuta cada vez que se dentro escribe en el input
    setUser({ ...user, [r.target.name]: r.target.value });
  };

  // esta es la funcion para crear una nueva compañia
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await LoginServer.registrarUsuario(user);
        const data = await res.json();

        console.log(data);
        // esta comprobacion se encarga de coprobar la respuesta
        if (data.message === "Success") {
            setUser(initialState);
        }
      } else {
          await LoginServer.actualizarUsuario(params.id, user);
      }
      // esto es para que se redireccione a la pagina de la empresa
      history.push("/");
    } catch (error) {
      // en caso de error, arrojara esto
      console.log(error);
    }
  };

  const getUsuario = async (userId) => {
    try {
      const res = await LoginServer.getUsuario(userId);
      const data = await res.json();
      console.log(data);
      const { email, name, password } = data.user;
      setUser({ email, name, password });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
        getUsuario(params.id);
    }
    // eslint-disble-next-line
  }, []);

  // estructura del codigo
  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center">Registrar usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="form-control"
            minLength="2"
            maxLength="50"
            autoFocus
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="d-grid gap-2">
          {params.id ? (
            <button type="submit" className="btn btn-block btn-primary">
              Update
            </button>
          ) : (
            <button className="btn btn-block btn-success">Registrar</button>
          )}
        </div>
      </form>
    </div>
  );
};
// ========= fin del componente CompanyForm =========

// siempre que se exporte un componente, se debe exportarlo con el nombre de la variable y el default
export default userForm;
