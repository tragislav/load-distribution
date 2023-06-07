import { useState } from 'react';
import MyModal from '../../../components/Modal';

const ButtonCellRenderer = ({ onClick }) => (
  <button onClick={onClick}>Разделение</button>
);

const ModalButtonCellRenderer = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ButtonCellRenderer onClick={openModal} />
      <MyModal data={data} isOpen={isOpen} onRequestClose={closeModal} />
    </>
  );
};

export default ModalButtonCellRenderer;
