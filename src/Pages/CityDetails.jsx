  import React, { useEffect } from 'react';
  import { useParams, Link } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchItineraries } from '../store/actions/itineraryActions';
  import { selectedCity } from '../store/actions/cityActions'; 
  
  const CityDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { itineraries, loading, error } = useSelector((state) => state.itineraries);
    const { selectCity } = useSelector((state) => state.cities);
  
    useEffect(() => {
      dispatch(fetchItineraries(id));
    }, [dispatch, id]);
  
    if (loading) {
      return <p className="text-center text-xl">Loading itineraries...</p>;
    }
  
    if (error) {
      return <p className="text-center text-xl text-red-500">Error: {error}</p>;
    }
  
    if (!selectCity) {
      return <p className="text-center text-xl">City data not found.</p>;
    }
  
    return (
      <div>
        <div className="relative w-[90vw] h-[70vh] mx-auto my-12 p-4 overflow-hidden object-cover bg-blue-200">
          <img src={selectCity.photo} alt="City background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-15 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-5xl font-bold mb-4">{selectCity.name}</h2>
            <p className="text-xl max-w-2xl mb-6">{selectCity.description}</p>
            <Link to="/cities" className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              Back to Cities
            </Link>
          </div>
        </div>
        {!loading && itineraries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {itineraries.map((itinerary, index) => (
              <div key={index} className="bg-blue-200 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img src={itinerary.photoItinerary} alt={itinerary.nameItinerary} className="w-full h-48 object-cover" />
                <div className="p-4 h-[40vh] flex flex-col justify-between">
                  <h3 className="text-xl font-semibold">{itinerary.nameItinerary}</h3>
                  <p className="text-gray-600">Duration: {itinerary.duration} hours</p>
                  <p className="text-gray-600">Price: {"💵".repeat(itinerary.price)}</p>
                  <p className="text-gray-600">Likes: {itinerary.likes}</p>
                  
                  <Link to={`/itineraries/${itinerary._id}`} className=" w-[40%]  bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">View Activities</Link>
                  
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">No itineraries yet for this city.</p>
        )}
      </div>
    );
  };
  
  export default CityDetail; 