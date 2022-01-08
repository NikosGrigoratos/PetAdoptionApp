import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "./features/petsSlice"
import reduxLogger from "redux-logger";
import { petApi } from "./features/petApiSlice";


export const store = configureStore({
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    pets: petsReducer,
    [petApi.reducerPath]: petApi.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
