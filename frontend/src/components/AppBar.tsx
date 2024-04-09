import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'
import { PencilIcon } from './Icons'

const AppBar = () => {
  return (
    <div className='border-b border-slate-300 flex justify-between px-10 w-full py-4'>
        <Link to={'/blogs'}>
            <div className='mt-2 font-bold text-slate-600 flex items-center cursor-pointer'>
                Blog App
            </div>  
        </Link>
        <div className='flex'>
            <Link to={'/publish'}>
            <button className='pr-6 mt-1'> <PencilIcon/></button>
            </Link>
            <Avatar name={"S"} size={8} tsize={20} />
        </div>
    </div>
  )
}

export default AppBar
