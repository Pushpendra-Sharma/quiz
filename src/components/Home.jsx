import { useNavigate } from 'react-router-dom';
import { Button, QuizDetails, Title } from './';

const Home = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/question/1`);
  };

  return (
    <main className='flex flex-col p-4 w-full h-full'>
      <Title />
      <QuizDetails />
      <div className='text-center my-8'>
        <Button label='Take Quiz' callback={handleNav} />
      </div>
    </main>
  );
};

export default Home;
