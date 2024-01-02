import { createContext, useState } from "react";

export const CartContext = createContext (
    {
     cart:[]
    }
);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, {...item, quantity}])
        }
        else {
            console.error("el product ya fue agregado")
        }
    };
    const total = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

    const resolveItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId)
        setCart(cartUpdated)
    };

    const clearCart = () => {
        setCart([])
    };
    
    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    };


    return (
        <CartContext.Provider value={{cart, isInCart, addItem, resolveItem, clearCart, total}} >
        {children}
       </CartContext.Provider>
        );

};

