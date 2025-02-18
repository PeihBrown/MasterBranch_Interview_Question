import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-[64px] md:pt-[84px] bg-[#E5F4F2]">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout