import { useRef } from "react";

export default function ShopItem(props) {
    const cartInput = useRef(null);

    function handleClick() {
        const newCart = [...props.cart];
        const newItem = props.item;
        const cartTotal = Number(cartInput.current.value);

        if (cartTotal === 0) return;

        if (newCart.length>0) {
            let duplicate = false;
            for (let item in newCart) {
                if (newCart[item].id === newItem.id) { // If the item is already in the cart
                    duplicate = true;
                    newCart[item].inCart += cartTotal;
                } else {
                    newItem.inCart = cartTotal;
                };
            };
            duplicate ? void(0) : newCart.push(newItem);
        } else {
            newItem.inCart = cartTotal;
            newCart.push(newItem);
        };
        props.setCart(newCart);
    };

    function handleInput(e) {
        console.log(e.key)

        const validCharacters = [
            "1","2","3","4","5","6","7","8","9","0","Backspace","Delete",
        ];
        let valid = false;

        for (let character in validCharacters) {
            if (e.key === validCharacters[character]) {
                valid = true;
            };
        };
        valid ? void(0) : e.preventDefault();
    };

    return (
        <div className="itemContainer">
            <h4>{props.item.name}</h4>
            <section className="item" style={{ backgroundColor: props.item.color }}>
            </section>
            <p>${props.item.price}</p>
            <input ref={cartInput} onKeyDown={handleInput} type="number" min="1" defaultValue="1" />
            <button onClick={handleClick}>Add to cart</button>
        </div>
    );
};