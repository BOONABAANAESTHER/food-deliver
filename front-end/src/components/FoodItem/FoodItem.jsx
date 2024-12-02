import React, { useContext, useState } from 'react';  
import './FoodItem.css';
import { images } from '../../images/images';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);  
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='FoodItem'>
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={images.add_icon} alt='Add to Cart' />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={images.remove_red_icon} alt="Remove from Cart" />
            <p>{cartItems[id]}</p>  {/* Displaying the number of items in cart */}
            <img onClick={() => addToCart(id)} src={images.add_green_icon} alt="Add more to Cart" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={images.rating_starts} alt="Rating" />
        </div>
        <p className="food_item_desc">{description}</p>
        <p className="food-item-price">shs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
