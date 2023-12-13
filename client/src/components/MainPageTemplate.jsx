import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Recipe from './Recipe';
import Row from 'react-bootstrap/Row';

/**
 * Our battle plan
 *  - set a default ingredient of "chicken"
 *    - that should be a state
 *  - get the thing in the search box
 *  - call the recipe API using that thing
 *  - populate the recipes
 */

const MainPageTemplate = () => {
  const [search, setSearch] = useState('fish');
  const [apiData, setApiData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Take the value of the input box.
    // console.log(event.target.elements.searchbar.value);
    // reminder: setSearch is the only way to change the search value.
    setSearch(event.target.elements.searchbar.value);
  };

  // This code only kicks in if "search" ever changes value.
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      // Save the fetch data into the apiData state var
      setApiData(response.data);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <SearchForm handleSubmitProp={handleSubmit} />
      <Row>
        {apiData.meals &&
          apiData.meals.map((meal) => {
            console.log(meal);
            return (
              <Recipe
                key={meal.idMeal}
                id={meal.idMeal}
                image={meal.strMealThumb}
                name={meal.strMeal}
              />
            );
          })}
      </Row>
    </>
  );
};

export default MainPageTemplate;
