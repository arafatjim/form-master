import { useContext } from "react";
import { assetContext } from "../GrandPa/GrandPa";


const Special = ({asset}) => {
     const gift = useContext(assetContext);
          return (
                    <div>
                         <h5>Special</h5> 
                         <p>has : {asset}</p>
                         <p>also has : {gift}</p>    
                    </div>
          );
};

export default Special;