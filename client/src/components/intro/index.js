import React from 'react';
import styled from 'styled-components';

const Charging = () => (<Container>
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
          <Description>Venode SmartRouter™ middleware keep the thor service always running and scale for your traffic.</Description>
        </Box>
        <Box>
          <Img src='../../assets/intro_secure.svg'/>
          <Title>Secure and Always Up-To-Date</Title>
          <Description>End-to-end encryption dateflow and always upgrade to the most secure version of thor service.</Description>
        </Box>
    </Grid>
  </Block>
  {/* <Block>
    <Tag>Benefits</Tag>
    <div className='container'>
      <div className='row'>
        <div className='col col-md-6 col-sm-12'>
        <ul>
          <li>VechainThor Blockchain Based</li>
          <li>Highly Reliable and Scalable</li>
          <li>Secure and Automated Up-To-Date</li>
        </ul>
        </div>
      </div>
    </div>
  </Block> */}
</Container>)

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
  font-size: 1.2rem;
`;

const Description = styled.div`
  padding-top: 10px;
  font-weight: 200;
  font-size: 1.1rem;
`;

const Introduction = styled.div`
  color: white;
  font-size: 1.5rem;
  max-width: 800px;
  margin: auto;
  margin-top: 30px;
`;

const Logo = styled.img.attrs({
  src: '../../assets/logo_white_circle.svg'
})`
  width: 120px;
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
  padding: 30px 10px;
  margin: 0px;
`;

const Tag = styled.div`
  border: 1.5px solid rgba(255,255,255,0.2);
  padding: 5px 30px;
  display: inline-block;
  margin: 10px auto;
  letter-spacing: 1px;
  user-select: none;
  color: rgba(255,255,255,0.8);
`;
export default Charging;