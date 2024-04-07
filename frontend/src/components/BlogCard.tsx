import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 pb-4 border-slate-200 border-b-2 min-w-[20vw] max-w-[60vw] cursor-pointer">
        <div className="flex my-2 items-center">
          <div className="flex items-center ml-2 ">
            <Avatar name={authorName} size={5} tsize={6} />
          </div>
          <div className="pl-2 font-light text-sm">
            {authorName}
            <span className="px-1 text-[4px] align-middle text-slate-600">
              &#9679;
            </span>
          </div>
          <div className="text-sm pl-1 font-light text-slate-600">
            {publishedDate}
          </div>
        </div>
        <div className="font-semibold">{title}</div>
        <div className="text-md font-thin">
          {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </div>
        <div className="ml-1 text-slate-500 mt-4 pb-4 text-sm font-extrathin">
          <span className="px-1 text-[4px] align-middle text-slate-600">
            &#9679;
          </span>
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size = 6, tsize = 6 }: { name: string; size: number, tsize: number }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 `}
    >
      <span className={`text-[${tsize}px] font-medium text-gray-600 dark:text-gray-300`}>
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
