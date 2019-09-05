import React from "react";
import Search from "./Search";
import CopyrightFooter from "./Footer";
import styled from "styled-components";
import WaveBackground from "../assets/background-flip.png";
import CoreIcon from "../assets/core_icon.png";
import LoginIcon from "../assets/login_icon.png";
import PremiumIcon from "../assets/icon-premium.png";
// styling
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LandingJumbo = styled.div`
background-image: url(${WaveBackground});
  // background-repeat: no-repeat;
  width: 100%;
  height: 108.1rem;
  display: flex;
  flex-direction column;
  align-items: center
  justify-content:center
  margin: auto
  `;
const FandPDiv = styled.div`
  width: 100%;
  height: 108.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FandPText = styled.div`
  margin-top: 10rem;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 3.6rem;
  line-height: 4.1rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.05rem;
  color: #2d728f;
`;
const Line = styled.div`
  width: 31.5rem;
  margin-top: 1rem;
  margin-bottom: 10rem;
  height: 0rem;
  border: 1px solid #2d728f;
`;
const Dot0 = styled.span`
  z-index: 1;
  position: absolute;
  background: rgba(0, 191, 191, 0.2);
  border-radius: 200px;
  width: 40rem;
  height: 40rem;
  right: 160rem
  top: 175.4rem;
`;
const Dot1 = styled(Dot0)`
  width: 20rem;
  height: 20rem;
  right: 115rem
  top: 162.8rem;
`;
const Dot2 = styled(Dot0)`
  width: 10rem;
  height: 10rem;
  right: 65rem;
  top: 137.5rem;
`;
const Dot3 = styled(Dot0)`
  width: 30rem;
  height: 30rem;
  right: 50rem;
  top: 181.5rem;
`;
const Dot4 = styled(Dot0)`
  width: 30rem;
  height: 300px;
  right: 3rem;
  top: 121.1rem;
`;
const CardContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
const Card0 = styled.div`
  z-index: 1
  width: 48.2rem;
  height: 64rem;
  background: linear-gradient(180deg, #ffffff 0%, #00bfbf 100%);
  box-shadow: 0rem .4rem 1rem #215c74;
  display:flex;
  flex-direction:column;
  align-items:center
  justify-content: space-around;
  color: #ffffff;
  @media(max-width:992px){
    width: 98%
    height: 20rem
    flex-direction:row
    margin: 2rem;
  }
  @media(max-width: 576px){
    margin: 0rem;
    height: 27rem;
  }
  h1{
    font-size: 4rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      font-size:3rem;
    }
  }
  p{
    margin: 0 4rem;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      width: 40%
      margin: 0 1rem;
      font-size:1.6rem;
    }
  }
  h2{
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      font-size: 2rem;
    }
    @media(max-width: 576px){
      position: relative
      bottom: 4rem;
      left: 4.5rem;
    }
  }
  button{
    margin-bottom: 2.5rem;
    width: 11.5rem;
    height: 5.75rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    background: #0FB2B2;
    border: 0
    border-radius: 5px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1rem;
    color: #FFFFFF;
    text-align: center
    display: flex;
    justify-content: center
    font-weight: 700
    cursor: pointer
    @media(max-width:992px){
      margin-bottom: 0rem;
      height: 5.2rem
      10rem;
      font-size: 1.6rem
    }
    @media(max-width: 576px){
      position: relative
      top: 3rem;
      right: 2.5rem;
    }
  }
    `;
const Card1 = styled.div`
  z-index: 1;
  width: 48.2rem;
  height: 64rem;
  background: linear-gradient(180deg, #ffffff 0%, #8fcbaf 100%);
  box-shadow: 0px 4px 10px #5b9279;
  display:flex;
  flex-direction:column;
  align-items:center
  justify-content: space-around;
  color: #ffffff
  @media(max-width:992px){
    width: 98%
    height: 20rem
    flex-direction:row
    margin: 2rem
  }
  @media(max-width: 576px){
    margin: 0rem;
    height: 27rem;
  }
  h1{
    font-size: 4rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      font-size:3rem;
    }
  }
  p{
    margin: 0 4rem;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      width: 40%
      margin: 0 1rem;
      font-size:1.6rem;
    }
  }
  h2{
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      font-size: 2rem;
    }
    @media(max-width: 576px){
      position: relative
      bottom: 4rem;
      left: 4.5rem;
    }
  }
  button{
    margin-bottom: 2.5rem;
    width: 11.5rem;
    height: 5.75rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    background: #5B9279;
    border: 0
    border-radius: 5px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1rem;
    color: #FFFFFF;
    text-align: center
    display: flex;
    justify-content: center
    font-weight: 700
    cursor: pointer
    @media(max-width:992px){
      margin-bottom: 0rem;
      height: 5.2rem
      10rem;
      font-size: 1.6rem
    }
    @media(max-width: 576px){
      position: relative
      top: 3rem;
      right: 2.5rem;
    }
  }
