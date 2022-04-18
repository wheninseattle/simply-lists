import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUp,faDown } from '@fortawesome/free-solid-svg-icons'

const ListItem = (props) => {
  const { itemName, itemDescription } = props.item;
  return (
    <div className="card card-expanded">
      <div className="btn btn-drag btn-secondary">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="item-info">
        <h3 className="item-title">{itemName}</h3>
        <div className="context" id="item-context">
          <p>{itemDescription}</p>
        </div>
      </div>
      <div id="item-options">
        <div className="btn btn-item-comment"></div>
      </div>
      <div id="item-vote">
      <FontAwesomeIcon icon={faUp}/>
      <i class="fa-regular fa-down"></i>
      </div>
    </div>
  );
};

export default ListItem;
