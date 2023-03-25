import { useNavigate } from 'react-router-dom';
import { Answer, Button } from '../components';
import { questions } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { clearResponses } from '../redux/features/quiz/quizSlice';

const AnswersContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questionArray = Object.values(questions);

  const handleNav = () => {
    dispatch(clearResponses());
    navigate('/');
  };

  return (
    <div className='w-full sm:px-4 md:px-8 lg:px-20 xl:px-24 bg-gray-200'>
      <div className='flex flex-col justify-between gap-4 h-full sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24'>
        <h1 className='text-3xl text-purple-700 font-bold text-center py-4'>
          Answers
        </h1>
        <div className=''>
          {questionArray.map(ques => {
            const { id, title, answer } = ques;
            return <Answer key={id} title={title} answer={answer} id={id} />;
          })}
        </div>
        <div className='text-center py-8 bg-white rounded-t-md mx-2'>
          <Button label='Home' callback={handleNav} />
        </div>
      </div>
    </div>
  );
};

export default AnswersContainer;
