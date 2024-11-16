
  import Header from './components/Header'; 
  import Footer from './components/Footer'; 
  import Home from './pages/Home'; 
  import Cities from './pages/Cities';
  import CityDetail from './pages/CityDetails'; 
  import ItineraryDetail from './pages/ItineraryDetail'; 
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


  const App = () => {
    return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/city/:id" element={<CityDetail />} />
              <Route path="/itineraries/:itineraryId" element={<ItineraryDetail />} />             
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    );
  };

  export default App;
