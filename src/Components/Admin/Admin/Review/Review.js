import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [review, setReview] = useState(null)

    const hendelReview = (e) => {
        const newReview = { ...review }
        newReview[e.target.name] = e.target.value
        setReview(newReview);

    }
    const onSubmit = () => {
        const reviews = { review }
        console.log(reviews)
        fetch('https://safe-temple-56764.herokuapp.com/AddReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviews)
        })
            .then(res => {
                alert('review Succsecefully')
            }

            )

        // console.log(services)


    };
    return (
        <div className="mt-5 ms-5 w-50">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" class="form-control" onBlur={hendelReview} name="name" placeholder="Your Name" />
                <br />

                <input type="text" class="form-control" onBlur={hendelReview} name="heardwor" aria-describedby="emailHelp" placeholder="Company Name Description/heardwor name" />
                <br />

                <textarea class="form-control" onBlur={hendelReview} name="messeg" id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                <br />

                <button type="submit" class="btn btn-primary float-end">Review</button>
            </form>
        </div>
    );
};

export default Review;