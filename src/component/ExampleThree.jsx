import React from 'react'
import { Line } from './Line'
import { Donut } from './Donut'

export const ExampleThree = () => {
  return (
    <div className='flex  gap-4 w-full h-full'>
        <div className='w-2/4 h-full'>
            <Line/>            
        </div>
        <div className='flex w-1/4 justify-center items-center'>
            <Donut/>
        </div>
        <div className='flex w-1/4 justify-center items-center'>
            <Donut/>
        </div>
    </div>
  )
}
