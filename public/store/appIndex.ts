import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AppState {
    funcionarios: { id: string; nome: string; cargo: string }[];
}
const initialState: AppState = {
    funcionarios: [],
}

const appRedux = createSlice({
	name: 'app',
	initialState,
	reducers: {
		adicionarFuncionario(state, action: PayloadAction<{ id: string; nome: string; cargo: string }>) {
			state.funcionarios.push(action.payload);
		},
		editarFuncionario(state, action: PayloadAction<{ id: string; nome: string; cargo: string }>) {
			const index = state.funcionarios.findIndex(f => f.id === action.payload.id);
			if (index >= 0) {
				state.funcionarios[index] = action.payload;
			}
		},
	},
});


export const { adicionarFuncionario, editarFuncionario } = appRedux.actions;
export default appRedux.reducer;