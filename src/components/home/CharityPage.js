import React from 'react'
import Search from './Search'
import Charitycard from './Charitycard'
import '../../styles/charitypage.css'
export default function CharityPage() {
  const list = [1,2,3,4,5,6,7,8,9]

  return (
    <div className=''>
      <div className='h-[5rem]'></div>
      <div className='flex justify-center'>
        <Search/>
      </div>
      <div className='grid  lg:grid-cols-3 md:grid-cols-2 lg:mx-48 md:mx-0 gap-y-9 my-9 place-items-center justify items-center '>
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
