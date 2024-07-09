import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Singler = () => {
    let location =useLocation()
    console.log(location)
    console.log(location.state)
  return (
    <div>
        <div className='row text-center'>
            <div className='col-md-6 '><img src={location.state.recipe.image}/></div>
            <div className='col-md-6 '><h3>Title : {location.state.recipe.label}</h3>
            <h4>MealType : {location.state.recipe.mealType}</h4>
            <div className='d-flex justify-content-center mt-3'><Link to={location.state.recipe.url} className='btn btn-primary'>How to make</Link></div>
            <div className=' row  gap-5 mt-2 d-flex  align-items-center'>
              <div className=' col-3 bg-warning m-0 p-0 d-flex flex-column justify-content-center'>
              <p>{location.state.recipe.totalNutrients.FAT.label}</p>
              <p>{Math.ceil(location.state.recipe.totalNutrients.FAT.quantity)} g</p></div>
            
            <div className=' col-3 bg-warning'>
            <p>{location.state.recipe.totalNutrients.CA.label}</p>
            <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)} mg</p>
            </div>
            
                <div className=' col-3 bg-warning'>
              <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
              <p>{Math.ceil(location.state.recipe.totalNutrients.PROCNT.quantity)} g</p>
                </div>
                </div>
            </div>
          </div>
        <div className='row'>
          <div className='col-md-6  d-flex align-items-center flex-column'>
          <h1>Health Labels</h1>
            <ul>
              {location.state.recipe.healthLabels.map((obj)=>{
                return <li>{obj}</li>

                })}
            </ul>
          </div>

          <div className='col-md-6  d-flex align-items-center flex-column'>
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
