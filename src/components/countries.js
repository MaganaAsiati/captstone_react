import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../Redux/Countries/country';

function Countries() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountry());
    }
  }, []);
  return <div>country</div>;
}

export default Countries;
