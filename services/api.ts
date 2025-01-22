

const URL = 'http://localhost:3080/usuarios';

export interface Usuario {
    id?: string;
    ativo: boolean;
    nome: string;
    genero: string;
    cpf: string;
    dataNascimento: string;
    rg: string;
    cargo: string;
    
    usaEpi: boolean;
    atividade: string;
    epi: string;
    numeroCa: string;
    arquivo: string;
}

export const criarUser = async (usuario: Usuario): Promise<Usuario> => {
    console.log("Dados enviados:", usuario);
    const resposta = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    });

    if (resposta.ok) {
        return await resposta.json();
    } else {
        throw new Error('Não foi possivel criar usuario');
    }
};

export const listarUser = async (): Promise<Usuario[]> => {
    const resposta= await fetch(URL);

    if (resposta.ok) {
        return await resposta.json();
    } else {
        throw new Error('Não foi possivel listar os usuários');
    }
};

export const atualizarUser = async (id: number, usuarioAtualizado: Usuario): Promise<Usuario> => {
    const response = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuarioAtualizado)
    });

    if (response.ok) {
        return await response.json();
    } else {
        const errorMessage = await response.text();
    console.error("Erro ao atualizar usuário:", errorMessage);
    throw new Error('Não foi possível atualizar o usuário');
    }
};

export const deletarUser = async (id: string): Promise<void> => {
    const resposta = await fetch(`${URL}/${id}`, {
        method: 'DELETE'
    });

    if (!resposta.ok) {
        throw new Error('Nõa foi possivel deletar o usuário');
    }
};