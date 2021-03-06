import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy Logo" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Container>
  );
};

export default Sidebar;
