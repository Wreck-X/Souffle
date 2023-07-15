import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';

function getDataFromBB() {
    return fetch('https://souffle.biscuitbobby.me/test')
        .then((response) => response.json)
        .then((responseJson) => {
            console.log(responseJson.organization);
        })
        .catch((error) => {
            console.error(error)
        })
}

const App = () => {
    getDataFromBB();
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
