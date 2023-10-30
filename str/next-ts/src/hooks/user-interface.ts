import { useAppSelector, useAppDispatch } from "./store";
import {
  closeModal,
  modalType,
  updateModalAndState,
} from "../store/slices/ui.slice";

export const useUi = () => {
  const state = useAppSelector((state) => state.userInterface);
  const dispatch = useAppDispatch();

  const hideModal = () => dispatch(closeModal());
  const updateModal = (val: { type: modalType; state: unknown }) =>
    dispatch(updateModalAndState(val));

  return {
    ...state,
    hideModal,
    updateModal,
  };
};
