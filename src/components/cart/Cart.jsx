import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeToCart } from "../../redux/cart/cartSlice";
import NoRecord from "../../assets/NoRecord.png";
import Sidebar from "../sidebar/Sidebar";
import '../../styles/cart/cart.css';
import '../../styles/dashboard/dashboard.css';

const Cart = () => {
    const cartdata = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    return (
        <>
            <Sidebar />
            <div className="content" >
                <header className="cart-header">
                    <p className="fs-5 fw-bold text-white">Cart Section </p>
                    <Link to="/dashboard"><button className="btn btn-primary">Back to Shopping</button></Link>
                </header>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartdata.cartItems.map((item) => {
                            return (
                                <tr>
                                    <td><img style={{ width: 100 }} src={item.image} alt="productImage" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><button style={{ width: 50, height: 50, marginRight: 5 }} className="btn btn-primary"
                                        onClick={() => dispatch(removeToCart(item))}>-</button>{item.quantity}
                                        <span>1</span><button style={{ marginLeft: 5, width: 50, height: 50 }} className="btn btn-primary" >+</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    {cartdata.cartItems.length === 0 ?
                        <div className='text-center'>
                            <img src={NoRecord} alt='NoRecord' className='w-10' />
                        </div>
                        : null}
                </table>
            </div>
        </>
    );
}

export default Cart;