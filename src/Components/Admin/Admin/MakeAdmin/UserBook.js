import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import BookinList from '../../../BookinList/BookinList';
import Saidbar from '../Saidbar/Saidbar';

const UserBook = () => {
    const [loginUser, setLoginUser] = useContext(userContext);
    const [book, setBook] = useState([]);
    console.log('login',book);
    const email =loginUser.email
    console.log(loginUser)
    useEffect(() => {
        fetch(`https://safe-temple-56764.herokuapp.com/payment?${email}`,{
           
        })
            .then(res => res.json())
            .then(data => setBook(data))
    }, []);
    return (
        <div>
            <table class="table">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay with</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>


            </table>

            {
                book.map(book =><BookinList book={book}></BookinList>)
            }
        </div>
    );
};

export default UserBook;