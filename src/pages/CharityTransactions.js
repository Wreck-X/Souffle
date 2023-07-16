import React from 'react'
import TopBar from '../components/TopBar'
import Transaction from '../components/Transaction'
import Graph from '../components/Graph'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Chair } from '@mui/icons-material'
import Charitycard from '../components/Charitycard'

export default function CharityTransactions(props) {
  const location = useLocation();
  const { name } = location.state
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://justcors.com/tl_8bd1eca/https://souffle.biscuitbobby.me/transaction_data")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return (
      <div>Error! {error.message}</div>
    )
  } else if (!isLoaded) {
    return (
      <div>Loading</div>
    )
  } else {

    let response = JSON.parse(items[0])
    return (
    <>
    <TopBar></TopBar>
    <div className='grid grid-cols-2 gap-16 m-20 mx-48'>
        <div className=' justify-center items-center  overflow-scroll h-[40rem]'>
            <ul>
              {response[name].map((charity) => {
                let key = Object.keys(charity)[0]
                const dateAndTime = charity[key].create_time
                const date = dateAndTime.substring(0, 10)
                const time = dateAndTime.substring(11, 19)
                const recipientVal = charity[key].recipient
                let income = false;
                if (recipientVal == "") {
                  income = true

                }
                console.log(income)
                if (income) {
                  return (
                    <ul>
                      <li> <Transaction id={key} income={income} amount={charity[key].total} date={date} time={time} /> </li>
                    </ul>
                  )
                } else {
                  return (

                    <ul>
                      <li> <Transaction id={key} income={income} to={recipientVal} amount={charity[key].total} date={date} time={time} /> </li>
                    </ul>
                  )
                }
              })}
            </ul>
        </div>

        <div className='flex flex-col'>
            <Graph></Graph>
            <div className='grid h-full place-content-center'>
            <div class="btn btn-one flex justify-center items-center text-[23px] w-[20rem] h-[10rem]">
                <span>TRANSFER</span>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
}