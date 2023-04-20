import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr';
import { toast } from "react-toastify";
import '../../styles/dashboard/dashboard.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('msg');
        toast.success("Logging out", {
            position: "top-center",
            autoClose: 2000
        })
        setTimeout(() => {
            navigate('/');
        }, 2000)
        
    }

    return (
        <div className="sidebar">
            <NavLink className="fs-6 fw-bold" to="/dashboard"
            >Dashboard</NavLink>
            <NavLink className="fs-6 fw-bold" to="/cart"
            >Cart</NavLink>
            <div className='d-flex'>
            <p className='logout-button fs-6 fw-bold' style={{ marginLeft: 15, marginTop: 8,cursor: 'pointer' }} onClick={handleLogout}>Logout</p>
            <GrLogout className="logout-icon shopping-bag" style={{  marginTop: 10, marginLeft: 5, width: 20, height: 20, cursor: 'pointer' }} onClick={handleLogout} />
            </div>
        </div>

    )
}

export default Sidebar;

