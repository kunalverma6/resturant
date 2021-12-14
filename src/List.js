import React,{useState} from 'react'
import "./ListStyle.css" ;

const List = () => {

     const [data, setdata] = useState({
user:"",
phone:"",
email:"",
password:""

     });

     const [Record, setRecord] = useState([]);
  const Hinput=(e)=>{
      const name=e.target.name
      const value=e.target.value
      console.log(name,value);
 
      setdata({...data, [name] : value});
  }
   const Handlechange=(e)=>{
       e.preventDefault()
       const newData={...data, id : new Date().getTime().toString() }
      console.log(Record);
       setRecord([...Record,newData]);
       console.log(Record);
   }
  
 setdata({user:"",phone:"",email:"",password:""})
    return (
        
        < >
        <div className="bk">
        <form action="" className="red" onSubmit={Handlechange}>
            <div>
            <label htmlFor='user'>NAME:</label><br />

            <input type="text" autoComplete="off" name="user" value={data.user} id="NAME" onChange={Hinput}></input>
            </div>
       
        <div>
            <label htmlFor="phone">PHONE NUMBER:</label><br />
            <input type="number" size="10" autoComplete="off" name="phone" value={data.phone} id="PHONE NUMBER" onChange={Hinput}></input>
        </div>
        <div>
            <label htmlFor="email">EMAIL:</label><br />
            <input type="text" name="email" autocompleter="off" value={data.email} id="EMAIL" onChange={Hinput}></input>
        </div>
        <div>
            <label htmlFor="password">password:</label><br />
            <input type="password" name="password" value={data.password} id="password" onChange={Hinput}></input>
        </div><br />
        <button type="submit">Registration</button>
        </form>
        </div>
        <div>
            {
                Record.map((curElem)=>{
                    return(
                    
                            <div> 
                                <p>{curElem.user}</p>
                               <p>{curElem.phone}</p>
                               <p>{curElem.email}</p>
                               <p>{curElem.password}</p>
                            </div>
                    )

                })
            }
        </div>

        </>
    )
}

export default List
 