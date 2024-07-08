import React from 'react'
import { ChartTwo } from './CharTwo'
import { ChartTwoDonut } from './ChartTwoDonut'

export const ExampleTwo = () => {
  const data_one = [
    { difficult: "Dificil", score: 50 },
    { difficult: "Intermedio", score: 90 },
  ];  
  const data_two = [
    { difficult: "Dificil", score: 50 },
    { difficult: "Intermedio", score: 90 },
  ];  
  const data_three = [
    { difficult: "Dificil", score: 50 },
    { difficult: "Intermedio", score: 90 },
  ];  
  return (
    <div className='flex w-full h-full'>
        <div className='flex w-2/5'>
            <ChartTwo/>
        </div>
        <div className='flex w-1/5'>
            <ChartTwoDonut data={data_one}/>
        </div>
        <div className='flex w-1/5'>
        <ChartTwoDonut data={data_two}/>
        </div>
        <div className='flex w-1/5'>
        <ChartTwoDonut data={data_three}/>
        </div>
    </div>
  )
}
