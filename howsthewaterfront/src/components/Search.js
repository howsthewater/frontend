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
  width: 722px;
`;
const SearchForm = styled.form`
  display: flex;
  width: 722px;
  height: 50px;
`;
const SearchInput = styled.input`
  height: 48px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  border-radius: 0px 2px 2px 0px;
  border: #ffffff;
  padding-left: 10px;
  line-height: 18px;
  letter-spacing: 0.1em;
`;
const SearchButton = styled.button`
  cursor: pointer;
  width: 78px;
  height: 50px;
  background: #2d728f;
  border: #2d728f;
  border-radius: 0px 2px 2px 0px;
  color: #ffffff;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.1em;
`;
const AdvancedSearchToggle = styled.button`
  cursor: pointer;
  width: 214px;
  height: 34px;
  margin-top: 30px;
  background: none;
  border: none;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.3em;
  color: #ffffff;
`;
const AdvancedSearchContainer = styled.div`
  width: 722px;
  height: 50px;
  display: flex;
  margin-top: 30px;
`;
const AdvancedSearchForm = styled.form`
  width: 638px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center
  background: #ffffff;
  border-radius: 0px 2px 2px 0px;
  border: #ffffff;
`;
const Icons = styled.img`
  height: 75%;
`;
const CheckboxLabel = styled.label`
  margin-right: 10px;
  margin-bottom: 15px;
  input {
    margin: 0;
    position: absolute;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    height: 16px;
    width: 16px;
    border: 2px solid #2d728f;
  }

  input: checked ~span {
    background: #2d728f;
  }
  span {
    position: absolute;
    height: 12px;
    width: 12px;
    border: 2px solid #2d728f;
    font-weight: 700;
    line-height: 0.7;
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
          style={{ width: advancedSearch ? "722px" : "638px" }}
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
        </AdvancedSearchForm>
        <SearchButton
          onClick={searchSubmit}
          style={{ display: !advancedSearch ? "none" : "" }}
        >
          Search
        </SearchButton>
      </AdvancedSearchContainer>
    </SearchContainer>
  );
};

export default Search;
