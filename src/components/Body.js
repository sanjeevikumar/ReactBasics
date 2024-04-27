import restaurantsList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import restaurantsList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(restaurantsList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.035076&lng=80.177258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("JSON:", jsonData);
    // setListOfRestaurents();
  };
  return (
    <div className="bodyComponent">
      <div className="filter">
        <button
          className="filterRes"
          onClick={() => {
            const filteredRestaurents = listOfRestaurents.filter((res) => {
              console.log("Average Rating", res.info.avgRating);
              return res.info.avgRating > 4.5;
            });
            setListOfRestaurents(filteredRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="resList">
        {listOfRestaurents.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