`;
const Card2 = styled.div`
  z-index:1
  width: 48.2rem;
  height: 64rem;
  background: linear-gradient(180deg, #ffffff 0%, #357c9a 100%);
  box-shadow: 0px 4px 10px #215c74;
  display:flex;
  flex-direction:column;
  align-items:center
  justify-content: space-around;
  color: #ffffff
  @media(max-width:992px){
    width: 98%
    height: 20rem
    flex-direction:row
    margin: 2rem
  }
  @media(max-width: 576px){
    margin: 0rem;
    height: 27rem;
  }
  h1{
    font-size: 4rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      font-size:3rem;
    }
  }
  p{
    margin: 0 4rem;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      width: 40%
      margin: 0 1rem;
      font-size:1.6rem;
    }
  }
  h2{
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    @media(max-width:992px){
      font-size: 2rem;
    }
    @media(max-width: 576px){
      position: relative
      bottom: 4rem;
      left: 3.5rem;
    }
  }
  button{
    margin-bottom: 2.5rem;
    width: 11.5rem;
    height: 6.2rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    background: #2D728F;
    border: 0
    border-radius: 5px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1rem;
    color: #FFFFFF;
    text-align: center
    display: flex;
    justify-content: center
    font-weight: 700
    cursor: pointer 
    @media(max-width:992px){
      margin-bottom: 0rem;
      height: 5.2rem
      10rem;
      font-size: 1.6rem
    }
    @media(max-width: 576px){
      position: relative
      top: 3rem;
      right: 2.7rem;
    }
  }
    `;
const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #86d4d4;
`;
const AboutUsBanner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0 0 0;
  font-size: 3.5rem;
  width: 100%;
  height: 10rem;
  color: #47839d;
  background-color: #c2e9e9;
`;
const AboutUsText = styled.div`
  width: 90%;
  margin: 3%;
  p {
    margin: 0 2% 0% 2%;
    font-size: 1.6rem;
    line-height: 5rem;
    color: #ffffff;
  }
`;
const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 85%
  flex-wrap: wrap
  margin-bottom: 2rem;
  p{
    margin-top: 1.6rem
    font-size: 1.6rem;
    text-align: center
    line-height: 2rem;
    color: #2d728f
  }
`;
const MemberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;
const TeamPlaceholder = styled.span`
  background: rgba(255, 255, 255, 1);
  border-radius: 200px;
  width: 15rem;
  height: 15rem;
  box-shadow: 0rem 0.4rem 5rem #215c74;

  @media (max-width: 768px) {
    width: 12rem;
    height: 12rem;
    box-shadow: 0rem 0.4rem 2rem #215c74;
  }
`;
//
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
            <h2>Free</h2>
            <button>Included</button>
          </Card0>
          <Card1>
            <img src={LoginIcon} alt="login" />
            <h1>Login</h1>
            <p>Everything you need to have a complete shopping experience.</p>
            <h2>Free</h2>
            <button>Sign Up</button>
          </Card1>
          <Card2>
            <img src={PremiumIcon} alt="Premium" />
            <h1>Premium</h1>
            <p>Everything you need to have a complete shopping experience.</p>
            <h2>$100</h2>
            <button>Sign Up</button>
          </Card2>
        </CardContainerDiv>
      </FandPDiv>
      <AboutUs>
        <AboutUsBanner>About Us</AboutUsBanner>
        <AboutUsText>
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
        </AboutUsText>
        <MemberContainer>
          <MemberDiv>
            <TeamPlaceholder />
            <p>
              Team <br /> Member
            </p>
          </MemberDiv>
          <MemberDiv>
            <TeamPlaceholder />
            <p>
              Team <br /> Member
            </p>
          </MemberDiv>
          <MemberDiv>
            <TeamPlaceholder />
            <p>
              Team <br /> Member
            </p>
          </MemberDiv>
          <MemberDiv>
            <TeamPlaceholder />
            <p>
              Team <br /> Member
            </p>
          </MemberDiv>
          <MemberDiv>
            <TeamPlaceholder />
            <p>
              Team <br /> Member
            </p>
          </MemberDiv>
          <MemberDiv>
            <TeamPlaceholder />
            <p>
              Team <br /> Member
            </p>
          </MemberDiv>
          <MemberDiv>
            <TeamPlaceholder />
            <p>
              Team <br /> Member
            </p>
          </MemberDiv>
        </MemberContainer>
        <CopyrightFooter />
      </AboutUs>
    </LandingContainer>
  );
};

export default Landing;
