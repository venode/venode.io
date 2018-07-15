import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Charging = () => (<Container>
  <Prompt>
    <Dots/>
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
  font-size: 1rem;
  :hover {
    border: 1.5px solid rgba(255,255,255,0.8);
    color: rgba(255,255,255,1);
  }
`;

const Prompt = styled.div`
  background: black;
  z-index: 10;
  letter-spacing: 1px;
  font-size: 1.8rem;
  position: absolute;
  bottom: 100px;
  right: 0px;
  left: 0px;
  margin: auto;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    bottom: 80px;
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
  padding: 0px;
  overflow: hidden;
  background-image: url('../../assets/thor_charging.gif');
  background-size: 900px;
  background-repeat:no-repeat;
  background-position: center 5vh;
  @media (max-width: 800px) {
    background-position: center 0px;
  }
  img {
    margin: 20px auto;
    width: 50px;
  }
`;

export default Charging;