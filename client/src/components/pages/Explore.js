import React, {useContext} from "react";
import ListContext from "../../context/list/listContext";
import Lists from "../../components/list/Lists"

const Explore = () => {

    // Initialize and destructure context
    const listContext = useContext(ListContext);
    const {getPublicLists,communityLists} = listContext;

    const onClick = () => {
        getPublicLists();
    }

  return (
    <div className="all-center">
        <button className="btn btn-primary" onClick={onClick}>Load Public Lists</button>
        {(communityLists.length) &&
        <Lists lists={communityLists}/>}
    </div>
  )
}

export default Explore