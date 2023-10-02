import { useContext } from "react";
import Brother from "../Brother/Brother";
import Cousine from "../Cousine/Cousine";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";
import { moneyContext } from "../GrandPa/GrandPa";


const Aunty = () => {
    const [money, setMoney] = useContext(moneyContext);
          return (
                    <div>
                        <h2>Aunty</h2>  
                        <section className="flex">
                              <Cousine name={'Tathoi'}></Cousine>
                              <Cousine name={'Merina'}></Cousine>
                              <Cousine name={'Alamin'}></Cousine>
                              <Cousine name={'Rasel'}></Cousine>
                              
                              
                              </section>  
                              <p>Money :{money}</p> 
                              <button onClick={() =>setMoney(money + 100) }>Add 100TK</button> 
                    </div>
          );
};

export default Aunty;