import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { getToken } from '../../api/auth';

import {
  LoginContainer,
  LoginFormWrapper,
  LoginFormTitle,
  LoginForm,
  LoginFormInput,
  LoginFormSubmit,
} from './styled';
import schema from './validation';

function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const username = register('email');
  const password = register('password');

  function getFormData(object) {
    let formData = new FormData();
    Object.keys(object).forEach((key) => {
      formData.append(key, object[key]);
    });
    return formData;
  }

  const onSubmit = (data) => {
    // setDisable(true);
    let form = getFormData(data);
    for (const value of form.values()) {
      console.log(value);
    }
    getToken(getFormData(data))
      .then((data) => {
        console.log(data);
        reset();
        setDisable(true);
      })
      .catch((e) => {
        alert(e);
        setDisable(false);
      });
  };

  return (
    <LoginContainer>
      <LoginFormWrapper>
        <LoginFormTitle>Авторизация</LoginFormTitle>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginFormInput
            ref={username.ref}
            name={username.name}
            onBlur={username.onBlur}
            onChange={username.onChange}
            type="email"
            placeholder="Ваш email"
            required
          />
          <LoginFormInput
            ref={password.ref}
            name={password.name}
            onBlur={password.onBlur}
            onChange={password.onChange}
            type={isVisible ? 'text' : 'password'}
            placeholder="Ваш Пароль"
            required
          />
          <i
            className={isVisible ? 'far fa-eye fa-eye-slash' : 'far fa-eye'}
            id="togglePassword"
            onClick={() => setIsVisible(!isVisible)}
            style={{
              marginLeft: '-35px',
              cursor: 'pointer',
            }}
          />
          <LoginFormSubmit type="submit" disabled={disable}>
            Войти
          </LoginFormSubmit>
        </LoginForm>
      </LoginFormWrapper>
    </LoginContainer>
  );
}

export default Login;
