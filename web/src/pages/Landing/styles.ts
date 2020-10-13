import styled from 'styled-components';

import landingImg from '../../assets/images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 640px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 80% center;
  background-size: contain;

  > a {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 80px;
    height: 80px;

    background-color: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background-color: #96feff;
    }
  }
`;

export const Content = styled.div`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 800;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34p;
  }
`;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 24px;
  line-height: 34px;

  text-align: right;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 800;
  }
`;
