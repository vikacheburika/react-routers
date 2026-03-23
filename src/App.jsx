import PropsApp from './components/PropsApp/PropsApp.jsx'
import ProductsList from "./components/ProductsList/ProductsList.jsx"
import TaskList from './components/TaskList/TaskList.jsx'
import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation/Navigation.jsx"
import NotFound from './components/Navigation/NotFound/NotFound.jsx'
import Layout from './components/Navigation/Layout/Layout.jsx'
import Login from "./components/Login/Login.jsx"

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/products' element={<ProductsList/>}/>
        <Route path='/crazy' element={<PropsApp/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>

      </Routes>

        
    </>
  )
}

export default App
