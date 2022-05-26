import React from 'react'
import {timeAgo} from '../../utils/timeAgo';

const Comment = (props) => {


const {username,message,date} = props.comment;
  return (
      <div className="my-1">
          <p>{message}</p>
          <span>
          <strong>{username} | </strong>  
          </span>
          {timeAgo(date)}
      </div>
  )
}

export default Comment