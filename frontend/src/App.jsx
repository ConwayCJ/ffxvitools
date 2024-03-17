import './App.css'
import Display from './components/Display'
import LeftNavigation from './components/LeftNavigation'
import TopNavigation from './components/TopNavigation'
function App() {

  return (
    <div className=' h-full w-full'>
      <TopNavigation />
      <div className='flex'>
        <LeftNavigation />
        <Display />
      </div>
    </div>
  )
}

export default App
