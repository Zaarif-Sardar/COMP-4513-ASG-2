import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import PaintingsList from '../PaintingList.jsx'
import PaintingOptions from '../PaintingOptions.jsx'
import ModalInfo from '../ModalInfo.jsx'
import { Modal} from 'antd'





function GalleryPaintings(props) 
{
    const [sortedPaintings,setSortedPaintings] = useState([props.paintings]);
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
                    const  sortedByArtistsName = props.paintings.sort((a,b) => a.artists.firstName.localeCompare(b.artists.firstName));
                    setSortedPaintings([...sortedByArtistsName]);
                    break;
                case 'year':
                    const sortedByYear = props.paintings.sort((a,b) => a.yearOfWork - b.yearOfWork);
                    setSortedPaintings([...sortedByYear]);
                    break;
                case 'title':
                    const sortedByTitle = props.paintings.sort((a,b) => a.title.localeCompare(b.title));
                    setSortedPaintings([...sortedByTitle]);
                    break;
                default:
                    console.log("Default hit");
                    setSortedPaintings([...props.paintings]);
            }
    
        }

        const ClickedPainting = (id) =>
            {
                const chosenPainting = props.paintings.find(gP => gP.paintingId == id);
                setChosenPainting(chosenPainting)
                console.log(chosenPainting);
                
            }
    return(

        <div className=' h-dvh border-4 border-solid border-hBlue rounded-md col-span-2 bg-cBlue h-dvh overflow-scroll text-white'>
            <PaintingOptions update={sortBy}/>
           <PaintingsList paintings={props.paintings} sM={showModal} update1={ClickedPainting}/>
           <Modal title={clickedPainting.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={'80%'} >
                <ModalInfo clickedPainting={clickedPainting}/>
           </Modal>
        </div>
       
    )
}
export default GalleryPaintings