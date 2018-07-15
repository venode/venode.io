import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Charging = () => (<Container>
  <video preload='true' autoPlay='autoplay' muted='true' loop>
    <source src='../../assets/thor_charging.mov' />
  </video>
  <Dots/>
  <Prompt>
    <p>Your Access to Thor Power.</p>
    <Link to='/intro'>
      <More>Learn More</More>
    </Link>
  </Prompt>
</Container>)

const Dots = styled.img.attrs({
  src: '../../assets/four_dots_circle.svg'
})``;


const More = styled.div`
  border: 1.5px solid rgba(255,255,255,0.2);
  padding: 5px 30px;
  display: inline-block;
  cursor: pointer;
  margin: 10px auto;
  letter-spacing: 1px;
  user-select: none;
  color: rgba(255,255,255,0.8);

  :hover {
    border: 1.5px solid rgba(255,255,255,0.8);
    color: rgba(255,255,255,1);
  }
`;

const Prompt = styled.div`
  background: black;
  z-index: 10;

  p{
    letter-spacing: 1px;
    font-size: 2rem;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  position: relative;
  background: black;
  color: white;
  user-select: none;

  img {
    margin: 50px auto 20px;
    width: 50px;
  }
  
  >video {
    width: 100vw;
    margin: auto;
  }

  @media (max-width: 900px) {
    padding-top: 5vh;
    overflow: hidden;
    >video {
      margin-bottom: 5vh;
      transform: scale(1.2);
    }
  }

  @media (max-width: 700px) {
    padding-top: 15vh;
    overflow: hidden;
    >video {
      margin-bottom: 10vh;
      transform: scale(2);
    }
  }
`;

export default Charging;