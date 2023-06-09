import { useState } from 'react';
import Modal from 'react-modal';

import { splitWorkload } from '../../api/load';
import { useAuth } from '../../hooks/useAuth';

// import './styled.css';
import {
  CreateObjectInput,
  CreateObjectsWrapper,
  MainItem,
  MainItemInner,
  MainItemInnerInput,
  MainItemInnerText,
  MainItemInnerTitle,
  ModalBtn,
  ModalFooter,
  ModalHeader,
  ModalMain,
} from './styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 550,
  },
};

function MyModal({ data, isOpen, onRequestClose }) {
  const { user } = useAuth();
  const [numObjects, setNumObjects] = useState(null);

  const [newObjects, setNewObjects] = useState([]);

  function handleNumObjectsChange(e) {
    setNumObjects(e.target.value);
  }

  function createNewObjects() {
    const initialNewObjects = Array.from({ length: numObjects }, (_, index) => {
      const newObj = { ...data };
      if (index !== 0) {
        delete newObj.id; // Удаляем поле id из всех объектов, кроме первого
      }
      return newObj;
    });

    // Устанавливаем числовые значения на 0
    initialNewObjects.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (key === 'id') return; // Пропускаем поле id
        if (typeof obj[key] === 'number') {
          obj[key] = 0;
        }
      });
    });

    setNewObjects(initialNewObjects);
  }

  function handleNewObjectInputChange(index, key, e) {
    const updatedNewObjects = [...newObjects];
    updatedNewObjects[index][key] = parseFloat(e.target.value, 10) || 0;
    setNewObjects(updatedNewObjects);
  }

  function handleSubmit() {
    let isValid = true;

    Object.keys(data).forEach((key) => {
      if (key === 'id') return; // Пропускаем поле id
      if (typeof data[key] === 'number') {
        const sum = newObjects.reduce((acc, obj) => acc + obj[key], 0);

        if (sum !== data[key]) {
          isValid = false;
        }
      }
    });

    if (isValid) {
      console.log(newObjects);
      splitWorkload(newObjects, user.access_token)
        .then((data) => console.log('GREAT', data))
        .catch((e) => console.error9e);
    } else {
      console.log('Сумма значений не равна исходному объекту');
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <ModalHeader>
        <CreateObjectsWrapper>
          <CreateObjectInput
            type="number"
            value={numObjects}
            onChange={handleNumObjectsChange}
          />
          <ModalBtn width={150} onClick={createNewObjects}>
            Создать объекты
          </ModalBtn>
        </CreateObjectsWrapper>
        <ModalBtn width={100} onClick={onRequestClose}>
          Закрыть
        </ModalBtn>
      </ModalHeader>
      <ModalMain>
        <MainItem>
          {/* <h2>Исходный объект</h2> */}
          {Object.keys(data).map((key) => {
            if (key === 'id' || typeof data[key] !== 'number') return null;
            return (
              <MainItemInner key={key}>
                <MainItemInnerTitle>{key}:</MainItemInnerTitle>
                <MainItemInnerText>{data[key]}</MainItemInnerText>
              </MainItemInner>
            );
          })}
        </MainItem>
        {newObjects.map((obj, index) => (
          <MainItem key={index}>
            {Object.keys(obj).map((key) => {
              if (key === 'id' || typeof obj[key] !== 'number') return null; // Не отображаем инпут для поля id
              return (
                <MainItemInner key={key}>
                  <MainItemInnerTitle>{key}:</MainItemInnerTitle>
                  {typeof obj[key] === 'number' ? (
                    <MainItemInnerInput
                      type="number"
                      step="0.01"
                      value={obj[key]}
                      onChange={(e) =>
                        handleNewObjectInputChange(index, key, e)
                      }
                    />
                  ) : (
                    obj[key]
                  )}
                </MainItemInner>
              );
            })}
          </MainItem>
        ))}
      </ModalMain>
      <ModalFooter>
        <ModalBtn width={250} onClick={handleSubmit}>
          Проверить и сохранить
        </ModalBtn>
      </ModalFooter>
    </Modal>
  );
}

export default MyModal;
