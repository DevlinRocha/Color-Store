import { useState } from "react";

import ShopItem from "./ShopItem";

export default function ShopPage(props) {

    const [inventory, setInventory] = useState([
        {
            name: "Blue",
            id: 0,
            color: "blue",
            price: 14.99,
            inStock: true,
        },
        {
            name: "Red",
            id: 1,
            color: "red",
            price: 14.99,
            inStock: true,
        },
        {
            name: "Green",
            id: 2,
            color: "green",
            price: 14.99,
            inStock: true,
        },
        {
            name: "Yellow",
            id: 3,
            color: "yellow",
            price: 14.99,
            inStock: true,
        },
        {
            name: "Pink",
            id: 4,
            color: "pink",
            price: 14.99,
            inStock: true,
        },
    ]);

    return (
        <div>
            <h1 className="header">Shop</h1>

            <section>
                <h2 className="header">Featured Items</h2>
                <section className="container">
                    {inventory.map(item => {
                        return (
                            <ShopItem key={item.id} item={item} cart={props.cart} setCart={props.setCart} />
                        );
                    })}
                </section>
            </section>
        </div>
    );
};