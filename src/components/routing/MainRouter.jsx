import { Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import Cart from '../cart/Cart';


const MainRouter = () => {

    const msg = localStorage.getItem('msg')
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={ msg === null ? <Login /> : <Dashboard />} />
            <Route path="/cart" element={ msg === null ? <Login /> : <Cart />} />
        </Routes>
    )
}

export default MainRouter;