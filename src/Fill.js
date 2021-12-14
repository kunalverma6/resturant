import React,{useState} from 'react'

 


const Fill = () => {


    const [Data, setData] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
   
    const [Records, setRecords] = useState([]);
   
      const Change=(e)=>{
          const name=e.target.name;
   
          const value=e.target.value;
          console.log(name , value);
   
       setData({...Data, [name] : value})
   
      }
   
      const Sub=(e)=>{
          e.preventDefaults();
   
          const NewData={...Data, id: new Date().getTime().toString()};
          console.log(Records);
          setRecords({...Records,NewData})
          console.log(Records);
   
          setData({
              username:"",
              email:"",
              phone:"",
              password:""
          })
      }
   
    return (
        <>
          <form onSubmit={Sub}>
              <div>
              <label>username</label>
              <input type="text" name="username" id="username" autoComplete="off"
              value={Data.username}
              onchange={Change}></input>
              </div>

              <div>
              <label>email</label>
              <input type="text" name="email" id="email" autoComplete="off"
              value={Data.email}
              onchange={Change}></input>
              </div>

              <div>
              <label>phone</label>
              <input type="text" name="phone" id="phone" autoComplete="off"
              value={Data.phone}
              onchange={Change}></input>
              </div>

              <div>
              <label>password</label>
              <input type="password" name="password" id="password" autoComplete="off"
              value={Data.password}
              onchange={Change}></input>
              </div>
              <button type="submit">Registration</button>
          </form>  
          <div>
              {
                  Records.map((curElem)=>{
                      return(
                          <div> 
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

export default Fill
