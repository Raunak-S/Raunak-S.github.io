import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './components/Nav'
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <Nav
        links={[
          {
            title: "About",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Experience",
            label: "9",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Projects",
            label: "",
            icon: Send,
            variant: "ghost",
          },
        ]}
      />
    </div>
  )
}

export default App
