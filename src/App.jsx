import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { useContext, useEffect } from "react";
import Marketplace from "./Components/Marketplace";
import RealEstate from "./Components/RealEState";
import PropertyListing from "./Components/PropertyListing";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import { DataContext } from "./utils/context/Context";
import WalletPopup from "./Components/WalletPopup";
import ScreenLoading from "./utils/ScreenLoading";
import CredentialForm from "./utils/Forms/CredentialForm";
import UserRole from "./Components/UserRole";
function App() {
  const { setIsOpen, isOpen } = useContext(DataContext);
 
  return (
    <>
      
      <Navbar />
      {isOpen && <WalletPopup />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market-place" element={<Marketplace />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/list-property" element={<PropertyListing />} />
        <Route path="/user-role" element={<UserRole/>} />
      </Routes>
      
      <Footer />
 
    </>
  );
}

export default App;
