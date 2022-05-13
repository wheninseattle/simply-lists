import React,{useContext} from "react";
import ListContext from "../../context/list/listContext";

const ListPreview = (props) => {
  
 const { list, setCurrentList } = props;
 const listContext = useContext(ListContext);

 const onSetCurrent = () => {
  // setCurrentList(list._id);
  listContext.setCurrentList(list);
 }

  return (
    <div>
      <button className="btn" onClick={onSetCurrent}>
        <h2>{list.name}</h2>
        <p>{list.user}</p>
        <p>{list.description}</p>
      </button>
    </div>
  );
};

export default ListPreview;
