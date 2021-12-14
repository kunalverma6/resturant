import React,{useState} from 'react'
import "./Xm.css"

const Xmas = () => {
    
 const [Data, setData] = useState({
    username:"",
    email:"",
    phone:"",
    password:""

})
const [Records, setRecords] = useState([])


const Xry=(e)=>{
    const name=e.target.name;
    const value=e.targrt.value;
    console.log(name, value);
    setData({...Data, [name]: value})


};



const Happy=(e)=>{
     e.preventsDefaults();
      
     const Hell={...Data,  id: new Date().getTime().toString()};
     console.log(Records)
     setRecords([...Records,Hell]);
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
        <form  onSubmit={Happy}  className="form">
            <div>
                <label>NAME</label>
                <input type="text" name="username" autoComplete="off"
                value={Data.username}
                onchange={Xry}></input>
            </div>

            <div>
                <label>email</label>
                <input type="text" name="email" autoComplete="off"
                value={Data.email}
                onchange={Xry}></input>
            </div>

            <div>
                <label>phone</label>
                <input type="number" name="phone" autoComplete="off"
                value={Data.phone}
                onchange={Xry}></input>
            </div>

            <div>
                <label>password</label>
                <input type="password" name="password" autoComplete="off"
                value={Data.password}
                onchange={Xry}></input>
            </div>

            <button type="submit">Registration</button>
        </form>
        <div>
            {
                Records.map((curElem)=>{
                    const {id, username, email, phone, password}= curElem;
                    return(
                        
                        <div key={}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{password}</p>
                        </div>
                    )
                })
            }
        </div>
            
        </>
    )
}

export default Xmas
