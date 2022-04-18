import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faEdit,
  faComment,
  faCaretSquareDown,
} from "@fortawesome/free-regular-svg-icons";

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
        <div id="item-title" className="">
          <h3 className="item-title">{itemName}</h3>
        </div>
        <div className="context" id="item-context">
          <p>{itemDescription}</p>
        </div>
      </div>
      <div id="item-options" className="flex-v">
        <button className="btn btn-icon">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="btn btn-icon">
          <FontAwesomeIcon icon={faComment} />
        </button>
        <button className="btn btn-icon">
          <FontAwesomeIcon icon={faCaretSquareDown} />
        </button>
      </div>
      <div id="item-vote" className="self-right">
        <button className="btn btn-icon-vote">
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </button>
        <div>5</div>
        <button className="btn btn-icon-vote">
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </button>
        <i class="fa-regular fa-down"></i>
      </div>
    </div>
  );
};

export default ListItem;
