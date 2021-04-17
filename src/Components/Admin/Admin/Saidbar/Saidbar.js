
import { useContext, useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { userContext } from '../../../../App';
import BookinList from '../../../BookinList/BookinList';
import OderList from '../../../OderList/OderList';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Review from '../Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faShoppingBasket, faShoppingCart, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import UserBook from '../MakeAdmin/UserBook';
import ManageService from '../ManageService/ManageService';

const Saidbar = () => {
    const [loginUser, setLoginUser] = useContext(userContext);
    console.log('login', loginUser)
    const [isAdmins, setIsAdmins] = useState(false);
    console.log('user', isAdmins)

    useEffect(() => {


        fetch('https://safe-temple-56764.herokuapp.com/isAdmins', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loginUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmins(data));
    }, [0])

    const routes = [
        {
            path: "/order",
            exact: true,
            sidebar: () => <div>order!</div>,
            main: () => <OderList></OderList>
        },
        {
            path: "/addService",
            sidebar: () => <div>addService!</div>,
            main: () => <AddService></AddService>
        },
        {
            path: "/mackAdmin",
            sidebar: () => <div>mackAdmin!</div>,
            main: () => <MakeAdmin></MakeAdmin>
        },
        {
            path: "/menageService",
            sidebar: () => <div>menage service!</div>,
            main: () => <ManageService></ManageService>
        },
        {
            path: "/review",
            sidebar: () => <div>review!</div>,
            main: () => <Review></Review>
        },
        {
            path: "/book",
            sidebar: () => <div>book!</div>,
            main: () => <Book></Book>
        },
        {
            path: "/bookingList",
            sidebar: () => <div>bookingList!</div>,
            main: () => <UserBook></UserBook>
        }
    ];
    return (



        <Router>
            <div style={{ display: "flex", height: "100vh" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "25%",
                        background: "#7cec0bd4",

                        marginLeft: '50px'
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0, }} >


                  {isAdmins?<div>
                                <li>
                                    <Link to="/order" style={{ textDecoration: "none", fontSize: "25px", marginTop: "20px" }}> <FontAwesomeIcon icon={faShoppingBasket} />Order list</Link>
                                </li>
                             <li>
                                    <Link to="/addService" style={{ textDecoration: "none", fontSize: "25px", marginTop: "20px" }} > <FontAwesomeIcon icon={faPlus} />Add service</Link>
                                </li>
                                <li>
                                    <Link to="/mackAdmin" style={{ textDecoration: "none", fontSize: "25px", marginTop: "20px" }}> <FontAwesomeIcon icon={faUser} /> Make Admin</Link>
                                </li>
                                <li>
                                    <Link to="/menageService" style={{ textDecoration: "none", fontSize: "25px", marginTop: "20px" }}>  <FontAwesomeIcon icon={faTasks} />Menage service</Link>
                                </li>
                            </div>:
                        <div>
                            <li>
                                <Link to="/review" style={{ textDecoration: "none", fontSize: "25px", marginTop: "20px" }}> <FontAwesomeIcon icon={faCommentDots} />Review</Link>
                            </li>
                            <li>
                                <Link to="/book" style={{ textDecoration: "none", fontSize: "25px", marginTop: "20px" }}><FontAwesomeIcon icon={faShoppingCart} /> Book</Link>
                            </li>
                            <li>
                                <Link to="/bookingList" style={{ textDecoration: "none", fontSize: "25px", marginTop: "20px" }}> <FontAwesomeIcon icon={faShoppingBasket} /> Booking List</Link>
                            </li>
                        </div> 
}

                            
                        


                    </ul>

                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>

                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>



    );
};

export default Saidbar;