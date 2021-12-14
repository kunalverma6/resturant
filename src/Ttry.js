import React,{useState} from 'react'
import "./Tryy.css"

const Ttry = () => {

    const [Data, setData] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [Record, setRecord] = useState([])
     const Change=(e)=>{
         const name=e.target.name;
         const value=e.target.value;

         console.log(name, value)
         setData({...Data, [name] : value })

     }
const Sub=(e)=>{
    e.preventDefaults()

    const NewData=({...Data, id: new Date().getTime().toString()})
    console.log(Record);
    setRecord([...Record, NewData])
    console.log(Record);
    
    setData({username:"",
            email:"",
            phone:"",
            password:""})
}



    return (
        <>
        <form className="form" onSubmit={Sub}>
       <div>
           <label htmlFor="username">user</label>
           <input type="text" name="username" id="username" autoComplete="off"
           value={Data.username}
           onChange={Change} />
           </div>

           <div>
           <label htmlFor="email">email</label>
           <input type="text" name="email" id="email" autoComplete="off"
           value={Data.email}
           onChange={Change} />
           </div>
           
           <div>
           <label htmlFor="phone">phone</label>
           <input type="text" name="phone" id="phone" autoComplete="off"
           value={Data.phone}
           onChange={Change} />
           </div>

           <div>
           <label htmlFor="password">password</label>
           <input type="password" name="password" id="password" autoComplete="off"
           value={Data.password}
           onChange={Change}  />
           </div>

           <button type="submit">Registtration</button>
        </form>
            <div>
                {
                    Record.map((curElem)=>{
                        return(

                            <div >
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.password}</p>

                                </div>
                        )
                    })
                }
                </div>
        </>
    )
}

export default Ttry
