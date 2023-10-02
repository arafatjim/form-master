import { useContext } from "react";
import { assetContext } from "../GrandPa/GrandPa";


const Friend = () => {
          const gift = useContext(assetContext);
          return (
                    <div>
                         <h5>Friend</h5> 
                         <p>{gift}</p>    
                    </div>
          );
};

export default Friend;