import { useEffect, useState } from 'react';
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
  const [numInputs, setNumInputs] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const [message, setMessage] = useState('');

  const handleNumInputsChange = (e) => {
    if (+e.target.value > 0) {
      const newNumInputs = parseInt(e.target.value, 10);
      setNumInputs(newNumInputs);
      setInputValues(Array(newNumInputs).fill(0));
    }
  };

  const handleInputChange = (e, index) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };

  const checkSum = () => {
    const sum = inputValues.reduce((acc, val) => acc + val, 0);
    if (sum === data.countStudenty) {
      setMessage('Сумма введенных чисел равна ' + data.countStudenty);
    } else {
      setMessage('Сумма введенных чисел не равна ' + data.countStudenty);
    }
  };

  useEffect(() => {
    checkSum();
  }, [inputValues]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button onClick={onRequestClose}>Закрыть</button>
      <p>{data && data.countStudenty}</p>
      <div>
        <label>
          Количество инпутов:
          <input
            type="number"
            value={numInputs}
            onChange={handleNumInputsChange}
          />
        </label>
        <div>
          {Array.from({ length: numInputs }, (_, index) => (
            <input
              key={index}
              type="number"
              value={inputValues[index]}
              onChange={(e) => handleInputChange(e, index)}
            />
          ))}
        </div>
        <p>{message}</p>
      </div>
    </Modal>
  );
}

export default MyModal;
