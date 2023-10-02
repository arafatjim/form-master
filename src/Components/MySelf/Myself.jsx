import { useContext } from "react";
import Special from "../Special/Special";
import { moneyContext } from "../GrandPa/GrandPa";


const Myself = ({asset, myself}) => {
    const [money, setMoney] = useContext(moneyContext);
          return (
                    <div>
                        <h3>MySelf</h3>
                        <section className="flex">
                              <Special asset={asset}></Special>
                              </section>   
                              <p>Money:{money} TK</p>
                              <button onClick={() => setMoney (money + 500)}>Add 500 TK</button>   
                    </div>
          );
};

export default Myself;