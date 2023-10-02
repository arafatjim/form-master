import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'
 
export const assetContext = createContext('gold');
export const moneyContext = createContext(300);
const GrandPa = () => {
    const [money, setMoney] = useState(300);
          const asset = 'Diamond';
          return (
                    <div className="grandPa ">
                        <h1>Total : {money}</h1>
                              <h2>GrandPa</h2>
                        
                        <moneyContext.Provider value={[money,setMoney]}>
                            
                        <assetContext.Provider value="gold">
                        <div className="flex">
                                        <Father asset={asset}></Father>  
                                        <Uncle asset={asset}></Uncle>  
                                        <Aunty></Aunty>
                                        </div> 
                        </assetContext.Provider>

                        </moneyContext.Provider>   
                     
                    </div>
          );
};

export default GrandPa;