import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from '../Header.jsx'
import PaintingFilter from './PaintingFilter.jsx';
import PaintingsDisplayed from './PaintingsDisplayed.jsx';
import ModalInfo from '../ModalInfo.jsx'
import { Modal} from 'antd'

//import './App.css'



function Paintings(props) 
{
    const [filteredPaintings,setFilteredPaintings] = useState([]);    
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

    const handleFilter = (option, optVal, optionYear) => 
        {
            console.log(option)
            if(option == 'artists')
            {
                const fpaintings = props.paintings.filter(p => p.artists.artistId == optVal)
                console.log(optVal)
                setFilteredPaintings([...fpaintings]);
                console.log(fpaintings);
             }
            
            else if(option == 'galleries')
            {
                const fpaintings = props.paintings.filter(p => p.galleries.galleryId == optVal)
                console.log(optVal)
                setFilteredPaintings([...fpaintings]);
                console.log(fpaintings);
            }
            else if(option == 'title') 
            {
                const fpaintings = props.paintings.filter(p => p.title.toLowerCase().includes(optVal.toLowerCase()))
                console.log(optVal)
                setFilteredPaintings([...fpaintings]);
                console.log(fpaintings);
            }
            else if(option =='year')
                {
                    if(optionYear == 'less')
                    {
                        const fpaintings = props.paintings.filter(p => p.yearOfWork < optVal)
                        console.log(optVal)
                        setFilteredPaintings([...fpaintings]);
                        console.log(fpaintings);
                    }
                    else if (optionYear == 'greater')
                    {
                        const fpaintings = props.paintings.filter(p => p.yearOfWork > optVal)
                        console.log(optVal)
                        setFilteredPaintings([...fpaintings]);
                        console.log(fpaintings);
                    }

                }
            else
            {
                const fpaintings = (props.paintings)
                console.log(optVal)
                setFilteredPaintings([...fpaintings]);
                console.log(fpaintings);
            }
            
            
        }

        const ClickedPainting = (id) =>
            {
                const chosenPainting = props.paintings.find(p => p.paintingId == id);
                setChosenPainting(chosenPainting)
                console.log(chosenPainting);
                
            }

    return(
        <article className='size-auto'>
            
            <Header/>
            <div className='grid grid-cols-5 w-lg gap-4 my-20 mx-10 size-auto'>
                <div className='col-start-1 col-end-3 b py-2 px-2'>
                    <PaintingFilter artists={props.artists} galleries={props.galleries} submitHandler={handleFilter}/>
                </div>
                <div className='col-start-3 col-end-6  py-2 px-2 h-dv'>
                   <PaintingsDisplayed paintings={filteredPaintings} sM={showModal} update1={ClickedPainting} />
                   <Modal title='Painting Details' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className=''  width={'80%'}>
                        <ModalInfo clickedPainting={clickedPainting}/>
                   </Modal>
                </div>


            </div>
        </article>
        
    )
}

export default Paintings