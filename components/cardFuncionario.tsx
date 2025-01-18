import { Button, Popover } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const cardFuncionario = () => {
    const [usuario, setUsuario] = useState({
        id: '0',
        nome: "Daniel Alves da Silva",
        cpf: "000.000.000-99",
        status: "Ativo",
        cargo: "Cargo 1",
    });

    const handleEdit = (id: string) => {
        // chamada para edição/excluão
    };

const popoverContent = (id: string) => (
    <div>
            <Button type="link" onClick={() => handleEdit(id)}>Editar</Button>
            <Button type="link">Excluir</Button> logica futura: {/*danger onClick={() => handleDelete(id)}*/}
        </div>
    );


return (
    
    <div key={usuario.id} className="card-funcionario">
    <div className="info">
        <p className="user-name p-margin">Nome: {usuario.nome}</p>
        <div className="user-details">
            <p className="user-cpf p-margin">CPF: {usuario.cpf}</p>
            <p className="user-status p-margin">Status: {usuario.status === 'Ativo' ? 'Ativo' : 'Inativo'} </p>
            <p className="user-cargo p-margin">Cargo: {usuario.cargo}</p>
        </div>
    </div>
    <div className="barra-direita">
        <Popover content={popoverContent(usuario.id)} trigger="click">
            <div className="elemento-barra">
                <div className="elemento-barra">
                    ...
                </div>
            </div>
        </Popover>
    </div>
</div>
 );
};
export default cardFuncionario;