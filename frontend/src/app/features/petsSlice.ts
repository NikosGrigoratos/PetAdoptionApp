import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../../typings/pet";

interface PetsState {
  value: Pet[]
}

const initialState : PetsState = {
  value: []
}

export const petsSlice = createSlice({
  name: "pets",
  initialState: initialState,
  reducers: {
    addPet: (state, action: PayloadAction<Pet>) => {
      state.value.push(action.payload)
    },
  }
})

export const { addPet } = petsSlice.actions

export default petsSlice.reducer;