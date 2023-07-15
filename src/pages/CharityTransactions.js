import React from 'react'
import TopBar from '../components/TopBar'
import Transaction from '../components/Transaction'
import Graph from '../components/Graph'

export default function CharityTransactions() {
  return (
    <>
    <TopBar></TopBar>
    <div className='grid grid-cols-2 gap-16 m-20 mx-48'>
        <div className=' justify-center items-center  overflow-scroll h-[40rem]'>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
        </div>

        <div className='flex flex-col'>
            <Graph></Graph>
            <div className='grid place-content-center h-full'>
            <div class="btn btn-one flex justify-center items-center text-[23px] w-[20rem] h-[10rem]">
                <span>TRANSFER</span>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
