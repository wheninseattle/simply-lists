import React, { useContext, useEffect } from "react";
import ListContext from "../../context/list/listContext";
import Lists from "../../components/list/Lists";

const Explore = () => {
  // Initialize and destructure context
  const listContext = useContext(ListContext);
  const { getPublicLists, communityLists,clearCurrentList } = listContext;
  
  // Retrieve public lists
  useEffect(() => {
    getPublicLists();
    clearCurrentList();
  }, []);

  return (
    <div className="all-center">
      {communityLists.length && <Lists listGroup='Community Lists' lists={communityLists}/>}
    </div>
  );
};

export default Explore;