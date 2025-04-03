import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import PaintingsList from '../PaintingList.jsx'
import PaintingOptions from '../PaintingOptions.jsx'
import ModalInfo from '../ModalInfo.jsx'
import {Modal} from 'antd'
//import './App.css'



function ArtistPaintings(props) 
{
    const [sortedPaintings,setSortedPaintings] = useState([props.aPaintings]);
    const [clickedPainting,setChosenPainting] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);

    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);  
    };

    const sortBy = (value) =>
        {
            switch(value)
            {
                case 'artist':
                    const  sortedByArtistsName = props.aPaintings.sort((a,b) => a.artists.firstName.localeCompare(b.artists.firstName));
                    setSortedPaintings([...sortedByArtistsName]);
                    console.log(sortedByArtistsName);
                    break;
                case 'year':
                    const sortedByYear = props.aPaintings.sort((a,b) => a.yearOfWork - b.yearOfWork);
                    setSortedPaintings([...sortedByYear]);
                    console.log(sortedByYear);
                    break;
                case 'title':
                    const sortedByTitle = props.aPaintings.sort((a,b) => a.title.localeCompare(b.title));
                    setSortedPaintings([...sortedByTitle]);
                    break;
                default:
                    console.log("Default hit");
                    setSortedPaintings([...props.aPaintings]);
            }
    
        }
        
            const ClickedPainting = (id) =>
                {
                    const chosenPainting = props.aPaintings.find(aP => aP.paintingId == id);
                    setChosenPainting(chosenPainting)
                    console.log(chosenPainting);
                    
                }
    return(

        <div className='border-4 border-solid col-span-2'>
            <PaintingOptions update={sortBy}/>
           <PaintingsList paintings={props.aPaintings} sM={showModal} update1={ClickedPainting}/>
           <Modal title={clickedPainting.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <ModalInfo clickedPainting={clickedPainting}/>
           </Modal>
        </div>
       
    )
}
export default ArtistPaintings