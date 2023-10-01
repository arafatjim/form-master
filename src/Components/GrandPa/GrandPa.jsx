import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'
 
const assetContext = createContext('gold');
const GrandPa = () => {
          const asset = 'Diamond';
          return (
                    <div className="grandPa ">
                              <h2>GrandPa</h2>
                        
                        <assetContext.Provider value="gold">
                        <div className="flex">
                                        <Father asset={asset}></Father>  
                                        <Uncle asset={asset}></Uncle>  
                                        <Aunty></Aunty>
                                        </div> 
                        </assetContext.Provider>   
                     
                    </div>
          );
};

export default GrandPa;