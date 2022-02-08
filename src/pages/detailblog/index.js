import React from "react";
import { RegisterBg } from "../../assets";
import { Header, Footer, Link, Gap } from "../../components";
import "./detailblog.scss";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="main-app-wrapper">
      <Header />

      <div className="content-wrapper">
        <div className="detail-blog-wrapper">
          <img className="img-cover" src={RegisterBg} alt="thumb" />
          <p className="blog-title">title blog</p>
          <p className="blog-author">author - Date Post</p>
          <p className="blog-body">
            {" "}
            Lorem ipsum ip hamet denaite sinata loman solaman kilomanah kilak
            oplak{" "}
          </p>
          <Gap height={20} />
          <Link title="kembali ke home" onClick={() => navigate("/")} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailBlog;
