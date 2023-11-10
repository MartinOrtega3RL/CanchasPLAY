import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function Verificacion() {
  const [data, setData] = useState(null);
  const [verificado, setVerificado] = useState(null);

  if (rol === "Propietario"){
    axios
        .get(`https://canchas-play.onrender.com/getVerificacion/${user.sub}`)
        .then((response) => {
          setData(response.data[0].Verificado);
        })
        .catch((error) => {
          console.log("Error " + error);
        });
  }
  


  const { user } = useAuth0();
  const rol = user.Nombre.user_metadata.rol;
  if (rol === "" || undefined) return <Navigate to="/homePage"></Navigate>
  if (rol === "Usuario") return <Navigate to="/homeUsuario" />;

  if (rol === "Propietario" && data === 1) {
    return <Navigate to="/Complejo" />;
  } else if (rol === "Propietario" && data === 0){
    return <Navigate to="/PropValidate" />;
  }

  if (rol === "Administrador") return <Navigate to="/AdminPage" />;
}
