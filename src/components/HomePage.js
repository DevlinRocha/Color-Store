import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1 className="header">Welcome to the color store!</h1>

            <p>The website is currently under construction. Visit our <Link to="/shop">Shop!</Link></p>
        </div>
    );
};