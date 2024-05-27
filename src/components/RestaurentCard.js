import { RES_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
  } = resData?.info;
  const { slaString } = sla;
  console.log("Delivery", slaString);

  return (
    <div className="restaurent">
      <img
        className="foodImage"
        alt="foodImage"
        src={RES_URL + cloudinaryImageId}
      />
      <h3 className="resName">{name}</h3>
      <h3 className="starRating">{avgRating}</h3>
      <h3 className="eta">{slaString}</h3>
      <h3 className="cusines">{cuisines.join(",")}</h3>
      <h3 className="location">{locality}</h3>
      <h4 className="areaName">{areaName}</h4>
      <h5 className="price">{costForTwo}</h5>
    </div>
  );
};

export default RestaurentCard;
