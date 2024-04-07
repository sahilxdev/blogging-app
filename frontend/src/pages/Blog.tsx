import React from 'react'
import { useBlog } from '../hooks'
import FullBlog from '../components/FullBlog';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const {id} = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });

  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      <FullBlog blog={blog} />
      
    </div>
  )
}

export default Blog