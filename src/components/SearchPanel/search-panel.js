import React from "react";

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };
  return (
    <input placeholder={searchText} style={searchStyle} disabled={false} />
  );
};

export default SearchPanel;
