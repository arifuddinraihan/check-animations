import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import HomePage from './Components/HomePage/HomePage';
import Main from './Components/Layout/Main';
import Shop from './Components/Shop/Shop';
import ErrorPage from './Components/ErrorHandle/ErrorHandle';

function App() {

  const router = createBrowserRouter([
    {
      Path: '/',
      element: <Main></Main>,
      loader: () => fetch (`https://fakestoreapi.com/products`),
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/home',
          element: <HomePage></HomePage>
        },
        {
          path: '/shop',
          element: <Shop></Shop>,
          loader: () => fetch (`https://fakestoreapi.com/products`),
        },
        {
          path: '/about',
          element: <About></About>
        },
      ],
      errorElement: <ErrorPage></ErrorPage>,
    },
  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
