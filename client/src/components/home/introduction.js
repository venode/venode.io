import React, { Component } from 'react';
import styled from 'styled-components';

export default class Introduction extends Component {
  render() {
    return (
      <Container>
        <h1>Hi</h1>
      </Container>
    );
  }
}
const Container = styled.div`
  text-align: center;
  position: relative;
  padding: 50px 10px;
  background: white;
  box-shadow: 0px 0px 20px 5px rgba(0,0,0,0.1);
  border-radius: 0px;
`;
