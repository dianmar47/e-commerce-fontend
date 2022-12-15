import React from "react";
import { Link  } from 'react-router-dom';

const Sidebar = () => {
  
  return (
        <aside className="md:w-80 lg:w-60 px-5 py-10 bg-slate-500">
            
            
             <Link
                className="bg-sky-600 hover:bg-sky-800 mb-5 w-full py-3 px-3 text-white uppercase font-bold rounded border-white hover:cursor-pointer transition-colors"
                to={"/crear-categoria"}
            >
        Crear Categoria
      </Link>


      
      
        </aside>
    );
}

export default Sidebar;