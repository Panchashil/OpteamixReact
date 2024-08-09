import React, { useState } from 'react'

const FormValComp = () => {
    const [user,setUser] = useState({
        userName:'',
        userPass:''
    })

    const inputChangeHandler =(event)=>{
    //  console.log(event.target.type);
    //  console.log(event.target.name);
    //  console.log(event.target.value);
    setUser({...user,[event.target.name]:event.target.value})
    }

    const checkData =(event)=>{
        event.preventDefault();
     
     if(user.userName.trim()===""){
          window.alert("user name is required");
          return false;
     }
     if(!user.userName.trim().match("^[a-zA-Z]{8,20}$")){
          window.alert("user name must be in proper formate");
          return false;
     }
     window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2>This is Form Validation components</h2>
            <form onSubmit={checkData}>
                <label>Enter User Name:</label>
                <input type='text' name='userName' onChange={inputChangeHandler} value={user.userName} /> <br/>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default FormValComp
