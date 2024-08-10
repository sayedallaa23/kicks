
import Slogan from '../components/Slogan';
import ProductOfYear from '../components/ProductOfYear';
import NewDrops from '../components/NewDrops';
import Catigories from '../components/Catigories';
import Reviews from '../components/Reviews';

import * as React from "react";


function HomePage(){
    return(
        <div className="App">
            <Slogan/>
            <ProductOfYear/>
            <NewDrops/>
            <Catigories/>
            <Reviews/>
        </div>
    )
}

export default HomePage