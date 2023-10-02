import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousine = ({name, asset}) => {
          return (
                    <div>
                        <h5>Cousine</h5>
                        <p>{name}</p> 
                        <section>
                              { asset && <Special asset={asset}></Special>}
                              {name === 'Rasel' && <Friend></Friend>}
                              </section>     
                    </div>
          );
};

export default Cousine;