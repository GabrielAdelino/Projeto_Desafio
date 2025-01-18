"use client";

import React, { useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Steps } from "antd";
import { FaRegBuilding } from "react-icons/fa";
import "./App.css";

const { Step } = Steps;

const Etapas = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Para obter o pathname atual

  // Definição das etapas
  const Passos = useMemo(
    () => [
      { title: "Item 1", route: "/passo1" },
      { title: "Item 2", route: "/passo2" },
      { title: "Item 3", route: "/passo3" },
      { title: "Item 4", route: "/passo4" },
      { title: "Item 5", route: "/passo5" },
      { title: "Item 6", route: "/passo6" },
      { title: "Item 7", route: "/passo7" },
      { title: "Item 8", route: "/passo8" },
      { title: "Item 9", route: "/passo9" },
    ],
    []
  );

  // Redirecionar para /menu2 se estiver na raiz
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/menu2");
    }
  }, [location.pathname, navigate]);

  // Encontrar o índice do passo atual
  const selecaoAtual = Passos.findIndex(
    (Passo) => Passo.route === location.pathname
  );

  // Função para alternar o passo
  const AlternandoPasso = (current: number) => {
    navigate(Passos[current].route); // Navega para a rota correta
  };

  // Condicional para exibir o componente Etapas apenas nas rotas desejadas
  const mostrarEtapas = [
    "/menu2",
    "/passo1",
    "/passo2",
    "/passo3",
    "/passo4",
    "/passo5",
    "/passo6",
    "/passo7",
    "/passo8",
    "/passo9",
  ].includes(location.pathname);

  // Retorna null se não for uma rota de passo
  if (!mostrarEtapas) {
    return null;
  }

  return (
    <div>
      {/* Componente Etapas visível apenas nas rotas desejadas */}
      <div className="div-completa">
        <div className="container-itens">
          <Steps
            current={selecaoAtual} // Passo atual
            onChange={AlternandoPasso} // Callback para alternar passo
            direction="horizontal"
          >
            {Passos.map((Passo) => (
              <Step
                key={Passo.route}
                icon={
                  <div className="icones1">
                    <FaRegBuilding
                      className="icones2"
                      style={{ color: "#fff" }}
                    />
                  </div>
                }
                title={Passo.title}
              />
            ))}
          </Steps>
        </div>
        <div className="tracejado"></div>
      </div>
    </div>
  );
};

export default Etapas;
