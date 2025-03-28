import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

//import './App.css'



function LogIn(props) 
{

    return(
        <div className='logInBox'>
            <h2>Login</h2>
            <form action='#'>
                <div>
                    <label>Email</label>
                    <input type='email' id='email'/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' id='password' name='password'/>
                </div>
                <div>
                    <Link to='/Gallery'><button>Login</button></Link>
                    <button>Register</button>
                </div>

            </form>
        </div>


    )
}

export default LogIn