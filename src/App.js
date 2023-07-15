import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Payment from './pages/Payment';
import './index.css';
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </>
    );
};

export default App;
