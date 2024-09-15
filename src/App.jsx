import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header_Content from './header.jsx'
import About  from './About.jsx'
import Interest from './interest.jsx'
import Footer from './footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="box">
<Header_Content />
<div className='main'>
<About />
<Interest /></div>
<Footer />
</div></div>
    </>
  )
}

export default App
