import React from 'react'
import { useLocation } from 'react-router-dom'

const Singler = () => {
    let location =useLocation()
    console.log(location)
    console.log(location.state)
  return (
    <div>
        <div className='row text-center'>
            <div className='col-md-6 bg-info'><img src={location.state.recipe.image}/></div>
            <div className='col-md-6 bg-success'><h3>Title : {location.state.recipe.label}</h3>
            <h4>MealType : {location.state.recipe.mealType}</h4>
            </div>
        </div>
        <div className='row'>
          <div className='col-md-6 bg-info d-flex align-items-center flex-column'>
          <h1>Health Labels</h1>
            <ul>
              {location.state.recipe.healthLabels.map((obj)=>{
                return <li>{obj}</li>

                })}
            </ul>
          </div>

          <div className='col-md-6 bg-info d-flex align-items-center flex-column'>
          <h1>Ingredients</h1>
            <ul>
              {location.state.recipe.ingredients.map((obj)=>{
                return <li>{obj.text}</li>

                })}
            </ul>
          </div>
        </div>
    </div>



    
    
    
    
  )
}

export default Singler
