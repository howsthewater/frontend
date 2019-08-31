import React, { useState } from "react";
import styled from "styled-components";
// styling
const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SettingsDiv = styled.div`
  height: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Dot0 = styled.span`
  z-index: 1;
  position: absolute;
  background: rgba(0, 191, 191, 0.2);
  border-radius: 200px;
  width: 30rem;
  height: 30rem;
  left: 0rem;
  top: 0rem;
`;
const Dot1 = styled.span`
  z-index: 1;
  position: absolute;
  background: rgba(0, 191, 191, 0.2);
  border-radius: 200px;
  width: 40rem;
  height: 40rem;
  top: 92rem;
  right: 0rem;
`;
const TextDiv = styled.div`
  margin: 8rem auto;
  width: 75%;
    p{
        font-size: 1.6rem;
        font-weight: 500;
        letter-spaceing: 0.1rem;
        color: #215C74
        line-height: 2.5rem
    }
`;
const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70rem;
  height: 88.8rem;
  border: .1rem solid #215C74
  background: #FFFFFF;
  border-radius: 1rem;
`;
//
const dummyRegionData = [
  "Northern California",
  "Central California",
  "Southern California"
];
const dummyBeachData = [
  "La Jolla",
  "Santa Monica",
  "Coronado",
  "Carmel City",
  "Moonstone",
  "Salt Creek",
  "Sand Dollar",
  "McClures",
  "Pebble",
  "San Gregorio"
];
const dummySurferData = ["Hardcore", "Hungry", "Half-hearted", "Hopeless"];
//
const Settings = () => {
  const [values, setValues] = useState({
    nameInput: "",
    phoneInput: "",
    regionInput: "",
    beachInput: "",
    surferInput: "",
    imageInput: null
  });

  const formChangeHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  console.log(values);
  return (
    <SettingsContainer>
      <SettingsDiv>
        <Dot0 />
        <Dot1 />
        <TextDiv>
          <p>
            Please keep your user settings up to date to get the relevant surf
            information when you login. Based on the base region and the base
            location chosen, the homepage of a user will display the surf
            details. Also, choosing your persona will help you find the places
            you are looking for easily. The beaches will be highlighted based on
            your persona for easy search. Items marked (*) are mandatory.
          </p>
        </TextDiv>
        <SettingsForm>
          <label for="nInput">Full Name*: </label>
          <input
            id="nInput"
            name="nameInput"
            type="text"
            onChange={formChangeHandler}
            value={values.nameInput}
            placeholder="name input"
          />
          <label for="pInput">Mobile Number: </label>
          <input
            id="pInput"
            name="phoneInput"
            type="tel"
            onChange={formChangeHandler}
            value={values.phoneInput}
            placeholder="xxx-xxx-xxxx"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </SettingsForm>
      </SettingsDiv>
    </SettingsContainer>
  );
};

export default Settings;
