import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeToCart } from "../../redux/cart/cartSlice";
import NoRecord from "../../assets/NoRecord.png";
import '../../styles/cart/cart.css';

const Cart = () => {
    const cartdata = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    return (
        <>
            <header className="cart-header">
                <h2>Cart Section</h2>
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
                    <img src={NoRecord} alt='NoRecord' className='image' />
                    : null}
            </table>
        </>
    );
}

export default Cart;