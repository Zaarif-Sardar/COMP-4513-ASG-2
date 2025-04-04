import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Modal} from 'antd'
import FavouritesModalInfo from './FavouritesModalInfo';

//import './App.css'



function Header(props) 
{

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openResponsive,setOpenResponsive] = useState(false);
 
    const showModal = () => {
        setOpenResponsive(true);

    };
   
    return(
        <div className=' grid grid-cols-5 w-lg gap-4  py-2 px-2 my-4 mx-4 border-solid border-2 border-indigo-600'>
            <div>
                <img src='' alt='LOGO'/>
            </div>
            <div>
                <p>Title</p>
            </div>
            <div className='col-start-4 col-end-6'>
                <div className='flex justify-around'>
                <Link artists={props.artists} to='/Artists'><button className='bg-violet-500  py-2 px-4 rounded-md  hover:bg-gray-100 hover:text-stone-900 hover:outline-2 hover:outline-offset-2 text-white font-bold border-1 border-solid'>Artists</button></Link>
                <button className='bg-violet-500  py-2 px-4 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid'>Paintings</button>
                <Link to='/Gallery'><button className='bg-violet-500  py-2 px-4 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid'>Galleries</button></Link>
                <Link to='/Genres'><button className='bg-violet-500  py-2 px-4 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid'>Genres</button></Link>
                <button onClick={showModal} className='bg-violet-500  py-2 px-4 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid'>Favourites</button>
                <button className='bg-violet-500  py-2 px-4 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid'>About</button>
                <Modal title={"Favourites"} open={openResponsive} onOk={()=>setOpenResponsive(false)} onCancel={()=>setOpenResponsive(false)}
                    width= {{
                        xs:'90%',
                        sm:'80%',
                        md:'70%',
                        lg:'60%',
                        xl:'50%',
                        xxl:'40%',
                    }}>
                    <FavouritesModalInfo/>
                </Modal>
                </div>
            </div>
        </div>
    )
    
}

export default Header