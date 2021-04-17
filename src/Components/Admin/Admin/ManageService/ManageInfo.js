import React, { useEffect } from 'react';

const ManageInfo = (props) => {
    const{service,_id}=props.maneg;


    const hendelService = id => {
        // console.log(id)

        // useEffect(()=>{
        //     const url=`https://safe-temple-56764.herokuapp.com/deleteService/${id}`;
        //     fetch(url,{
        //         method:'DELETE',
        //     })
        //     .then(res=>res.json())
        //     .then(result=>{
        //         alert('Delet your service')
        //     })
        // },[id])
        fetch(`https://safe-temple-56764.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {

              console.log("product deletet")
            })
       
    }

    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>

                        <td>{service.titel}</td>
                        <td>{service.desciption}</td>
                        <td> <button className="bg-primary" onClick={() => hendelService( _id )} >Delete</button></td>
                      
                      

                    </tr>
                </tbody>
            </table> 
        </div>
    );
};

export default ManageInfo;