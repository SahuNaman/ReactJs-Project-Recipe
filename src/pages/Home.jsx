import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
   
  
  let searchValue = useRef()
  const [search,setSearch] =useState("pizza")

  const [food,setFood] = useState([])
  let getData = async ()=>{
    let res = await fetch(`https://api.edamam.com/search?q=${search}&app_id=6527f158&app_key=13b5918fd05c276154d8246fa27f5dbc`);
    let data = await res.json();
    console.log(data.hits)
    setFood(data.hits);
  }
  useEffect(()=>{
    getData();
  },[search])

    const handlesearch=(event)=>{
    event.preventDefault()
    let values = searchValue.current.value
    console.log(values)
    setSearch(values)

  }
  
  
  return (
    <>
    <div className='row '>
       <form className="d-flex m-auto " role="search">
        <input ref={searchValue} className="form-control me-2 w-75" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={handlesearch} type="submit" >Search</button>
      </form>
    </div>
    <div className='row d-flex justify-content-center gap-2 align-item-center pt-5'>
      
      

      {food.map((obj)=>{
        return <div key={obj.recipe.url} className="card" style={{width: '18rem'}}>
  <img src={obj.recipe.image} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{obj.recipe.label}</h5>
    
    <Link  state={obj} to="/single"  className="btn btn-primary">View Recipe </Link>
    
  </div>
</div>
       })}
    </div></>
  )
}


export default Home
