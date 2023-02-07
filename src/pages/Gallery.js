import { Typography } from '@mui/material'
import QuiltedImageList from './QuiltedImageList'
import '../App.css';
import React from 'react'

export const Gallery = () => {
  return (
    <div className='App-Gallery'>
            <div id='gallery' className='flex flex-col w-full h-full pt-24 pl-4 pb-24 md:pl-0 sm:pl-0 xs:pl-0 md:pt-8'>
                <div className='Gallery-mobile'>
                    <div className='flex flex-col w-[50%] self-center pl-4 md:w-full sm:w-full xs:w-full md:text-center sm:text-center xs:text-center'>
                        <Typography className='feature text-3xl underline' color='#efefef' variant='p'>
                            AI Gone Wild Mini Gallery
                        </Typography>        
                        <Typography className='feature text-1xl w-[60%] pt-4 md:self-center sm:self-center xs:self-center' color='#efefef' variant='p'>
                            Here is a currated collection of some of the best AI Gone Wild images generated. This images are generated with hassanblend AI model with the help of Stable diffusion.
                        </Typography>       
                    </div>
                    <div className='flex flex-row w-[50%] justify-center md:w-full sm:w-full xs:w-full md:mt-8 md:pl-8 md:pr-8'>
                        <QuiltedImageList/>
                    </div>
                </div>
            </div>
    </div>

  )
}
