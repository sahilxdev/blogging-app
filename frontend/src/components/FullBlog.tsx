import AppBar from "./AppBar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-lg">
          <div className=" col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-3 pb-2">
              Posten On 2nd Feb 2024
            </div>
            <div className="">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg mb-2">
                Author
            </div>
            <div className="flex w-full ">
                <div className="h-10 pr-2 flex items-center">
                    <Avatar size={8} tsize={20} name={blog.author.name || "Anonymous"} />
                </div>
              <div>
                <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                    Random Catch phrase about the author's ability to grab the
                    user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
