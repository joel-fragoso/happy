import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Happy Logo" />
    </Container>
  );
};

export default Landing;
