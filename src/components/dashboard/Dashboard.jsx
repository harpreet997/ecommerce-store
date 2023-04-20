import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Sidebar from '../sidebar/Sidebar';
import { getAllCategories, getProducts,getProductsAscending, getProductsDescending } from '../../getdata/getdata';
import { Link } from "react-router-dom";
import Pagination from '../pagination/Pagination';
import NoRecord from '../../assets/NoRecord.png';
import '../../styles/dashboard/dashboard.css';
import { addToCart } from '../../redux/cart/cartSlice';
import { BsSortAlphaDown, BsSortAlphaUpAlt } from 'react-icons/bs';


const Dashboard = () => {
    const [categorydata, setCategorydata] = useState([]);
    const [productlist, setProductList] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = productlist.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(productlist.length / recordsPerPage)
    const quantity = useSelector((state) => state.cart.cartItems.length);
    const dispatch = useDispatch();
    const [category, setCategory] = useState();


    useEffect(() => {
        getAllCategories()
            .then((response) => {
                console.log(response.data);
                setCategorydata(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleCategorySelect = (event) => {
        const category = event.target.value;
        setCategory(category)
        getProducts(category)
            .then((response) => {
                console.log(response.data);
                setProductList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleAscending = () => {
        getProductsAscending(category)
            .then((response) => {
                console.log(response.data);
                setProductList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleDescending = () => {
        getProductsDescending(category)
            .then((response) => {
                console.log(response.data);
                setProductList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Sidebar />
            <div className="content" >
                <nav className="nav-bar">
                    <Link to="/"><h2>Online Shopping </h2></Link>
                    <Link to="/cart">
                        <div className="nav-bag">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                            <span>{quantity}</span>
                        </div>
                    </Link>
                </nav>
                <div className='row ms-1 mb-1' style={{ marginTop: 1 }}>
                    <div className="d-flex">
                        <p className='fs-4'>Select Category</p>
                        <BsSortAlphaDown style={{ marginLeft: 20, marginTop: 15 }} onClick={handleAscending} />
                        <BsSortAlphaUpAlt style={{ marginLeft: 20, marginTop: 15 }} onClick={handleDescending} />
                    </div>

                    <select className="w-100 mb-2 input" name="category" id="category"
                        onChange={handleCategorySelect} required>
                        <option value="">Select</option>
                        {categorydata.map((item) => {
                            return (
                                <option value={item} >{item}</option>
                            )

                        })}
                    </select>
                </div>

                <div className="card mt-5 mb-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {currentRecords.length > 0 ?
                            (
                                <tbody>
                                    {currentRecords.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{item.title}</td>
                                                <td><img src={item.image} width={50} alt="productImage" /></td>
                                                <td>{item.price}</td>
                                                <td><button onClick={() => dispatch(addToCart(item))} className="btn btn-primary">Add to Cart</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            ) : null}
                    </table>


                    {currentRecords.length === 0 ?
                        <div className='text-center'>
                            <img src={NoRecord} alt='NoRecord' className='w-10' />
                        </div>
                        : null}
                </div>
                {currentRecords.length > 0 ?
                    <Pagination
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    : null}
            </div>
        </>
    );
}

export default Dashboard;
