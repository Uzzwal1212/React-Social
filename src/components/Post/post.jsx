import { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import "./post.css";

const Post = ({ post }) => {
  const { comment, date, desc, like, photo, userId } = post;
  let [likes, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const user = Users.filter((user) => user.id === post.userId);

  const handleLike = () => {
    setLike(isLiked ? --likes : ++likes);
    setIsLiked(!isLiked);
  };
  console.log("likes", likes);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={`/assets/${user[0].profilePicture}`}
              alt=""
            />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={`/assets/${photo}`} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              alt=""
              onClick={handleLike}
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              alt=""
              onClick={handleLike}
            />
            <span className="postLikeCounter">{likes}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
