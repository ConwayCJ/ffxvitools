import { Navbar, Link, Swap, Dropdown, Button } from "react-daisyui";
import { useEffect, useState } from "react";
import LeftNavigation from "./LeftNavigation";

export default function TopNavigation() {

  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    setCurrentTheme(getLocalThemeFromStorage())
    console.log(currentTheme)
  }, [currentTheme])

  const getLocalThemeFromStorage = () => {
    const storageTheme = localStorage.getItem('theme')
    document.getElementsByTagName('html')[0].setAttribute('data-theme', storageTheme)
    return storageTheme
  }

  const SwapTheme = () => {
    const otherTheme = currentTheme === 'light' ? 'dark' : 'light'

    return (
      <Swap
        onElement={otherTheme}
        offElement={currentTheme}
        onClick={() => {
          setCurrentTheme(otherTheme)
          localStorage.setItem('theme', otherTheme)
        }} />
    )
  }

  return (
    <Navbar>
      <Navbar.Start>
        <Dropdown>

          <Button tag="label" color="ghost" tabIndex={0} className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </Button>

          <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
            <LeftNavigation />
          </Dropdown.Menu>

        </Dropdown>
        <h2 className="normal-case font-bold ml-2 text-xl md:pl-10">FFXVI Tools</h2>
      </Navbar.Start>

      <Navbar.End>

        <SwapTheme />

        <Link href="#" title="o/" className="md:px-2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 48 48">
            <rect width="6" height="32" x="8" y="8" fill="#f44336"></rect><circle cx="30" cy="20" r="12" fill="#f44336"></circle>
          </svg>
        </Link>

        <Link tag="a" target="_blank" href="https://github.com/ConwayCJ/ffxvitools" className="md:px-2">
          <svg className={`rounded-full ${currentTheme === 'dark' ? 'bg-slate-50' : ''}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </Link>

      </Navbar.End>
    </Navbar>
  )
}