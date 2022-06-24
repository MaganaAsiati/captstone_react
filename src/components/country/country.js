import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { countryInfo } from '../../Redux/countries/countries';
import microbe from '../../assets/iconmicrobe.png';
import leftArrow from '../../assets/leftarrow.png';
import './country.css';

export default function Info() {
  const countryDetails = useSelector((state) => state.details);
  const { countryId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryInfo(countryId));
  });
  return (
    <div className="country-details-container">
      <div className="detail-container">
        <Link to="/">
          <img
            className="back-left-img"
            src={leftArrow}
            width={30}
            height={30}
            alt="leftarrow"
          />
        </Link>
        <div className="img-container">
          <img src={countryDetails.country_flag} alt="country-flag" />
        </div>
        <h2>{countryDetails.country_name}</h2>
        <table className="country-details">
          <tr>
            Cases
            <span className="details">{countryDetails.country_cases}</span>
          </tr>
          <tr>
            Deaths
            <span className="details">{countryDetails.country_death}</span>
          </tr>
          <tr>
            Tests
            <span className="details">{countryDetails.country_tests}</span>
          </tr>

          <tr>
            Updated
            <span className="details">{countryDetails.country_updated}</span>
          </tr>
          <tr>
            Critical cases
            <span className="details">{countryDetails.country_critical}</span>
          </tr>
          <tr>
            Population
            <span className="details">{countryDetails.country_population}</span>
          </tr>
          <tr>
            Continent
            <span className="details">{countryDetails.country_continent}</span>
          </tr>
        </table>
        <div className="animated-icon">
          <img src={microbe} width={50} height={50} alt="microbe-icon" />
        </div>
        <div className="animated-icon">
          <img src={microbe} width={50} height={50} alt="microbe-icon" />
        </div>
        <div className="animated-icon">
          <img src={microbe} width={50} height={50} alt="microbe-icon" />
        </div>
      </div>
    </div>
  );
}
