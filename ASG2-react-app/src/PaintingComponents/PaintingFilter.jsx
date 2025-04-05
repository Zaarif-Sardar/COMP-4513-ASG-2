import { useState, useEffect, useContext} from 'react'
import { Routes, Route} from 'react-router-dom'
import SelectArtistsInput from './SelectArtistsInput';
import SelectGalleriesInput from './SelectGalleriesInput';





function PaintingFilter(props) 
{
    const [option,setOption] = useState('year');
    const [optionYear,setOptionYear] = useState();
    const [optVal,setOptVal] = useState();

    const handleRadio = (e) => 
        {
            setOption(e.target.value)
        }
    const handleRadio2 = (e) => 
        {
                setOptionYear(e.target.value)
                console.log(e.target.value)
        }
    const handleSubmit = (e) =>
        {
            e.preventDefault()
            props.submitHandler(option, optVal, optionYear)
        }
    const handleReset = (e) =>
        {
                setOptVal();
                setOption();
                setOptionYear();
                props.submitHandler(option, optVal, optionYear)
        }
    
    const optionChange = (e) => 
        {
            setOptVal(e.target.value)
            console.log(e.target.value);
            console.log("it do work")
        }
  
   
    return(
        <div>
            <div className='border-2 border-solid py-2 px-2 h-dvh'>
                <h1>Paintings Filters</h1>

                <form className='border-2 border-solid h-96 flex flex-col content-center justify-around'>

                    <div className='border-2 border-solid'>
                        <input type='radio' name='options' value='title' onChange={handleRadio}></input>
                        <label htmlFor='title'>Title
                            <input type='text' className='border-2 border-solid' onChange={optionChange}></input>
                        </label>
                        
                    </div>

                    <div className=' border-2 border-solid' >
                        <input type='radio' name='options'  value='artists' onChange={handleRadio}></input>
                        <label htmlFor='artists'>Artists
                            <SelectArtistsInput artists={props.artists}  onChange={optionChange} />
                        </label>
                    </div>

                    <div className=' border-2 border-solid' >
                        <input type='radio' name='options'  value='galleries' onChange={handleRadio}></input>
                        <label htmlFor='galleries'>Galleries
                            <SelectGalleriesInput galleries={props.galleries}  onChange={optionChange} />
                        </label>
                    </div>

                    <div className=' border-2 border-solid flex justify-around' >
                        <input id='year' type='radio' name='options' value='year' onChange={handleRadio}></input>
                        <label htmlFor='year'>Year</label>

                        <div className='border-2 border-solid'>
                        <input id='less' type='radio' name='yearOption' value='less' onChange={handleRadio2}></input>

                            <label htmlFor='less'>Less:
                                <input type='text' onChange={optionChange}></input>
                            </label>
                        </div>

                        <div className='border-2 border-solid'>                               
                            <input id='greater' type='radio' name='yearOption' value='greater' onChange={handleRadio2}></input>

                            <label htmlFor='greater'>Greater:
                                <input type='text' onChange={optionChange} ></input>
                            </label>
                        </div>
                    
                    </div>

                    
                    <input type='submit' onClick={handleSubmit}></input> 
                    <input type='reset' onClick={handleReset}></input>   
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