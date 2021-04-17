import React, { useEffect, useState } from 'react';
import ManageInfo from './ManageInfo';

const ManageService = () => {
const [mange,setMange]= useState([])
console.log('sirvecsss',mange)
    useEffect(() =>{
        fetch('https://safe-temple-56764.herokuapp.com/AddService')
        .then(res=>res.json())
        .then(data=>setMange(data))
    },[])


    
    return (
        <div>
            <h1>All service</h1>
            <table class="table">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Discraption</th>
                        <th scope="col">Contol</th>
                        
                    </tr>
                </thead>


            </table>
            {
                mange.map(mange=><ManageInfo maneg={mange}></ManageInfo>)
            }
        </div>
    );
};

export default ManageService;