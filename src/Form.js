import React,{useState} from 'react'
 import "./Formm.css"

const Form = () => {
    const [Data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })

    const Hello=(e)=>{
    const name=e.target.namee;
    const value=e.target.value;
    console.log(name, value)        
    
    setData({...Data,[name] : value})
 
    }
    const [Records, setRecords] = useState([])

   const Hy=(e)=>{
       e.preventDefault();
       const AllData={...Data, id: new Date().getTime().toString()}

       setRecords([...Records,AllData]);
       console.log(Records);
       setData({user:"",email:"",phone:"",password:""});
   }

return (
        <div className="main">
        <Form className="form" onsubmit={Hy}>
            <div>
                <label htmlFor="name">NAME:</label>
                <input type="text" id="username" autoComplete="off"
                value={Data.name} namee="name"
                onChange={Hello} ></input> 
            </div>
            <div>
                <label htmlFor="email">email:</label>
                <input type="text" id="useremail" autoComplete="off"
                value={Data.email} namee="email"
                onChange={Hello} ></input> 
            </div>
            <div>
                <label htmlFor="phone">phone:</label>
                <input type="number" id="username" autoComplete="off"
                value={Data.phone} namee="phone"
                onChange={Hello} ></input> 
            </div>
            <div>
                <label htmlFor="password">password:</label>
                <input type="password" id="userpassword" autoComplete="off" 
                value={Data.password} namee="password"
                onChange={Hello}></input> 
            </div>
            <label>+</label>
            <button classname="button" namee="button" type="submit">REGISTRTION</button>
        </Form>
        <div>
            {
            Records.map((curElem) => {
                return (
                    <div>
                        <p>{curElem.user}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.phone}</p>
                        <p>{curElem.password}</p>

                    </div>
                )

            })
        }
        </div>
        </div>
        
            )
}

export default Form
