import { Outlet } from 'react-router-dom'
import './App.css'
import LeftNavigation from './components/LeftNavigation'
import TopNavigation from './components/TopNavigation'

function App() {

  return (
    <div className='h-screen w-full'>

      <TopNavigation />

      <div className='divider mt-0 px-2'></div>
      <main className='flex'>
        <div className='max-md:hidden'>
          <LeftNavigation />
        </div>
        <div className='w-full p-8 h-full'>
          <Outlet />
        </div>
      </main>

    </div >
  )
}

export default App
