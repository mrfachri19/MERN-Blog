import React from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/createblog")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={90} />
        <Button title="Next" />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default Home;
