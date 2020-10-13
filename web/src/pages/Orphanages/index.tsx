import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { Container, Sidebar, Map } from './styles';

const Orphanages: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <header>
          <img src={mapMarkerImg} alt="Happy Logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criançãs estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Monte Sião</strong>
          <span>Minas Gerais</span>
        </footer>
      </Sidebar>
      <Map />
      <Link to="/">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default Orphanages;
