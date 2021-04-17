import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const AddService = () => {
    const [imageUrl, setImageUrl] = useState(null);
 
    const [service, setService] = useState(null);
    
    const { register, handleSubmit, watch, errors } = useForm();


    const hendelService = (e) => {
        const newService = { ...service }
        newService[e.target.name] = e.target.value
        setService(newService);

    }

    const hendelImg = event => {

        const imageData = new FormData()
        imageData.set('key', 'eea52225ebecc296c9bccdfdc7bec0c5')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = ()=> {
        const services = { service, imageUrl: imageUrl }
        // console.log(services)
        fetch('https://safe-temple-56764.herokuapp.com/AddService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(services)
        })
            .then(res => {
                alert('service Add')
            }

            )

        // console.log(services)


    };
    

   

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="exampleInputEmail1" class="form-label">Service Titel</label>
                <input type="text" class="form-control" onBlur={hendelService} name="titel" placeholder="Service Titel" />
                <label for="exampleInputEmail1" class="form-label">Description</label>
                <input type="text" class="form-control" onBlur={hendelService} name="desciption" aria-describedby="emailHelp" placeholder="Enter your Description" />


                <label for="exampleInputEmail1" class="form-label">Image</label>
                <input type="file" class="form-control" onChange={hendelImg} placeholder="Image" />
                <br />

                <button type="submit" class="btn btn-primary float-end">Submit</button>
            </form>
        </div>
    );
};

export default AddService;