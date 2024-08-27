
import Slogan from '../components/Slogan';
import ProductOfYear from '../components/ProductOfYear';
import NewDrops from '../components/NewDrops';
import Catigories from '../components/Catigories';
import Reviews from '../components/Reviews';

import * as React from "react";



function HomePage(){
    React.useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    
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