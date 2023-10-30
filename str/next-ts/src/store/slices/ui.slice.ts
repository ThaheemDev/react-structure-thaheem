import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// please add your new modals into the enum type
export enum modalType {
  "none",
  "test",
}

interface UiState {
  modal: modalType | false;
  modalState: unknown;
}

const initialState: UiState = {
  modal: false,
  modalState: null,
};

export const uiSlice = createSlice({
  name: "userInterface",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.modal = false;
      state.modalState = null;
    },
    updateModalAndState: (
      state,
      action: PayloadAction<{ type: modalType; state: unknown }>
    ) => {
      state.modal = action.payload.type;
      state.modalState = action.payload.state;
    },
  },
});

export const { closeModal, updateModalAndState } = uiSlice.actions;
export default uiSlice.reducer;
