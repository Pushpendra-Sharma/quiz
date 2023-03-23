import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: <h1>Loading...</h1>,
    errorElement: <h1>Some error occured</h1>,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);
