import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Footer from './Components/Footer/Footer'
import RiquadroEsempi from './RiquadroEsempi/RiquadroEsempi'
import { FramePresentazione } from './Components/FramePresentazione/FramePresentazione'
import Button from './Components/ButtonPlay/Button'
import { Routes, Route } from 'react-router-dom'
import Game from './Components/Game'
import Layout from './Components/Layout'
function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            {' '}
            <FramePresentazione /> <RiquadroEsempi /> <Footer />{' '}
          </Layout>
        }
      />
      <Route path='/Game/*' element={<Game />} />
    </Routes>
  )
}

export default App
