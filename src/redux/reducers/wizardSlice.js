import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wizardCart: [],
};

export const wizardSlice = createSlice({
  name: "wizard",
  initialState,
  reducers: {
    addWizardCart: (state, { payload }) => {
      state.wizardCart = [...state.wizardCart, payload];
    },
    setWizardCart: (state, { payload }) => {
      state.wizardCart = payload;
    },
    resetWizard: () => initialState
  },
});

export const { addWizardCart, setWizardCart, resetWizard } = wizardSlice.actions;

export default wizardSlice.reducer;
