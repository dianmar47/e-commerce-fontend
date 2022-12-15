import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    
    const navigate = useNavigate();

    const cerrarSesion = () =>{
        localStorage.removeItem("token");
        navigate("/");
      }


  return (
        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md:justify-between">
            <h2 className="inline bg-gradient-to-r bg-sky-600 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent font-weight: 700;">
                Panel de Administrador G12
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-4">
            <input 
                type="submit"
                value="Cerrar Sesión"
                className="bg-sky-600 hover:bg-sky-800 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer transition-colors"
                onClick={cerrarSesion}
            />
            </div>
            </div>
        </header>
    );
}

export default Header;