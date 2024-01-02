
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItem.css';

const CartItem = ({ prod, id, title, name, img, category, description, price, stock, quantity,totalQuantity }) => {
    const { resolveItem } = useContext(CartContext);
    return (
        <div className='CartItem'>
            <picture>
                <img src={img} alt={name} className='itemImg'/>
            </picture>
            
            <div className='CartItem'>
                <p className='info'>Título: {name}</p>
                <p className='info'>Cantidad: {totalQuantity}</p>
                <p className='info' >Precio u.: {price}</p>
                <p className='info'>Subtotal: ${quantity * price}</p>
                <button className='Option' onClick={() => resolveItem(prod.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem;
// return (
//     <div className="ContainerCart">
//         <h1 className="maintittle"> Carrito </h1>
//         <div className="Productdetails">
//             <h4>{`${description}`}</h4>
//             <p>{`Precio Unidad: ${price}`}</p>
//             <p>{`Cantidad:${ItemCount}`}</p>
//             <p>{`Precio Total: $${cart.price * cont}`}</p>

//         </div>
//         <h2>{`Precio Total: $${cart.price * cont}`}</h2>
//         <button>Vaciar</button>
//         <Link to="/CheckOut" className='Option'>Finalizar Compra </Link>

//     </div>
// )