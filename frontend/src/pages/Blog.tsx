import { useBlog } from '../hooks'
import FullBlog from '../components/FullBlog';
import { useParams } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Spinner from '../components/Spinner';

const Blog = () => {
  const {id} = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });

  if (loading || !blog) {
    return <div>
      <AppBar/>
      <div className='h-[70vh] flex justify-center items-center'>
      <Spinner/>
      </div>
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog} />
      
    </div>
  )
}

export default Blog