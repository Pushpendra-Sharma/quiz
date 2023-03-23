import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='w-full p-4'>
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-24' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
