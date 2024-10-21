import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //importálás
import Kezdolap from './pages/Kezdolap'
import { Helmet } from 'react-helmet'
import HelmetBemutatas from './pages/HelmetBemutatas'
import RouterBemutatas from './pages/RouterBemutatas'
import Ikonok from './pages/ikonok'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Helmet>
        <meta charSet='utf-8'
          lang='hu'
        />
      </Helmet>
      <Nav />
      <BrowserRouter> {/* React Router böngésző router komponense */}
        <Routes> {/* A browserrouter végpontjait tartalmazza */}
          <Route path='/'> {/*Root elem */}
            <Route index element={<Kezdolap />}></Route> {/*Útvonal index eleme */}
            <Route path='helmet' element={<HelmetBemutatas/>}></Route> {/*Útvonal belső eleme */}
            <Route path='router' element={<RouterBemutatas/>}></Route> {/*Útvonal belső eleme */}
            <Route path='ikonok' element={<Ikonok/>}></Route> {/*Útvonal belső eleme */}
            
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
