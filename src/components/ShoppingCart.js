import { Link } from "react-router-dom";

import CartItem from "./CartItem";

export default function ShoppingCart(props) {

    function findTotal() {
        const total = props.cart.reduce((subtotal, item) => subtotal += (item.price * item.inCart), 0);
        return total;
    };

    function handleClick() {
        props.setCart([]);
    };

    return (
        <div>
            <h1 className="header">Cart</h1>
            <section className="container">
                {props.cart.length>0
                    ? <div className="container-column">
                        <section className="container">
                            {props.cart.map(item => {
                                return (
                                    <CartItem key={item.id} item={item} cart={props.cart} setCart={props.setCart} />
                                );
                            })}
                        </section>
                        <section className="container-column">
                            <b>Total: ${findTotal()}</b>
                            <Link to="/checkout"><button onClick={handleClick}>Checkout</button></Link>
                        </section>
                    </div>
                    : <p>Your cart is empty! Head over to the <Link to="/shop">Shop!</Link></p>
                }
            </section>
        </div>
    );
};