import React from 'react';
import { useEffect, useState } from 'react';
import { postReq, getReq } from '../utils/api';


import "../resources/styles/login_page.css"
// import { useNavigate } from 'react-router-dom';

import Header from './Header';
import MessagePage from './MessagePage';


function SignupPage() {

    const [loginData, setLoginData] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const handleClick = async (event) => {
        event.preventDefault();
        postReq('/signup', { username: username, password: password })
            .then(response => {
                setLoginData(response);
                setShowError(true)
            });
    }

    return (
        <div>
            {showError ? (<MessagePage type={loginData.success == true ? "success" : "error"}
                message={loginData.success == true ? "Welcome to Mizdooni" : loginData.data.error} redirectURL="/" />)
                : (
                    <div class="d-flex flex-column">
                        {/* <Header buttonText="Use Google" navigateURL="/login"/> */}
                        <Header buttonText="Login" navigateURL="/login" />
                        <main class="flex-grow-1">

                            <div class="container-s w-100 text-center">
                                <div class="home-background w-100">
                                    <div class="container">
                                        <div class="input-group mb-3">
                                            <img class="big-logo" src={require("../resources/images/logo.png")} alt="logo" />
                                        </div>

                                        <form onSubmit={handleClick} class="input-group mb-1 text-center" autocomplete="on">

                                            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Name " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Email " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            {/* <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" /> */}
                                            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Password " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            <button class="btn search-input btn-outline-secondary rounded-4 search-button" type="submit">
                                                Signup
                                            </button>
                                        </form>

                                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


                                        <form onSubmit={handleClick} class="input-group mb-1 text-center" autocomplete="on">
                                            {/* <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                        <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                        <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" /> */}
                                            {/* <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                        <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" /> */}
                                            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Username " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} class="search-input restaurant-search rounded-4 mb-3" placeholder=" Password " aria-label="restaurant search" aria-describedby="basic-addon2" />
                                            <button class="btn search-input btn-outline-secondary rounded-4 search-button " type="submit">
                                                Google
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer class="text-center p-2 m-0 mt-5" id="footer">
                            <p class="m-0">Copyright &copy; 2024 Mizdooni - All rights reserved.</p>
                        </footer>
                    </div>
                )}
        </div>
    );
}

export default SignupPage;