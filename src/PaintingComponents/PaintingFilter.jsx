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
        <div className=' flex justify-center'>
            <div className='py-2 px-2'>
                <h1 className='text-white bg-cOrange text-4xl rounded-md px-2 text-center p-5'>Paintings Filters</h1>

                <form className=' bg-cBlue rounded-md border-4 border-solid border-cBlue h-96 flex flex-col content-center justify-around h-dvh p-5'>

                    <div className='border-4 border-solid  border-hBlue py-10 px-5 text-3xl flex  bg-cOrange text-white rounded-lg'>
                        <input type='radio' name='options' value='title' onChange={handleRadio} className='mr-2'></input>
                        <label htmlFor='title' className='pr-5'>Title
                        </label>
                        <input type='text' className='border-2 border-solid rounded-md text-rBlack' onChange={optionChange}></input>
                        
                    </div>

                    <div className='border-4 border-solid  border-hBlue py-10 px-5 text-3xl flex  bg-cOrange text-white rounded-lg'>
                        <input type='radio' name='options'  value='artists' onChange={handleRadio} className='mr-2'></input>
                        <label htmlFor='artists' className='pr-5'>Artists </label>
                        <SelectArtistsInput artists={props.artists}  onChange={optionChange} />
                    </div>

                    <div className='border-4 border-solid  border-hBlue py-10 px-5 text-3xl flex  bg-cOrange text-white rounded-lg'>
                        <input type='radio' name='options'  value='galleries' onChange={handleRadio} className='mr-2'></input>
                        <label htmlFor='galleries' className='pr-5 '>Galleries </label>
                        <SelectGalleriesInput galleries={props.galleries}  onChange={optionChange} />
                    </div>

                    <div className='border-4 border-solid  border-hBlue py-10 px-5 text-3xl   bg-cOrange text-white rounded-lg  '>
                        <input id='year' type='radio' name='options' value='year' onChange={handleRadio} className='mr-2 pb-4 '></input>
                        <label htmlFor='year' className='pr-5 '>Year</label>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='text-2xl col-start-2 col-end-4 place-self-start '>
                            <input id='less' type='radio' name='yearOption' value='less' onChange={handleRadio2} className='text-rBlack rounded-md'></input>

                                <label htmlFor='less' className='pr-2 rounded-md'>Less: </label>
                                <input type='text' onChange={optionChange} className='rounded-md text-rBlack' ></input>
                            </div>

                            <div className='text-2xl col-start-2 col-end-4'>                               
                                <input id='greater' type='radio' name='yearOption' value='greater' className='text-rBlack' onChange={handleRadio2}></input>

                                <label htmlFor='greater' className='pr-2'>Greater:</label>
                                <input type='text' onChange={optionChange} className='rounded-md text-rBlack'></input>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around '>
                    <input type='submit'  className='bg-jYellow rounded-md text-white text-3xl font-bold col-start-2 py-8 px-20 border-4 border-hBlue' onClick={handleSubmit}></input> 
                    <input type='reset'   className='bg-hBlue rounded-md text-white text-3xl font-bold col-start-2 py-8 px-20 border-4 border-jYellow'onClick={handleReset}></input>  
                    </div> 
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