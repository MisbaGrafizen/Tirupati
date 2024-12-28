import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import ScrollToTop from "./Component/Scrooltop";
import Home from "./pages/Home ";
import Header from "./Component/header/Header";
import Loader from "./Component/loader/Loader"

function App() { 

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [location.pathname]); 



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <ScrollToTop />
    <div className="w-100 ease-soft-spring h-[100%] !bg-[#fff] duration-1000">
      <Header />
      <Routes>
        <Route path="/" element={loading ? <Loader /> : <Home />} />
        
        
      </Routes>
    </div>
  </>
  );
}

export default App;
