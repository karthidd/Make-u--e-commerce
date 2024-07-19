import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product)

  return (
    <div className="shop-category">
      <img src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Options" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category.toLowerCase() === item.category.toLowerCase()) {
            return (
              <Item
                key={item.id} 
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null; 
        })}
       
      </div>
      <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  );
};

export default ShopCategory;
