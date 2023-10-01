import Brother from "../Brother/Brother";
import Cousine from "../Cousine/Cousine";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";

const Uncle = ({asset}) => {
          return (
                    <div>
                          <h2>Uncle</h2> 
                          <section className="flex">
                              
                              <Cousine name={'Raiyan'} asset={asset}></Cousine>
                              <Cousine name={'Ohi'}></Cousine>
                              <Cousine name={'Tathoi'}></Cousine>
                              {/* <Cousine name={'Bani'}></Cousine>
                              <Cousine name={'Upoma'}></Cousine>
                              <Cousine name={'Sharmin'}></Cousine> */}
                              </section>   
                    </div>
          );
};

export default Uncle;