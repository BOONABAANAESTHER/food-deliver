import { createContext, useState } from "react";
import { food_list } from "../images/images";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});  

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            // Adding item for the first time
            if (!prev[itemId]) {
                return { ...prev, [itemId]: 1 };
            }
            // Incrementing item count if it already exists
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] === 1) {
                // Remove the item from the cart if its count goes to 0
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
    };

   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if ( cartItems[item] > 0) {
            let iteminfo = food_list.find((product) => product._id === item);
            totalAmount += iteminfo.price * cartItems[item];
        }
       
    }
    return totalAmount
   }
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
