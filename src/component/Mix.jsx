import React from 'react'
import { ExampleTwo } from './ExampleTwo'
import { ExampleThree } from './ExampleThree'
import Chart from './Chart'

export const Mix = () => {
  return (
    <div className='flex  flex-col gap-8 h-full w-fyll'>
        <div className='h-1/3 border-solid border-2 border-sky-500 p-8'>
            <Chart/>
        </div>
        <div className='h-1/3 border-solid border-2 border-sky-500 p-2'>
            <ExampleTwo/>
        </div>
        <div className='h-1/3 border-solid border-2 border-sky-500 p-4'>
            <ExampleThree/>
        </div>
    </div>
  )
}
