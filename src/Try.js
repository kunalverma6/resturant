import React,{useState} from 'react'
import  "./Tryy.css"
const Try = () => {

const [Data, setData] = useState({
     username:"",
     email:"",
     phone:"",
     password:""
});
 const [Record, setRecord] = useState([])
  const Change=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      console.log(name, value);

      setData({...setData, [name] : value });
  }
   const Submit=(e)=>{
       e.preventDefaults()

       const newData={...Data, id:new Date().getTime().toString() }
       console.log(Record);
       setRecord([...Record,newData])
      // console.log(Record);

       setData({username:"",email:"",phone:"",password:""})
   }
   

    return (
        <>
          <form className="form" onSubmit={Submit}>
          <div>
              <label className="username">NAME</label>
              <input type="text" name="username" id="username" 
              value={Data.username} onChange={Change} ></input>
          </div>    

          <div>
              <label className="email">email</label>
              <input type="text" name="email" id="email" 
              value={Data.email} onChange={Change} ></input>
          </div>    
          <div>
              <label className="phone">phone</label>
              <input type="text" name="phone" id="phone" 
              value={Data.phone} onChange={Change} ></input>
          </div>    
          <div>
              <label className="password">password</label>
              <input type="password" name="password" id="password" 
              value={Data.password} onChange={Change} ></input>
          </div>    
         

          <button type="submit">Registration</button>
          </form>
          <div>
              {
                  
                  Record.map((curElem)=>{
                      const {id, username, email, phone, password}= curElem;
                      return(

                        
                            <div key={curElem.id}>
                                <p>{curElem.user}</p>
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

export default Try
