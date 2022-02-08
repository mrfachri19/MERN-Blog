import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Gap } from "../..";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";

function BlogItem() {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Gap height={20} />
        <Button title="view detail" onClick={() => navigate("/detailblog")} />
      </div>
    </div>
  );
}

export default BlogItem;
