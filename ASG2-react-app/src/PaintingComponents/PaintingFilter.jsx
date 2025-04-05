import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import SelectArtistsInput from './SelectArtistsInput';
import SelectGalleriesInput from './SelectGalleriesInput';





function PaintingFilter(props) 
{
    const [option,setOption] = useState('year');
    const [optVal,setOptVal] = useState();

    const handleRadio = (e) => 
        {
            setOption(e.target.value)
            console.log(option)
        }
    const handleSubmit = (e) =>
        {
            e.preventDefault()
            props.submitHandler(option, optVal)
        }
    
    const optionChange = (e) => 
        {
            setOptVal(e.target.value)
            console.log(optVal);
            console.log(e.target.value);
            console.log("it do work")
        }
  
   
    return(
        <div>
            <div className='border-2 border-solid py-2 px-2 h-dvh'>
                <h1>Paintings Filters</h1>

                <form className='border-2 border-solid h-96 flex flex-col content-center justify-around'>
                   
                    <div className=' border-2 border-solid' >
                        <input type='radio' name='options'  value='artists'></input>
                        <label htmlFor='artists'>Artists
                            <SelectArtistsInput artists={props.artists}  onChange={optionChange} />
                        </label>
                    </div>
                    <input type='submit' onClick={handleSubmit}></input>    
                </form>
            </div>
            <div>
                <div className='flex'>
                   
                </div>
               
            </div>
        </div>
        

       
        
    )
}

export default PaintingFilter