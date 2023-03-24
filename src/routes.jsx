import { createBrowserRouter } from 'react-router-dom';
import App, { appLoader } from './App';
import { Home, Question } from './components';
import { questions } from './utils/constants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <h1>Some error occured</h1>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/question/:id',
        element: <Question {...questions[0]}/>,
      },
    ],
  },
]);
