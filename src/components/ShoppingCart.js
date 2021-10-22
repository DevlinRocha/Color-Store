import { Link } from "react-router-dom";

import CartItem from "./CartItem";

export default function ShoppingCart(props) {

    function countCart() {
        let count = 0;
        for (let item in props.cart) {
            count += props.cart[item].inCart;
        };
        return Number(count);
    };

    function findTotal() {
        const total = props.cart.reduce((subtotal, item) => subtotal += (item.price * item.inCart), 0);
        return Number(total).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    };

    function handleClick() {
        props.setCart([]);
    };

    return (
        <div>
            <h1 className="header">Cart</h1>
            <section className="pageContainer">
                {props.cart.length>0
                    ? <div className="container-column">
                        <section className="container">
                            {props.cart.map(item => {
                                return (
                                    <CartItem key={item.id} item={item} cart={props.cart} setCart={props.setCart} />
                                );
                            })}
                        </section>
                        <section className="subtotal">
                            <p>Subtotal ({countCart()} items): <b>${findTotal()}</b></p>
                            <Link to="/checkout"><button onClick={handleClick}>Checkout</button></Link>
                        </section>
                    </div>
                    : <p>Your cart is empty! Head over to the <Link to="/shop">Shop!</Link></p>
                }
            </section>
        </div>
    );
};