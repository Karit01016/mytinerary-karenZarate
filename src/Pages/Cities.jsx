import React, { useEffect, useState } from "react";
import { ImHappy } from "react-icons/im";

function Cities() {
  const [dataCities,setDataCities] = useState( [])
  const[search, setSearch] = useState ("")

  useEffect(() => { 

  const getData = async () => {
    try {
      let cities = []

      if (search != "") {
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
  setSearch(s => s = e.target.value)

}
 console.log(dataCities);
 
  return (
    <>
      <div className="p-4 ">
        <h1 className="text-center text-3xl font-bold py-4 ">Cities</h1>
        <div className="w-full flex justify-center">
          <input type="text" onChange={(e) => handlear_search(e) }/>
        </div>
         { dataCities.response ? 
        <div className=" grid grid-cols-2 md:grid-cols-4 ">
          {dataCities.response.map(city => (
            <div>
              <img className="w-full h-[20vh]" src={city.photo} alt="" />
              <p className=" absolute top-2 bg-black/50 text-white"> {city.name}</p>
              <button className=" absolute bottom-2 p-3 ">more information </button>
            </div>

           ))}
        </div>:"" 
        
        }
      </div>
    </>
  );
}

export default Cities;
