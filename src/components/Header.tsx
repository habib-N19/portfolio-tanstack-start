import { Link } from '@tanstack/react-router'
import {
Book,
Home, 

} from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false)
  // const [groupedExpanded, setGroupedExpanded] = useState<
  //   Record<string, boolean>
  // >({})

  return (
    <nav className="flex max-w-5xl items-center  justify-center px-4 py-2 mx-auto">

      <Link to="/" className="flex items-center space-x-2">
      <Home size={24}/>
        <span className="text-lg font-bold">Home</span>
      </Link>
      <Link to="/blogs" className="flex items-center space-x-2 ml-4">
      <Book size={24}/>
        <span className="text-lg font-bold">Blog</span>
      </Link>
      <div className='ml-auto'>

      <ModeToggle />
      </div>
    </nav>
  )
}
