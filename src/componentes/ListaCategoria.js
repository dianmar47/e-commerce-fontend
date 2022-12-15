
// import React, { useState, useEffect } from "react";
// import Header from './Header';
// import Sidebar from "./Sidebar";
// import { Link, useNavigate } from "react-router-dom";
// import crud from "../conexiones/crud";

// const [categorias1, setCategorias] = useState([]);

//     const cargarCategorias = async () => {

//         const response = await crud.GET(`/api/categorias`);
//         console.log(response);
//         setCategorias(response.categoria);

//     }

//     useEffect(() => {

//         cargarCategorias();

//     }, []);

 
// <table className="table table-bordered">

// <thead className='bg-white'>

//     <tr>

//        <th style={{ width: '75%' }}>Nombre</th>

//        <th style={{ width: '15%' }}>Opciones</th>

//     </tr>

//     </thead>
//       <tbody className="bg-white">{
//    categorias1.map(
//    item =>
//     <tr key={item._id}>
//    <td>{item.nombre}</td>
//    <td>
//   </td>

// <td>
//    <Link  >crear producto</Link>&nbsp;&nbsp;

//            <Link >Editar</Link>&nbsp;&nbsp;

//            <button  >Eliminar</button>

//            </td>

//     </tr>
// )
// }
// </tbody>

//    <tbody>

// </tbody>

// </table>