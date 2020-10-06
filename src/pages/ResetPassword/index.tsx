import React, { useRef, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImage from '../../assets/logo.svg';

import { Container, Content, AnimationContainer, Background } from './styles';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  // Form Reference
  const formRef = useRef<FormHandles>(null);

  // Hook: toast (toast notifications)
  const { addToast } = useToast();
  // Hook: History object
  const history = useHistory();
  // Hook: Location object
  const location = useLocation();

  // Submit Event Handler
  const handleSumbit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        // start with no errors
        formRef.current?.setErrors({});

        // format
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Confirmação incorreta'
          ),
        });

        // do validation
        await schema.validate(data, {
          abortEarly: false,
        });

        // check token first
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        // and reset password
        const { password, password_confirmation } = data;

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });

        // head for sign in page
        history.push('/');
      } catch (err) {
        // otherwise, show all errors
        if (err instanceof Yup.ValidationError) {
          // validation errors
          const validationErrors = getValidationErrors(err);
          formRef.current?.setErrors(validationErrors);

          return;
        }

        // add toast
        addToast({
          type: 'error',
          title: 'Erro ao redefinir a senha',
          description: 'Ocorreu um erro ao redefinir a senha. Tente novamente.',
        });
      }
    },
    [addToast, history, location.search]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImage} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSumbit}>
            <h1>Redefinir senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
