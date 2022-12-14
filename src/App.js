import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import HomePage from './Components/HomePage/HomePage';
import Main from './Components/Layout/Main';
import Shop from './Components/Shop/Shop';
import ErrorPage from './Components/ErrorHandle/ErrorHandle';
import Cart from './Components/Cart/Cart';

function App() {

  const router = createBrowserRouter([
    {
      Path: '/',
      element: <Main></Main>,
      loader: () => fetch(`products.json`),
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
          loader: () => fetch(`products.json`),
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
        {
          path: '/about',
          element: <About></About>,
          loader: () => fetch(`data.json`),
        },
      ],
      errorElement: <ErrorPage></ErrorPage>,
    },
    {
      path: '/',
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
