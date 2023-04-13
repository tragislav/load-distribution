import styled from 'styled-components';

export const LoginContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #9a9c9c;
  width: 100%;
  margin-top: 90px;
  display: flex;
  justify-content: center;
`;

export const LoginFormWrapper = styled.div`
  width: 465px;
  text-align: center;
  border: 2px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 2px 8px 15px rgb(201 201 201 10%);
  border-radius: 10px;
  position: relative;
`;

export const LoginFormTitle = styled.h3`
  font-family: 'Montserrat';
  padding-top: 50px;
  font-weight: 500;
  font-size: 23px;
  line-height: 120%;
  color: #434c63;
`;

export const LoginForm = styled.form`
  text-align: left;
  padding: 35px 50px;
`;

export const LoginFormInput = styled.input`
  width: 100%;
  height: 55px;
  padding-left: 20px;
  box-sizing: border-box;
  box-shadow: 2px 8px 15px rgb(201 201 201 10%);

  &:nth-child(2) {
    margin-bottom: 25px;
    margin-top: 25px;
  }
`;

export const LoginFormSubmit = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background: #434c63;
  box-shadow: 2px 8px 15px rgb(201 201 201 10%);
  border: transparent;
  border-radius: 7px;
  width: 100%;
  height: 52px;
  color: #ffffff;
  margin-top: 10px;
  transition: 0.2s all linear;

  &:disabled {
    color: #808080;
    background: #ededed;
  }

  &:hover:enabled {
    box-shadow: 0px 17px 15px -11px rgba(67, 76, 99, 0.2);
    cursor: pointer;
    font-weight: 500;
    background: #373e51;
  }
`;
