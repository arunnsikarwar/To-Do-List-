import React from "react";
import Navbar from "../components/Navbar/Navbar";
import hero from "../assets/first.jpeg";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    function handleStart(){
        navigate('/login');
    }
  return (
    <div className="bg-green-100">
      <Navbar />
      <div className="text-black ">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-semibold mb-4">TO-DO LIST - MAKE YOUR NOTES HERE</h1>
          {/* <p className="text-lg mb-8">Discover a world of possibilities.</p> */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out" onClick={handleStart}>
            Start Making
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
        <img src={hero} alt="Hero Section" className="w-2/5 h-[60vh]" />
      </div>
    </div>
  );
};

export default MainPage;
