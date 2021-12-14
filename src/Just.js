import React from 'react'

const Just = () => {

    const [Data, setData] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [Records, setRecords] = useState([]);
   const verse=(e)=>{
       const name=e.target.name;
       const value=e.target.value;
       console.log(name, value);

       setData({...Data, [name]: value })
   }

    const Versa=()=>{
        e.preventsDefaults();
       
        const NewRecords=({...Data, id: new Date().getTime().toString()})
        console.log(Records)
        setRecords(...Records,NewRecords)
        console.log(Records)

        setData({
            username:"",
            email:"",
            phone:"",
            password:""
        })
    }

    return (
        <>
        <form   onSubmit={Versa}>
            <div>
                <label htmlFor="username">name</label>
                <input type="text" autoComplete="off" id="username" 
                value={Data.username}
                onChange={Verse}></input>
            </div>
            
            <div>
                <label htmlFor="email">email</label>
                <input type="text" autoComplete="off" id="email" 
                value={Data.email}
                onChange={Verse}></input>
            </div>

            <div>
                <label htmlFor="phone">phone</label>
                <input type="number" autoComplete="off" id="phone" 
                value={Data.phone}
                onChange={Verse}></input>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" autoComplete="off" id="password" 
                value={Data.password}
                onChange={Verse}></input>
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

export default Just
