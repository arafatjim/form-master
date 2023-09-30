import { useState } from "react";


const StateFullForm = () => {
          const [email, setemail] =useState(null);
          const [password, setPassword]=useState(null);
          const [name, setName] = useState(null);
          const [error, setError]=useState('');
          const handleSubmit = e =>{
                    e.preventDefault();
                    if(password.length < 8){
                              setError('Password Must Be in 8 character or more');
                    }
                    else {
                              setError('');
                              console.log(name,email,password);
                    }
                    
                    // console.log(password);
          }
          const handleEmailChange = e => {
                    console.log(e.target.value);
                    setemail(e.target.value)
          }
          const handlePasswordChange = e =>{
                    console.log(e.target.value);
                    setPassword(e.target.value);
          }
          const handleNameChange = e =>{
                    console.log(e.target.value);
                    setName(e.target.value);
          }
          return (
                    <div>
                         <form onSubmit={handleSubmit}>
                           <input onChange={handleNameChange} type="text" name="name" />
                           <br />
                           <input onChange={handleEmailChange} type="email" name="email" /> <br />
                           <input type="text" name="phoneNumber" id="" /> <br />
                           <input onChange={handlePasswordChange} required type="password" name="password" id="" /> <br />
                           <input type="submit" value="Submit" />   
                           {
                              error && <p>{error}</p>
                           }
                    </form>      
                    </div>
          );
};

export default StateFullForm;