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
        <div className=' grid grid-cols-4 w-auto gap-4 my-5 mx-5 py-2 px-2 border-solid border-2 border-gray-200 bg-white shadow-md rounded-md size-20 place-items-stretch'>
            <div>
                <img src='' alt='LOGO'/>
            </div>
            <div className='place-items-center'>
                <p className='text-2xl mt-4'>Galleries Page</p>
            </div>
         
                <div className='col-start-3 col-end-4 mt-1 text-xl'>
                    <Link artists={props.artists} to='/Artists'><button className='bg-violet-500  py-3 px-5 rounded-md  hover:bg-gray-100 hover:text-stone-900 hover:outline-2 hover:outline-offset-2 text-white font-bold border-1 border-solid mx-2'>Artists</button></Link>
                    <Link to='/Paintings'><button className='bg-violet-500  py-3 px-5 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-2'>Paintings</button></Link>
                    <Link to='/Gallery'><button className='bg-violet-500  py-3 px-5  rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-2'>Galleries</button></Link>
                </div>
                <div className='col-start-4 col-end-5  mt-1 text-xl'>
                    <Link to='/Genres'><button className='bg-violet-500 py-3 px-5  rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-3'>Genres</button></Link>
                    <button onClick={showModal} className='bg-violet-500  py-3 px-5 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-3'>Favourites</button>
                    <button className='bg-violet-500 py-3 px-5  rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-3'>About</button>
                </div>
                
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
   
    )
    
}

export default Header