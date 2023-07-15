import React from 'react'
import Search from './Search'
import Charitycard from './Charitycard'
import '../../styles/charitypage.css'
export default function CharityPage() {
  const list = [1,2,3,4,5,6,7,8,9]

  return (
    <div className=''>
      <div className='h-20'></div>
      <div className='flex justify-center'>
        <Search/>
      </div>
      <div className='grid  grid-cols-3 mx-20 gap-y-9 my-9 place-items-center justify items-center '>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
        <Charitycard></Charitycard>
      </div>  
    </div>
  )
}
