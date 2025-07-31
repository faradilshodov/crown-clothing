import './cart-item.styles.scss';

const CartItem = ({ cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <div>
            <h2>{name}</h2>
            <span>Quantity: {quantity}</span>
            <span>Price: ${price}</span>
            <img src={imageUrl} alt={name} />
        </div>
    )
}

export default CartItem;