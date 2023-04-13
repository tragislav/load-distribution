import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from 'react-router-dom';

import { getToken } from '../../api/auth';
import { useAuth } from '../../hooks/useAuth';

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
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  function getFormData(object) {
    let formData = new FormData();
    Object.keys(object).forEach((key) => {
      formData.append(key, object[key]);
    });
    return formData;
  }

  const onSubmit = (data) => {
    setDisable(true);
    getToken(getFormData(data))
      .then(({ access_token, roles }) => {
        reset();
        setDisable(false);
        sessionStorage.setItem('token', JSON.stringify(access_token));
        sessionStorage.setItem('roles', JSON.stringify(roles));
        signIn({ access_token, roles }, () =>
          navigate(`/main`, {
            replace: true,
          }),
        );
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
            {...register('username')}
            type="email"
            placeholder="Ваш email"
            required
          />
          <LoginFormInput
            {...register('password')}
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
