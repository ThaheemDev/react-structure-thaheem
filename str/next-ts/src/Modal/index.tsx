import React from "react";
import Modal from "@/components/Modal";
import { useUi } from "@/hooks/user-interface";
import { modalType } from "@/store/slices/ui.slice";
import TestModal from "./test.modal";

const ModalWraper = () => {
  const { modal } = useUi();

  const AllModal = {
    [modalType.none]: <></>,
    [modalType.test]: <TestModal />, // remove the test modal or update it to your requirements
  };

  return (
    <>
      {modal && (
        <Modal>
          <>{AllModal[modal]}</>
        </Modal>
      )}
    </>
  );
};

export default ModalWraper;
