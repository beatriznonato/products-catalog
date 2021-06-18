import React, { useState } from 'react';
import { useCartCount } from '../../contexts/MiniCartCount';
import './AddToCart.css'

const AddToCart = () => {
    const [quantityCount, setQuantityCount ] = useState(1)
    const {cartCount, optimizedSetCartCount } = useCartCount();

    return (
        <div className="button__container">
            <div className="button__quantity--container">
                <button className="button__quantity" onClick={() => setQuantityCount(quantity => quantity <= 1 ? 1 : quantity - 1 )}>-</button>
                <input className="button__value--input" type="number" value={quantityCount} />
                <button className="button__quantity" onClick={() => setQuantityCount(quantity => quantity + 1)}>+</button>
            </div>
            <button className="button__buy" onClick={() => optimizedSetCartCount(quantityCount + cartCount)}>Adicionar ao Carrinho</button>
        </div>
    )
}

export default AddToCart;