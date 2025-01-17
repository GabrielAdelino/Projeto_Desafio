"use client";

import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Steps } from 'antd';
import { FaRegBuilding } from 'react-icons/fa';
import './App.css';
import { redirect } from 'next/dist/server/api-utils';

const { Step } = Steps;

const Etapas = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Para obter o pathname atual

    const Passos = useMemo(() => [
        { title: 'Item 1', route: '/passo1' },
        { title: 'Item 2', route: '/passo2' },
        { title: 'Item 3', route: '/passo3' },
        { title: 'Item 4', route: '/passo4' },
        { title: 'Item 5', route: '/passo5' },
        { title: 'Item 6', route: '/passo6' },
        { title: 'Item 7', route: '/passo7' },
        { title: 'Item 8', route: '/passo8' },
        { title: 'Item 9', route: '/passo9' },
    ], []);

    if (location.pathname === '/') {
        navigate('/menu2');
    }
    const selecaoAtual = Passos.findIndex(Passo => Passo.route === location.pathname);

    const AlternandoPasso = (current: number) => {
        navigate(Passos[current].route); // Navega para a rota correta
    };

    if (location.pathname !== '/menu2') {
        return null;
    }

    return (
        <div>
            <div className='div-completa'>
                <div className="container-itens">
                    <Steps current={selecaoAtual} onChange={AlternandoPasso} direction="horizontal">
                        {Passos.map((Passo) => (
                            <Step
                                key={Passo.route}
                                icon={
                                    <div className='icones1'>
                                        <FaRegBuilding className='icones2' style={{ color: '#fff' }} />
                                    </div>
                                }
                                title={Passo.title}
                            />
                        ))}
                    </Steps>
                </div>
                <div className='tracejado'></div>
            </div>
        </div>
    );
};

export default Etapas;
