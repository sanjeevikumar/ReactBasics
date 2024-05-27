import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import ShimmerUx from "./ShimmerUx";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [searchedRestaurent, setSearchedRestaurent] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.035076&lng=80.177258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("API:", data);
    const jsonData = await data.json();
    console.log("JSON:", jsonData);

    setListOfRestaurents(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedRestaurent(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // We are doing Conditional rendering: REndering the component based on the condition

  return listOfRestaurents.length === 0 ? (
    <ShimmerUx />
  ) : (
    <div className="bodyComponent">
      <div className="filter">
        <input
          type="text"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button
          className="search"
          onClick={() => {
            const searchRestaurents = listOfRestaurents.filter((restaurent) => {
              return restaurent.info.name
                .toLowerCase()
                .includes(searchData.toLowerCase());
            });
            console.log("SearchResult:", searchRestaurents);
            setSearchedRestaurent(searchRestaurents);
          }}
        >
          Search
        </button>
        <button
          className="filterRes"
          onClick={() => {
            const filteredRestaurents = listOfRestaurents.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurents(filteredRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="resList">
        {searchedRestaurent.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
