import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import mapIcon from '../../utils/mapIcon';
import mapMarkerImg from '../../assets/images/map-marker.svg';
import api from '../../services/api';

import { Container, Sidebar } from './styles';

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const Orphanages: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/orphanages');

      setOrphanages(response.data);
    })();
  }, []);

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
        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>
      <Link to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default Orphanages;
