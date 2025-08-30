import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"




const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen m-2 md:m-0">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
        <Footer />
    </div>
  )
}

export default MainLayout