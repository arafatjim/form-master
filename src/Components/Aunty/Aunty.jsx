import Brother from "../Brother/Brother";
import Cousine from "../Cousine/Cousine";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";


const Aunty = () => {
          return (
                    <div>
                        <h2>Aunty</h2>  
                        <section className="flex">
                              <Cousine name={'Tathoi'}></Cousine>
                              <Cousine name={'Merina'}></Cousine>
                              <Cousine name={'Alamin'}></Cousine>
                              <Cousine name={'Rasel'}></Cousine>
                              
                              
                              </section>    
                    </div>
          );
};

export default Aunty;