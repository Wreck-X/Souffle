
import React from 'react'
import Search from '../components/Search'
import Charitycard from '../components/Charitycard'
import TopBar from '../components/TopBar'
import '../styles/charitypage.css'
import { useEffect, useState } from 'react'
import CharityTransactions from './CharityTransactions'
import { Link } from 'react-router-dom'

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

        let response = JSON.parse(items[0])
        return (
        <>
            <TopBar></TopBar>
            <div className='h-[2rem]'></div>
            <div className='flex justify-center'>
                <Search />
            </div>
            <div className='grid items-center lg:grid-cols-3 md:grid-cols-2 lg:mx-48 md:mx-0 gap-y-9 my-9 place-items-center justify '>
                <ul>
                        {Object.keys(response).map(charity =>
                            <ul>
                                <Link to={"/transactions"} state={{ name: "test" }}>
                                    <li><Charitycard name={charity} /></li>
                                </Link>
                            </ul>
                        )}
                </ul>
            </div>
        </>
    )
}
}

export default Home;
