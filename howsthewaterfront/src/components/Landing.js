import React from "react";
import Search from "./Search";
import styled from "styled-components";
import WaveBackground from "../assets/background-flip.png";
import CoreIcon from "../assets/core_icon.png";
import LoginIcon from "../assets/login_icon.png";
import PremiumIcon from "../assets/icon-premium.png";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingJumbo = styled.div`
background-image: url(${WaveBackground});
  background-repeat: no-repeat;
  width: 100%;
  height: 1081px;
  display: flex;
  flex-direction column;
  align-items: center
  justify-content:center
  margin: auto
  `;

const FandPText = styled.div`
  position: absolute;
  width: 335px;
  height: 90px;
  left: 792px;
  top: 1167px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #2d728f;
`;

const Line = styled.div`
  position: absolute;
  width: 315px;
  height: 0px;
  left: 787px;
  top: 1243px;
  border: 1px solid #2d728f;
`;
const Dot0 = styled.span`
  z-index: 1;
  position: absolute;
  background: rgba(0, 191, 191, 0.2);
  border-radius: 200px;
  width: 400px;
  height: 400px;
  left: -82px;
  top: 1754px;
`;

const Dot1 = styled(Dot0)`
  width: 200px;
  height: 200px;
  left: 577px;
  top: 1628px;
`;

const Dot2 = styled(Dot0)`
  width: 100px;
  height: 100px;
  left: 1149px;
  top: 1375px;
`;

const Dot3 = styled(Dot0)`
  width: 300px;
  height: 300px;
  left: 900px;
  top: 1815px;
`;

const Dot4 = styled(Dot0)`
  width: 300px;
  height: 300px;
  left: 1500px;
  top: 1211px;
`;

const FandPDiv = styled.div`
  width: 100%;
  height: 1081px;
  display: flex;
  align-items: center;
`;

const CardContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
const Card0 = styled.div`
  z-index: 1
  width: 482px;
  height: 640px;
  background: linear-gradient(180deg, #ffffff 0%, #00bfbf 100%);
  box-shadow: 0px 4px 10px #215c74;
  display:flex;
  flex-direction:column;
  align-items:center
  justify-content:space-around;
  color: #ffffff
  padding: 10px
`;
const Card1 = styled.div`
  z-index: 1;
  width: 482px;
  height: 640px;
  background: linear-gradient(180deg, #ffffff 0%, #8fcbaf 100%);
  box-shadow: 0px 4px 10px #5b9279;
  display:flex;
  flex-direction:column;
  align-items:center
  justify-content:space-around;
  color: #ffffff
  padding: 10px
`;
const Card2 = styled.div`
  z-index:1
  width: 482px;
  height: 640px;
  background: linear-gradient(180deg, #ffffff 0%, #357c9a 100%);
  box-shadow: 0px 4px 10px #215c74;
  display:flex;
  flex-direction:column;
  align-items:center
  justify-content:space-around;
  color: #ffffff
  padding: 10px
`;

const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1081px;
  background-color: #86d4d4;
`;

const AboutUsBanner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7% 0 0 0;
  font-size: 2rem;
  width: 100%;
  height: 10%;
  color: #47839d;
  background-color: #c2e9e9;
`;

const AboutUsTextAndTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  p {
    margin: 5% 0 0 0;
    line-height: 2rem;
    color: #ffffff;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Landing = () => {
  return (
    <LandingContainer>
      <div>Landing Page</div>
      <LandingJumbo>
        <Search />
      </LandingJumbo>

      <FandPDiv>
        <FandPText>Features & Pricing</FandPText>
        <Line />
        <Dot0 />
        <Dot1 />
        <Dot2 />
        <Dot3 />
        <Dot4 />

        <CardContainerDiv>
          <Card0>
            <img src={CoreIcon} alt="core" />
            <h1>Core</h1>
            <p>Everything you need to have a complete shopping experience.</p>
            <h3>Free</h3>
            <button>Included</button>
          </Card0>
          <Card1>
            <img src={LoginIcon} alt="login" />
            <h1>Login</h1>
            <p>Everything you need to have a complete shopping experience.</p>
            <h3>Free</h3>
            <button>Sign Up</button>
          </Card1>
          <Card2>
            <img src={PremiumIcon} alt="Premium" />
            <h1>Premium</h1>
            <p>Everything you need to have a complete shopping experience.</p>
            <h3>$100</h3>
            <button>Sign Up</button>
          </Card2>
        </CardContainerDiv>
      </FandPDiv>

      <AboutUs>
        <AboutUsBanner>About Us</AboutUsBanner>
        <AboutUsTextAndTeam>
          <p>
            ‘How’s the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s
            the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the
            water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the water’
            Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the water’ Lorem
            Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum
            ‘How’s the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s
            the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the
            water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the water’
            Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the water’ Lorem
            Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum
            ‘How’s the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s
            the water’ Lorem Ipsum ‘How’s the water’ Lorem Ipsum ‘How’s the
            water’ Lorem Ipsum
          </p>
          <div>
            <img src={PremiumIcon} />
          </div>
        </AboutUsTextAndTeam>
      </AboutUs>
    </LandingContainer>
  );
};

export default Landing;
