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
        <div className=' flex  justify-around w-auto gap-20 my-5 mx-5 py-2 px-2 border-solid border-2 border-#067BC2 bg-jYellow shadow-md rounded-md size-20 '>
            <div>
                <img src='' alt='LOGO'/>
            </div>
            <div className='place-items-center'>
                <p className='text-2xl mt-4'>Galleries Page</p>
            </div >
         
                <div className=' mt-1 text-xl'>
                    <Link artists={props.artists} to='/Artists'><button className='  py-3 px-5 rounded-md  hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-2'>Artists</button></Link>
                    <Link to='/Paintings'><button className='  py-3 px-5 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-2'>Paintings</button></Link>
                    <Link to='/Gallery'><button className=' py-3 px-5  rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-2'>Galleries</button></Link>
              
                    <Link to='/Genres'><button className=' py-3 px-5  rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-3'>Genres</button></Link>
                    <button onClick={showModal} className='  py-3 px-5 rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-3'>Favourites</button>
                    <button className=' py-3 px-5  rounded-md focus:shadow-outline hover:bg-gray-100 hover:text-stone-900 text-white font-bold border-1 border-solid mx-3'>About</button>
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