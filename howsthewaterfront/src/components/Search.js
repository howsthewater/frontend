import React, { useState } from "react";
import styled from "styled-components";
import toiletIcon from "../assets/icons8-toilet-50.png";
import parkingIcon from "../assets/icons8-parking-60.png";
import wheelchairIcon from "../assets/icons8-wheelchair-48.png";
import strollerIcon from "../assets/icons8-stroller-50.png";
import dogIcon from "../assets/icons8-dog-paw-64.png";
import volleyIcon from "../assets/icons8-volleyball-player-50.png";
import picnicIcon from "../assets/icons8-picnic-table-50.png";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;
const SearchForm = styled.form`
  display: flex;
  width: 100%;
  height: 5rem;
`;
const SearchInput = styled.input`
  height: 5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 0rem .2rem .2rem 0rem;
  border: .1rem solid #2d728f
  padding-left: 1rem;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
`;
const SearchButton = styled.button`
  cursor: pointer;
  width: 10%;
  height: 5rem;
  background: #2d728f;
  border: 0.1rem solid #2d728f;
  border-radius: 0rem 0.2rem 0.2rem 0rem;
  color: #ffffff;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  @media (max-width: 992px) {
    width: 20%;
  }
`;
const SearchButtonAdvanced = styled.button`
  cursor: pointer;
  width: 10%;
  height: 5rem;
  background: #2d728f;
  border: 0.1rem solid #2d728f;
  border-radius: 0rem 0.2rem 0.2rem 0rem;
  color: #ffffff;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  @media (max-width: 992px) {
    display: none;
  }
`;
const SearchButtonGrid = styled.button`
  cursor: pointer;
  width: 10%;
  height: 5rem;
  background: #2d728f;
  border: 0.1rem solid #2d728f;
  border-radius: 0rem 0.2rem 0.2rem 0rem;
  color: #ffffff;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  display: none;
  @media (max-width: 992px) {
    display: block;
    width: 95%;
    height: 2.5rem;
    grid-column-start: 7;
    grid-column-end: 9;
  }
`;
const AdvancedSearchToggle = styled.button`
  cursor: pointer;
  width: 25%;
  height: 4.5rem;
  margin-top: 3rem;
  background: none;
  border: none;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  letter-spacing: 0.3rem;
  color: #2d728f;
  background: #ffffff;
  border: 0.1rem solid #2d728f;
  @media (max-width: 992px) {
    width: 40%;
  }
`;
const AdvancedSearchContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  margin-top: 3rem;
`;

const AdvancedSearchForm = styled.form`
  width: 90%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center
  background: #ffffff;
  border-radius: 0rem .2rem .2rem 0rem;
  border: .1rem solid #2d728f;
  @media (max-width:992px){
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    height: 10rem;
    padding-left: 2rem;
  }
`;
const Icons = styled.img`
  height: 75%;
`;
const CheckboxLabel = styled.label`
  margin-bottom: 2rem;
  input {
    margin: 0;
    position: absolute;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border: .2rem solid #2d728f;
    
  }
  input: checked ~span {
    background: #2d728f;
    color: #ffffff;
  }
  span {
    color: #ffffff
    position: absolute;
    height: 2rem;
    width: 2rem;
    border: .2rem solid #2d728f;
    font-size: 1.5rem
    line-height: 1.2;
    text-align: center
  }
  
`;
//
const Search = () => {
  const [values, setValues] = useState({
    textInput: "",
    restrooms: false,
    parking: false,
    disabled: false,
    kidFriendly: false,
    dogFriendly: false,
    volleyBall: false,
    picnicArea: false
  });
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const searchInputHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const toggleAdvancedSearch = () => {
    if (advancedSearch) {
      setAdvancedSearch(false);
      setValues({
        ...values,
        restrooms: false,
        parking: false,
        disabled: false,
        kidFriendly: false,
        dogFriendly: false,
        volleyBall: false,
        picnicArea: false
      });
    } else {
      setAdvancedSearch(true);
    }
  };
  const advancedSearchChangeHandler = e => {
    const { name } = e.target;
    let value = "";
    values[name] ? (value = false) : (value = true);
    setValues({ ...values, [name]: value });
  };
  const searchSubmit = e => {
    e.preventDefault();
    console.log(values);
  };
  //
  return (
    <SearchContainer>
      <SearchForm onSubmit={searchSubmit}>
        <SearchInput
          name="textInput"
          type="text"
          onChange={searchInputHandler}
          value={values.textInput}
          placeholder="Seach by beach name"
          style={{ width: advancedSearch ? "100%" : "90%" }}
        />
        <SearchButton
          type="submit"
          style={{ display: !advancedSearch ? "" : "none" }}
        >
          Search
        </SearchButton>
      </SearchForm>
      <AdvancedSearchToggle onClick={toggleAdvancedSearch}>
        Advanced Search
      </AdvancedSearchToggle>
      <AdvancedSearchContainer>
        <AdvancedSearchForm style={{ display: !advancedSearch ? "none" : "" }}>
          <CheckboxLabel>
            <input
              name="restrooms"
              type="checkbox"
              checked={values.restrooms}
              onChange={advancedSearchChangeHandler}
            />
            <span>√</span>
          </CheckboxLabel>
          <Icons src={toiletIcon} />
          <CheckboxLabel>
            <input
              name="parking"
              type="checkbox"
              checked={values.parking}
              onChange={advancedSearchChangeHandler}
            />
            <span>√</span>
          </CheckboxLabel>
          <Icons src={parkingIcon} />
          <CheckboxLabel>
            <input
              name="disabled"
              type="checkbox"
              checked={values.disabled}
              onChange={advancedSearchChangeHandler}
            />
            <span>√</span>
          </CheckboxLabel>
          <Icons src={wheelchairIcon} />
          <CheckboxLabel>
            <input
              name="kidFriendly"
              type="checkbox"
              checked={values.kidFriendly}
              onChange={advancedSearchChangeHandler}
            />
            <span>√</span>
          </CheckboxLabel>
          <Icons src={strollerIcon} />
          <CheckboxLabel>
            <input
              name="dogFriendly"
              type="checkbox"
              checked={values.dogFriendly}
              onChange={advancedSearchChangeHandler}
            />
            <span>√</span>
          </CheckboxLabel>
          <Icons src={dogIcon} />
          <CheckboxLabel>
            <input
              name="volleyBall"
              type="checkbox"
              checked={values.volleyBall}
              onChange={advancedSearchChangeHandler}
            />
            <span>√</span>
          </CheckboxLabel>
          <Icons src={volleyIcon} />
          <CheckboxLabel>
            <input
              name="picnicArea"
              type="checkbox"
              checked={values.picnicArea}
              onChange={advancedSearchChangeHandler}
            />
            <span>√</span>
          </CheckboxLabel>
          <Icons src={picnicIcon} />
          <SearchButtonGrid
            onClick={searchSubmit}
            style={{ display: !advancedSearch ? "none" : "" }}
          >
            Search
          </SearchButtonGrid>
        </AdvancedSearchForm>
        <SearchButtonAdvanced
          onClick={searchSubmit}
          style={{ display: !advancedSearch ? "none" : "" }}
        >
          Search
        </SearchButtonAdvanced>
      </AdvancedSearchContainer>
    </SearchContainer>
  );
};

export default Search;
