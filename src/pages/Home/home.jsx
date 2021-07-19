import RightBar from "../../components/RightBar/rightbar";
import SideBar from "../../components/Sidebar/sidebar";
import TopBar from "../../components/Topbar/topBar";
import Feed from "../../components/Feed/feed";
import "./home.css"

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
