import { useState } from "react"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/SideBar"

const home = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <Header onToggleMenu={toggleSidebar}/>
      <Sidebar isOpen = {isSidebarOpen} onClose={toggleSidebar}/>
    </div>
  )
}

export default home
