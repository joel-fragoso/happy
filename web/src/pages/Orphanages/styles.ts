import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;

  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;

    strong {
      font-weight: 800;
    }
  }

  .leaflet-container {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      width: 40px;
      height: 40px;
      background-color: #15c3d6;
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .map-popup .leaflet-popup-content-wrapper {
    box-shadow: none;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }

  > a {
    position: absolute;
    bottom: 40px;
    right: 40px;

    width: 64px;
    height: 64px;
    background-color: #15c3d6;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;

    transition: background-color 0.2s;

    &:hover {
      background-color: #17d6ed;
    }
  }
`;

export const Sidebar = styled.aside`
  width: 440px;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-top: 64px;
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
  }

  p {
    margin-top: 24px;
    line-height: 28px;
  }
`;
