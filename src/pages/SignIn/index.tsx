import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../context/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImage from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  // Form Reference
  const formRef = useRef<FormHandles>(null);

  // Context: AuthContext (user's credentials)
  const { signIn } = useAuth();

  // Submit Event Handler
  const handleSumbit = useCallback(
    async (data: SignInFormData) => {
      try {
        // start with no errors
        formRef.current?.setErrors({});

        // format
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        // do validation
        await schema.validate(data, {
          abortEarly: false,
        });

        // and sign in
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        // otherwise, show all errors
        const validationErrors = getValidationErrors(err);

        formRef.current?.setErrors(validationErrors);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logoImage} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSumbit}>
          <h1>Faça seu Logon</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
