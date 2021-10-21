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
            <p>{props.item.price}</p>
            <p>In cart: {props.item.inCart}</p>
            <button onClick={handleClick}>Remove from cart</button>
        </div>
    );
};