import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import titleName from '../../../hooks/useTitle';


//import  icon
import Show from "../../../assets/icons/icon-show.png"
import Hide from "../../../assets/icons/icon-hide.png"
import LogIn from "../../../assets/icons/icon-login.png"
import CreateAccount from "../../../assets/icons/icon-addAccount.png"

//import css
import "./SingIn.css";

//import components
import Buttons from '../../layouts/Buttons/Buttons';


const SingIn = () => {
    titleName('Sing in');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <section className="singIn-section">
            <h1 className='title-singIn'>Sign in</h1>
            <div className="card-singIn">

                <div className="lef-singIn">
                    <form className='form-singIn'>
                        <label htmlFor="mail">Your Email:</label>
                        <input type="email" id='mail' className='inputEmail' placeholder='fake@email...' />


                        <label htmlFor="pwd">Password :</label>
                        <div className="pasword-contentSingIn">
                            <input type={showPassword ? "text" : "password"}
                                id='pwd'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='inputPwd'
                                placeholder='password...' />
                            <img
                                title={showPassword ? "Hide password" : "Show password"}
                                src={showPassword ? Hide : Show}
                                onClick={() => setShowPassword(prevState => !prevState)}
                            />
                        </div>

                        <div className="btn-loginSingIn">
                            <Buttons
                                variant="loginBtn"
                                icon={LogIn}>
                                <p>Log in</p>
                            </Buttons>
                        </div>
                    </form>


                    <div className="divider-text">
                        <span>Or:</span>
                    </div>


                    <NavLink to="/registration">
                        <div className="btn-registering">
                            <Buttons
                                variant="createAcc"
                                icon={CreateAccount}>
                                <p>Create a New Accoutn</p>
                            </Buttons>
                        </div>
                    </NavLink>

                </div>

                <div className="right-singIn">
                    <h1 className="registering-title">Benefits of your free  account</h1>
                    <p>Personalized Recommendations</p>

                    <h1 className="registering-title">Your Watchlist</h1>
                    <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>

                    <h1 className="registering-title">Your Favorit list</h1>
                    <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                </div>
            </div>
        </section>
    )
}

export default SingIn