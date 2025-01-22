import { configureStore } from "@reduxjs/toolkit";
import usuariosReducer from "./appIndex";

const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
