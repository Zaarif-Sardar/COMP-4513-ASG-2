import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

//import './App.css'



function LogIn(props) 
{

    return(
        <div className=' flex min-h-screen justify-center items-center '>
            <form className='w-md max-w-md bg-white shadow-md rounded px-10 pt-8 mb-4'>
                <div className='mb-4'>
                    <label className=' text-black-500 font-bold md:text-right mb:text-right mb-1 pr-4' for='email'>Email</label>
                    <input className='shadow border rounded w-full py-2 px-2 text-black-500 ' type='email' id='email' placeholder='something@domian.ca'/>
                </div>
                <div>
                    <label className=' text-black-500 font-bold md:text-right mb:text-right mb-1 md:mb-0 pr-4'>Password</label>
                    <input className='shadow border rounded w-full py-2 px-2 text-black-500' placeholder='Make it Good' type='password' id='password' name='password'/>
                </div>
                <div className=' flex items-center'>
                    <Link to='/Gallery'><button className='bg-blue-500 py-4 px-8 rounded hover:bg-blue-950 text-white font-bold' type='button'>Login</button></Link>
                    <button className='bg-blue-500 py-4 px-8 rounded hover:bg-blue-950 text-white font-bold my-8 mx-8' type='button'>Register</button>
                </div>

            </form>
        </div>


    )
}

export default LogIn