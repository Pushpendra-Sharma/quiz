import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components';

export const appLoader = () => <h1>App loading...</h1>;

const App = () => {
  return (
    <div className='sm:px-4 md:px-8 lg:px-20 xl:px-24'>
      <div className='flex flex-col min-h-screen sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
