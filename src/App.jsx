import { useState } from 'react'

import './App.css'
import WeddingCover from './components/WeddingCover'

function App() {
const [isOpened, setisOpened] = useState(false)
  return (
    <div className='wedding-card'>
  <section className='cover'>
{isOpened?<InvitationSection/>:<WeddingCover onOpenComplete={()=>{
  setisOpened(true)
}}/>}
  </section>
  <section className='invitation'>

  </section>
  <section className='events'>

  </section>
    </div>
  )
}

export default App
