/* vite로 앱을 만들면 App.css도 한번 참조 */
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BoardDetail from './pages/BoardDetail';
import ModifyForm from './pages/ModifyForm';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* url 파라미터를 줄 때 문법 주의 */}
        {/* /board:/id (X) /board/:id (O) */}
        <Route path='/board/:id' element={<BoardDetail></BoardDetail>}></Route>
        <Route path='/board/modifyform' element={<ModifyForm></ModifyForm>}></Route>
      </Routes>
    </div>
  )
}

export default App
