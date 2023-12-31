import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

export default function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg p-2 bg-gray-700 text-white rounded-t-xl hover:scale-105">
        <img
          className="w-full rounded-t-xl"
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
        />
        <div class="px-6 py-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
