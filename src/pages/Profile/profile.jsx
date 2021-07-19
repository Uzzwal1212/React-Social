import RightBar from "../../components/RightBar/rightbar";
import SideBar from "../../components/Sidebar/sidebar";
import TopBar from "../../components/Topbar/topBar";
import Feed from "../../components/Feed/feed";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Uzzwal Gupta</h4>
              <span className="profileInfoDesc">Uzzwal Gupta</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
