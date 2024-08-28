import { useState } from "react"
import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar"

const home = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <Header onToggleMenu={toggleSidebar}/>
      <SideBar isOpen = {isSidebarOpen} onClose={toggleSidebar}/>
    </div>
  )
}

export default home
