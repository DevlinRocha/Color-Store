import Counter from "./Counter";

export default function CartItem(props) {

    function handleClick() {
        const newCart = [...props.cart];
        const newItem = props.item;
        const removed = newCart.filter(item => item.id !== newItem.id);
        props.setCart(removed);
    };

    return (
        <div className="itemContainer">
            <h4>{props.item.name}</h4>
            <section className="item" style={{ backgroundColor: props.item.color }} />
            <p>${props.item.price}</p>
            <section className="container-nowrap">
            <span>In cart: {props.item.inCart}</span><Counter item={props.item} cart={props.cart} setCart={props.setCart} />
            </section>
            <button onClick={handleClick}>Remove from cart</button>
        </div>
    );
};