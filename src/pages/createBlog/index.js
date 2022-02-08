import React from "react";
import {
  Button,
  Gap,
  Header,
  Input,
  Link,
  TextArea,
  Upload,
} from "../../components";
import { Footer } from "../../components";
import "./createblog.scss";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="main-app-wrapper">
      <Header />

      <div className="content-wrapper">
        <div className="blog-post">
          <Link title="kembali" onClick={() => navigate("/")} />
          <p className="title">Create New Blog Post</p>
          <Input label="Post Title" />
          <Upload />
          <TextArea />
          <Gap height={20} />
          <div className="button-action">
            <Button title="Save" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateBlog;
