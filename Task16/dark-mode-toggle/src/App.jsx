
import { useContext } from 'react'
import './App.css'
import HeaderToggle from './components/HeaderToggle'
import { createToggleContext } from './components/context/ToggleContext'

function App() {
  const {toggle} = useContext(createToggleContext)


  return (
      <>
         <div className={`p-4 shadow-2xl h-lvh flex items-center justify-center ${toggle ? "bg-black text-white":"bg-white text-black"}`}>
          <div className=' mx-auto text-center  mx-auto  flex-col'>
              <HeaderToggle/>
              <h1 className='font-extrabold text-4xl my-4'>Dark mode Toggle</h1>
              <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi rerum dicta et <br />ipsam eligendi quidem ullam, laborum tenetur ducimus, porro maiores maxime neque corporis! Autem mollitia harum sequi illum.</p>
          </div>
         </div>
      </>
  )
}

export default App
