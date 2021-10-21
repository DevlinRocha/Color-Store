import { Link } from "react-router-dom";

export default function Checkout() {
    return (
        <div>
            <h1 className="header">Thanks for shopping at the color store!</h1>

            <p>Your order is on the way! <Link to="/shop">Continue shopping!</Link></p>
        </div>
    );
};