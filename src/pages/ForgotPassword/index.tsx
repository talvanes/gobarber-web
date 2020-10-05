import React, { useRef, useCallback, useState } from 'react';
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
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  // Loading state
  const [loading, setLoading] = useState(false);

  // Form Reference
  const formRef = useRef<FormHandles>(null);

  // Hook: toast (toast notifications)
  const { addToast } = useToast();

  // Submit Event Handler
  const handleSumbit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        // now, it is loading
        setLoading(true);

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
        await api.post('/password/forgot', {
          email: data.email,
        });

        // show success message
        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description:
            'Enviamos e-mail para confirmar a recuperação de senha. Verifique sua caixa de entrada.',
        });
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
      } finally {
        // Finally, it stopped loading
        setLoading(false);
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

            <Button loading={loading} type="submit">
              Entrar
            </Button>
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
