import { createBrowserRouter } from 'react-router-dom';
import App, { appLoader } from './App';
import { Home } from './components';
import {
  AnswersContainer,
  QuestionContainer,
  ResultContainer,
} from './containers';

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
        path: 'question/:id',
        element: <QuestionContainer />,
      },
      {
        path: 'result',
        element: <ResultContainer />,
      },
      {
        path: 'answers',
        element: <AnswersContainer />,
      },
    ],
  },
]);
