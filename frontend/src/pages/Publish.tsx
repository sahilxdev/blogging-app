import React, { ChangeEvent, useState } from "react";
import AppBar from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full pt-8">
          <input
            onChange={(e)=> setTitle(e.target.value)}
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:outline-none focus:visible:ring"
            placeholder="Title"
          />
        <TextEditor onChange={(e)=> setContent(e.target.value)} />
        <button
          onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`);
          }}
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <div>
      <div className="w-full">
        <div className="flex items-center justify-between py-3">
          <div className=" py-2 bg-white rounded-b-lg w-full">
            <textarea
            onChange={onChange}
              id="editor"
              rows={8}
              className="border border-gray-300 rounded-lg p-2 block w-full text-sm text-gray-800 bg-white 
              focus:outline-none focus:visible:ring"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Publish;
