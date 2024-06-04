"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./agua.png";
import "./house.png";
import "./pasto.png";
import "./work.png";

export default function Grid() {
  const [dinero, setDinero] = useState(100);
  const [modoActual, setModoActual] = useState("");
  const [cuadros, setCuadros] = useState(
    Array(400).fill({ tipo: "", tiempoRestante: null })
  );

  const actualizarEventos = (index: number, tipo: any) => {
    if (modoActual === "casa") {
      handleCuadroClick(index);
    } else if (modoActual === "mesa") {
      handleMesaClick(index);
    }
  };

  const handleCuadroClick = (index: number) => {
    if (modoActual !== "casa") return;
    if (cuadros[index].tipo === "mesa") return;

    const nuevosCuadros = [...cuadros];
    if (cuadros[index].tipo === "casa") {
      nuevosCuadros[index] = { tipo: "", tiempoRestante: null };
      setDinero(dinero + 10);
    } else if (dinero >= 10) {
      nuevosCuadros[index] = { tipo: "casa", tiempoRestante: null };
      setDinero(dinero - 10);
    }
    setCuadros(nuevosCuadros);
  };

  const handleMesaClick = (index: number) => {
    if (modoActual !== "mesa") return;
    if (cuadros[index].tipo === "casa") return;

    const nuevosCuadros = [...cuadros];
    if (cuadros[index].tipo === "mesa") {
      nuevosCuadros[index] = { tipo: "", tiempoRestante: null };
      setDinero(dinero + 30);
    } else if (dinero >= 30) {
      nuevosCuadros[index] = { tipo: "mesa", tiempoRestante: 600 };
      setDinero(dinero - 30);

      const timer = setInterval(() => {
        setCuadros((prevCuadros) => {
          const updatedCuadros = [...prevCuadros];
          if (updatedCuadros[index].tiempoRestante > 0) {
            updatedCuadros[index].tiempoRestante -= 1;
          } else {
            clearInterval(timer);
            setDinero((prevDinero) => prevDinero + 20);
          }
          return updatedCuadros;
        });
      }, 1000);
    }
    setCuadros(nuevosCuadros);
  };

  return (
    <div
      className="bg-green-500 border-0 border-b-50 border-b-blue-500 box-border h-full w-full grid grid-cols-20 grid-rows-20 relative"
      style={{ borderImage: "url('agua.png') 50 round" }}
    >
      <div className="absolute top-0 left-0 text-white text-lg -mt-5 -ml-5">
        Recursos: <span>{dinero}♦</span>
      </div>
      <button
        className="absolute bottom-0 left-0 mb-10 ml-2 py-2 px-4 bg-red-500 text-white border-none cursor-pointer"
        onClick={() => setModoActual("casa")}
      >
        Agregar Casa (10♦)
      </button>
      <button
        className="absolute bottom-0 left-0 mb-10 ml-40 py-2 px-4 bg-gray-500 text-white border-none cursor-pointer"
        onClick={() => setModoActual("mesa")}
      >
        Agregar Recolector (30♦)
      </button>
      {cuadros.map((cuadro, index) => (
        <div
          key={index}
          className={`border border-gray-300 relative overflow-hidden cursor-pointer ${
            cuadro.tipo === "casa" ? "bg-none" : ""
          } ${cuadro.tipo === "mesa" ? "bg-none" : ""}`}
          style={{
            backgroundImage: cuadro.tipo === "" ? "url(pasto.png)" : "none",
          }}
          onClick={() => actualizarEventos(index, cuadro.tipo)}
        >
          {cuadro.tipo === "casa" && (
            <img
              src="house.png"
              alt="Casa"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
            />
          )}
          {cuadro.tipo === "mesa" && (
            <img
              src="work.png"
              alt="Mesa"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
            />
          )}
          {cuadro.tiempoRestante !== null && (
            <div className="absolute top-2 left-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded">
              {cuadro.tiempoRestante > 0
                ? `${Math.floor(cuadro.tiempoRestante / 60)}:${
                    cuadro.tiempoRestante % 60 < 10 ? "0" : ""
                  }${cuadro.tiempoRestante % 60}`
                : "Ganancia!"}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
