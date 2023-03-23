import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';

const App = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
