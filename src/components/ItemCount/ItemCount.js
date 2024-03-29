import './ItemCount.css'
import { useState } from 'react'
//  4.1k (gzipped: 1.8k)

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1);
        }
    };

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Count'>
            <div className='Control'>
                <button className='Button' onClick={decrement}> - </button>
                <h4 className='number'> {quantity} </h4>
                <button className='Button' onClick={increment}> + </button>
            </div>
            <div>
            <button className='Button2' onClick={() => onAdd(quantity)} disabled={!stock}>
                 Agregar al carrito
            </button>

            </div>
        </div>
    );
};

export default ItemCount;