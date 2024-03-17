import './App.css'
import Display from './components/features/Display'
import LeftNavigation from './components/LeftNavigation'
import TopNavigation from './components/TopNavigation'

function App() {

  return (
    <div className=' w-full'>
      <TopNavigation />
      <div className='divider mt-0 p-2'></div>
      <div className='flex'>
        <div className='max-md:hidden'>
          <LeftNavigation />
        </div>
        <Display />
      </div >
    </div >
  )
}

export default App
