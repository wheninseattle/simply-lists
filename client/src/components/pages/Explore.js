import React, { useContext, useEffect } from "react";
import ListContext from "../../context/list/listContext";
import Lists from "../../components/list/Lists";

const Explore = () => {
  // Initialize and destructure context
  const listContext = useContext(ListContext);
  const { getPublicLists, communityLists } = listContext;
  
  // Retrieve public lists
  useEffect(() => {
    getPublicLists();
  }, []);

  return (
    <div className="all-center">
      {communityLists.length && <Lists lists={communityLists} />}
    </div>
  );
};

export default Explore;