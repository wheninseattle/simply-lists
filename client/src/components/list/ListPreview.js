import React,{useContext} from "react";
import ListContext from "../../context/list/listContext";
import { timeAgo } from "../../utils/timeAgo";

const ListPreview = (props) => {
  const { list, setCurrentList } = props;
  const listContext = useContext(ListContext);
  const onSetCurrent = () => {
    console.table(list)
    listContext.setCurrentList(list);
    listContext.getListItems(list._id);
  }
  return (
    <div>
      <button className="btn" onClick={onSetCurrent}>
        <h3 className="medium">{list.name}</h3>
        <pre>{list.username} | {timeAgo(list.date)} </pre>
        {/* <p>{list.description}</p> */}
      </button>
    </div>
  );
};

export default ListPreview;
