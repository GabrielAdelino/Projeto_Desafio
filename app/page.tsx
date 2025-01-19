"use client";

import Aviso from "@/components/aviso";
import Etapas from "@/components/Etapas";
import Item1 from "@/components/item1";
import Item2 from "@/components/card2";
import Sidebar from "@/components/sidebar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../components/App.css';
import SidebarAviso from "@/components/sidebarAviso";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />
        <Etapas />
        {/* Rotas da sidebar */}
        <Routes>
          <Route path="/menu1" element={<SidebarAviso />} />
          <Route path="/menu2" element={<Item1 />} />
          <Route path="/menu3" element={<SidebarAviso />} />
          <Route path="/menu4" element={<SidebarAviso />} />
          <Route path="/menu5" element={<SidebarAviso />} />
          <Route path="/menu6" element={<SidebarAviso />} />

          {/*Rotas para o menu itens */}
          <Route path="/passo1" element={<Item1 />} />
          <Route path="/passo2" element={<Item2 />} />
          <Route path="/passo3" element={<Aviso />} />
          <Route path="/passo4" element={<Aviso />} />
          <Route path="/passo5" element={<Aviso />} />
          <Route path="/passo6" element={<Aviso />} />
          <Route path="/passo7" element={<Aviso />} />
          <Route path="/passo8" element={<Aviso />} />
          <Route path="/passo9" element={<Aviso />} />
        </Routes>

        {/* <div>
            <img src={"/assets/elementos.png"} className="Image"/>
        </div> */}

      </div>
    </BrowserRouter>
  );
}
