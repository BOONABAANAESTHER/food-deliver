import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../images/images';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">“Our menu offers a delicious variety of options, including fresh salads, savory rolls, indulgent desserts, hearty sandwiches, 
        and more, all crafted to satisfy every palate.”
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            //setting the orange border on the image
            <div 
              key={index} 
              className='explore-menu-list-item' 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            >
              <img 
                className={category === item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
