import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

//Api KEY XbHW1jfExLXpJDEcWz9yz9c90KdDMbDu

export const GifSearchApp = () => {
  const [categorias, setCategorias] = useState([]);

  const onAddCategory = (newCategory) => {
    //si la categoria a insertar ya existe no la inserta
    if (categorias.includes(newCategory)) return;

    // Agregar algo a las categorias
    //el push no le gusta a react porque cambia el array, no se
    // setCategorias(categorias.concat(newCategory));
    //mas formas de hacer esto
    setCategorias([newCategory, ...categorias])
    // setCategorias(cat => [...cat, 'Vinland Saga'])
  };

  return (
    <>

      {/* Titulo */}
      <h1>GifSearchApp</h1>

      {/* Input */}
      {/* Se pueden enviar funciones como props */}
      <AddCategory
        //setCategorias={setCategorias}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado de GIFs */}
      {categorias.map((keyCategory) => (
        <GifGrid key={keyCategory} categoria={keyCategory} />
      ))}

    </>
  );
};
