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
        <div className="img-container">
          <Link to="/">
            <img
              className="back-left-img"
              src={leftArrow}
              width={30}
              height={30}
              alt="leftarrow"
            />
          </Link>
          <img src={countryDetails.country_flag} alt="country-flag" />
        </div>
        <h2>{countryDetails.country_name}</h2>
        <ul className="country-details">
          <li>
            Cases
            <span className="details">{countryDetails.country_cases}</span>
          </li>
          <li>
            Deaths
            <span className="details">{countryDetails.country_death}</span>
          </li>
          <li>
            <span> Tests</span>
            <span className="details">{countryDetails.country_tests}</span>
          </li>

          <li>
            Updated
            <span className="details">{countryDetails.country_updated}</span>
          </li>
          <li>
            <span>Critical cases</span>
            <span className="details">{countryDetails.country_critical}</span>
          </li>
          <li>
            Population
            <span className="details">{countryDetails.country_population}</span>
          </li>
          <li>
            Continent
            <span className="details">{countryDetails.country_continent}</span>
          </li>
        </ul>
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
