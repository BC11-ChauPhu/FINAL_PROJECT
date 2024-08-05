import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchResultList = ({ filteredList }) => {
  console.log(filteredList);
  return (
    <div>
      {filteredList?.map((index, item) => (
        <div className="flex">
          <div>
            <FaMapMarkerAlt />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
