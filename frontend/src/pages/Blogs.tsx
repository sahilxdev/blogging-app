import React from "react";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center">
      <AppBar />
      <div className="flex flex-col items-center max-w-lg">
        <BlogCard
          authorName={"Peter V."}
          title={
            "How an ugly single website makes $5000 a Month without Affiliate Marketing"
          }
          content={
            "How an ugly single website makes $5000 a Month without Affiliate Marketing How an ugly single website makes $5000 a Month without Affiliate Marketing "
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"Peter V."}
          title={
            "How an ugly single website makes $5000 a Month without Affiliate Marketing"
          }
          content={
            "How an ugly single website makes $5000 a Month without Affiliate Marketing How an ugly single website makes $5000 a Month without Affiliate Marketing "
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"Peter V."}
          title={
            "How an ugly single website makes $5000 a Month without Affiliate Marketing"
          }
          content={
            "How an ugly single website makes $5000 a Month without Affiliate Marketing How an ugly single website makes $5000 a Month without Affiliate Marketing "
          }
          publishedDate={"2nd Feb 2024"}
        />
      </div>
    </div>
  );
};

export default Blogs;
