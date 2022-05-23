import React, { useContext } from "react";
import ListContext from "../../context/list/listContext";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = () => {
  const commentFill = [
    {
      id: 12342341,
      user: 1,
      userName: "wheninseattle",
      list: 12,
      message: "I love this list",
      date: new Date().toUTCString(),
    },
    {
      id: 12979123,
      user: 3,
      userName: "sukiethecat",
      list: 12,
      message: "Give me chewroo",
      date: 'Mon, 23 May 2022 19:45:38 GMT',
    },
    {
      id: 12979103123,
      user: 3,
      userName: "sukiethecat",
      list: 12,
      message: "Give me chewroo",
      date: 'Mon, 23 May 2022 18:55:38 GMT',
    },
    {
      id: 12979103353,
      user: 3,
      userName: "sukiethecat",
      list: 12,
      message: "Give me chewroo",
      date: 'Mon, 23 May 2022 12:39:38 GMT',
    },
    {
      id: 129234,
      user: 3,
      userName: "sukiethecat",
      list: 12,
      message: "Give me chewroo",
      date: 'Mon, 22 May 2022 17:39:38 GMT',
    },
    {
      id: 129232354,
      user: 3,
      userName: "sukiethecat",
      list: 12,
      message: "Give me chewroo",
      date: 'Mon, 20 May 2022 19:39:38 GMT',
    },
    {
      id: 12341141,
      user: 2,
      userName: "whenintokyo",
      list: 12,
      message: "Great work on this!",
      date: 'Mon, 14 May 2022 19:39:38 GMT',
    },
    {
      id: 12341,
      user: 1,
      userName: "wheninseattle",
      list: 12,
      message: "I love this list",
      date: 'Mon, 5 May 2022 19:39:38 GMT',
    },
    {
      id: 1987349,
      user: 4,
      userName: "bowieInSpace",
      list: 12,
      message: "This is Major Tom to ground control",
      date: 'Mon, 5 May 2022 19:39:38 GMT',
    },
    {
      id: 1987343249,
      user: 4,
      userName: "bowieInSpace",
      list: 12,
      message: "This is Major Tom to ground control",
      date: 'Mon, 20 February 2022 19:39:38 GMT',
    },
    {
      id: 1987343243249,
      user: 4,
      userName: "bowieInSpace",
      list: 12,
      message: "This is Major Tom to ground control",
      date: 'Mon, 20 May 2021 19:39:38 GMT',
    },
    {
      id: 1987343243252,
      user: 4,
      userName: "bowieInSpace",
      list: 12,
      message: "This is Major Tom to ground control",
      date: 'Mon, 20 May 2020 19:39:38 GMT',
    },
  ];
  const listContext = useContext(ListContext);

  return (
    <div >
      {commentFill.length &&
        commentFill.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default Comments;
