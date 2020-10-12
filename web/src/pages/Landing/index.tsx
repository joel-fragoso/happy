import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';

import { Container, Wrapper, Content, Location } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Happy Logo" />
        <Content>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Content>
        <Location>
          <strong>Monte Sião</strong>
          <span>Minas Gerais</span>
        </Location>
        <a href="/">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </Wrapper>
    </Container>
  );
};

export default Landing;
