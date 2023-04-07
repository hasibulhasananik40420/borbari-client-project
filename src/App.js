import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from './Pages/AboutPage/AboutPage';
import OurService from './Pages/OurService/OurService';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Footer/Footer';
import Search from './Pages/Search/Search';
import BasicSearch from './Pages/Search/NestedRoute/BasicSearch';
import AdvanceSearch from './Pages/Search/NestedRoute/AdvanceSearch';
import SearchById from './Pages/Search/NestedRoute/SearchById';
import DistrictSearch from './Pages/Search/NestedRoute/DistrictSearch';
import ProfessionSearch from './Pages/Search/NestedRoute/ProfessionSearch';
import BorbibiSearch from './Pages/Search/NestedRoute/BorbibiSearch';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<OurService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />



        <Route path={'/search'} element={<Search />}>

          <Route index path='' element={<BasicSearch />}></Route>
          <Route path='advance-search' element={<AdvanceSearch />}></Route>
          <Route path='search-by-id' element={<SearchById />}></Route>
          <Route path='district-search' element={<DistrictSearch />}></Route>
          <Route path='profession-search' element={<ProfessionSearch />}></Route>
          <Route path='borbibi-search' element={<BorbibiSearch />}></Route>
        </Route>




      </Routes>

      {/* <Footer/> */}
    </div>
  );
};

export default App;