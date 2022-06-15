import React, { useContext } from "react";
import ListContext from "../../context/list/listContext";
import { timeAgo } from "../../utils/timeAgo";

const ListPreview = (props) => {
  const { list, setCurrentList } = props;
  const listContext = useContext(ListContext);
  const onSetCurrent = () => {
    console.table(list);
    listContext.setCurrentList(list);
    listContext.getListItems(list._id);
  };
  return (
    <div className="preview-card" onClick={onSetCurrent}>
      <div className="preview-header">
        <h3 className="preview-title">{list.name}</h3>
        <pre className="preview-list-details">
          <span className="preview-user">{list.username}</span>{" "}|{" "}
          {timeAgo(list.date)}{" "}
        </pre>
      </div>
      <div className="preview-description">
        <p>{list.description}</p>
      </div>
    </div>
  );
};

export default ListPreview;
