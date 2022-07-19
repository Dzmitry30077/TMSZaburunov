import './App.css'
import StoriesPage from '../Pages/StoriesPage/StoriesPage';
import PostPage from '../Pages/PostPage/PostPage';
import { Route, Routes } from 'react-router-dom';
import AuthorPage from '../Pages/AuthorPage/AuthorPage';
import { Provider } from 'react-redux'
import { store } from '../store/store';

function App() {
  return (
    <Provider store={store}>
        <Routes>
        <Route index element={<StoriesPage />} />
        <Route path='/StoriesPage' element={<StoriesPage />} />
        <Route path='/PostPage/:id' element={<PostPage />} />
        <Route path='/AuthorPage/:id' element={<AuthorPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
