import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo, </span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Agendamentos a seguir</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/11579646?s=460&u=8998fc5e45b5b686086f3313653d8dff76513fb9&v=4"
                alt="Talvanes Ferreira"
              />

              <strong>Talvanes Ferreira</strong>
              <span>
                <FiClock /> 08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/11579646?s=460&u=8998fc5e45b5b686086f3313653d8dff76513fb9&v=4"
                  alt="Talvanes Ferreira"
                />

                <strong>Talvanes Ferreira</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/11579646?s=460&u=8998fc5e45b5b686086f3313653d8dff76513fb9&v=4"
                  alt="Talvanes Ferreira"
                />

                <strong>Talvanes Ferreira</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/11579646?s=460&u=8998fc5e45b5b686086f3313653d8dff76513fb9&v=4"
                  alt="Talvanes Ferreira"
                />

                <strong>Talvanes Ferreira</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/11579646?s=460&u=8998fc5e45b5b686086f3313653d8dff76513fb9&v=4"
                  alt="Talvanes Ferreira"
                />

                <strong>Talvanes Ferreira</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
