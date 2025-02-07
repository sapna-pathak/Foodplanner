import React, { useState } from "react";
import './App.css';
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data.nutrients);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
    <h1 className='font-bold text-red-800 text-6xl my-10'>Food Planner</h1>
    <input  className="border w-80 p-3 rounded-xl" type='number' placeholder='enter the colories' onChange={handleChange}/>
    <button className='bg-purple-800 text-white mx-3 p-2 rounded-lg font-bold'  onClick={getMealData}>Get Your Meal Plan</button>
    </section>
    {mealData && <MealList mealData={mealData}/>}

    </div>
  );
}

export default App;
