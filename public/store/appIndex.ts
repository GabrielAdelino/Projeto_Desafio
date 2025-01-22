import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Usuario } from "@/services/api"; // Certifique-se de que o tipo `Usuario` está correto e exportado.

interface UsuariosState {
  usuarios: Usuario[];
  usuarioSelecionado: Usuario | null;
}

const initialState: UsuariosState = {
  usuarios: [], // Lista de usuários
  usuarioSelecionado: null, // Usuário atual para edição
};

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    setUsuarios(state, action: PayloadAction<Usuario[]>) {
      state.usuarios = action.payload; // Define a lista de usuários
    },
    setUsuarioSelecionado(state, action: PayloadAction<Usuario | null>) {
      state.usuarioSelecionado = action.payload; // Define o usuário para edição
    },
    atualizarUsuario(state, action: PayloadAction<Usuario>) {
      const index = state.usuarios.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.usuarios[index] = action.payload; // Atualiza o usuário no array
      }
    },
  },
});

export const { setUsuarios, setUsuarioSelecionado, atualizarUsuario } = usuariosSlice.actions;
export default usuariosSlice.reducer;
