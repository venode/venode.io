import React from 'react';
import styled from 'styled-components';
import Jumbotron from './jumbotron';
import Introduction from './introduction';

const Home = () => (
  <Container>
    <Jumbotron />
    <Introduction />
    {/* <Team /> */}
    {/* <Contact /> */}
  </Container>
)

const Container = styled.div`
  margin-top: 100vh;
`;

export default Home;