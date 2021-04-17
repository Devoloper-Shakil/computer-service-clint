import React, { useState } from 'react';

const MakeAdmin = () => {
    const[admin,setAdmin]=useState(null)
    console.log(admin)
    const hendelAdmin=(e)=>{
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin);
   
    }

    const addAdmin=()=>{
        const admins = {admin }
       
        fetch('https://safe-temple-56764.herokuapp.com/admins', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admins)
        })
            .then(res => {
                alert('admin add')
            }

            )
    }
    return (
        <div className="d-flex bg-light mt-5 h-50">
           <div className="w-50 mt-4 ms-5"> <label>Email</label>
            <input type="email" class="form-control" onBlur={hendelAdmin} name="email" placeholder="jon@gmail.com" /></div>
            <div className="mt-5 ms-4"><button type="submit" onClick={addAdmin} className="btn btn-primary float-end" > Add Admin </button></div>
        </div>
    );
};

export default MakeAdmin;