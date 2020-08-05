import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImage from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImage} alt="GoBarber"/>

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar ao Login
      </a>
    </Content>
  </Container>
);

export default SignIn;
