import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import Main from './Components/Main/Main';
import { Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import  PostPage from './Pages/PostPage';
import  TodosPage from './Pages/TodosPage';
import  UsersPage from './Pages/UsersPage';
import AlbumsPage from './Pages/AlbumsPage';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>
          <SideBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/posts' element={<PostPage/>}/>
          <Route path='/todos' element={<TodosPage/>}/>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/albums' element={<AlbumsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
