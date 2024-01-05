import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../compontents";
import appwriteSevice from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const navigate = useNavigate();
  let { slug } = useParams();
  const [poats, setPosts] = useState(null);
  useEffect(() => {
    if (!slug) return;
    appwriteSevice.getPost(slug).then((post) => {
      if (post) setPosts(post);
      else navigate("/");
    });
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
