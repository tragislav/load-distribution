import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreateObjectsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 40px;
`;

export const CreateObjectInput = styled.input`
  padding-left: 15px;
  width: 182px;
  margin-right: 20px;
`;

export const ModalMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const MainItem = styled.div`
  margin-right: 20px;
`;

export const MainItemInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 5px 0;
`;

export const MainItemInnerTitle = styled.p`
  font-family: 'Montserrat';
  padding-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #434c63;
  padding-right: 10px;
`;

export const MainItemInnerText = styled.p`
  font-family: 'Montserrat';
  padding-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #282c35;
`;

export const MainItemInnerInput = styled.input`
  width: 182px;
  padding-left: 15px;
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ModalBtn = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  background: #434c63;
  box-shadow: 2px 8px 15px rgb(201 201 201 10%);
  border: transparent;
  border-radius: 7px;
  color: #ffffff;
  transition: 0.2s all linear;
  height: ${({ height = 40 }) => height}px;
  width: ${({ width = 100 }) => width}px;
`;
