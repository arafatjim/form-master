import { useEffect, useRef } from "react";

const RefForm = () => {
          const nameRef= useRef(null);
          const emailRef = useRef(null);
          const passwordRef= useRef(null);
          const submitRef = useRef(null);
          useEffect ( () =>{
                    nameRef.current.focus();
          },[])
          const handleSubmit= e =>{
                    e.preventDefault();
                    console.log(nameRef.current.value);
                    console.log(emailRef.current.value);
                    console.log(passwordRef.current.value);
                    console.log(submitRef.current.value);
          }
          return (
                    <div>
                      <form onSubmit={handleSubmit}>
                           <input ref={nameRef} type="text" name="name" />
                           <br />
                           <input ref={emailRef} type="email" defaultValue={'shoshikanto@gmail.com'} name="email" /> <br />
                           <input ref={passwordRef} type="password" name="password" id="" /> <br />
                           <input ref={submitRef} type="submit" value="Submit" />   
                    </form>        
                    </div>
          );
};

export default RefForm;