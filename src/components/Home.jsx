import { Button, QuizDetails, Title } from './';

const Home = () => {
  return (
    <main className='flex flex-col p-4'>
      <Title />
      <QuizDetails />
      <div className='text-center mt-8'>
        <Button label='Take Quiz' />
      </div>
    </main>
  );
};

export default Home;
