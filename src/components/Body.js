import React, { useState, useEffect } from "react";
import RestrauntCard from "./Restrauntcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  

  const [resList, setresList] = useState([]);
  const [searchtext, setsearchtext] = useState(" ");
  const [filteredlist, setfilteredlist] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setresList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setfilteredlist(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" body-layout">
      <div className="search">
      <input
          className="input-box"
          type="text"
          value={searchtext}
          placeholder="Search for restaurants"
          onChange={(e) => setsearchtext(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filtlist = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())

            );
            console.log(searchtext.toLowerCase())

            console.log(filtlist);

            setfilteredlist(filtlist);
          }}
        >
          {" "}
          Search
        </button>
      </div>
      <div className="filterbutton">
        <button
          className="filtbutton"
          onClick={() => {
            const filteredlist = resList.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilteredlist(filteredlist);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>

      <div className=" res-container">
        {filteredlist.map((restraunt) => ( <Link
          key={restraunt.info.id}
          to={`/restraunt/${restraunt.info.id}`}
        >

          <RestrauntCard  resData={restraunt} />
        </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
