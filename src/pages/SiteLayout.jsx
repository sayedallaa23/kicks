import Navbar from "../components/Navbar";
import Slogan from '../components/Slogan';
import ProductOfYear from '../components/ProductOfYear';
import NewDrops from '../components/NewDrops';
import Catigories from '../components/Catigories';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from 'react-router-dom';

const SiteLayout=()=>{
    return(
        <div className="App">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default SiteLayout