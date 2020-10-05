import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImage from '../../assets/logo.svg';

import { Container, Content, AnimationContainer, Background } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  // Form Reference
  const formRef = useRef<FormHandles>(null);

  // Hook: toast (toast notifications)
  const { addToast } = useToast();

  // Submit Event Handler
  const handleSumbit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        // start with no errors
        formRef.current?.setErrors({});

        // format
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        // do validation
        await schema.validate(data, {
          abortEarly: false,
        });

        // recover password

        // head for dashboard
        // history.push('/dashboard');
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
          title: 'Erro na recuperação de senha. Tente novamente.',
          description: 'Ocorreu um erro ao tentar recuperar a senha.',
        });
      }
    },
    [addToast]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImage} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSumbit}>
            <h1>Recuperação de Senha</h1>

            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />

            <Button type="submit">Entrar</Button>
          </Form>

          <Link to="/">
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
