import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 500,
  },
};

function MyModal({ data, isOpen, onRequestClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button onClick={onRequestClose}>Закрыть</button>
      <p>{data && data.idSpeciality}</p>
    </Modal>
  );
}

export default MyModal;
