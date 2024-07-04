import React from 'react'
import { ChartTwo } from './CharTwo'
import { Chart } from 'chart.js'
import { ChartTwoDonut } from './ChartTwoDonut'

export const ExampleTwo = () => {
  return (
    <div className='flex w-full h-full'>
        <div className='flex w-2/4'>
            <ChartTwo/>
        </div>
        <div className='flex w-1/4'>
            <ChartTwoDonut/>
        </div>
        <div className='flex w-1/4'>
            <ChartTwoDonut/>
        </div>
    </div>
  )
}
