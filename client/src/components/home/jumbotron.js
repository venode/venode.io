import React, { Component } from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { params_fast, params_slow } from './config/particle-params';

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <Logo />
        <GoodParticlesContainer>
          <Particles params={params_fast}/>
        </GoodParticlesContainer>
        <GeneralParticlesContainer>
          <Particles params={params_slow}/>
        </GeneralParticlesContainer>
      </div>
    );
  }
}

const GoodParticlesContainer = styled.div`
  position: absolute;
  background: white;
  top: 0px;
  right: -20px;
  left: -20px;
  height: 100vh;
  width: 200px;
  margin: auto;
  z-index: 10;
  div {
    height: 100%;
    width: 100%;
  }
`;

const GeneralParticlesContainer = styled.div`
  position: absolute;
  background: white;
  top: 0px;
  right: -20px;
  left: -20px;
  height: 100vh;
  width: 100%;
  margin: auto;
  z-index: 9;
  div {
    height: 100%;
    width: 100%;
  }
`;

const Logo = styled.img.attrs({
  src: '../assets/logo_circle.svg'
})`
  position: absolute;
  top: 20vh;
  z-index: 11;
  right: 0px;
  left: 0px;
  margin: auto;
  width: 80%;
  max-width: 300px;
  box-shadow: 0px 0px 50px 5px rgba(0,0,0,0.05);
  border-radius: 500px;
`;