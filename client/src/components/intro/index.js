import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Highlight = require('react-syntax-highlight');

const Charging = () => (<Container>
  <Link to='/'>
    <Close>
      <i className="fas fa-chevron-left"></i>
    </Close>
  </Link>
  <Block>
    <Logo />
    <Introduction>
      We spent time on the infrastructure, so you can start connect to VechainThor Blockchain and focus on crafting features.
    </Introduction>
  </Block>
  <Block>
    <Grid>
        <Box>
          <Img src='../../assets/intro_vechain.svg'/>
          <Title>VechainThor Blockchain Based</Title>
          <Description>We eliminate your need to install, configure, and maintain vechain thor service infrastructure.</Description>
        </Box>
        <Box>
          <Img src='../../assets/intro_scale.svg'/>
          <Title>Highly Reliable and Flexible</Title>
          <Description>Venode SmartRouter™ middleware keeps thor service always running and scale up for your traffic.</Description>
        </Box>
        <Box>
          <Img src='../../assets/intro_secure.svg'/>
          <Title>Secure and Always Up-To-Date</Title>
          <Description>End-to-end encryption and always upgrade to the most secure version of thor service.</Description>
        </Box>
    </Grid>
  </Block>
  <Block>
    <Tag>Try The Connection</Tag>
    <Grid>
    <HighlightContainer>
      <Highlight
        lang='javascript'
        value={connectionSnippet('test')}
      />
    </HighlightContainer>
    </Grid>
  </Block>
  <Block>
    <Tag>Benefits</Tag>
    <div className='container'>
      <div className='row'>
        <Benefits>
          <Benefit>
            TLS-Enable endpoints
          </Benefit>
          <Benefit>
            Portable VechainThor Interface
          </Benefit>
          <Benefit>
            Multi-modes support
          </Benefit>
          <Benefit>
            Custom Installations & Enterpeise support
          </Benefit>
          <Benefit>
            Trusted by Vechain Pioneers
          </Benefit>
        </Benefits>
      </div>
    </div>
  </Block>
  <Block>
    <Bottom>
      <a href="mailto:team@venode.io?subject=Contact%20from%20the%20website">team@venode.io</a>
    </Bottom>
  </Block>
</Container>)

const Close = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  border: 1.5px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.8);
  border-radius: 100px;
  padding-top: 7px;
  :hover {
    border: 1.5px solid rgba(255,255,255,0.8);
    color: rgba(255,255,255,1);
  }
  @media (max-width: 800px) {
    left: 20px;
    top: 20px;
  }
`;

const Bottom = styled.div`
  opacity: 0.3;
`;

const Benefit = styled.div.attrs({
  className: 'col-sm-12 col-md-6'
})`
  font-size: 1.2rem;
  padding: 5px;
  text-transform: capitalize;
`;

const Benefits = styled.div.attrs({
  className: 'row'
})`
  text-align: center;
  margin: auto;
`;

const HighlightContainer = styled.div`
  text-align: left;
  margin: auto;
  padding-top: 20px;
  overflow-x: scroll;
  width: 95%;

  code{
    border-radius: 5px;
  }
`;

const connectionSnippet = (newtork = 'main') => {
  return `
  import { thorify } from 'thorify';
  import Web3 from 'web3';
  const web3 = thorify(new Web3(), "https://${newtork}.venode.io");
  `
}

const Img = ({ src }) => {
  const Comp = styled.img.attrs({
    src
  })`
    height: 100px;
    padding-bottom: 20px;
  `;

  return <Comp />
};

const Grid = ({ children }) => (<div className='container'><div className='row'>{children}</div></div>)

const Box = styled.div.attrs({
  className: 'col-md-4 col-sm-12 col-xs-12'
})`
  padding: 10px 25px;
  @media (max-width: 800px) {
    padding-bottom: 50px;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 1.1rem;
  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.div`
  padding-top: 10px;
  font-weight: 200;
  font-size: 1rem;
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const Introduction = styled.div`
  color: white;
  font-size: 1.5rem;
  max-width: 800px;
  padding: auto 20px;
  margin: 20px;
`;

const Logo = styled.img.attrs({
  src: '../../assets/logo_white_circle.svg'
})`
  width: 150px;
  margin: 50px auto 20px;
`;

const Container = styled.div`
  background: black;
  text-align: center;
  color: white;
  max-width: 900px;
  margin: auto;
`;

const Block = styled.div`
  text-align: center;
  padding: 50px 10px;
  margin: 0px;
`;

const Tag = styled.div`
  border: 1.5px solid rgba(255,255,255,0.2);
  padding: 5px 30px;
  display: inline-block;
  margin: 10px auto 20px;
  letter-spacing: 1px;
  user-select: none;
  color: rgba(255,255,255,0.8);
`;
export default Charging;