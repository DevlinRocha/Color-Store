import { Link, NavLink } from "react-router-dom";

export default function NavBar(props) {

    function countCart() {
        let count = 0;
        for (let item in props.cart) {
            count += props.cart[item].inCart;
        };
        return Number(count);
    };

    return (
        <nav>
            <h1 className="logo"><Link exact to="/" style={{ textDecoration: 'none', color: '#1C77C3' }}>Color Store</Link></h1>
            <ul className="navLinks">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/cart">Cart{props.cart.length>0 ? `(${countCart()})` : null}</NavLink></li>
            </ul>
        </nav>
    );
};