import useInputState from "../../Hooks/UseInputState";


const HookForm = () => {
          const [name, handleNameChange]= useInputState('arafat jim');
          const handleSubmit = e => {
                    e.preventDefault();
                    console.log('form data', name);
          }
          return (
                    <div>
                    <form onSubmit={handleSubmit}>
                           <input value={name} onChange={handleNameChange}  type="text" name="name" />
                           <br />
                           <input  type="email" defaultValue={'shoshikanto@gmail.com'} name="email" /> <br />
                           <input type="password" name="password" id="" /> <br />
                           <input type="submit" value="Submit" />   
                    </form>
                    </div>
          );
};

export default HookForm;