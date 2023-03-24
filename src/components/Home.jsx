import { useNavigate } from 'react-router-dom';
import { Button, QuizDetails, Title } from './';

const Home = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/question/1`);
  };

  return (
    <main className='flex flex-col p-4'>
      <Title />
      <QuizDetails />
      <div className='text-center mt-8'>
        <Button label='Take Quiz' callback={handleNav} />
      </div>
    </main>
  );
};

export default Home;
