import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchedCases } from '../../Redux/Cases/cases';
import './case.css';
import icon from '../../assets/back-icon.jpeg';
import SearchBar from '../search/search';

export default function Home() {
  const dispatch = useDispatch();
  const allCases = useSelector((state) => state.covid);
  const [search, setSearch] = useState('');
  const cases = allCases.filter((item) => item.country_name
    .toLowerCase().includes(search.toLowerCase()));

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchedCases());
  }, []);
  return (
    <div className="all-countries">
      <div><SearchBar handleOnChange={handleOnChange} value={search} /></div>
      <div className="country-container">
        {cases.map((elt) => (
          <ul key={elt.country_name} className="country">
            <li>
              <Link to={`/Info/${elt.country_name}`}>
                <img
                  className="back-img"
                  src={icon}
                  alt="back-icon"
                  width={30}
                  height={30}
                />
              </Link>
              <div className="country-image">
                <img src={elt.country_flag} alt="country-flag" />
              </div>
              <h2 className="country-name">{elt.country_name}</h2>
              <p className="total-cases">
                Total cases :
                {elt.country_cases}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
