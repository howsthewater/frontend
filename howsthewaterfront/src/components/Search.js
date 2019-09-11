import React, { useState } from "react";
import toiletIcon from "../assets/icons8-toilet-50.png";
import parkingIcon from "../assets/icons8-parking-60.png";
import wheelchairIcon from "../assets/icons8-wheelchair-48.png";
import strollerIcon from "../assets/icons8-stroller-50.png";
import dogIcon from "../assets/icons8-dog-paw-64.png";
import volleyIcon from "../assets/icons8-volleyball-player-50.png";
import picnicIcon from "../assets/icons8-picnic-table-50.png";
import "../styles/search.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const beachesQuery = gql`
  {
    locations {
      NameMobileWeb
      RESTROOMS
      PARKING
      DSABLDACSS
      EZ4STROLLERS
      DOG_FRIENDLY
      VOLLEYBALL
      PCNC_AREA
    }
  }
`;

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
  // beach values
  const [beaches, setBeaches] = useState([]);
  const { loading, error, data } = useQuery(beachesQuery);
  //
  const searchInputHandler = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (e.target.name === "textInput") {
      let beaches = [...data.locations];
      beaches = beaches.filter(beach => {
        if (
          beach.NameMobileWeb.toLowerCase().includes(
            e.target.value.toLowerCase()
          )
        ) {
          return beaches;
        }
      });
      e.target.value === ""
        ? setBeaches([])
        : beaches.length >= 5
        ? setBeaches(beaches.slice(0, 5))
        : setBeaches(beaches);
    }
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
  return loading ? (
    <div className="loadingDiv">
      <h1 className="loadingText">Please wait... getting beaches</h1>
    </div>
  ) : error ? (
    <div className="errorDiv">
      <h1 className="errorText">There was an error retreiving the data</h1>
    </div>
  ) : (
    <div className="searchContainer">
      <div className="searchForm" onSubmit={searchSubmit}>
        <input
          className="searchInput"
          name="textInput"
          type="text"
          onChange={searchInputHandler}
          value={values.textInput}
          placeholder="Seach by beach name"
          style={{ width: advancedSearch ? "100%" : "90%" }}
          autoComplete="off"
        />
        <button
          className="searchButton"
          type="submit"
          style={{ display: !advancedSearch ? "" : "none" }}
        >
          Search
        </button>
      </div>
      <div className="searchResultsContainer">
        {beaches.map(beach => (
          <p className="searchResultText" key={Math.random()}>
            {beach.NameMobileWeb}
          </p>
        ))}
      </div>
      <button className="aSearchToggleButton" onClick={toggleAdvancedSearch}>
        Advanced Search
      </button>
      <div className="advancedSearchContainer">
        <form
          className="advancedSearchForm"
          style={{ display: !advancedSearch ? "none" : "" }}
        >
          <label className="checkboxLabel">
            <input
              className="checkboxInput"
              name="restrooms"
              type="checkbox"
              checked={values.restrooms}
              onChange={advancedSearchChangeHandler}
            />
            <span className="checkboxSpan">√</span>
          </label>
          <img className="icons" src={toiletIcon} alt="ttIcon" />
          <label className="checkboxLabel">
            <input
              className="checkboxInput"
              name="parking"
              type="checkbox"
              checked={values.parking}
              onChange={advancedSearchChangeHandler}
            />
            <span className="checkboxSpan">√</span>
          </label>
          <img className="icons" src={parkingIcon} alt="pgIcon" />
          <label className="checkboxLabel">
            <input
              className="checkboxInput"
              name="disabled"
              type="checkbox"
              checked={values.disabled}
              onChange={advancedSearchChangeHandler}
            />
            <span className="checkboxSpan">√</span>
          </label>
          <img className="icons" src={wheelchairIcon} alt="wrIcon" />
          <label className="checkboxLabel">
            <input
              className="checkboxInput"
              name="kidFriendly"
              type="checkbox"
              checked={values.kidFriendly}
              onChange={advancedSearchChangeHandler}
            />
            <span className="checkboxSpan">√</span>
          </label>
          <img className="icons" src={strollerIcon} alt="srIcon" />
          <label className="checkboxLabel">
            <input
              className="checkboxInput"
              name="dogFriendly"
              type="checkbox"
              checked={values.dogFriendly}
              onChange={advancedSearchChangeHandler}
            />
            <span className="checkboxSpan">√</span>
          </label>
          <img className="icons" src={dogIcon} alt="dgIcon" />
          <label className="checkboxLabel">
            <input
              className="checkboxInput"
              name="volleyBall"
              type="checkbox"
              checked={values.volleyBall}
              onChange={advancedSearchChangeHandler}
            />
            <span className="checkboxSpan">√</span>
          </label>
          <img className="icons" src={volleyIcon} alt="vyIcon" />
          <label className="checkboxLabel">
            <input
              className="checkboxInput"
              name="picnicArea"
              type="checkbox"
              checked={values.picnicArea}
              onChange={advancedSearchChangeHandler}
            />
            <span className="checkboxSpan">√</span>
          </label>
          <img className="icons" src={picnicIcon} alt="pcIcon" />
          <button
            className="searchButtonGrid"
            onClick={searchSubmit}
            style={{ display: !advancedSearch ? "none" : "" }}
          >
            Search
          </button>
        </form>
        <button
          className="searchButtonAdvanced"
          onClick={searchSubmit}
          style={{ display: !advancedSearch ? "none" : "" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
