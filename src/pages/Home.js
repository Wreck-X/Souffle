import React from 'react'
import Search from '../components/Search'
import Charitycard from '../components/Charitycard'
import TopBar from '../components/TopBar'
import '../styles/charitypage.css'
import { useEffect, useState } from 'react'

function Home() {
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

        console.log(items[0][0][0])
        console.log(JSON.parse('{"Organisation": "test","data": {"WH-8SF49949JV771893F-2AY68533SW000372X": {"summary": "Payouts batch completed successfully.","resource_type": "payouts","total": "10.00","create_time": "2023-07-15T15:51:32Z","recipient": "Multiple recipients"}}}'))
    return (
        <>
            <TopBar></TopBar>
            <div className='h-[2rem]'></div>
            <div className='flex justify-center'>
                <Search />
            </div>
            <div className='grid items-center lg:grid-cols-3 md:grid-cols-2 lg:mx-48 md:mx-0 gap-y-9 my-9 place-items-center justify '>
                <ul>
                    {items.map(item => (
                        <li>{typeof (item[0])}</li>
                    ))}
                </ul>
            </div>
        </>


    )
}
}

export default Home