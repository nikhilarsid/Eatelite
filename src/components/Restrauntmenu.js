// src/components/Restrauntmenu.js
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import Shimmer from "./Shimmer";


const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showAddons, setShowAddons] = useState(false);
  const [currentAddons, setCurrentAddons] = useState([]);
  const [message, setMessage] = useState(null);
  const { addToCart } = useContext(CartContext);

  const params = useParams();
  let rest_id = params.resId;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${rest_id}&submitAction=ENTER`
      );
      const data = await response.json();
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  const x1 = resInfo?.data;
  const x2 = x1?.cards[4]?.groupedCard;
  const x3 = x2?.cardGroupMap?.REGULAR?.cards[4];
  const z = x3?.card?.card?.categories?.[0]?.itemCards || x3?.card?.card?.itemCards;

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.card.info.name} added to cart`);
    setTimeout(() => setMessage(null), 2000); // Clear message after 2 seconds
  };

  const handleShowAddons = (addons) => {
    setCurrentAddons(addons);
    setShowAddons(true);
  };

  const handleCloseAddons = () => {
    setShowAddons(false);
    setCurrentAddons([]);
  };

  return (
    <div className="res_menu">
      {message && <div className="add-to-cart-message">{message}</div>}
      <div className="menu">
        {z && z.map((item, index) => (
          <li key={index} style={{ marginBottom: '20px', listStyle: 'none' }}>
            {item?.card?.info?.name} - Rs.{" "}
            {item?.card?.info?.price === undefined
              ? item?.card?.info?.defaultPrice / 100
              : item?.card?.info?.price / 100}{" "}
            for one
            {item?.card?.info?.addons && (
              <button
                onClick={() => handleShowAddons(item.card.info.addons)}
                className="show-addons-button"
              >
                Show Addons
              </button>
            )}
            <button
              onClick={() => handleAddToCart(item)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </div>
      {showAddons && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseAddons}>&times;</span>
            <h2>Addons</h2>
            {currentAddons.map((addon, addonIndex) => (
              <div key={addonIndex} style={{ marginBottom: '10px' }}>
                <strong>{addon.groupName}</strong>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResMenu;

