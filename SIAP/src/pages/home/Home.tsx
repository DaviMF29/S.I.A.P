import './Home.css'
import { useState } from "react"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Post from '../../components/posts/Post'

const Home = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='home'>
      <div className="header">
        <Header onToggleMenu={toggleSidebar}/>
          <div className="sidebar">
            <Sidebar isOpen = {isSidebarOpen} onClose={toggleSidebar}/>
          </div>
      </div>

      <main>
        <div className="feed">
          <Post/>
        </div>
        
        <div className="calendar"></div>
      </main>
    </div>
  )
}

export default Home
