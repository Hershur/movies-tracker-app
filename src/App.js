import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Cookies from 'js-cookie';
import Favourites from './screens/Favorites';
import Viewed from './screens/Viewed';
import TVShowsDetails from './screens/Details/TVShowsDetails';


function App() {
  const getSession = Cookies.get('sessionId') || null; 

  if(!getSession) {
    return (
      <BrowserRouter> 
          <Login />
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/viewed" element={<Viewed />} />
        <Route path="/details/tv/:tvShowId" element={<TVShowsDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
