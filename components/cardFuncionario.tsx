import { Button, Popover } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { deletarUser, listarUser, Usuario } from "@/services/api";

const cardFuncionario = () => {
    console.log("Componente montado");
    const [usuarios, setUsuarios] = useState<Usuario[]>([]); // Armazena a lista de usuários
    const [loading, setLoading] = useState(false); // Para gerenciar estado de carregamento

    const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const usuariosObtidos = await listarUser();
      console.log(usuariosObtidos);
      // Remove usuários duplicados baseado no ID
      // Filtra duplicatas pelo ID
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
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
    } catch (error) {
        console.error('Não foi possivel deletar o usuário:', error);
    }
};



    const handleEdit = (id: string) => {
        // chamada para edição/excluão
    };

const popoverContent = (id: string) => (
    <div>
            <Button type="link" onClick={() => handleEdit(id)}>Editar</Button>
            <Button type="link" danger onClick={() => handleDelete(id)}>Excluir</Button>
        </div>
    );

    useEffect(() => {
        fetchUsuarios();
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
              <p className="user-status">{usuario.ativo ? "Ativo" : "Inativo"}</p>
              <p className="user-cargo">{usuario.cargo}</p>
            </div>
            <div className="barra">
              <Popover content={popoverContent(usuario.id || "")} trigger="click">
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
export default cardFuncionario;