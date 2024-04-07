import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";
import BlogSkeleton from "../components/BlogSkeleton";

const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if (loading) {
        return <div>
            <AppBar />
            <div className="flex flex-col items-center max-w-[90vw]">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>


        </div>
        </div>
    }

  return (
    <div className="flex flex-col items-center">
      <AppBar />
      <div className="flex flex-col max-w-[90vw]">
        {blogs.map(blog => <BlogCard
            id ={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={"2nd Feb 2024"}
          />
        )}
        <BlogCard
                  authorName={"Peter V."}
                  title={"How an ugly single website makes $5000 a Month without Affiliate Marketing"}
                  content={"How an ugly single website makes $5000 a Month without Affiliate Marketing How an ugly single website makes $5000 a Month without Affiliate Marketing "}
                  publishedDate={"2nd Feb 2024"} id={0}        />
        <BlogCard
                  authorName={"Peter V."}
                  title={"How an ugly single website makes $5000 a Month without Affiliate Marketing"}
                  content={"How an ugly single website makes $5000 a Month without Affiliate Marketing How an ugly single website makes $5000 a Month without Affiliate Marketing "}
                  publishedDate={"2nd Feb 2024"} id={0}        />
        <BlogCard
                  authorName={"Peter V."}
                  title={"How an ugly single website makes $5000 a Month without Affiliate Marketing"}
                  content={"How an ugly single website makes $5000 a Month without Affiliate Marketing How an ugly single website makes $5000 a Month without Affiliate Marketing "}
                  publishedDate={"2nd Feb 2024"} id={0}        />
      </div>
    </div>
  );
};

export default Blogs;
