import React from 'react'
import {timeAgo} from '../../utils/timeAgo';

const Comment = (props) => {


const {userName,message,date} = props.comment;
  return (
      <div className="my-1">
          <p>{message}</p>
          <span>
          <strong>{userName} | </strong>  
          </span>
          {timeAgo(date)}
      </div>
  )
}

export default Comment