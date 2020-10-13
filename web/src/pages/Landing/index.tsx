import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/orphanages">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Landing;
