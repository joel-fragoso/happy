import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import 'leaflet/dist/leaflet.css';
import { Container, Sidebar } from './styles';

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
      <Map
        center={[-22.4350155, -46.5767702]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="/">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default Orphanages;
