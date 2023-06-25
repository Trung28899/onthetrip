import { useState } from "react";

interface ModalType {
  modalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const useModal = (): ModalType => {
  const [modalOpen, setModalOpen] = useState(false);

  return {
    modalOpen,
    closeModal: () => setModalOpen(false),
    openModal: () => setModalOpen(true),
  };
};

export default useModal;
