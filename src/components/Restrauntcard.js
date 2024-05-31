import React from "react";
const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="card-layout">
      <img
        className=" img-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />

      <h2 style={{ fontFamily: "Open Sans, sans-serif" }}>
        {resData.info.name}
      </h2>
      <h3 style={{ fontFamily: "Arial, sans-serif" }}>
        {resData.info.locality}
      </h3>
      <h3>{resData.info.costForTwo}</h3>
      <h3>{resData.info.cuisines.join(", ")}</h3>
      <h3>{resData.info.avgRating + "(avg rating)"}</h3>
    </div>
  );
};

export default RestrauntCard;
