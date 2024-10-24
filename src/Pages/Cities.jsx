import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom'

function Cities() {
  const [dataCities,setDataCities] = useState( [])
  const navigate = useNavigate()
  const[search, setSearch] = useState ("")

  useEffect(() => { 

  const getData = async () => {
    try {
      let cities = []

      if (search == "") {
        cities = await fetch("http://localhost:8080/api/cities/all")
      }
      else{
        cities = await fetch(`http://localhost:8080/api/cities/all?name=${search}`)
      } 
      cities= await cities.json()
      setDataCities(c => c = cities)

    } catch (error) {
      console.log(error);
      
      
    }
  }
  getData()

  }, [search])
  

function handlear_search (e) {
  console.log(" entro ");
  
  setSearch(s => s = e.target.value)

}
 console.log(dataCities);

 const handlerNavigate = (city)=>{
  navigate("/details", {state:city})
} 


 
  return (
    <>
      <div className="p-4 ">
        <h1 className="text-center text-3xl font-bold py-4 ">Cities</h1>
        <div className="w-full flex justify-center py-5">
          <input type="text" onChange={(e) => handlear_search(e) }/>
        </div>
         { dataCities.response ? 
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2">
          {dataCities.response.map(city => (
            <div className=" relative ">
              <img className="w-full object-cover h-[25vh]" src={city.photo} alt="" />
              <p className=" absolute top-2 bg-black/50 text-white"> {city.name}</p>
              <button onClick={() => handlerNavigate(city) } className=" absolute bg-orange-300/50 bottom-2 p-2 left-[1%] md:left-[25%]  ">more information </button>
            </div>

           ))}
        </div>:"" 
        
        }
      </div>
    </>
  );
}

export default Cities;
