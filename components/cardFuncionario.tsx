import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { deletarUser, listarUser, Usuario } from "@/services/api";
import { setUsuarioSelecionado } from "@/public/store/appIndex";
import { useDispatch } from "react-redux";
import { Button, Popover } from "antd";

const CardFuncionario: React.FC = () => {
  console.log("Componente montado");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]); // Armazena a lista de usuários
  const [loading, setLoading] = useState(false); // Para gerenciar estado de carregamento

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const usuariosObtidos = await listarUser();
      console.log(usuariosObtidos);
      const usuariosUnicos = Array.from(
        new Map(usuariosObtidos.map((usuario) => [usuario.id, usuario])).values()
      );

      setUsuarios(usuariosUnicos);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletarUser(id);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error("Não foi possível deletar o usuário:", error);
    }
  };

  const handleEdit = (usuario: Usuario) => {
    dispatch(setUsuarioSelecionado(usuario)); // Armazena o usuário no estado global
    navigate("/editar"); // Redireciona para a página de edição
  };

  const popoverContent = (id: string) => (
    <div>
      <Button
        type="link"
        onClick={() => handleEdit(usuarios.find((u) => u.id === id)!)}
      >
        Editar
      </Button>
      <Button type="link" danger onClick={() => handleDelete(id)}>
        Excluir
      </Button>
    </div>
  );

  useEffect(() => {
    fetchUsuarios(); // Busca os usuários ao montar o componente
  }, []);

  return (
    <div>
      {loading ? (
        <p>Carregando usuários...</p>
      ) : (
        usuarios.map((usuario) => (
          <div key={usuario.id} className="card-funcionario">
            <div className="info">
              <p className="user-name">{usuario.nome}</p>
              <div className="user-details">
                <p className="user-cpf">{usuario.cpf}</p>
                <p className="user-status">
                  Status: {usuario.ativo ? "Ativo" : "Inativo"}
                </p>
                <p className="user-cargo">Cargo: {usuario.cargo}</p>
              </div>
              <div className="barra">
                <Popover
                  content={popoverContent(usuario.id || "")}
                  trigger="click"
                >
                  <div className="tres-pontos">...</div>
                </Popover>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardFuncionario;
