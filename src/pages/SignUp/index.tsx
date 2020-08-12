import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImage from '../../assets/logo.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  // Form Reference
  const formRef = useRef<FormHandles>(null);

  // History object
  const history = useHistory();

  // Toasts
  const { addToast } = useToast();

  // Submit Event Handler
  const handleSumbit = useCallback(
    async (data: SignUpFormData) => {
      try {
        // start with no errors
        formRef.current?.setErrors({});

        // format
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        // do validation
        await schema.validate(data, {
          abortEarly: false,
        });

        // request user creation API
        await api.post('/users', data);

        // TODO redirect to login page and show success toast
        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no GoBarber!',
        });
      } catch (err) {
        // otherwise, show all errors
        if (err instanceof Yup.ValidationError) {
          const validationErrors = getValidationErrors(err);
          formRef.current?.setErrors(validationErrors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu erro no cadastro. Tente novamente.',
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImage} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSumbit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar ao Login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
