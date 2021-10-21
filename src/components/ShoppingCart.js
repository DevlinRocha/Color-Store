import { Link } from "react-router-dom";

import CartItem from "./CartItem";

export default function ShoppingCart(props) {
    return (
        <div>
            <h1 className="header">Cart</h1>
            <section className="container">
                {props.cart.length>0
                    ? props.cart.map(item => {
                        return (
                            <CartItem key={item.id} item={item} cart={props.cart} setCart={props.setCart} />
                        );
                    })
                    : <p>Your cart is empty! Head over to the <Link to="/shop">Shop!</Link></p>
                }
            </section>
        </div>
    );
};