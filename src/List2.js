import React,{useState} from 'react'
import"./style2.css"

const List2 = () => {

    const [Ragistration, setRagistration] = useState( {
        username:"",
        phone:"",
        email:"",
        password:""

    });

    const HandleInput=(e)=>{
        const name =e.tagret.name;
        
        console.log(name);

    }

return (<>
        <div className="main">
           <form className="form">
               <div>
                   <label htmlFor="username" >NAME:</label>
                   <input type="text" value={Ragistration.username}
                    id="username" 
                   onChange={HandleInput}
                    autoComplete="off" name="username"></input>
               </div>
               <div>
                   <label htmlFor="phone" >PHONE:</label>
                   <input type="number" 
                   value={Ragistration.phone} id="phone"
                   onChange={HandleInput}
                   autoComplete="off" name="phone"></input>
               </div>
               <div>
                   <label htmlFor="email" >EMAIL:</label>
                   <input type="text" value={Ragistration.email} id="email" 
                   onChange={HandleInput}
                   autoComplete="off" name="email"></input>
               </div>
               <div>
                   <label htmlFor="password" >PASSWORD:</label>
                   <input type="text" value={Ragistration.password} id="password"
                   onChange={HandleInput}
                   autoComplete="off" name="password"></input>
               </div>
               <label className="icon">+</label>
               <button type="submit">RAGISTRATION</button>
               
               </form> 
        </div>
        </>
    )
}

export default List2
