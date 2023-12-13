import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipePageTemplate = () => {
  const [apiData, setApiData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      // Save the fetch data into the apiData state var
      // console.log(response.data.meals[0]);
      setApiData(response.data.meals[0]);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {/* Individual recipe template */}
      <h1 style={{ margin: '1rem 0' }}>{apiData.strMeal}</h1>
      <p>
        <img
          style={{
            width: 300,
            float: 'left',
            margin: '0 2rem 2rem 0'
          }}
          src={apiData.strMealThumb}
        />
      </p>
      <div>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            {apiData.strMeasure1} {apiData.strIngredient1}
          </li>
          <li>
            {apiData.strMeasure2} {apiData.strIngredient2}
          </li>
          <li>
            {apiData.strMeasure3} {apiData.strIngredient3}
          </li>
        </ul>
        {apiData.strInstructions}
      </div>
    </>
  );
};

export default RecipePageTemplate;
