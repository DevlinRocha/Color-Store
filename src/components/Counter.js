export default function Counter(props) {

    function increment() {
        const newCart = [...props.cart];
        const newItem = props.item;

        for (let item in newCart) {
            if (newCart[item].id === newItem.id) {
                newCart[item].inCart++;
            };
        };
        props.setCart(newCart);
    };

    function decrement(e) {
        const newCart = [...props.cart];
        const newItem = props.item;

        for (let item in newCart) {
            if (newCart[item].id === newItem.id) {
                const currentCart = newCart[item].inCart;
                currentCart === 1 ? void(0) : newCart[item].inCart--;
            };
        };
        props.setCart(newCart);
    };

    return (
        <div className="counter">
            <button onClick={increment}><b>+</b></button>
            <button onClick={decrement}><b>-</b></button>
        </div>
    );
};